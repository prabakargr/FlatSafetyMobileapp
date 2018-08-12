import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular'
import {NewRequestPage} from './new-request/new-request' 
import {OldRequestsPage} from './old-requests/old-requests'
/**
 * Generated class for the RiseRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rise-request',
  templateUrl: 'rise-request.html',
})
export class RiseRequestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RiseRequestPage');
  }
  newRequest(){
    this.nav.setRoot(NewRequestPage);
  }
  oldRequests(){
    this.nav.setRoot(OldRequestsPage);
  }

}
