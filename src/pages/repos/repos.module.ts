import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ReposPage } from './repos';

@NgModule({
  declarations: [
    ReposPage,
  ],
  imports: [
    IonicModule.forRoot(ReposPage),
  ],
  exports: [
    ReposPage
  ]
})
export class ReposModule {}
