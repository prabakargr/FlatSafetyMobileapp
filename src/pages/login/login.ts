import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {HomePage} from '../home/home'
import {RegisterPage} from '../register/register';
import {LandingpagePage} from '../landingpage/landingpage';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register(){
    this.nav.setRoot(RegisterPage);
  }
  dashboard(){
    this.nav.setRoot(HomePage);
  }

}
