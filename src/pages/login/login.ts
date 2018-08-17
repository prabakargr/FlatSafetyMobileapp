import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {HomePage} from '../home/home'
import {RegisterPage} from '../register/register';
import {LandingpagePage} from '../landingpage/landingpage';
import { User } from '../../module/user';
import {AngularFireAuth} from 'angularfire2/auth'

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
 
   user={} as User

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav,
              private afauth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.nav.setRoot(RegisterPage);
  }
  async login(user){
    try{
   const result = this.afauth.auth.signInWithEmailAndPassword(user.email,user.password)
   console.log(result);
   if(result){
    this.nav.setRoot(HomePage);
   }
    }
    catch(e){
      console.log(e)
    }
  }

}
