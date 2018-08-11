import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {LandingpagePage} from '../landingpage/landingpage';
import {ProfilePage}from '../profile/profile'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage:any
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController) { }

  openPage(page){
  switch(page){
  case 'dashboard':
  this.nav.setRoot(LandingpagePage);
  break;

  case 'profile':
  this.nav.setRoot(ProfilePage);
  break;
  default:
  this.nav.setRoot(LandingpagePage);
  break;
}
}
  ionViewDidLoad(){
    this.rootPage = LandingpagePage;
   }
}
