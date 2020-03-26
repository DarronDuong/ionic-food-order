import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMorePage } from './tab-more.page';

const routes: Routes = [
  {
    path: '',
    component: TabMorePage
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },
  {
    path: 'credit-card-details',
    loadChildren: () => import('./pages/credit-card-details/credit-card-details.module').then( m => m.CreditCardDetailsPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMorePageRoutingModule { }
