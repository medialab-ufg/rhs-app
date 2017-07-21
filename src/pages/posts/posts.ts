import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostPage } from './../post/post';
import { NotificationsPage } from './../notifications/notifications';
import { SearchPage } from './../search/search';

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {

  postsView = 'home';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostsPage');
  }

  goToPostPage() {
    this.navCtrl.push(PostPage);
  }

  goToSearchPage() {
    this.navCtrl.push(SearchPage);
  }

  goToNotificationsPage() {
    this.navCtrl.push(NotificationsPage);
  }

}
