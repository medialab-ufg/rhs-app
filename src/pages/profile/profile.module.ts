import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';

import { InformationComponentModule } from './../../components/information/information.module';
import { PostsCardComponentModule } from './../../components/post-card/post-card.module';

@NgModule({
  declarations: [ProfilePage],
  imports: [IonicPageModule.forChild(ProfilePage), PostsCardComponentModule, InformationComponentModule],
})
export class ProfilePageModule { }