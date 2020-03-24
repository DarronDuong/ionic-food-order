import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemIngredient, MenuItem, CartItem } from 'src/app/models/classes';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {

  loadedItem: MenuItem = new MenuItem();
  itemCount: number = 1;
  ingredients: ItemIngredient[] = [];
  itemPrice: number = 0;

  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('categoryId')) {
        return;
      }
      const itemId = +paramMap.get('itemId');
      this.loadedItem = this.menuService.getMenuItem(itemId);
      this.ingredients = this.menuService.getIngredients(this.loadedItem.ingredients);
      this.itemPrice = this.loadedItem.price;
    })
  }

  decrement() {
    if (this.itemCount > 1) {
      this.itemCount--;
    }
  }

  increment() {
    this.itemCount++;
  }

  toggleIngredient(selectedIngredient: ItemIngredient) {
    if (!selectedIngredient.isChecked) {
      this.itemPrice = this.itemPrice + selectedIngredient.price;
    } else {
      this.itemPrice = this.itemPrice - selectedIngredient.price;
    }
  }

  addToCart() {
    const cartItem = new CartItem();
    cartItem.item = this.loadedItem;
    cartItem.amount = this.itemCount;
    this.cartService.addToCart(cartItem);
    this.router.navigate(['tabs/menu']);
  }
}
