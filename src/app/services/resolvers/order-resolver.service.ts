import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as Actions from '../../root-store';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';

@Injectable({
  providedIn: 'root'
})
export class OrderResolver {

  constructor(
    private _store$: Store<RootStoreState.AppState>
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this._store$.dispatch(Actions.CartStoreActions.loadOrders({ userId: 999 }));
  }
}