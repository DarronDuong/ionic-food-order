import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMorePageRoutingModule } from './tab-more-routing.module';

import { TabMorePage } from './tab-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMorePageRoutingModule
  ],
  declarations: [TabMorePage]
})
export class TabMorePageModule {}
