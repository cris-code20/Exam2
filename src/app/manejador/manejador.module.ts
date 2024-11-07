import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManejadorPageRoutingModule } from './manejador-routing.module';

import { ManejadorPage } from './manejador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManejadorPageRoutingModule
  ],
  declarations: [ManejadorPage]
})
export class ManejadorPageModule {}
