import { MenuCategory, MenuItem, ItemIngredient } from 'src/app/models/classes';

export interface MenuState {
    categories: MenuCategory[];
    items: MenuItem[];
    popularItems: MenuItem[];
    ingredients: ItemIngredient[];
    isLoading: boolean;
    error: string;
}