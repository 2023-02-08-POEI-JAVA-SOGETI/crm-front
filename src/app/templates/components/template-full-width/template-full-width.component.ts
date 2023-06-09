import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent {
  @Input() public title: string;

  constructor() {
    this.title = 'Le titre est ici';
    // console.log(this.title);
  }

  // ngOnChanges(): void {
  //   console.log(this.title);
  // }
}
