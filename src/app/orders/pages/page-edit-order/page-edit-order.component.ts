import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../../models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent {
  public id: number;
  public order$: Observable<Order>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ordersService: OrdersService,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.order$ = this.ordersService.getOrderById(this.id);
  }

  public action(order: Order): void {
    this.ordersService.update(order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
