import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCart, CartItem } from 'src/app/models/classes';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  // tslint:disable-next-line: member-ordering
  // @Input() cart = new ShoppingCart();
  @Input() cartItems: CartItem[] = [];

  @Output() clearCartClick = new EventEmitter();
  @Output() valueChange = new EventEmitter<CartItem[]>();

  constructor() { }

  ngOnInit() { }

  decrement(cartItem: CartItem) {
    if (cartItem.amount === 1) return;
    cartItem.amount--;
    this.onChange();
  }

  increment(cartItem: CartItem) {
    cartItem.amount++;
    this.onChange();
  }

  removeCartItem(cartItem: CartItem) {
    // this.cart.cartItems = this.cart.cartItems.filter(i => i.item.id !== cartItem.item.id);
    this.cartItems = this.cartItems.filter(i => i.item.id !== cartItem.item.id);
    this.onChange();
  }

  clearCart() {
    this.cartItems = [];
    this.onChange();
    this.clearCartClick.emit();
  }

  onChange() {
    this.valueChange.emit(this.cartItems);
  }
}
