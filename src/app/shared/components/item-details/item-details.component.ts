import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem, ItemIngredient, CartItem } from 'src/app/models/classes';
import { ToastController } from '@ionic/angular';
import { MenuService } from 'src/app/services/menu.service';
import { deepCopy } from 'src/app/utils/utils-functions';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  itemCount: number = 1;
  itemPrice: number = 0;
  extraIngredients: ItemIngredient[] = [];
  removeIngredients: ItemIngredient[] = [];
  @Input() item: MenuItem = new MenuItem();

  // @Output() addToCartClick = new EventEmitter();
  @Output() valueChange = new EventEmitter<CartItem>();

  loadedItem: MenuItem = new MenuItem();
  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.loadedItem = this.item;
    this.itemPrice = this.loadedItem.price;
    this.loadedItem.extras = [];
    this.loadedItem.removes = [];
    this.extraIngredients = deepCopy(this.menuService.getItemIngredients(this.loadedItem.ingredients));
    this.removeIngredients = deepCopy(this.extraIngredients);
  }

  decrement() {
    if (this.itemCount > 1) {
      this.itemCount--;
    }
    this.onChange();
  }

  increment() {
    this.itemCount++;
    this.onChange();
  }

  toggleExtras(selectedIngredient: ItemIngredient) {
    if (!selectedIngredient.isChecked) {
      this.itemPrice = this.itemPrice + selectedIngredient.price;
      this.loadedItem.extras.push(selectedIngredient.title);
    } else {
      this.itemPrice = this.itemPrice - selectedIngredient.price;
      this.loadedItem.extras = this.loadedItem.extras.filter(c => c !== selectedIngredient.title);
    }
    this.onChange();
  }

  toggleRemoves(selectedIngredient: ItemIngredient) {
    if (!selectedIngredient.isChecked) {
      this.loadedItem.removes.push(selectedIngredient.title);
    } else {
      this.loadedItem.removes = this.loadedItem.removes.filter(c => c !== selectedIngredient.title);
    }
  }

  // addToCart() {
  //   const cartItem = new CartItem();
  //   cartItem.item = this.loadedItem;
  //   cartItem.amount = this.itemCount;
  //   // this.cartService.addToCart(cartItem);
  //   this.addToCartClick.emit(cartItem);
  //   // this.router.navigate(['tabs/menu']);
  // }

  onChange() {
    const cartItem = new CartItem();
    cartItem.item = this.loadedItem;
    cartItem.amount = this.itemCount;
    this.valueChange.emit(cartItem);
  }
}
