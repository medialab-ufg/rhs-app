import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, LoadingController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { PostModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  postsView: string = 'home';
  homePostList: Array<PostModel> = new Array<PostModel>();
  queuePostList: Array<PostModel> = new Array<PostModel>();
  followingPostList: [PostModel];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public api: ApiProvider,
              public authentication: AuthenticationProvider) {
                
  }

  ionViewDidLoad() {
    this.loadPosts('home');
  }

  goToPostPage() {
    this.navCtrl.push('PostPage');
  }

  goToSearchPage() {
    this.navCtrl.push('SearchPage');
  }

  goToNotificationsPage() {
    this.navCtrl.push('NotificationsPage');
  }

  loadPosts(postView: string) {
    this.postsView = postView;
    console.log("LOADING " + this.postsView);
    switch (this.postsView) {
      case 'home':

        let loading = this.loadingCtrl.create({content: 'Carregando...'});
        loading.present();

        this.api.getPostList(false).subscribe(
          postList => {
          this.homePostList = this.homePostList.concat(postList);
        },
        err => {
          console.log('Error ' + err +  ' - On User Data Request.');
        },
        () => loading.dismiss());
      break;

      case 'queue':
        if (this.api.isLogged()){
          
          loading = this.loadingCtrl.create({content: 'Carregando...'});
          loading.present();

          this.api.getPostList(true).subscribe(
            postList => {
            this.queuePostList = this.queuePostList.concat(postList);
          },
          err => {
            console.log('Error ' + err +  ' - On User Data Request.');
          },
          () => loading.dismiss());
        } else {
          // Register 
          this.authentication.userLogged.subscribe(value => {
            if (value === true) {
              this.loadPosts('queue');
            }
          });
        }
      break;
      
      case 'following':
      break;
    } 
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.loadPosts(this.postsView);
      resolve();
    });
  }

}
