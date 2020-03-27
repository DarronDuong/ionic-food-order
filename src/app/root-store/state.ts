import { MenuState } from './menu-store/menu-state';
import { ShoppingCartState } from './shopping-cart-store/shopping-cart-state';
import { UserState } from './user-store/user-state';

export interface AppState {
    menuStore: MenuState
    shoppingCartStore: ShoppingCartState
    userStore: UserState
}

export const initialState: AppState = {
    menuStore: null,
    shoppingCartStore: null,
    userStore: null
}