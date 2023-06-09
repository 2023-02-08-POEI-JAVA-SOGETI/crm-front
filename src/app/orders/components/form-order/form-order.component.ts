import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateOrder } from '../../enums/state-order';
import { Order } from '../../models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss'],
})
export class FormOrderComponent implements OnInit {
  @Input() public init!: Order;
  @Output() public submitted: EventEmitter<Order>;
  public states: string[];
  public form!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter();
    this.states = Object.values(StateOrder);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      typePresta: [this.init.typePresta, Validators.required],
      client: [this.init.client, Validators.compose([Validators.required, Validators.minLength(2)])],
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit(): void {
    this.submitted.emit(this.form.value);
  }
}
