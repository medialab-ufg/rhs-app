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

  isUserLogged: boolean = false;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public api: ApiProvider) {
    this.isUserLogged = this.api.isLogged();
  }

  ionViewDidLoad() {
  }

}
