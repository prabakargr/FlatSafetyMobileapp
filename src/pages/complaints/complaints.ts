import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {NewComplaintsPage} from './new-complaints/new-complaints';
import {OldComplaintsPage} from './old-complaints/old-complaints';

/**
 * Generated class for the ComplaintsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav 
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComplaintsPage');
  }
  newComplaint(){
    this.nav.setRoot(NewComplaintsPage)
  }
  oldComplaints(){
    this.nav.setRoot(OldComplaintsPage);
  }

}
