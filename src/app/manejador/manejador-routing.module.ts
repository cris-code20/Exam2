import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManejadorPage } from './manejador.page';

const routes: Routes = [
  {
    path: '',
    component: ManejadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManejadorPageRoutingModule {}
