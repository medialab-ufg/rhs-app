import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, AlertController } from 'ionic-angular';

import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  followingView = 'people';

  postList: Array<any> = new Array<any>();
  userList: Array<any> = new Array<any>();

  postQueries: { [query: string]: String } = {};
  userQueries: { [query: string]: String } = {};

  showSpinner = false;
  isUserLogged: boolean = false;

  noMoreResultsOnPosts: boolean = false;
  noMoreResultsOnPeople: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public authentication: AuthenticationProvider,
              public alertCtrl: AlertController) {

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
        this.userList = new Array<any>();
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
        this.showSpinner = false;
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

  unfollowUser(userId: number) {

    let prompt = this.alertCtrl.create({
      title: 'Deseja parar de seguir este usuário?',
      message: "Você deixará de receber notificações quando ele publicar um post novo.",
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            this.api.followUser(userId).subscribe(
              response => {
                console.log(response);
                if (response.response == 2) {
                  this.api.followingUsers.unshift(response.follow_id);
                }},
              err => {
                console.log('Error ' + err + ' on follow user request.');
              }
            );
          }
        },
        {
          text: 'Parar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
