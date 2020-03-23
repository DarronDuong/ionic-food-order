import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMorePage } from './tab-more.page';

const routes: Routes = [
  {
    path: '',
    component: TabMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMorePageRoutingModule {}
