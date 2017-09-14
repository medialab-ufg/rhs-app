import { Network } from '@ionic-native/network';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { Push, PushObject, PushOptions } from '@ionic-native/push';

import { AuthenticationProvider } from './../providers/authentication/authentication';
import { ApiProvider } from './../providers/api/api';
import { SettingsProvider } from './../providers/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Page navigation
  rootPage: any = 'PostsPage';
  pages: Array<{title: string, component: any, icon: string}>;
  activePage: any;

  // Sidemenu User Info 
  showUserInfo = false;
  user: any;

  // Push Notifications Options
  pushOptions: PushOptions = {
    android: {
        senderID: '185540114749'
    },
    ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
    },
    windows: {},
    browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
    }
  };
  public pushObject: PushObject;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public storage: Storage,
              public authentication: AuthenticationProvider,
              public api: ApiProvider,
              public loadingCtrl: LoadingController,
              public network: Network,
              public toastCtrl: ToastController,
              public settings: SettingsProvider,
              private push: Push) {

    this.initializeApp();

    this.pages = [
      { title: 'Posts', component: 'PostsPage', icon: 'md-document' },
      { title: 'Meu Perfil', component: 'ProfilePage', icon: 'md-contact' },
      { title: 'Seguindo', component:  'FollowingPage', icon: 'logo-rss' },
      { title: 'Configurações', component: 'SettingsPage', icon: 'md-settings' },
    ];

    this.activePage = this.pages[0];

    // Watch network for a disconnect
    this.network.onDisconnect().subscribe(() => {
      let toast = this.toastCtrl.create({
        message: 'Conexão com a internet perdida... :(',
        duration: 6000
      });
      toast.present();
    });

    // Watch network for a connection
    this.network.onConnect().subscribe(() => {

      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === '2g' || this.network.type === '3g' || this.network.type === 'cellular') {
          let toast = this.toastCtrl.create({
            message: 'Conexão fraca. Carregamento por demorar...',
            duration: 3000
          });
          toast.present();
        }
      }, 3000);
    });

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

      // Register for checking if user is logged 
      this.authentication.userLogged.subscribe(value => {
        if (value === true) {
          this.loadUserInfo();
        } else {
          this.showUserInfo = false;
        }
      })
      
      // Loads post font size to settings service.
      this.storage.get('article_font_size').then((result) => {
        if (this.settings.postContentFontSizeOptions[result]) {
          console.log("RESULT=" + result);
          this.settings.currentFontSize = result;
        }
      });

      this.pushNotificationSetup();

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.activePage = page;
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

      this.user = userInfo;
      this.showUserInfo = true;
      console.log(this.user);
    },
    err => {
      console.log('Error ' + err +  ' - On User Data Request.');
    },
    () => loading.dismiss());
  }

  pushNotificationSetup() {
    
    // to check if we have permission to receive Push Notifications
    this.push.hasPermission().then((res: any) => {

      if (!this.platform.is('cordova')) {
        console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
        return;
      }

      if (res.isEnabled) {
        console.log('We have permission to send push notifications');
        
        this.pushObject =  this.push.init(this.pushOptions);

        this.pushObject.on('registration').subscribe((registration: any) => {
          console.log('Device registered', registration);
          this.settings.pushDeviceId = registration.registrationId;
        });
        this.pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
        
        // Devite token obtido: fmZ9vKVyhao:APA91bG1Dxc-t3OIN2DhgDhGC_6Lfp7gvYPtAkHRCwjm_X1VgLnM1gucqbAaDzUAS31RxCTiEdPNrZkE7WSAF5m7gPFZ-lYA7vQbZ1oB1sg6GFx-6i9v6-oGUKIm2vv4VQDHFjAS8gKd
        this.pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

      } else {
        console.log('We do not have permission to send push notifications');
      }

    });
  }
}
