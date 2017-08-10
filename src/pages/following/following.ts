import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, IonicPage, Slides } from 'ionic-angular';

import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { ApiProvider } from './../../providers/api/api';

import { PostModel, UserModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {
  @ViewChild('segmentSlider') slider: Slides;

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

  onSegmentChanged(segmentButton) {
    if (segmentButton.value == 'posts'){
      this.slider.slideTo(0);
    } else {
      this.slider.slideTo(1);
    }
  }

  onSlideChanged(slider) {
    if (slider.getActiveIndex() == 0) {
      this.followingView = 'posts';
    } else {
      this.followingView = 'people';
    }
  }
}
