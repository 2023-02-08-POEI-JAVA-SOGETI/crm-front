import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public numVersion!: number;
  constructor(private versionService: VersionService) {
    this.versionService.version$.subscribe((data) => {
      this.numVersion = data;
    })
  }
}
