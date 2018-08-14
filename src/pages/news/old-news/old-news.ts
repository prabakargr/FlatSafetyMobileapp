import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {NewsPage} from '../news';

/**
 * Generated class for the OldNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-old-news',
  templateUrl: 'old-news.html',
})
export class OldNewsPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public nav:Nav
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OldNewsPage');
  }
  news(){
    this.nav.setRoot(NewsPage);
  }

}
