import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { CouponComponent } from './components/coupon/coupon.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule
  ],
  declarations: [CheckoutPage, ShoppingCartComponent, PaymentMethodComponent, CouponComponent]
})
export class CheckoutPageModule { }
