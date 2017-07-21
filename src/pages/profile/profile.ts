import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ProfileEditModal } from './../profile-edit/profile-edit';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
  }

  openEditProfileModal(){
    // Passar um objeto com dados atuais do usuário como segundo parâmetro do modalCtrl.create.
    let profileModal = this.modalCtrl.create(ProfileEditModal);
    profileModal.onDidDismiss(data => {
      // Tratar dados do usuário passados pelo modal.
    });
    profileModal.present();
  }
  

}
