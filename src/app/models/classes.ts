export class MenuItem {
    id: number = 0
    categoryId: number = 0
    title: string = ''
    imageUrl: string = ''
    amount?: number = 0
    price: number = 0
    ingredients: number[] = []
}

export class ItemIngredient {
    ingredientId: number = 0
    title: string = ''
    category: IngredientCategory
    price: number = 0
    isChecked: boolean = false
}

export enum IngredientCategory {
    SOY_MEAT = 1,
    TOFU = 2,
    VEGETABLE = 3,
    NOODLES = 4
}

export class ShoppingCart {
    cartItems: CartItem[] = [];
    get cartPrice() {
        let totalPrice = 0;
        this.cartItems.forEach(i => totalPrice += i.itemPrice);
        return totalPrice;
    }
}

export class CartItem {
    item: MenuItem = new MenuItem()
    amount: number = 0
    get itemPrice() {
        return this.item.price * this.amount;
    }
}