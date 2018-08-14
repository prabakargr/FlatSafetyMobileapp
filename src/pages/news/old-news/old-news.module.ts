import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OldNewsPage } from './old-news';

@NgModule({
  declarations: [
    OldNewsPage,
  ],
  imports: [
    IonicPageModule.forChild(OldNewsPage),
  ],
})
export class OldNewsPageModule {}
