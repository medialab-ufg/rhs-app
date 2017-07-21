import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { PostsPage } from './../pages/posts/posts';
import { ProfilePage } from './../pages/profile/profile';
import { FollowingPage } from './../pages/following/following';
import { SettingsPage } from './../pages/settings/settings';
import { NotificationsPage } from './../pages/notifications/notifications';
import { SearchPage } from './../pages/search/search';
import { PostPage } from './../pages/post/post';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PostsPage,
    ProfilePage,
    FollowingPage,
    SettingsPage,
    SearchPage,
    NotificationsPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostsPage,
    ProfilePage,
    FollowingPage,
    SettingsPage,
    SearchPage,
    NotificationsPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
