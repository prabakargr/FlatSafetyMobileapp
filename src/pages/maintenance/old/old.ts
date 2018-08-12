import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {MaintenancePage} from '../maintenance'

/**
 * Generated class for the OldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-old',
  templateUrl: 'old.html',
})
export class OldPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldPage');
  }
  maintenance(){
    this.nav.setRoot(MaintenancePage);
  }

}
