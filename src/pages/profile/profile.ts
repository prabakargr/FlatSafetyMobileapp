import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav } from 'ionic-angular';
import {DataService} from '../../service/data.service';
import {ShareService} from '../../service/share.service'
import { LandingpagePage } from '../landingpage/landingpage';
import { HomePage } from '../home/home';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  ProfileDetails:any;
  currentUser:any;
  profile={};
  userId:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dataservice:DataService,
              public nav:Nav,
              private shareService:ShareService) {
              this.userId=this.shareService.getUser()
              this.currentUser=this.shareService.getCurrentProfile()
              console.log(this.userId)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  creatProfile(){
    this.ProfileDetails=Object.assign({},this.userId,this.profile)
    console.log(this.ProfileDetails);
    this.dataservice.createProfile(this.ProfileDetails).subscribe(res=>{
      console.log(res);
      this.nav.setRoot(HomePage)
    })
  }

}
