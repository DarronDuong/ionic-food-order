import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './components/coupon/coupon.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutModal } from './modals/checkout-modal/checkout-modal.component';


@NgModule({
  declarations: [
    ItemDetailsComponent,
    CouponComponent,
    PaymentMethodComponent,
    ShoppingCartComponent,
    CheckoutModal
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  exports: [ItemDetailsComponent],
  entryComponents: [CheckoutModal]
})
export class SharedModule { }
