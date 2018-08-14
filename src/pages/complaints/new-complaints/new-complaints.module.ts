import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewComplaintsPage } from './new-complaints';

@NgModule({
  declarations: [
    NewComplaintsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewComplaintsPage),
  ],
})
export class NewComplaintsPageModule {}
