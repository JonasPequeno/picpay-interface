import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabAjustesPage } from './tab-ajustes.page';

const routes: Routes = [
  {
    path: '',
    component: TabAjustesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabAjustesPageRoutingModule {}
