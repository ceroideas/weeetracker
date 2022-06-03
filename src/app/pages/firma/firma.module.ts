import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirmaPage } from './firma.page';
import { Angular2SignaturepadModule } from 'angular2-signaturepad';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Angular2SignaturepadModule,
    IonicModule
  ],
  declarations: [FirmaPage]
})
export class FirmaPageModule {}
