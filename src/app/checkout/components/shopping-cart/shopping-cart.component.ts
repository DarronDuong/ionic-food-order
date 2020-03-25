import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart, CartItem } from 'src/app/models/classes';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  // tslint:disable-next-line: member-ordering
  @Input() cart = new ShoppingCart();

  constructor() { }

  ngOnInit() { }
  
  decrement(cartItem: CartItem) {
    if (cartItem.amount === 1) return;
    cartItem.amount--;
  }

  increment(cartItem: CartItem) {
    cartItem.amount++;
  }

  removeCartItem(cartItem: CartItem){
    this.cart.cartItems = this.cart.cartItems.filter(i => i.item.id !== cartItem.item.id);
  }
}
