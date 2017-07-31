import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostPage } from './post';

import { ShrinkHeader } from '../../directives/shrink-header/shrink-header';

@NgModule({
  declarations: [PostPage, ShrinkHeader],
  imports: [IonicPageModule.forChild(PostPage)],
})
export class PostPageModule { }