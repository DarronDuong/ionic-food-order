import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap, withLatestFrom, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { MenuService } from 'src/app/services/menu.service';
import { Store } from '@ngrx/store';
import { RootStoreState } from '..';
import * as MenuActions from './menu-actions';
import { MenuCategory, MenuItem, ItemIngredient } from 'src/app/models/classes';

@Injectable()
export class MenuStoreEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<RootStoreState.AppState>,
        private menuService: MenuService,
        // private notificationService: NotificationService,
        // private userService: UserService
    ) { }


    loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.loadCategories),
            mergeMap(action => {
                return this.menuService.getAllCategories()
                    .pipe(
                        map((categories: MenuCategory[]) => MenuActions.loadCategoriesSuccess({ categories })),
                        catchError(error => of(MenuActions.loadCategoriesFailure({ error })))
                    );
            })
        )
    );

    loadMenuItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.loadItems),
            mergeMap(action => {
                return this.menuService.getAllMenuItems()
                    .pipe(
                        map((items: MenuItem[]) => MenuActions.loadItemsSuccess({ items })),
                        catchError(error => of(MenuActions.loadItemsFailure({ error })))
                    );
            })
        )
    );

    loadPopularItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.loadPopularItems),
            mergeMap(action => {
                return this.menuService.getMostPopular()
                    .pipe(
                        map((items: MenuItem[]) => MenuActions.loadPopularItemsSuccess({ items })),
                        catchError(error => of(MenuActions.loadPopularItemsFailure({ error })))
                    );
            })
        )
    );

    loadIngredients$ = createEffect(() =>
        this.actions$.pipe(
            ofType(MenuActions.loadIngredients),
            mergeMap(action => {
                return this.menuService.getIngredients()
                    .pipe(
                        map((ingredients: ItemIngredient[]) => MenuActions.loadIngredientsSuccess({ ingredients })),
                        catchError(error => of(MenuActions.loadIngredientsFailure({ error })))
                    );
            })
        )
    );
}