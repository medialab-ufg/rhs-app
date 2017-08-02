import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { AuthenticationProvider } from './../providers/authentication/authentication';
import { ApiProvider } from './../providers/api/api';
import { UserModel } from './../providers/models/models';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Page navigation
  rootPage: any = 'PostsPage';
  pages: Array<{title: string, component: any, icon: string}>;

  // Sidemenu User Info 
  showUserInfo = false;
  userInfo: UserModel;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public storage: Storage,
              public authentication: AuthenticationProvider,
              public api: ApiProvider,
              public loadingCtrl: LoadingController) {

    this.initializeApp();

    this.pages = [
      { title: 'Posts', component: 'PostsPage', icon: 'md-document' },
      { title: 'Meu Perfil', component: 'ProfilePage', icon: 'md-contact' },
      { title: 'Seguindo', component:  'FollowingPage', icon: 'logo-rss' },
      { title: 'Configurações', component: 'SettingsPage', icon: 'md-settings' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      
      // Decides wheter the Intro page should be shown or not.
      this.storage.get('introShown').then((result) => {

        if (result){
          this.rootPage = 'PostsPage';
        } else {
          this.rootPage = 'IntroPage';
          this.storage.set('introShown', true);
        }
  
        this.splashScreen.hide();
      });

      // Checks on Storage if user is logged
      this.storage.get('is_user_logged').then((result) => {
        
        if (result) {
          this.api.setLogged(true);

          this.storage.get('oauth_token').then((value) => { 
            this.api.setTokenKey(value.key); 
            this.api.setTokenSecret(value.secret); 
            this.authentication.userLogged.emit(true);
          });

        } else {
          // Saves in Api Service, for using during requests.
          this.api.setLogged(false);
          this.api.setTokenKey(null);
          this.api.setTokenSecret(null);

          // Informs subscribed ones (as the sidemenu and settings page) that user logged out.
          this.authentication.userLogged.emit(false);
        }
      });

      // Register 
      this.authentication.userLogged.subscribe(value => {
        if (value === true) {
          this.loadUserInfo();
        } else {
          this.showUserInfo = false;
        }
      })
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goToLoginPage() {
    this.nav.push('LoginPage');
  }

  loadUserInfo() {
    // Adds loading spinner 
    let loading = this.loadingCtrl.create({content: 'Carregando...'});
    loading.present();

    this.api.getUserInfo().subscribe(
      userInfo => {

      this.api.setUserId(userInfo.id);

      this.userInfo = userInfo;
      this.showUserInfo = true;
    },
    err => {
      console.log('Error ' + err +  ' - On User Data Request.');
    },
    () => loading.dismiss());
  }
}
