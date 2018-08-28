import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {MaintenancePage} from '../maintenance';
import {DataService} from '../../../service/data.service'
import { Maintenance } from '../../../module/maintenance';
import {ShareService} from '../../../service/share.service';

/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  
  newMaintenance = {} as Maintenance;
  maintenanceWithProfile:any;
  currentProfile:any;
  alert(message){
    this.alertCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private dataservice:DataService, 
              private alertCtrl:AlertController,
              private shareService:ShareService) {
              this.currentProfile=this.shareService.getCurrentProfile();
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad NewPage');
  }
  maintenance(){
    this.nav.setRoot(MaintenancePage);
  }
  createMaintenance() {
    this.maintenanceWithProfile=Object.assign({},this.newMaintenance,this.currentProfile)
    this.dataservice.createMaintenance(this.maintenanceWithProfile).subscribe(res=>{
      // console.log(res);
      this.alert(res.message);
      this.nav.setRoot(MaintenancePage);
    })
  }

}
