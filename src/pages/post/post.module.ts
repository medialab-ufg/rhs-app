import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';
import { DynamicHTMLModule } from 'ng-dynamic';

import { ShrinkHeader } from '../../directives/shrink-header/shrink-header';
import { CommentBoxComponent } from '../../components/comment-box/comment-box';

@NgModule({
  declarations: [PostPage, ShrinkHeader, CommentBoxComponent],
  imports: [
    IonicPageModule.forChild(PostPage), 
    DynamicHTMLModule.forRoot({
      components: [
        { component: CommentBoxComponent, selector: 'comment-box' },
      ]
    })]
  })
export class PostPageModule { }