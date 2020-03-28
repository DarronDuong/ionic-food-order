import { Injectable } from '@angular/core';
import { Order, OrderStatus, CartItem } from '../models/classes';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [
    {
      orderId: 1,
      orderType: 2,
      cartItems: [
        {
          item: {
            id: 31,
            categoryId: 3,
            title: "Laksa (Spicy)",
            imageUrl: "assets/menu-photos/LAKSA.jpg",
            amount: null,
            price: 14.5,
            ingredients: [1, 4, 5, 6, 7, 8, 10, 11],
            extras: ["Broccoli", "Tofu"],
            removes: [],
          },
          amount: 1,
          itemPrice: 14.5
        }
      ] as CartItem[],
      cartPrice: 29,
      deliveryPrice: 0,
      status: OrderStatus.COMPLETE,
      createdOn: new Date(),
      modifiedOn: new Date()
    }
  ];

  constructor() { }

  getAllOrders(userId: number) {
    return of(this.orders);
  }

  prepareOrder(orderId: number) {
    let order = this.orders.find(o => o.orderId === orderId);
    order.status = OrderStatus.PREPARING;
    return of(order);
  }

  readyOrder(orderId: number) {
    let order = this.orders.find(o => o.orderId === orderId);
    order.status = OrderStatus.READY;
    return of(order);
  }

  deliverOrder(orderId: number) {
    let order = this.orders.find(o => o.orderId === orderId);
    order.status = OrderStatus.DELIVERING;
    return of(order);
  }

  completeOrder(orderId: number) {
    let order = this.orders.find(o => o.orderId === orderId);
    order.status = OrderStatus.COMPLETE;
    return of(order);
  }
}
