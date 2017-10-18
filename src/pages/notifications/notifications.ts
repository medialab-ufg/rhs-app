import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  notifications: Array<any> = new Array<any>();
  queries: { [query: string]: String } = {};

  isUserLogged: boolean = false;

  noMoreResults: boolean = false;
  isLoadingMore: boolean = false;
  showSpinner: boolean = false;
  loadingFromRefresher: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider,
              public authentication: AuthenticationProvider) {

    this.notifications = new Array<any>();
    this.authentication.userLogged.subscribe(value => {
      if (value === true) {
        this.isUserLogged = this.api.isLogged();
        this.loadNotifications(false);
      }
    });
  }

  ionViewDidLoad() {

    this.isUserLogged = this.api.isLogged();

    if (this.isUserLogged === true) { 
      this.loadNotifications(false);
    }

    this.api.markNotificationsAsRead().subscribe(
      response => console.log('Notifications marked as read for user ' + response),
      err => console.log('Error ' + err +  ' - On Notifications Data Request.')
    );
  }

  loadNotifications(isLoadingMore: boolean): Promise<any> {
    
    return new Promise((resolve) => {
      
      this.showSpinner = true;

      if (isLoadingMore === false) {
        this.notifications = new Array<any>();
        this.queries['page'] = '1';
      } 
      // Infinite scroll calls
      else if (isLoadingMore === true) {
        this.showSpinner = false;
        this.queries['page'] = Number(this.queries['page']) + 1 + '';
      } 

      this.api.getNotificationList(true, this.queries['page']).subscribe(
        notificationList => {
            this.notifications = this.notifications.concat(notificationList);
            this.noMoreResults = false;
            console.log(this.notifications);
            if (notificationList.length == 0) {
              this.noMoreResults= true;
            }
          },
          err => {
            if (err === 400) {
              this.noMoreResults = true;
            }
            console.log('Error ' + err +  ' - On Notifications Data Request.');
          },
          () => { this.showSpinner = false; this.loadingFromRefresher = false; resolve() });
        
    });
  }

  goToNotificationContent(index: number){
    switch (this.notifications[index]['type']) {
      case 'comments_in_post':
        this.navCtrl.push('CommentPage', {'commentId': this.notifications[index]['object_id'] });
      break;
      case 'new_community_post' || 'post_followed' || 'post_promoted' || 'replied_ticket':
        this.navCtrl.push('PostPage', {'postId': this.notifications[index]['object_id'] });
      break;
      case 'user_follow_author':
        this.navCtrl.push('UserPage', { 'userId': this.notifications[index]['user_id'] });
      break;
    }
  }

  doRefresh(refresher) {
    this.loadingFromRefresher = true;
    this.loadNotifications(false).then(() => refresher.complete());
  }

  doInfinite(): Promise<any> {
    return new Promise((resolve) => {
      this.loadNotifications(true).then(() => resolve());
    });
  }

}
