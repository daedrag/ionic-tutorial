import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { OrganisationsPage } from './organisations';

@NgModule({
  declarations: [
    OrganisationsPage,
  ],
  imports: [
    IonicModule.forRoot(OrganisationsPage),
  ],
  exports: [
    OrganisationsPage
  ]
})
export class OrganisationsModule {}
