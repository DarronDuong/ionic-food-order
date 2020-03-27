import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { MenuStoreModule, ShoppingCartStoreModule } from '.';
import { UserStoreModule } from './user-store/user-store.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    //import modules for setting up ngRx
    // StoreModule.forRoot({ router: routerReducer }),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: "Scholarship Admin",
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),

    // import all feature store module below
    MenuStoreModule,
    ShoppingCartStoreModule,
    UserStoreModule,
  ]
})
export class RootStoreModule { }
