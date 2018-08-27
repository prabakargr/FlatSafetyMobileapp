import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {MaintenancePage} from '../maintenance/maintenance' 
import {RiseRequestPage} from '../rise-request/rise-request'
import {NewsPage} from '../news/news';
import {ComplaintsPage} from '../complaints/complaints';
import {AngularFireAuth} from 'angularfire2/auth';
import {DataService} from '../../service/data.service'
import {ShareService} from '../../service/share.service';

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
  userId={
    uid:''
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private afauth:AngularFireAuth,
              private toast:ToastController,
              private dataService:DataService,
              private shareService:ShareService) {
              this.email=afauth.auth.currentUser.email
              this.userId.uid=afauth.auth.currentUser.uid;
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
    this.dataService.findProfile(this.userId).subscribe(res=>{
      console.log(res);
      this.shareService.setCurrentProfile(res);

    })
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
