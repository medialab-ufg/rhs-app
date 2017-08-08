import { Component, Input } from '@angular/core';
import { PostModel } from './../../providers/models/models';

@Component({
  selector: 'post-card',
  templateUrl: 'post-card.html'
})
export class PostCardComponent {

  @Input('post-data') post: PostModel;

  constructor() {
  }

}
