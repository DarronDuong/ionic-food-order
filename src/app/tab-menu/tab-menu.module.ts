import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMenuPageRoutingModule } from './tab-menu-routing.module';

import { TabMenuPage } from './tab-menu.page';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMenuPageRoutingModule
  ],
  declarations: [TabMenuPage, MenuItemComponent]
})
export class TabMenuPageModule { }
