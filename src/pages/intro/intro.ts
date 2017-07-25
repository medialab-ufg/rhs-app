import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { PostsPage } from './../posts/posts';
import { LoginPage } from './../login/login';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {
  @ViewChild(Slides) slides: Slides;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  goToLastSlide() {
    this.slides.slideTo(3, 500);
  }

  goToPostsPage() {
    this.navCtrl.setRoot(PostsPage);
  }

  goToLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

}
