import { Injectable } from '@angular/core';
import { ShoppingCart, CartItem, Order, OrderStatus } from '../models/classes';
import { Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // cartSubject = new Subject<ShoppingCart>();
  private existingCart: ShoppingCart = new ShoppingCart();

  constructor() { }

  addToCart(item: CartItem) {
    // this.existingCart.cartItems.push(item);
    // this.cartSubject.next(this.existingCart);
  }

  getCart() {
    return of(this.existingCart);
  }

  clearCart() {
    this.existingCart = new ShoppingCart();
  }

  payCart(cartItems: CartItem[], cartPrice: number, deliveryPrice: number = 0) {
    const order = new Order();
    order.orderId = 999;
    order.cartItems = cartItems;
    order.cartPrice = cartPrice;
    order.createdOn = new Date();
    order.modifiedOn = new Date();
    order.status = 0; // INCOMPLETE

    return of(order);
  }
}
