import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldComplaintsPage } from './old-complaints';

@NgModule({
  declarations: [
    OldComplaintsPage,
  ],
  imports: [
    IonicPageModule.forChild(OldComplaintsPage),
  ],
})
export class OldComplaintsPageModule {}
