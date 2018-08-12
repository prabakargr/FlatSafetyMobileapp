import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MaintenancePage } from './maintenance';
import {NewPage} from './new/new'
// import {OldPage} from './old/old'
@NgModule({
  declarations: [
    MaintenancePage,
    NewPage,
    // OldPage
  ],
  imports: [
    IonicPageModule.forChild(MaintenancePage),
  ],
  entryComponents: [
    MaintenancePage,
    NewPage,
    // OldPage
  ]
})
export class MaintenancePageModule {}
