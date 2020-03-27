import { createAction, props } from '@ngrx/store';
import { MenuCategory, MenuItem, ItemIngredient } from 'src/app/models/classes';

export enum MenuActionTypes {

    CAT_REQUEST = '[Menu] Load Categories',
    CAT_SUCCESS = '[Menu] Load Categories Success',
    CAT_FAILURE = '[Menu] Load Categories Failure',

    ITEM_REQUEST = '[Menu] Load Items',
    ITEM_SUCCESS = '[Menu] Load Items Success',
    ITEM_FAILURE = '[Menu] Load Items Failure',

    POPULAR_ITEM_REQUEST = '[Menu] Load Popular Items',
    POPULAR_ITEM_SUCCESS = '[Menu] Load Popular Items Success',
    POPULAR_ITEM_FAILURE = '[Menu] Load Popular Items Failure',

    INGREDIENTS_REQUEST = '[Menu] Load Ingredients',
    INGREDIENTS_SUCCESS = '[Menu] Load Ingredients Success',
    INGREDIENTS_FAILURE = '[Menu] Load Ingredients Failure',
}

export const loadCategories = createAction(
    MenuActionTypes.CAT_REQUEST,
    props<{ clientId: number }>()
)

export const loadCategoriesSuccess = createAction(
    MenuActionTypes.CAT_SUCCESS,
    props<{ categories: MenuCategory[] }>()
)

export const loadCategoriesFailure = createAction(
    MenuActionTypes.CAT_FAILURE,
    props<{ error: string }>()
)

export const loadItems = createAction(
    MenuActionTypes.ITEM_REQUEST,
    props<{ clientId: number }>()
)

export const loadItemsSuccess = createAction(
    MenuActionTypes.ITEM_SUCCESS,
    props<{ items: MenuItem[] }>()
)

export const loadItemsFailure = createAction(
    MenuActionTypes.ITEM_FAILURE,
    props<{ error: string }>()
)

export const loadPopularItems = createAction(
    MenuActionTypes.POPULAR_ITEM_REQUEST,
    props<{ clientId: number }>()
)

export const loadPopularItemsSuccess = createAction(
    MenuActionTypes.POPULAR_ITEM_SUCCESS,
    props<{ items: MenuItem[] }>()
)

export const loadPopularItemsFailure = createAction(
    MenuActionTypes.POPULAR_ITEM_FAILURE,
    props<{ error: string }>()
)

export const loadIngredients = createAction(
    MenuActionTypes.INGREDIENTS_REQUEST,
    props<{ clientId: number }>()
)

export const loadIngredientsSuccess = createAction(
    MenuActionTypes.INGREDIENTS_SUCCESS,
    props<{ ingredients: ItemIngredient[] }>()
)

export const loadIngredientsFailure = createAction(
    MenuActionTypes.INGREDIENTS_FAILURE,
    props<{ error: string }>()
)