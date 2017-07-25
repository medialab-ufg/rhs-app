import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { PostsPage } from './../pages/posts/posts';
import { ProfilePage } from './../pages/profile/profile';
import { FollowingPage } from './../pages/following/following';
import { SettingsPage } from './../pages/settings/settings';
import { IntroPage } from './../pages/intro/intro';

import { AuthenticationProvider } from './../providers/authentication/authentication';
import { ApiProvider } from './../providers/api/api';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Page navigation
  rootPage: any = IntroPage;
  pages: Array<{title: string, component: any}>;

  // Sidemenu User Info 
  showUserInfo = false;
  userInfo = '';

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public storage: Storage,
              public authentication: AuthenticationProvider,
              public api: ApiProvider,
              public loadingCtrl: LoadingController) {

    this.initializeApp();

    this.pages = [
      { title: 'Posts', component: PostsPage },
      { title: 'Meu Perfil', component: ProfilePage },
      { title: 'Seguindo', component: FollowingPage },
      { title: 'Configurações', component: SettingsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

      //this.storage.clear();
      this.storage.get('introShown').then((result) => {

        if (result){
          this.rootPage = PostsPage;
        } else {
          //this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }
  
        this.splashScreen.hide();
      });
      this.storage.get('is_user_logged').then((result) => {
        
        if (result) {
          this.api.setLogged(true);
          
          this.storage.get('oauth_token_key').then((value) => { this.api.setTokenKey(value) });
          this.storage.get('oauth_token_secret').then((value) => { this.api.setTokenSecret(value) });

          this.loadUserInfo();

        } else {
          this.api.setLogged(false);
        }
      })
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
    this.nav.setRoot(LoginPage);
  }

  loadUserInfo() {
    // Adds loading spinner 
    let loading = this.loadingCtrl.create({content: 'Carregando dados do usuário...'});
    loading.present();

    this.api.getUserInfo().subscribe(
      userInfo => {
      this.userInfo = userInfo['userInfo'];
      this.showUserInfo = true;
    },
    err => {
      console.log('Error ' + err +  ' - On User Data Request.');
    },
    () => loading.dismiss());
  }
}
