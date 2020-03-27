import { createSelector } from '@ngrx/store';
import { AppState } from '../state';
import { ShoppingCartState } from './shopping-cart-state';

export const selectCartFeature = (state: AppState) => {
    return state.shoppingCartStore;
};

export const getLoadingStatus = createSelector(
    selectCartFeature,
    (state: ShoppingCartState) => state.isProcessing
);

export const getHistoryOrders = createSelector(
    selectCartFeature,
    (state: ShoppingCartState) => state.orders ? state.orders.filter(o => o.status === 1) : []
);

export const getUpcomingOrders = createSelector(
    selectCartFeature,
    (state: ShoppingCartState) => state.orders ? state.orders.filter(o => o.status === 0) : []
);