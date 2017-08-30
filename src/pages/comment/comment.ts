import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { CommentModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {
  @ViewChild('responseInput') responseInput;

  postId: number;
  comment: CommentModel;
  response: CommentModel = null;

  responseContent: string = '';
  isPostingResponse: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider) {
    this.postId = this.navParams.get('postId');
    this.comment = this.navParams.get('comment');
  }

  ionViewDidLoad() {
    this.responseInput.setFocus();
  }

  postResponse() {
    
    this.isPostingResponse = true;

    this.api.commentOnPost(this.postId, this.responseContent, this.comment.id).subscribe(
      commentResponse => {
      
        this.responseContent = '';
        this.response = commentResponse;
    },
    err => {
      console.log('Error ' + err +  ' - On Response Data posting.');
    },
    () => this.isPostingResponse = false);
  }

  changeInputSize() {
    // Get elements
    let element   = document.getElementById('responseInput');
    let textarea  = element.getElementsByTagName('textarea')[0];

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

}
