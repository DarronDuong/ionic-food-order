import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMenuPage } from './tab-menu.page';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

const routes: Routes = [
  {
    path: '',
    component: TabMenuPage
  },
  {
    path: 'c/:categoryId',
    loadChildren: () => import('./pages/menu-category/menu-category.module').then(m => m.MenuCategoryPageModule)
  },
  {
    path: 'c/:categoryId/:itemId',
    component: MenuItemComponent
    // loadChildren: () => import('./pages/menu-category/menu-category.module').then(m => m.MenuCategoryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMenuPageRoutingModule { }
