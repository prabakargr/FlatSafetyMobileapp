import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {ComplaintsPage} from '../complaints';

/**
 * Generated class for the OldComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-old-complaints',
  templateUrl: 'old-complaints.html',
})
export class OldComplaintsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldComplaintsPage');
  }
  complaints(){
    this.nav.setRoot(ComplaintsPage);
  }

}
