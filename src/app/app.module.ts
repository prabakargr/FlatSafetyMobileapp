import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {ProfilePage} from '../pages/profile/profile';
import {EditProfilePage} from '../pages/edit-profile/edit-profile';
import {LandingpagePage} from '../pages/landingpage/landingpage';
import {MaintenancePage} from '../pages/maintenance/maintenance';
import {NewPage}from '../pages/maintenance/new/new';
import {OldPage} from '../pages/maintenance/old/old'
import {RiseRequestPage} from '../pages/rise-request/rise-request';
import {NewRequestPage} from '../pages/rise-request/new-request/new-request';
import {OldRequestsPage} from '../pages/rise-request/old-requests/old-requests';
import {NewsPage} from '../pages/news/news';
import {NewNewsPage} from '../pages/news/new-news/new-news';
import {OldNewsPage} from '../pages/news/old-news/old-news';
import {ComplaintsPage} from '../pages/complaints/complaints';
import {NewComplaintsPage} from '../pages/complaints/new-complaints/new-complaints';
import {OldComplaintsPage}from '../pages/complaints/old-complaints/old-complaints';
import { AngularFireModule } from 'angularfire2';
import {AuthService} from '../service/auth.service';
import { AngularFireAuthModule } from '../../node_modules/angularfire2/auth';
import {FIREBASE_CONFIG} from './app.firebase.config'

import {DataService} from '../service/data.service';
import {ShareService} from '../service/share.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    EditProfilePage,
    LandingpagePage,
    MaintenancePage,
    NewPage,
    OldPage,
    RiseRequestPage,
    NewRequestPage,
    OldRequestsPage,
    NewsPage,
    NewNewsPage,
    OldNewsPage,
    ComplaintsPage,
    NewComplaintsPage,
    OldComplaintsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    EditProfilePage,
    LandingpagePage,
    MaintenancePage,
    NewPage,
    OldPage,
    RiseRequestPage,
    NewRequestPage,
    OldRequestsPage,
    NewsPage,
    NewNewsPage,
    OldNewsPage,
    ComplaintsPage,
    NewComplaintsPage,
    OldComplaintsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataService,
    ShareService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
  ]
})
export class AppModule {}
