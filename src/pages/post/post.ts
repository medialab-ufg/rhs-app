import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, IonicPage } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

import { SettingsProvider } from './../../providers/settings/settings';
import { ApiProvider } from './../../providers/api/api';
import { PostModel, CommentModel, TagModel, UserModel, CategoryModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  @ViewChild('commentInput') commentInput;

  // Received from Post list
  postId: number;

  // To be loaded from API
  post: PostModel;
  tags: [TagModel];
  categories: [CategoryModel];
  author: UserModel;
  comments: Array<CommentModel> = new Array<CommentModel>();

  // Ordered comments
  commentBoxes: Array<CommentModel> =  new Array<CommentModel>();
  commentsOffset = 0;

  // Loading Spinners controll
  isLoadingPost: boolean = true;
  isLoadingComments: boolean = true;
  isLoadingTags: boolean = true;
  isLoadingCategories: boolean = true;
  isLoadingAuthor: boolean = true;
  isPostingComment: boolean = false;

  // String inserted on Comment Input Footer
  commentContent: string = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public api: ApiProvider,
              public alertCtrl: AlertController,
              public socialSharing: SocialSharing,
              public settings: SettingsProvider) {

    this.postId = this.navParams.get('postId');
    this.loadPost();
    this.loadCategories();
    this.loadTags();
     }

  ionViewDidLoad() { }

  ionViewWillEnter() {
    this.loadComments();
  }

  loadPost() {
    this.isLoadingPost = true;

    this.api.getPostInfo(this.postId, this.api.isLogged()).subscribe(
      postInfo => {
      this.post = postInfo;

      this.isLoadingAuthor = true;
      this.api.getAuthorInfo(this.post.author, this.api.isLogged()).subscribe(
        authorInfo => {
        this.author = authorInfo;
        },
      err => {
        console.log('Error ' + err +  ' - On Author Data Request.');
      },
      () => this.isLoadingAuthor = false);
    },
    err => {
      console.log('Error ' + err +  ' - On Post Data Request.');
    },
    () => this.isLoadingPost = false);    
  }

  loadComments() {
    this.isLoadingComments = true;

    this.api.getPostComments(this.postId, this.commentsOffset, this.api.isLogged()).subscribe(
      commentsInfo => {
      if (this.commentsOffset <= 0) {
        this.comments = commentsInfo;
      } else {
        this.comments = this.comments.concat(commentsInfo);
      }
      this.generateCommentBoxes();
    },
    err => {
      console.log('Error ' + err +  ' - On Comments Data Request.');
      this.isLoadingComments = false;
    });
  }

  loadCategories() {
    this.isLoadingCategories = true;

    this.api.getPostCategories(this.postId, this.api.isLogged()).subscribe(
      categoriesInfo => {
      this.categories = categoriesInfo;
    },
    err => {
      console.log('Error ' + err +  ' - On Categories Data Request.');
    },
    () => this.isLoadingCategories = false); 
  }

  loadTags() {
    this.isLoadingTags = true;

    this.api.getPostTags(this.postId, this.api.isLogged()).subscribe(
      tagsInfo => {
      this.tags = tagsInfo;
    },
    err => {
      console.log('Error ' + err +  ' - On Tags Data Request.');
    },
    () => this.isLoadingTags = false);
  }

  commentPost() {
    
    if (this.api.isLogged()) {

      this.commentInput.setFocus();

    } else {
      
      let commentAlert = this.alertCtrl.create({
        title: 'Ops... você não está logado!',
        subTitle: 'Entre na RHS para poder comentar neste post.',
        buttons: ['OK']
      });
      commentAlert.present();

    }
  }

  commentOnComment(commentIndex: any) {


    if (this.api.isLogged()) {

      this.navCtrl.push('CommentPage', {'comment': this.comments[commentIndex], 'postId': this.postId});

    } else {
      
      let commentAlert = this.alertCtrl.create({
        title: 'Ops... você não está logado!',
        subTitle: 'Entre na RHS para poder comentar neste post.',
        buttons: ['OK']
      });
      commentAlert.present();

    }
  }

  votePost() {
    if (this.api.isLogged()) {
      // insert voting logic here.
    } else {

      let voteAlert = this.alertCtrl.create({
        title: 'Ops... você não está logado!',
        subTitle: 'Entre na RHS para poder votar neste posts.',
        buttons: ['OK']
      });
      voteAlert.present();

    }
  }

  postComment() {
    
    this.isPostingComment = true;

    this.api.commentOnPost(this.postId, this.commentContent, 0).subscribe(
      commentResponse => {
      
        this.comments.unshift(commentResponse);
        this.commentContent = '';
    },
    err => {
      console.log('Error ' + err +  ' - On Comment Data posting.');
    },
    () => this.isPostingComment = false);
  }

  goToSearchWithTag(tag: TagModel) {
    this.navCtrl.push('SearchPage', {'tagId': tag.id, 'tagName': tag.name});
  }

  goToSearchWithCategory(category: CategoryModel) {
    this.navCtrl.push('SearchPage', {'categoryId': category.id, 'categoryName': category.name, });
  }

  openShareActionSheet() {

    let sharingOptions = {
      message: this.strip(this.post.title['rendered']), // not supported on some apps (Facebook, Instagram)
      subject: 'Publicação da Rede Humaniza SUS: ' + this.post.title['rendered'], // for email
      url: this.post.link
    }
    this.socialSharing.shareWithOptions(sharingOptions);
  }

  // Used for ordering and finding level of comments
  generateCommentBoxes() {

    this.commentBoxes = new Array<CommentModel>();
    this.fillCommentBox(0, 0);
    this.isLoadingComments = false;

  }

  fillCommentBox(parentId: number, commentDepth: number) {
    
    for (let comment of this.comments) {

      if (comment.parent != parentId ) {    
        continue;
      } 
      
      comment.depth = commentDepth;
      this.commentBoxes.push(comment);

      this.fillCommentBox(comment.id, commentDepth + 1);
    }
  }

  // Used for striping html formating from title in sharing options
  // (not needed in template, where we can use [innerHtml])
  strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

}
