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

}
