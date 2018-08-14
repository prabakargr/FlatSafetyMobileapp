import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {NewsPage} from '../news';


/**
 * Generated class for the NewNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-news',
  templateUrl: 'new-news.html',
})
export class NewNewsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewNewsPage');
  }
  news(){
    this.nav.setRoot(NewsPage);
  }
  

}
