import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PostsPage } from './../posts/posts';
import { LoginPage } from './../login/login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToPostsPage() {
    this.navCtrl.setRoot(PostsPage);
  }

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

}
