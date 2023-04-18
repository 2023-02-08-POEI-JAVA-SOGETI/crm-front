import { Component } from '@angular/core';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent {
  public title: string;
  public headers: string[];
  public collection!: Order[];

  constructor(private ordersService: OrdersService) {
    this.title = 'List of orders';
    this.headers = [
      'Type',
      'Client',
      'Days',
      'Unit price',
      'Total excl. taxes',
      'Total incl. taxes',
      'Status',
    ];

    this.ordersService.collection$.subscribe((data) => {
      this.collection = data;
    });
  }
}
