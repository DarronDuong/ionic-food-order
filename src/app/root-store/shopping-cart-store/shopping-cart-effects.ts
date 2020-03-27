import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { Store } from '@ngrx/store';
import { RootStoreState } from '..';
import * as CartActions from './shopping-cart-actions';
import { CartService } from 'src/app/services/cart.service';
import { Order } from 'src/app/models/classes';
import { OrderService } from 'src/app/services/order.service';

@Injectable()
export class ShoppingCartEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<RootStoreState.AppState>,
        private cartService: CartService,
        private orderSerice: OrderService
        // private notificationService: NotificationService,
        // private userService: UserService
    ) { }


    payCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.payCart),
            mergeMap(action => {
                return this.cartService.payCart(action.items, action.cartPrice)
                    .pipe(
                        map((paidOrder: Order) => CartActions.payCartSuccess({ paidOrder })),
                        catchError(error => of(CartActions.payCartFailure({ error })))
                    );
            })
        )
    );

    loadAllOrders$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.loadOrders),
            mergeMap(action => {
                return this.orderSerice.getAllOrders(action.userId)
                    .pipe(
                        map((orders: Order[]) => CartActions.loadOrderSuccess({ orders })),
                        catchError(error => of(CartActions.loadOrdersFailure({ error })))
                    );
            })
        )
    );

    prepareOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.prepareOrder),
            mergeMap(action => {
                return this.orderSerice.prepareOrder(action.orderId)
                    .pipe(
                        map((order: Order) => CartActions.prepareOrderSuccess({ order })),
                        catchError(error => of(CartActions.prepareOrderFailure({ error })))
                    );
            })
        )
    );

    readyOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.readyOrder),
            mergeMap(action => {
                return this.orderSerice.readyOrder(action.orderId)
                    .pipe(
                        map((order: Order) => CartActions.readyOrderSuccess({ order })),
                        catchError(error => of(CartActions.readyOrderFailure({ error })))
                    );
            })
        )
    );

    deliverOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.deliverOrder),
            mergeMap(action => {
                return this.orderSerice.deliverOrder(action.orderId)
                    .pipe(
                        map((order: Order) => CartActions.deliverOrderSuccess({ order })),
                        catchError(error => of(CartActions.deliverOrderFailure({ error })))
                    );
            })
        )
    );

    completeOrder$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.completeOrder),
            mergeMap(action => {
                return this.orderSerice.completeOrder(action.orderId)
                    .pipe(
                        map((order: Order) => CartActions.completeOrderSuccess({ order })),
                        catchError(error => of(CartActions.completeOrderFailure({ error })))
                    );
            })
        )
    );
}