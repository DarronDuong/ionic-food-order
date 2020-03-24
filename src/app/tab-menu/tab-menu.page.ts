import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';
import { ShoppingCart } from '../models/classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.page.html',
  styleUrls: ['./tab-menu.page.scss'],
})
export class TabMenuPage implements OnInit {

  categories: any[] = [];
  showCart: boolean = false;
  cartPrice: number = 0;

  constructor(
    private menuService: MenuService,
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categories = this.menuService.getMenuCategories();

    this.cartService.cartSubject.subscribe((cart: ShoppingCart) => {
      this.showCart = cart.cartItems.length > 0;
      this.cartPrice = cart.cartPrice;
    })
  }

  checkout(){
    this.router.navigate(['checkout']);
  }
}
