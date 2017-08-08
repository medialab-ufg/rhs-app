import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { InformationComponentModule } from './../../components/information/information.module';
import { FollowingPage } from './following';

@NgModule({
  declarations: [FollowingPage],
  imports: [IonicPageModule.forChild(FollowingPage), InformationComponentModule],
})
export class FollowingPageModule { }