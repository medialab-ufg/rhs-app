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

  followingView = 'people';

  postList: Array<PostModel> = new Array<PostModel>();
  userList: Array<UserModel> = new Array<UserModel>();

  postQueries: { [query: string]: String } = {};
  userQueries: { [query: string]: String } = {};

  showSpinner = false;
  isUserLogged: boolean = false;

  noMoreResultsOnPosts: boolean = false;
  noMoreResultsOnPeople: boolean = false;

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
    if (this.api.isLogged() === true) { 
     if (this.followingView == 'posts') {
        this.loadPosts(false);
      } else {
        this.loadUsers(false);
      }
    }
  }

  loadPosts(isLoadingMore: boolean) {}

  loadUsers(isLoadingMore: boolean) : Promise<any> {

    this.showSpinner = true;

    return new Promise((resolve) => {
      //  Pull to refresh or update service calls.
      if (isLoadingMore === false) {
        this.userList = new Array<UserModel>();
        this.userQueries['page'] = '1';
      } 
      //  Infinite scroll calls
      else if (isLoadingMore === true) {
        this.userQueries['page'] = Number(this.userQueries['page']) + 1 + '';
      } 
      //  Switching segment controller calls
      else {
        if (this.userList.length === 0) {
          this.showSpinner = true;
          this.userQueries['page'] = '1';
        }     
      }
      // Adds array of following posts to query
      if (this.api.followingUsers.length > 0) {

        this.userQueries['include'] = String(this.api.followingUsers.join(','));

        // Perform the request to the api service
        this.api.getUserList(true, this.userQueries).subscribe(
          userList => {
          this.userList = this.userList.concat(userList);
          this.noMoreResultsOnPeople = false;
        },
        err => {
          if (err === 400) {
            this.noMoreResultsOnPeople = true;
          }
          console.log('Error ' + err +  ' - On User Data Request.');
        },
        () => { this.showSpinner = false; resolve() });
      } else {
        this.authentication.userLogged.subscribe(value => {
          if (value === true) {
            this.isUserLogged = true;
            this.loadUsers(isLoadingMore);
          }
        });
      }
    });
  }


  doRefresh(refresher) {
    this.showSpinner = false;
    this.loadUsers(false).then(() => refresher.complete());
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.loadUsers(true).then(() => resolve());
    });
  }

  goToUserPage(userId: number) {
    this.navCtrl.push('UserPage', { 'userId': userId });
  }

}
