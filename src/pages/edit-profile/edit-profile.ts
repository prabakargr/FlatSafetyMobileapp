import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import {ShareService} from '../../service/share.service'

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  currentUser:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private shareService:ShareService) {
              this.currentUser=this.shareService.getCurrentProfile();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EditProfilePage');
    console.log(this.currentUser)
  }

}
