import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PuntoDeInteresPage } from './punto-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDeInteresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PuntoDeInteresPage]
})
export class PuntoDeInteresPageModule {}
