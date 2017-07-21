import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditModal {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
  }

  dismiss() {
    // Passar os dados salvos do usuário na função dismiss
    this.viewCtrl.dismiss();
  }

}
