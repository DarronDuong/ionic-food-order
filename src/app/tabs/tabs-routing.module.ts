import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AppResolver } from '../services/resolvers/app-resolver.service';
import { OrderResolver } from '../services/resolvers/order-resolver.service';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-home/tab-home.module').then(m => m.TabHomePageModule)
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-admin/tab-admin.module').then(m => m.TabAdminPageModule)
          }
        ]
      },
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-menu/tab-menu.module').then(m => m.TabMenuPageModule)
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-order/tab-order.module').then(m => m.TabOrderPageModule)
          }
        ],
        resolve: [OrderResolver]
      },
      {
        path: 'more',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-more/tab-more.module').then(m => m.TabMorePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ],
    resolve: [AppResolver]
  },

  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
