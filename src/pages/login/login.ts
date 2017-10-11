import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Storage } from '@ionic/storage';

import { AuthenticationProvider } from './../../providers/authentication/authentication';
import { SettingsProvider } from './../../providers/settings/settings';
import { ApiProvider } from './../../providers/api/api';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authentication: AuthenticationProvider,
              public storage: Storage,
              public inAppBrowser: InAppBrowser,
              public settings: SettingsProvider,
              public api: ApiProvider) {
  }

  ionViewDidLoad() {
  }

  login() {

    this.authentication.getTemporaryCredentials().subscribe(
      temporaryCredentials => {

        if (temporaryCredentials.oauthToken !== null && temporaryCredentials.oauthTokenSecret !== null) {
          
          const browser = this.inAppBrowser.create(this.settings.apiURL + '/oauth1/authorize?oauth_token=' + temporaryCredentials.oauthToken + '&oauth_token_secret=' + temporaryCredentials.oauthTokenSecret + '&device=mobile-app', '_blank', { zoom: 'no', location: 'no', toolbarposition: 'top' });
          
          browser.on("loadstop").subscribe((event)=>{
              
              // The 3 lines above only work for Android 4.4.4 above
              //let url = new URL(event.url);
              //let oauth_verifier = url.searchParams.get('oauth_verifier');
              //let oauth_token = url.searchParams.get('oauth_token'); 

              // So we use a custom function
              let url = event.url;
              let oauth_verifier = this.getParameterByName('oauth_verifier', url);
              let oauth_token = this.getParameterByName('oauth_token', url);

              if (oauth_verifier !== null && oauth_verifier !== undefined) {

                browser.close(); 
                
                this.authentication.getAccessCredentials(temporaryCredentials.oauthToken, temporaryCredentials.oauthTokenSecret, oauth_verifier).subscribe(
                  finalCredentials => {
                    if (finalCredentials.oauthToken !== null  && finalCredentials.oauthTokenSecret !== null) {
                      
                      // Saves in local storage, for obtaining on app load.
                      this.storage.set('oauth_token', { key: finalCredentials.oauthToken, secret: finalCredentials.oauthTokenSecret });
                      this.storage.set('is_user_logged', true);
                      
                      // Saves in Api Service, for using during requests.
                      this.api.setLogged(true);
                      this.api.setTokenKey(finalCredentials.oauthToken);
                      this.api.setTokenSecret(finalCredentials.oauthTokenSecret);

                      // Informs the subscribed components (as the sidemenu) that use has logged.
                      this.authentication.userLogged.emit(true);
                      console.log("DEVICE ID = " + this.settings.pushDeviceId);
                      // Sends the push notification ID to server
                      if (this.settings.pushDeviceId !== '') {
                        this.api.sendPushDeviceID(this.settings.pushDeviceId).subscribe(
                        response => {
                          console.log(response);
                        },
                        err => {
                          console.log('Error ' + err + ' - Sending User Device Push ID.');
                        });
                      }

                      // Return user to home page.
                      this.navCtrl.setRoot('PostsPage');
                    }
                  },
                  err => {
                    console.log('Error ' + err +  ' - Final Credentials Request: ');
                    this.api.setLogged(false);
                  },
                  () => {  });
              } else {
                if (oauth_token === null) {
                  this.api.setLogged(false);
                }
              }
          });
        }
      },
      err => {
        console.log('Error ' + err +  ' - Temporary Credentials Request: ');
        this.api.setLogged(false);
      },
      () => {  });
  }

  register() {

    const browser = this.inAppBrowser.create(this.settings.apiURL + '/registrar?device=mobile-app', '_blank', { zoom: 'no', location: 'no', toolbarposition: 'top' });
    browser.on("loadstop").subscribe((event)=>{
      let url = new URL(event.url);
      console.log(event);
      console.log(url);
      // If User enters the website, go back to the App.
      if (url.pathname == '/') {
        browser.close();
      }
    });
     
  }

  getParameterByName(name, url) {

    url = decodeURIComponent(url);
    name = name.replace(/[\[\]]/g, "\\$&");

    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);

    if (!results) return null;

    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

}
