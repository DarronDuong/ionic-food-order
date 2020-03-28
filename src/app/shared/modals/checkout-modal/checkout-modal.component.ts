import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingCart, CartItem } from 'src/app/models/classes';
import { CartService } from 'src/app/services/cart.service';
import { map, tap, switchMap } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { RootStoreState, CartStoreSelectors, CartStoreActions } from 'src/app/root-store';
import { deepCopy } from 'src/app/utils/utils-functions';

@Component({
  selector: 'app-checkout-modal',
  templateUrl: './checkout-modal.component.html',
  styleUrls: ['./checkout-modal.component.scss'],
})
export class CheckoutModal implements OnInit {

  cartItems$: Observable<CartItem[]>;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  constructor(
    private store$: Store<RootStoreState.AppState>,
    private cartService: CartService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // this.cartItems$ = this.store$.select(CartStoreSelectors.getCartItems).pipe();
    this.cartItems$ = this.store$.select(CartStoreSelectors.getCartItems)
      .pipe(
        map(items => {
          this.cartItems = items;
          let cart = new ShoppingCart();
          cart.cartItems = items;
          this.totalPrice = cart.cartPrice
          return items;
        })
      )
  }

  pay() {
    this.store$.dispatch(CartStoreActions.payCart({ items: this.cartItems, cartPrice: this.totalPrice }));
  }

  onValueChange(cartItems: CartItem[]) {
    if (!cartItems) return;
    this.store$.dispatch(CartStoreActions.updateCart({ items: cartItems }));
  }

  clearCart() {
    this.store$.dispatch(CartStoreActions.clearCart());
  }

  closeCheckOut() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
