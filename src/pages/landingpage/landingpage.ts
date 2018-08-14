import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {MaintenancePage} from '../maintenance/maintenance' 
import {RiseRequestPage} from '../rise-request/rise-request'
import {NewsPage} from '../news/news';
import {ComplaintsPage} from '../complaints/complaints';

/**
 * Generated class for the LandingpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landingpage',
  templateUrl: 'landingpage.html',
})
export class LandingpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingpagePage');
  }
  maintenace(){
    this.nav.setRoot(MaintenancePage);
  }
  riseRequest(){
    this.nav.setRoot(RiseRequestPage);
  }
  newsUpdates(){
    this.nav.setRoot(NewsPage);
  }
  complaints(){
    this.nav.setRoot(ComplaintsPage);
  }

}
