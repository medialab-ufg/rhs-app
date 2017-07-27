import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileEditModal } from './profile-edit';

@NgModule({
  declarations: [ProfileEditModal],
  imports: [IonicPageModule.forChild(ProfileEditModal)],
})
export class ProfileEditModalModule { }