import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, IonicPage } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { PostModel, CommentModel, TagModel, UserModel, CategoryModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  @ViewChild('commentInput') commentInput ;

  postId: number;
  post: PostModel;
  comments: [CommentModel];
  tags: [TagModel];
  categories: [CategoryModel];
  author: UserModel;

  isLoadingPost: boolean = false;
  isLoadingComments: boolean = false;
  isLoadingTags: boolean = false;
  isLoadingCategories: boolean = false;
  isLoadingAuthor: boolean = false;
  isPostingComment: boolean = false;

  commentContent: string = '';
  commentParent: number = 0;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public api: ApiProvider,
              public alertCtrl: AlertController) {
     
    this.postId = this.navParams.get('postId');
    this.loadPost();
  }

  ionViewDidLoad() {
  }

  sendMessage() {
  }

  loadPost() {

    this.isLoadingPost = true;
    this.isLoadingComments = true;
    this.isLoadingTags = true;
    this.isLoadingCategories = true;

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

    this.api.getPostComments(this.postId, this.api.isLogged()).subscribe(
      commentsInfo => {
      this.comments = commentsInfo;
    },
    err => {
      console.log('Error ' + err +  ' - On Comments Data Request.');
    },
    () => this.isLoadingComments = false);

    this.api.getPostTags(this.postId, this.api.isLogged()).subscribe(
      tagsInfo => {
      this.tags = tagsInfo;
    },
    err => {
      console.log('Error ' + err +  ' - On Tags Data Request.');
    },
    () => this.isLoadingTags = false);

    this.api.getPostCategories(this.postId, this.api.isLogged()).subscribe(
      categoriesInfo => {
      this.categories = categoriesInfo;
    },
    err => {
      console.log('Error ' + err +  ' - On Categories Data Request.');
    },
    () => this.isLoadingCategories = false);
    
  }

  commentPost() {
    
    if (this.api.isLogged()) {

      this.commentParent = 0;
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

  commentOnComment(parentId: number) {

    if (this.api.isLogged()) {

      this.commentParent = parentId;
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

  votePost() {
    if (this.api.isLogged()) {

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

    this.api.commentOnPost(this.postId, 37038, this.commentContent, this.commentParent).subscribe(
      commentResponse => {
      
        this.comments.unshift(commentResponse);
        this.commentContent = '';
    },
    err => {
      console.log('Error ' + err +  ' - On Comment Data posting.');
    },
    () => this.isPostingComment = false);
  }

  openShareActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Compartilhe esse post',
      buttons: [
        { text: 'WhatsApp',
          handler: () => {
            // Rotina para compartilhar no WhatsApp
          }
        },{
          text: 'Twitter',
          handler: () => {
            // Rotina para compartilhar no Twitter
          }
        },{
          text: 'Facebook',
          handler: () => {
            // Rotina para compartilhar no Facebook
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    actionSheet.present();
  }
}
