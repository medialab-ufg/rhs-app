import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';

import { InformationComponentModule } from './../../components/information/information.module';
import { PostsCardComponentModule } from './../../components/post-card/post-card.module';

@NgModule({
  declarations: [PostsPage],
  imports: [IonicPageModule.forChild(PostsPage), PostsCardComponentModule, InformationComponentModule],
})
export class PostsPageModule { }