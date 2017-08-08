import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';

import { InformationComponentModule } from './../../components/information/information.module';

@NgModule({
  declarations: [NotificationsPage],
  imports: [IonicPageModule.forChild(NotificationsPage), InformationComponentModule],
})
export class NotificationsPageModule { }