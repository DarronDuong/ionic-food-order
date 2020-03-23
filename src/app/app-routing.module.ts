import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab-home',
    loadChildren: () => import('./tab-home/tab-home.module').then( m => m.TabHomePageModule)
  },
  {
    path: 'tab-menu',
    loadChildren: () => import('./tab-menu/tab-menu.module').then( m => m.TabMenuPageModule)
  },
  {
    path: 'tab-order',
    loadChildren: () => import('./tab-order/tab-order.module').then( m => m.TabOrderPageModule)
  },
  {
    path: 'tab-more',
    loadChildren: () => import('./tab-more/tab-more.module').then( m => m.TabMorePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
