import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabHomePageRoutingModule } from './tab-home-routing.module';

import { TabHomePage } from './tab-home.page';
import { CardActivityComponent } from '../../components/card-activity/card-activity.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabHomePageRoutingModule,
  ],
  declarations: [TabHomePage, CardActivityComponent],
  entryComponents: []
})
export class TabHomePageModule { }
