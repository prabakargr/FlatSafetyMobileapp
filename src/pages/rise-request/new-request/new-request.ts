import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {RiseRequestPage} from '../rise-request';

/**
 * Generated class for the NewRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-request',
  templateUrl: 'new-request.html',
})
export class NewRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
  }
  request(){
    this.nav.setRoot(RiseRequestPage);
  }

}
