import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';

import { ShrinkHeader } from '../../directives/shrink-header/shrink-header';

import { SocialSharing } from '@ionic-native/social-sharing';

import { InnerHtmlPostPipe } from '../../pipes/inner-html-post/inner-html-post';

@NgModule({
  declarations: [
    PostPage, 
    ShrinkHeader, 
    InnerHtmlPostPipe
  ],
  imports: [
    IonicPageModule.forChild(PostPage)
  ],
  providers: [SocialSharing]
  })
export class PostPageModule { }