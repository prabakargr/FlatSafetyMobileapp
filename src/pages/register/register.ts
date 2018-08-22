import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import {LoginPage} from '../login/login';
import { User } from '../../../node_modules/firebase';
import {AngularFireAuth} from 'angularfire2/auth'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user={} as User

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public nav:Nav, 
              private afauth:AngularFireAuth,
              private alertCtrl:AlertController) {
  }

  alert(message){
    this.alertCtrl.create({
      title:'Info',
      subTitle:message,
      buttons:['OK']
    }).present()
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
//    async register(user){
//      try{
//       const result=await this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password)
//       console.log(result);
//      }
//      catch(e){
//       console.error(e);
//      }
// }
register(user){
  this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password)
  .then(data=>{
    console.log('got data',data)
    this.alert('Registered !')
    this.nav.setRoot(LoginPage);
  })
  .catch(error=>{
    console.log('got an error',error);
    this.alert(error.message);
  });
  console.log('would register user with',user.email,user.password)
}
login(){
  this.nav.setRoot(LoginPage);
}

}
