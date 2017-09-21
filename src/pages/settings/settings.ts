import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, IonicPage } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { OneSignal } from '@ionic-native/onesignal';

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
              public api: ApiProvider,
              public oneSignal: OneSignal) {

    this.authentication.userLogged.subscribe(value => {
      this.isUserLogged = value;
    });

  }

  ionViewDidLoad() {
    this.isUserLogged = this.api.isLogged();
    console.log("DEVICE ID = " +  this.settings.pushDeviceId);

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

    this.api.deletePushDeviceID(this.settings.pushDeviceId).subscribe( 
      response => {
      console.log(response);
    },
    err => {
      console.log('Error ' + err + ' - Deleting User Device Push ID.');
    });

    // Saves in local storage, for obtaining on app load.
    this.storage.set('oauth_token', null);
    this.storage.set('is_user_logged', false);
    this.storage.set('desired_notifications', null);
    
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

  // Related to Desired Notifications Settings ----------------------------------------
  toggleDesiredNotification(desiredNotification: string) {

    if (this.settings.desiredNotifications[desiredNotification] === true) {
      this.applyValueToOneSignalTag(desiredNotification, '1');
    } else {
      this.applyValueToOneSignalTag(desiredNotification, '0');
    }

    this.storage.set('desired_notifications', this.settings.desiredNotifications);

  }

  applyValueToOneSignalTag(tagName: string, tagValue: string) {

    let currentTags: Array<any> = new Array<any>();
    let changedTags: any;

    // Obtains the current tags associated to the user from OneSignal
    this.oneSignal.getTags().then((value) => {
      
      console.log(value);

      for (var key in value) {
          if (value.hasOwnProperty(key)) {
              currentTags.push(key);
          }
      };
      console.log(currentTags);

      for (let tag of currentTags) {

        // Checks if the tag is of the desiredNotification Type to apply new value
        if (tag.includes(tagName)) {
          console.log("Tag que será excluida: " + tagName);
          changedTags[tag] = tagValue;
        }
      }

      this.oneSignal.sendTags(changedTags);

    });
  }
  
  // Related to Font Size Settings ----------------------------------------------------
  translateFontSize(fontSize: string) {
    switch (fontSize) {
      case 'extra-small': 
      return 'muito pequeno';
      case 'small': 
      return 'pequeno';
      case 'medium': 
      return 'médio';
      case 'large': 
      return 'grande';
      case 'extra-large': 
      return 'muito grande';
      default:
      return 'médio';
    }
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
