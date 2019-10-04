import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListasPage } from './listas.page';
import { PopOverMenuComponent } from '../pop-over-menu/pop-over-menu.component';

const routes: Routes = [
  {
    path: '',
    component: ListasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[PopOverMenuComponent],
  declarations: [ListasPage,PopOverMenuComponent]
})
export class ListasPageModule {}
