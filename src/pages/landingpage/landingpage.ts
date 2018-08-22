import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {MaintenancePage} from '../maintenance/maintenance' 
import {RiseRequestPage} from '../rise-request/rise-request'
import {NewsPage} from '../news/news';
import {ComplaintsPage} from '../complaints/complaints';
import {AngularFireAuth} from 'angularfire2/auth'

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

  email:String

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private afauth:AngularFireAuth,
              private toast:ToastController) {
                this.email=afauth.auth.currentUser.email
  }

  ionViewDidLoad() {
    // this.afauth.authState.subscribe(data=> {
    //   if(data.email && data.uid){
    //     this.toast.create({
    //       message:`WELCOM TO FLATSAFTY ${data.email}`,
    //       duration:3000,
    //     }).present()
    //   }
    //   else{
    //     this.toast.create({
    //       message:'could not find authendication details',
    //       duration:3000,
    //     }).present()
    //   }
     
    // })
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
