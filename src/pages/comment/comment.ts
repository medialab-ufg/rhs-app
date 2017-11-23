import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  @ViewChild('responseInput') responseInput;

  postId: number;
  comment: any;
  response: any = null;
  commentId: any = null;

  responseContent: string = '';
  isPostingResponse: boolean = false;
  didResponded: boolean = false;
  isLoadingComment = false;

  returnFromCommentFunction: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public statusBar: StatusBar,
              public analytics: FirebaseAnalytics) {
    this.postId = this.navParams.get('postId');
    this.comment = this.navParams.get('comment');
    this.commentId = this.navParams.get('commentId'); // If null, we came from post page, instead of notification.

    if (this.commentId != null) {
      this.loadComment();
    }
  }

  ionViewDidEnter() {
    setTimeout(() => {
      this.responseInput.setFocus();
    }, 150);

    // Tells analytics that user accessed this screen.
    this.analytics.setCurrentScreen("Comments")
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('008884');
    this.returnFromCommentFunction = this.navParams.get("returnFromCommentFunction")
  }

  ionViewDidLeave(){
    this.statusBar.backgroundColorByHexString('042830');
  }

  ionViewWillLeave() {
    this.returnFromCommentFunction(this.didResponded ? 1 : 0).then(()=>{});
  }

  loadComment() {
    this.isLoadingComment = true;

    this.api.getComment(this.commentId).subscribe(
      comment => {
        this.comment = comment;
      },
      err => {
        console.log('Error ' + err +  ' - on loading post content.');
      },
      () => this.isLoadingComment = false
    );
  }

  postResponse() {
    
    this.isPostingResponse = true;

    this.api.commentOnPost(this.comment['post'], this.responseContent, this.comment['id']).subscribe(
      commentResponse => {
      
        this.responseContent = '';
        this.response = commentResponse;
        this.didResponded = true;
    },
    err => {
      console.log('Error ' + err +  ' - On Response Data posting.');
      this.didResponded = false;
      this.isPostingResponse = false;
    },
    () => this.isPostingResponse = false);
  }

  changeInputSize() {
    // Get elements
    let element  = document.getElementById('responseInput');
    let textarea = element.getElementsByTagName('textarea')[0];

    // Set default style for textarea
    textarea.style.minHeight  = '0';
    textarea.style.height     = '0';

    // Limit size to 96 pixels (6 lines of text)
    let scroll_height = textarea.scrollHeight;
    if(scroll_height > 96)
      scroll_height = 96;

    // Apply new style
    element.style.height      = scroll_height + "px";
    textarea.style.minHeight  = scroll_height + "px";
    textarea.style.height     = scroll_height + "px";
  }

  goToPostPage() {
    this.navCtrl.push('PostPage', {'postId': this.comment['post'] });
  }

}
