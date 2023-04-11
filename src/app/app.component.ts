import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title!: string;

  constructor() {
    this.title = 'crm';
    console.log(this.title);
  }
}
