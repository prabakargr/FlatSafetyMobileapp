import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {ComplaintsPage} from '../complaints';

/**
 * Generated class for the NewComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-complaints',
  templateUrl: 'new-complaints.html',
})
export class NewComplaintsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav
             ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewComplaintsPage');
  }
  complaints(){
    this.nav.setRoot(ComplaintsPage);
  }

}
