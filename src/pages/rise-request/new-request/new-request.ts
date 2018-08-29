import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {RiseRequestPage} from '../rise-request';
import { RiseRequest } from '../../../module/riseRequest';
import {ShareService} from '../../../service/share.service';
import {DataService} from '../../../service/data.service';

/**
 * Generated class for the NewRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-request',
  templateUrl: 'new-request.html',
})
export class NewRequestPage {

  riseRequest={} as RiseRequest
  currentProfile:any;
  riseReqWithProfile:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private altCtrl:AlertController,
              private dataservice:DataService,
              private shareService:ShareService) {
              this.currentProfile=this.shareService.getCurrentProfile() ;
              
  }

  alert(message){
    this.altCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewRequestPage');
  }
  backTorequest(){
    this.nav.setRoot(RiseRequestPage);
  }
  createRequest(){
    this.riseReqWithProfile=Object.assign({},this.currentProfile,this.riseRequest);
    this.dataservice.createNewRiseRequest(this.riseReqWithProfile).subscribe(res=>{
      console.log(res);
      this.alert("Your Request Created");
      this.nav.setRoot(RiseRequestPage);
    })
  }

}
