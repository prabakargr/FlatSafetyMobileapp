import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {LandingpagePage} from '../pages/landingpage/landingpage';
import {MaintenancePage} from '../pages/maintenance/maintenance';
import {NewPage}from '../pages/maintenance/new/new';
import {OldPage} from '../pages/maintenance/old/old'
import {RiseRequestPage} from '../pages/rise-request/rise-request';
import {NewRequestPage} from '../pages/rise-request/new-request/new-request';
import {OldRequestsPage} from '../pages/rise-request/old-requests/old-requests'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LandingpagePage,
    MaintenancePage,
    NewPage,
    OldPage,
    RiseRequestPage,
    NewRequestPage,
    OldRequestsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LandingpagePage,
    MaintenancePage,
    NewPage,
    OldPage,
    RiseRequestPage,
    NewRequestPage,
    OldRequestsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
