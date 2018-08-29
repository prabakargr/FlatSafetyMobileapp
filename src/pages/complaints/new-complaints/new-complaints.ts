import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {ComplaintsPage} from '../complaints';
import {DataService} from '../../../service/data.service'
import {ShareService} from '../../../service/share.service';
import { Complient } from '../../../module/complient';

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
  
  currentProfile:any;
  complient={} as Complient
  complientWithProfile:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private dataservice:DataService, 
              private alertCtrl:AlertController,
              private shareService:ShareService) {
              this.currentProfile=this.shareService.getCurrentProfile();  
  }

    alert(message){
    this.alertCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewComplaintsPage');
  }
  backTocomplaints(){
    this.nav.setRoot(ComplaintsPage);
  }
  createComplient(){
    this.complientWithProfile=Object.assign({},this.currentProfile,this.complient);
    this.dataservice.createNewComplient(this.complientWithProfile).subscribe(res=>{
      console.log(res);
      this.alert('Complient Created');
      this.nav.setRoot(ComplaintsPage);
    })
  }

}
