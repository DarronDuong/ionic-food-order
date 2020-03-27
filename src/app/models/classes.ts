export class MenuItem {
    id: number = 0
    categoryId: number = 0
    title: string = ''
    imageUrl: string = ''
    amount?: number = 0
    price: number = 0
    ingredients: number[] = []
    extras?: string[] = [] //set client side
    removes?: string[] = [] //set client side
}

export class ItemIngredient {
    ingredientId: number = 0
    title: string = ''
    category: IngredientCategory
    price: number = 0
    isChecked?: boolean = false
}

export class MenuCategory {
    id: number = 0
    title: string = ''
    imageUrl: string = ''
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

export class Order {
    orderId: number = 0
    orderType: OrderType = 2
    cartItems: CartItem[] = []
    cartPrice: number = 0
    deliveryPrice: number = 0
    createdOn: Date
    modifiedOn: Date
    status: OrderStatus = 0// 1: COMPLETE/ 0: INCOMPLETE(paid but not delivered)
}

export enum OrderStatus {
    PREPARING = 1,
    READY = 2,
    DELIVERING = 3,
    COMPLETE = 4
}

export enum OrderType {
    PICKUP = 1,
    DELIVERY = 2
}