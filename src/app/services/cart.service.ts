import { Injectable, EventEmitter } from '@angular/core';
import { MenuItem, ShoppingCart, CartItem } from '../models/classes';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartSubject = new Subject<ShoppingCart>();
  existingCart: ShoppingCart = new ShoppingCart();

  constructor() { }

  addToCart(item: CartItem) {
    this.existingCart.cartItems.push(item);
    this.cartSubject.next(this.existingCart);
  }
}
