import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabNotificacaoPage } from './tab-notificacao.page';

const routes: Routes = [
  {
    path: '',
    component: TabNotificacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabNotificacaoPageRoutingModule {}
