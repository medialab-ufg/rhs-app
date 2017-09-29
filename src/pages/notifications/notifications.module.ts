import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsPage } from './notifications';

import { InnerHtmlNotificationPipe } from './../../pipes/inner-html-notification/inner-html-notification';
import { InnerHtmlImagePipe } from './../../pipes/inner-html-image/inner-html-image';

import { InformationComponentModule } from './../../components/information/information.module';

@NgModule({
  declarations: [NotificationsPage, InnerHtmlNotificationPipe, InnerHtmlImagePipe],
  imports: [IonicPageModule.forChild(NotificationsPage), InformationComponentModule],
})
export class NotificationsPageModule { }