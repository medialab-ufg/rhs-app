import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { PostsPage } from './../pages/posts/posts';
import { ProfilePage } from './../pages/profile/profile';
import { FollowingPage } from './../pages/following/following';
import { SettingsPage } from './../pages/settings/settings';
import { IntroPage } from './../pages/intro/intro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = IntroPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public storage: Storage) {
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

      this.storage.clear();
      this.storage.get('introShown').then((result) => {


        if (result){
          this.rootPage = PostsPage;
        } else {
          //this.rootPage = IntroPage;
          this.storage.set('introShown', true);
        }
  
        this.splashScreen.hide();
      });

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
