import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabCarteiraPage } from './tab-carteira.page';

const routes: Routes = [
  {
    path: '',
    component: TabCarteiraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabCarteiraPageRoutingModule {}
