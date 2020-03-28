import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';
import { MenuCategory } from '../models/classes';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ModalController, IonRouterOutlet } from '@ionic/angular';
import { RootStoreState, CartStoreSelectors } from '../root-store';
import { Store } from '@ngrx/store';
import { CheckoutModal } from '../shared/modals/checkout-modal/checkout-modal.component';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage implements OnInit {

  categories$: Observable<MenuCategory[]>;
  showCart: boolean = false;
  cartPrice: number = 0;

  // cartPrice$: Observable<number>;
  constructor(
    private store$: Store<RootStoreState.AppState>,
    private menuService: MenuService,
    public cartService: CartService,
    private router: Router,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) { }

  ngOnInit() {

    this.store$.select(CartStoreSelectors.getCartTotalPrice).subscribe(x => {
      this.cartPrice = x;
    });
    // this.cartService.cartSubject.subscribe((cart: ShoppingCart) => {
    //   this.showCart = cart.cartItems.length > 0;
    //   this.cartPrice = cart.cartPrice;
    // });

    this.categories$ = this.menuService.getAllCategories();
  }

  async goToCheckout() {

    const modal = await this.modalController.create({
      component: CheckoutModal,
      componentProps: {

      },
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });

    return await modal.present();


    // this.router.navigate(['checkout']);
  }
}
