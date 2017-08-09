import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { ApiProvider } from './../../providers/api/api';

import { PostModel, UserModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  followingView = 'posts';

  postList: Array<PostModel> = new Array<PostModel>();
  userList: Array<UserModel> = new Array<UserModel>();

  showSpinner = false;
  isUserLogged: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public authentication: AuthenticationProvider) {

      this.isUserLogged = this.api.isLogged();
      this.authentication.userLogged.subscribe(value => {
      if (value === true) {

        this.isUserLogged = this.api.isLogged();

        if (this.followingView == 'posts') {
          this.loadPosts(false);
        } else {
          this.loadUsers(false);
        }
      }
    });
  }

  ionViewDidLoad() {
  
  }

  loadPosts(isLoadingMore: boolean) {}

  loadUsers(isLoadingMore: boolean) {}
}
