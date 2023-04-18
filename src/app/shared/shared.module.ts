import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons.module';
import { TableLightComponent } from './components/table-light/table-light.component';



@NgModule({
  declarations: [
    TableLightComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplatesModule,
    IconsModule,
    TableLightComponent
  ]
})
export class SharedModule { }
