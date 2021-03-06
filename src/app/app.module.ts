import { OneSignal } from '@ionic-native/onesignal';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { Network } from '@ionic-native/network';
import { FirebaseAnalytics } from '@ionic-native/firebase-analytics';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { ApiProvider } from '../providers/api/api';
import { SettingsProvider } from '../providers/settings/settings';
import { UpdateProvider } from '../providers/update/update';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      pageTransition: 'ios-transition',
      platforms: {
        ios: {
          backButtonText: 'Voltar'
        }
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationProvider,
    ApiProvider,
    SettingsProvider,
    UpdateProvider,
    Keyboard,
    OneSignal,
    FirebaseAnalytics
  ]
})
export class AppModule {}
