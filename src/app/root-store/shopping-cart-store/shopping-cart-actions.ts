import { createAction, props } from '@ngrx/store';
import { CartItem, Order } from 'src/app/models/classes';

export enum CartActionTypes {
    ADD_ITEM = '[Cart] Add Item',
    REMOVE_ITEM = '[Cart] Remove Item',
    UPDATE_AMOUNT = '[Cart] Update Amount',
    CLEAR_CART = '[Cart] Clear',

    PAY_CART = '[Cart] Pay',
    PAY_CART_SUCCESS = '[Cart] Pay Success',
    PAY_CART_FAILURE = '[Cart] Pay Failure',

    ORDERS_REQUEST = '[Order] Load Orders',
    ORDERS_SUCCESS = '[Order] Load Orders Success',
    ORDERS_FAILURE = '[Order] Load Orders Failure',

    PREPARE_ORDER = '[Order] Prepare',
    PREPARE_ORDER_SUCCESS = '[Order] Prepare Success',
    PREPARE_ORDER_FAILURE = '[Order] Prepare Failure',

    DELIVER_ORDER = '[Order] Deliver',
    DELIVER_ORDER_SUCCESS = '[Order] Deliver Success',
    DELIVER_ORDER_FAILURE = '[Order] Deliver Failure',

    ORDER_READY = '[Order] Ready',
    ORDER_READY_SUCCESS = '[Order] Ready Success',
    ORDER_READY_FAILURE = '[Order] Ready Failure',

    COMPLETE_ORDER = '[Order] Complete',
    COMPLETE_ORDER_SUCCESS = '[Order] Complete Success',
    COMPLETE_ORDER_FAILURE = '[Order] Complete Failure',
}

export const addItem = createAction(
    CartActionTypes.ADD_ITEM,
    props<{ item: CartItem }>()
);

export const removeItem = createAction(
    CartActionTypes.REMOVE_ITEM,
    props<{ itemId: number }>()
);

export const updateAmount = createAction(
    CartActionTypes.UPDATE_AMOUNT,
    props<{ item: CartItem }>()
);

export const loadOrders = createAction(
    CartActionTypes.ORDERS_REQUEST,
    props<{ userId: number }>()
);

export const loadOrderSuccess = createAction(
    CartActionTypes.ORDERS_SUCCESS,
    props<{ orders: Order[] }>()
);

export const loadOrdersFailure = createAction(
    CartActionTypes.ORDERS_FAILURE,
    props<{ error: string }>()
);

export const payCart = createAction(
    CartActionTypes.PAY_CART,
    props<{ items: CartItem[], cartPrice: number }>()
);

export const payCartSuccess = createAction(
    CartActionTypes.PAY_CART_SUCCESS,
    props<{ paidOrder: Order }>()
);

export const payCartFailure = createAction(
    CartActionTypes.PAY_CART_FAILURE,
    props<{ error: string }>()
);

export const clearCart = createAction(
    CartActionTypes.CLEAR_CART
);


//#region PROCESSING ORDER

//#region PREPARE
export const prepareOrder = createAction(
    CartActionTypes.PREPARE_ORDER,
    props<{ orderId: number }>()
);

export const prepareOrderSuccess = createAction(
    CartActionTypes.PREPARE_ORDER_SUCCESS,
    props<{ order: Order }>()
);

export const prepareOrderFailure = createAction(
    CartActionTypes.PREPARE_ORDER_FAILURE,
    props<{ error: string }>()
);
//#endregion

//#region READY
export const readyOrder = createAction(
    CartActionTypes.ORDER_READY,
    props<{ orderId: number }>()
);

export const readyOrderSuccess = createAction(
    CartActionTypes.ORDER_READY_SUCCESS,
    props<{ order: Order }>()
);

export const readyOrderFailure = createAction(
    CartActionTypes.ORDER_READY_FAILURE,
    props<{ error: string }>()
);
//#endregion

//#region DELIVER
export const deliverOrder = createAction(
    CartActionTypes.DELIVER_ORDER,
    props<{ orderId: number }>()
);

export const deliverOrderSuccess = createAction(
    CartActionTypes.DELIVER_ORDER_SUCCESS,
    props<{ order: Order }>()
);

export const deliverOrderFailure = createAction(
    CartActionTypes.DELIVER_ORDER_FAILURE,
    props<{ error: string }>()
);
//#endregion

//#region COMPLETE
export const completeOrder = createAction(
    CartActionTypes.COMPLETE_ORDER,
    props<{ orderId: number }>()
);

export const completeOrderSuccess = createAction(
    CartActionTypes.COMPLETE_ORDER_SUCCESS,
    props<{ order: Order }>()
);

export const completeOrderFailure = createAction(
    CartActionTypes.COMPLETE_ORDER_FAILURE,
    props<{ error: string }>()
);
//#endregion

//#endregion