import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldPage } from './old';

@NgModule({
  declarations: [
    OldPage,
  ],
  imports: [
    IonicPageModule.forChild(OldPage),
  ],
})
export class OldPageModule {}
