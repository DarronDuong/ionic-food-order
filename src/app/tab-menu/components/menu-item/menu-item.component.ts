import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemIngredient, MenuItem, CartItem } from 'src/app/models/classes';
import { CartService } from 'src/app/services/cart.service';
import { deepCopy } from 'src/app/utils/utils-functions';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent implements OnInit {

  loadedItem: MenuItem = new MenuItem();
  itemCount: number = 1;

  extraIngredients: ItemIngredient[] = [];
  removeIngredients: ItemIngredient[] = [];

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
      this.loadedItem.extras = [];
      this.loadedItem.removes = [];
      this.extraIngredients = this.menuService.getIngredients(this.loadedItem.ingredients);
      this.removeIngredients = deepCopy(this.extraIngredients);

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

  toggleExtras(selectedIngredient: ItemIngredient) {
    if (!selectedIngredient.isChecked) {
      this.itemPrice = this.itemPrice + selectedIngredient.price;
      this.loadedItem.extras.push(selectedIngredient.title);
    } else {
      this.itemPrice = this.itemPrice - selectedIngredient.price;
      this.loadedItem.extras = this.loadedItem.extras.filter(c => c !== selectedIngredient.title);
    }
  }

  toggleRemoves(selectedIngredient: ItemIngredient) {
    if (!selectedIngredient.isChecked) {
      this.loadedItem.removes.push(selectedIngredient.title);
    } else {
      this.loadedItem.removes = this.loadedItem.removes.filter(c => c !== selectedIngredient.title);
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
