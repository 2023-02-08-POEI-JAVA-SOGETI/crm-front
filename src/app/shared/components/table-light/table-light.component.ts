import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss'],
})
export class TableLightComponent {
  @Input() public headers!: string[];
  // @Input() public collection!: any[];

  // constructor() {
  //   // console.log(this.collection);
  // }

  // sans ngif dans page list orders, je me rend compte qu'il y a un appel de ngonchanges en trop
  // c'est du au fait que mon input passe de undefined à sa valeur finale, ce qui est en soit
  // très mauvais mais en plus, déclanche donc un change detection non voulu, ce qui est encore pire
  // ngOnChanges(): void {
  //   console.log(this.collection);
  // }
}
