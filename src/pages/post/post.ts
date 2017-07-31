import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, IonicPage } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { PostModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  postId: number;
  post: PostModel;

  isLoading: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              public api: ApiProvider) {
     
    this.postId = this.navParams.get('postId');
    this.loadPost();
  }

  ionViewDidLoad() {
  }

  sendMessage() {
  }

  loadPost() {

    this.isLoading = true;

    this.api.getPostInfo(this.postId, false).subscribe(
      postInfo => {
      this.post = postInfo;
    },
    err => {
      console.log('Error ' + err +  ' - On User Data Request.');
    },
    () => this.isLoading = false);
    
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
