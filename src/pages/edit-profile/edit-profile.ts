import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Nav,AlertController } from 'ionic-angular';
import {ShareService} from '../../service/share.service'
import {DataService} from '../../service/data.service';

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  currentUser:any;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private shareService:ShareService,
              private dataService:DataService,
              private alertCtrl:AlertController) {
              this.currentUser=this.shareService.getCurrentProfile();
  }

  alert(message){
    this.alertCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }

  ionViewDidLoad() { }
  updateProfile(){
    this.dataService.updateProfile(this.currentUser).subscribe(res=>{
      this.alert('Your profile Successfully'+"<br>"+"Updated");

    })
  }

}
