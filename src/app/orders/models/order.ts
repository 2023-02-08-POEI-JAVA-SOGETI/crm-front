import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 400;
  nbJours = 3;
  tva = 20;
  state = StateOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  id!: number;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
}
