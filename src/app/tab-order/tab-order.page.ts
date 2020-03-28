import { Component, OnInit } from '@angular/core';
import { RootStoreState, CartStoreSelectors, CartStoreActions } from '../root-store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Order } from '../models/classes';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab-order',
  templateUrl: './tab-order.page.html',
  styleUrls: ['./tab-order.page.scss'],
})
export class TabOrderPage implements OnInit {

  upcomingOrder$: Observable<Order>;

  constructor(
    private store$: Store<RootStoreState.AppState>
  ) { }

  ngOnInit() {
    this.store$.dispatch(CartStoreActions.loadOrders({ userId: 99 }));
    this.upcomingOrder$ = this.store$.select(CartStoreSelectors.getUpcomingOrders)
      .pipe(map(orders => {
        if (orders) {
          return orders[0]
        }
      }));
  }

  doRefresh(event) {
    return;
  }
}
