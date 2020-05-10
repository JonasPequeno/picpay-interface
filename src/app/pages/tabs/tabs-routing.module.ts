import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'tab-home', pathMatch: 'full' },
      {
        path: 'tab-home',
        loadChildren: () => import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
      },
      {
        path: 'tab-carteira',
        loadChildren: () => import('../tab-carteira/tab-carteira.module').then(m => m.TabCarteiraPageModule)
      },
      {
        path: 'tab-notificacao',
        loadChildren: () => import('../tab-notificacao/tab-notificacao.module').then(m => m.TabNotificacaoPageModule)
      },
      {
        path: 'tab-ajustes',
        loadChildren: () => import('../tab-ajustes/tab-ajustes.module').then(m => m.TabAjustesPageModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
