import { PostsCardComponentModule } from './../../components/post-card/post-card.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [ProfilePage],
  imports: [IonicPageModule.forChild(ProfilePage), PostsCardComponentModule],
})
export class ProfilePageModule { }