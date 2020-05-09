import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabNotificacaoPageRoutingModule } from './tab-notificacao-routing.module';

import { TabNotificacaoPage } from './tab-notificacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabNotificacaoPageRoutingModule
  ],
  declarations: [TabNotificacaoPage]
})
export class TabNotificacaoPageModule {}
