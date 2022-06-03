import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EntradasSalidasPage } from './entradas-salidas.page';
import { ComponentsModule } from '../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { VisorImgPageModule } from '../visor-img/visor-img.module';
import { VisorImgPage } from '../visor-img/visor-img.page';

const routes: Routes = [
  {
    path: '',
    component: EntradasSalidasPage
  }
];

@NgModule({
  entryComponents:[
    VisorImgPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ComponentsModule,
    VisorImgPageModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EntradasSalidasPage]
})
export class EntradasSalidasPageModule {}
