import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { SettingsProvider } from './../../providers/settings/settings';
import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  isUserLogged: boolean = false; 

  articleFontSizeRange: number = 3;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public storage: Storage,
              public settings: SettingsProvider,
              public authentication: AuthenticationProvider,
              public api: ApiProvider) {

    this.authentication.userLogged.subscribe(value => {
      this.isUserLogged = value;
    });

  }

  ionViewDidLoad() {
    this.isUserLogged = this.api.isLogged();

    // Loads post font size to settings service.
    this.storage.get('article_font_size').then((result) => {
      if (this.settings.postContentFontSizeOptions[result]) {
        this.articleFontSizeRange = this.fontSizeToRange(result);
        this.settings.currentFontSize = result;
      }
    });
  }

  alertLogout() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Se você fazer logout, terá apenas uma visão limitada dos posts da rede!',
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {}
        },
        {
          text: 'Fazer Logout',
          handler: data => {
            this.logout();
          }
        }
      ]
    });
    alert.present();
  }

  logout() {
    // Saves in local storage, for obtaining on app load.
    this.storage.set('oauth_token', null);
    this.storage.set('is_user_logged', false);
    
    // Saves in Api Service, for using during requests.
    this.api.setLogged(false);
    this.api.setTokenKey(null);
    this.api.setTokenSecret(null);

    // Informs the subscribed components (as the sidemenu) that use has logged.
    this.authentication.userLogged.emit(false);
    this.isUserLogged = false;

  }

  goToLoginPage() {
    this.navCtrl.push('LoginPage');
  }

  changePostFontSize() {
    this.settings.currentFontSize = this.rangeToFontSize(this.articleFontSizeRange);
    this.storage.set('article_font_size', this.settings.currentFontSize);
  }

  rangeToFontSize(range: number) {
    switch (range) {
      case 1: 
      return 'extra-small';
      case 2: 
      return 'small';
      case 3: 
      return 'medium';
      case 4: 
      return 'large';
      case 5: 
      return 'extra-large';
      default:
      return 'medium';
    }
  }

  fontSizeToRange(fontSize: string) {
    switch (fontSize) {
      case 'extra-small': 
      return 1;
      case 'small': 
      return 2;
      case 'medium': 
      return 3;
      case 'large': 
      return 4;
      case 'extra-large': 
      return 5;
      default:
      return 3;
    }
  }
}
