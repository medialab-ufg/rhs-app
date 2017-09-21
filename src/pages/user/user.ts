import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController, ToastController } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userId: number;
  user: any;
  userPostsList: Array<any> = new Array<any>();

  isFollowing: boolean = false;

  postQueries: { [query: string]: String } = {};

  isLoadingUser: boolean = true;
  isLoadingUserPosts: boolean = true;
  noMoreResults: boolean = false;

  userInfoView: string = 'posts';


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController) {

    this.userId = this.navParams.get('userId');
    this.loadUser();
  }

  ionViewDidLoad() {
    for (let followId of this.api.followingUsers) {
      if (followId == this.userId) {
        this.isFollowing = true;
      }
    }
  }

  followUser() {
    this.api.followUser(this.userId).subscribe(
      response => {
        console.log(response);
        
        this.isFollowing = true;
        this.api.followingUsers.push(response.follow_id);

        let followConfirmToast = this.toastCtrl.create({
          message: 'Agora você está seguindo este usuário :)',
          duration: 3000
        });
        followConfirmToast.present();
      },
      err => {
        console.log('Error ' + err + ' on follow user request.');
        this.isFollowing = false;
      }
    );
  }

  unFollowUser() {
    this.api.unFollowUser(this.userId).subscribe(
      response => {
        console.log(response);
        
        this.isFollowing = false;
        this.api.followingUsers.unshift(response.follow_id);

        let unFollowConfirmToast = this.toastCtrl.create({
          message: 'Você deixou de seguir este usuário',
          duration: 3000
        });
        unFollowConfirmToast.present();
      },
      err => {
        console.log('Error ' + err + ' on follow user request.');
        this.isFollowing = false;
      }
    );

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

      this.postQueries['author'] = String(this.user['id']);

      if (isLoadingMore === false) {
        this.userPostsList = new Array<any>();
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
