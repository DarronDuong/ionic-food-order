import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ShoppingCart } from '../models/classes';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  cart$: Observable<ShoppingCart>;
  totalPrice$: Observable<number>;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.cart$ = this.cartService.getCart();
    this.totalPrice$ = this.cartService.getCart()
      .pipe(map(cart => cart.cartPrice))
  }

  pay() {

  }
}
