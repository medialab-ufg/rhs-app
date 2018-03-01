import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ActionSheetController, AlertController, IonicPage, ToastController, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { SettingsProvider } from './../../providers/settings/settings';
import { ApiProvider } from './../../providers/api/api';

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
  post: any;
  tags: [any];
  categories: [any];
  author: any;
  comments: Array<any> = new Array<any>();

  // Ordered comments
  commentBoxes: Array<any> =  new Array<any>();
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
  isEditingComment: boolean = false;
  editedCommentId: number = 0;

  // Statistics that change dynamically
  totalVotes: number = 0;
  totalShares: number = 0
  commentCount: number = 0;

  // Controlling the post status to update on post list
  returnFromPostFunction: any;
  postDidUpdated: boolean = false;

  // Controlling voting
  hasVoted = false;
  isVoting = false;

  constructor(public navParams: NavParams,
              public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController,
              public api: ApiProvider,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public socialSharing: SocialSharing,
              public settings: SettingsProvider,
              public platform: Platform,
              public analytics: FirebaseAnalytics) {

    this.postId = this.navParams.get('postId');
    this.loadPost();
    this.loadCategories();
    this.loadTags();

  }

  ionViewWillEnter() {
    this.returnFromPostFunction = this.navParams.get("returnFromPostFunction")
    this.loadComments();
  }

  ionViewWillLeave() {
    this.returnFromPostFunction(this.postDidUpdated ? {id: this.postId, commentCount: this.commentCount, totalVotes: this.totalVotes } : null).then(()=>{});
  }

  ionViewDidEnter() {
    // Tells analytics that user accessed this screen.
    this.analytics.setCurrentScreen("Post: " + this.postId)
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }

  loadPost() {
    this.isLoadingPost = true;

    this.api.getPostInfo(this.postId, this.api.isLogged()).subscribe(
      postInfo => {
      this.post = postInfo;
      //console.log(this.post);
      this.totalVotes = this.post['total_votes'];
      this.totalShares = this.post['total_shares'];
      this.commentCount = this.post['comment_count'];
      this.hasVoted = this.post['user_has_voted'];

      this.isLoadingAuthor = true;
      this.api.getAuthorInfo(this.post['author'], this.api.isLogged()).subscribe(
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
        console.log(this.comments);
        console.log(this.api.getUserId());
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

      this.navCtrl.push('CommentPage', {'comment': this.commentBoxes[commentIndex], 'postId': this.postId, 'returnFromCommentFunction': this.returnFromCommentPage });

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

    this.isVoting = true;
 
    this.api.voteOnPost(this.postId).subscribe(
      voteResponse => {
        this.totalVotes = Number(this.totalVotes) + 1;
        this.postDidUpdated = true;

        let voteToast = this.toastCtrl.create({
          message: 'Obrigado por votar neste post!',
          duration: 3000
        });
        voteToast.present();

        this.isVoting = false;
        this.hasVoted = true;
      }, 
      err => {
        console.log(err);
        this.isVoting = false;
        let voteAlert = this.alertCtrl.create({
          title: 'Ops...',
          subTitle: err.message,
          buttons: ['OK']
        });
        voteAlert.present();
          }
    );
   
  }

  postComment() {  
    this.isPostingComment = true;

    if (this.isEditingComment) {

      this.api.editCommentOnPost(this.postId, this.commentContent, this.editedCommentId).subscribe(
        commentResponse => {
        
          let index = this.comments.findIndex(editedComment => editedComment.id === commentResponse.id);
          if (index >= 0) {
              this.comments[index] = commentResponse;
          }
          this.commentContent = '';
          this.reduceInputSize();
          this.postDidUpdated = true;
          this.generateCommentBoxes();

          this.analytics.logEvent('comment_edited', {post_id: this.postId, user_id: this.api.getUserId()})
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
      },
      err => {
        console.log('Error ' + err +  ' - On Comment Editing.');
      },
      () => {
        this.isPostingComment = false;
        this.isEditingComment = false;
        this.editedCommentId = 0;
      });

    } else {  
      this.api.commentOnPost(this.postId, this.commentContent, 0).subscribe(
        commentResponse => {
        
          this.comments.unshift(commentResponse);
          this.commentContent = '';
          this.reduceInputSize();
          this.commentCount = Number(this.commentCount) + 1;
          
          this.postDidUpdated = true;
          this.generateCommentBoxes();

          this.analytics.logEvent('new_comment', {post_id: this.postId, user_id: this.api.getUserId()})
          .then((res: any) => console.log(res))
          .catch((error: any) => console.error(error));
      },
      err => {
        console.log('Error ' + err +  ' - On Comment Data posting.');
      },
      () => this.isPostingComment = false);
    }
  }

  editComment(commentIndex: any) {  
    this.commentInput.value = String(this.commentBoxes[commentIndex]['content']['rendered']).replace(/<[^>]+>/gm, '');
    this.changeInputSize();
    this.commentInput.setFocus();
    this.editedCommentId = this.commentBoxes[commentIndex]['id'];
    this.isEditingComment = true;
  }

  goToSearchWithTag(tag: any) {
    this.navCtrl.push('SearchPage', {'tagId': tag['id'], 'tagName': tag['name']});
  }

  goToSearchWithCategory(category: any) {
    this.navCtrl.push('SearchPage', {'categoryId': category['id'], 'categoryName': category['name'], });
  }

  openShareActionSheet() {

    let sharingOptions = {
      message: this.strip(this.post['title']['rendered']), // not supported on some apps (Facebook, Instagram)
      subject: 'Publicação da Rede Humaniza SUS: ' + this.post['title']['rendered'], // for email
      url: this.post['link']
    }
    this.socialSharing.shareWithOptions(sharingOptions);
  }

  // Used for ordering and finding level of comments
  generateCommentBoxes() {
    //console.log(this.comments);
    this.commentBoxes = new Array<any>();
    this.fillCommentBox(0, 0);
    this.isLoadingComments = false;
    //console.log(this.commentBoxes);
  }

  fillCommentBox(parentId: number, commentDepth: number) {
    
    for (let comment of this.comments) {

      if (comment['parent'] != parentId ) {    
        continue;
      } 
      
      comment.depth = commentDepth;
      this.commentBoxes.push(comment);

      this.fillCommentBox(comment['id'], commentDepth + 1);
    }
  }

  // Used for striping html formating from title in sharing options
  // (not needed in template, where we can use [innerHtml])
  strip(html) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  changeInputSize() {
    // Get elements
    let element   = document.getElementById('commentInput');
    let textarea  = element.getElementsByTagName('textarea')[0];
    
    // Set default style for textarea
    textarea.style.minHeight  = '18px';
    textarea.style.height     = 'auto';

    // Limit size to 96 pixels (6 lines of text)
    let scroll_height = textarea.scrollHeight;
    if(scroll_height > 96)
      scroll_height = 96;

    // Apply new style
    element.style.height     = scroll_height + "px";
    textarea.style.minHeight = scroll_height + "px";
    textarea.style.height    = scroll_height + "px";
  }

  reduceInputSize() {
    // Get elements
    let element   = document.getElementById('commentInput');
    let textarea  = element.getElementsByTagName('textarea')[0];
    
    // Set default style for textarea
    element.style.height     = "18px";
    textarea.style.minHeight  = '18px';
    textarea.style.height     = 'auto';
  }

  // Callback function used in comment page to inform if the user did inserted a new comment or not.
  returnFromCommentPage = (_params) => {
    return new Promise((resolve, reject) => {
        if (_params != 0) { this.postDidUpdated = true; }
        this.commentCount = Number(this.commentCount) + _params;
        resolve();
    });
  }

  goToAuthorPage(userId: number) {
    if (userId == this.api.getUserId()) {
      this.navCtrl.push('ProfilePage');
    } else {
      this.navCtrl.push('UserPage', { 'userId': userId });
    }
  }
}
