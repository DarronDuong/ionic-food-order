import { Injectable } from '@angular/core';
import { Order, OrderStatus } from '../models/classes';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

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
