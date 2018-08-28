import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {LandingpagePage} from '../landingpage/landingpage';
import {ProfilePage}from '../profile/profile'
import {EditProfilePage} from '../edit-profile/edit-profile'
import {LoginPage} from '../login/login';
import {AngularFireAuth} from 'angularfire2/auth'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage:any
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController,
              private afauth:AngularFireAuth) { }

  openPage(page){
  switch(page){
  case 'dashboard':
  this.nav.setRoot(LandingpagePage);
  break;

  case 'profile':
  this.nav.setRoot(EditProfilePage);
  break;
  // case 'logout':
  // this.nav.setRoot(LoginPage)
  default:
  this.nav.setRoot(LandingpagePage);
  break;
}
}
logout(){
   this.afauth.auth.signOut();
   this.nav.setRoot(LoginPage);
}
  ionViewDidLoad(){
    this.rootPage = LandingpagePage;
   }
}
