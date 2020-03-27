import { MenuState } from './menu-state';
import { Action, on, createReducer } from '@ngrx/store';
import * as MenuActions from './menu-actions';

export const initialState: MenuState = {
    categories: [],
    items: [],
    popularItems: [],
    ingredients: [],
    isLoading: false,
    error: null
};

const _menuReducer = createReducer(
    initialState,
    on(MenuActions.loadCategories, (state, { clientId }) => ({
        ...state,
        isLoading: true
    })),

    on(MenuActions.loadCategoriesSuccess, (state, { categories }) => ({
        ...state,
        categories,
        isLoading: false
    })),

    on(MenuActions.loadCategoriesFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),

    on(MenuActions.loadItems, (state, { clientId }) => ({
        ...state,
        isLoading: true
    })),

    on(MenuActions.loadItemsSuccess, (state, { items }) => ({
        ...state,
        items,
        isLoading: false
    })),

    on(MenuActions.loadItemsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),

    on(MenuActions.loadPopularItems, (state, { clientId }) => ({
        ...state,
        isLoading: true
    })),

    on(MenuActions.loadPopularItemsSuccess, (state, { items }) => ({
        ...state,
        popularItems: items,
        isLoading: false
    })),

    on(MenuActions.loadPopularItemsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),

    on(MenuActions.loadPopularItems, (state, { clientId }) => ({
        ...state,
        isLoading: true
    })),

    on(MenuActions.loadPopularItemsSuccess, (state, { items }) => ({
        ...state,
        popularItems: items,
        isLoading: false
    })),

    on(MenuActions.loadPopularItemsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),

    on(MenuActions.loadIngredients, (state, { clientId }) => ({
        ...state,
        isLoading: true
    })),

    on(MenuActions.loadIngredientsSuccess, (state, { ingredients }) => ({
        ...state,
        ingredients,
        isLoading: false
    })),

    on(MenuActions.loadIngredientsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    }))
);


export function menuReducer(state: MenuState | undefined, action: Action) {
    return _menuReducer(state, action);
}
