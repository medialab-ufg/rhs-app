import { PostsCardComponentModule } from './../../components/post-card/post-card.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostsPage } from './posts';

@NgModule({
  declarations: [PostsPage],
  imports: [IonicPageModule.forChild(PostsPage), PostsCardComponentModule],
})
export class PostsPageModule { }