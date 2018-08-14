import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Nav} from 'ionic-angular';
import {NewNewsPage} from '../news/new-news/new-news';
import {OldNewsPage} from '../news/old-news/old-news';


/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav 
            ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  newNews(){
    this.nav.setRoot(NewNewsPage);
  }
  oldNews(){
    this.nav.setRoot(OldNewsPage);
  }

}
