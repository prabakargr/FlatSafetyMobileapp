import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {HomePage} from '../home/home'
import {RegisterPage} from '../register/register';
import {LandingpagePage} from '../landingpage/landingpage';
import { User } from '../../module/user';
import {AngularFireAuth} from 'angularfire2/auth'
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ShareService} from '../../service/share.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
   user={} as User;
   userId={
     uid:''
   }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private afauth:AngularFireAuth,
              private alertCtrl:AlertController,
              private shareService:ShareService) {
  }

  ionViewDidLoad() { }
  alert(message){
     this.alertCtrl.create({
       title:'Info',
       subTitle:message,
       buttons:['OK']
     }).present()
  }
  register(){
    this.nav.setRoot(RegisterPage);
  }
  login(user){
    this.afauth.auth.signInWithEmailAndPassword(user.email,user.password)
    .then(data=>{
      // console.log('got some data',this.afauth.auth.currentUser);
      this.alert('Success! You\'re logged in'+"<br>"+this.afauth.auth.currentUser.email);
      // console.log(this.afauth.auth.currentUser.uid)
      console.log(data);
      this.userId.uid=this.afauth.auth.currentUser.uid;
      this.shareService.setUser(this.userId)
      
      this.nav.setRoot(HomePage);
    })
    .catch(error=>{
      // console.log('got an error',error)
      this.alert(error.message);
    });
    console.log('would sign in with',user.email,user.password);
  }
  // async login(user){
  //   try{
  //  const result = this.afauth.auth.signInWithEmailAndPassword(user.email,user.password)
  //  console.log(result);
  //  if(result){
  //   this.nav.setRoot(HomePage);
  //  }
  //   }
  //   catch(e){
  //     console.log(e)
  //   }
  // }

}
