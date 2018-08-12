import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {RiseRequestPage} from '../rise-request';

/**
 * Generated class for the OldRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-old-requests',
  templateUrl: 'old-requests.html',
})
export class OldRequestsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldRequestsPage');
  }
  request(){
    this.nav.setRoot(RiseRequestPage);
  }

}
