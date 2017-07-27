import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage()
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
    this.navCtrl.push('PostPage');
  }

  goToSearchPage() {
    this.navCtrl.push('SearchPage');
  }

  goToNotificationsPage() {
    this.navCtrl.push('NotificationsPage');
  }

}
