import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';

import { InformationComponentModule } from './../../components/information/information.module';
import { PostsCardComponentModule } from './../../components/post-card/post-card.module';

@NgModule({
  declarations: [UserPage],
  imports: [IonicPageModule.forChild(UserPage), PostsCardComponentModule, InformationComponentModule],
})
export class ProfilePageModule { }