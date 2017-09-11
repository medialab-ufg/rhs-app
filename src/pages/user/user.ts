import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { UserModel, PostModel } from './../../providers/models/models';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userId: number;
  user: UserModel;
  userPostsList: Array<PostModel> = new Array<PostModel>();

  postQueries: { [query: string]: String } = {};

  isLoadingUser: boolean = true;
  isLoadingUserPosts: boolean = true;
  noMoreResults: boolean = false;

  userInfoView: string = 'posts';


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider) {
    this.userId = this.navParams.get('userId');
    this.loadUser();
  }

  ionViewDidLoad() {
  }

  loadUser() {
    this.isLoadingUser = true;

    this.api.getAuthorInfo(this.userId, false).subscribe(
      userInfo => {
      this.user = userInfo;
      this.loadUserPosts(false);
    },
    err => {
      console.log('Error ' + err +  ' - On User Data Request.');
    },
    () => this.isLoadingUser = false);    
  }

  loadUserPosts(isLoadingMore: boolean): Promise<any> {
    
    return new Promise((resolve) => {

      this.postQueries['author'] = String(this.user.id);

      if (isLoadingMore === false) {
        this.userPostsList = new Array<PostModel>();
        this.postQueries['page'] = '1';
      } 
      //  Infinite scroll calls
      else if (isLoadingMore === true) {
        this.postQueries['page'] = Number(this.postQueries['page']) + 1 + '';
      } 

      this.api.getPostList(this.api.isLogged(), this.postQueries).subscribe(
        postList => {
        this.userPostsList = this.userPostsList.concat(postList);    
        this.noMoreResults = false;
      },
      err => {
        if (err === 400) {
          this.noMoreResults = true;
        }
        console.log('Error ' + err +  ' - On User Posts List Data Request.');
      },
      () => { this.isLoadingUserPosts = false; resolve() } );

    });
  }

  goToPostPage(postId: number) {
    this.navCtrl.push('PostPage', {'postId': postId});
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.loadUserPosts(true).then(() => resolve());
    });
  }

}