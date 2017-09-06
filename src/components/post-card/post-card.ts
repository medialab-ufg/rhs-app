import { NavController } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { ApiProvider } from './../../providers/api/api';

import { PostModel } from './../../providers/models/models';

@Component({
  selector: 'post-card',
  templateUrl: 'post-card.html'
})
export class PostCardComponent {

  @Input('post-data') post: PostModel;

  constructor(public api: ApiProvider, public navCtrl: NavController ) {
  }

  goToAuthorPage(event, userId: number) {
    event.stopPropagation(); // Avoids the click event to propagate to the card, and then go to post page.
    if (userId == this.api.getUserId()) {
      this.navCtrl.push('ProfilePage');
    } else {
      this.navCtrl.push('UserPage', { 'userId': userId });
    }
  }
  

}
