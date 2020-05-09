import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabCarteiraPageRoutingModule } from './tab-carteira-routing.module';

import { TabCarteiraPage } from './tab-carteira.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabCarteiraPageRoutingModule
  ],
  declarations: [TabCarteiraPage]
})
export class TabCarteiraPageModule {}
