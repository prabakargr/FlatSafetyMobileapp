import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldRequestsPage } from './old-requests';

@NgModule({
  declarations: [
    OldRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(OldRequestsPage),
  ],
})
export class OldRequestsPageModule {}
