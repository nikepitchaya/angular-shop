import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShirtComponent } from './shirt/shirt.component';
import { TrousersComponent } from './trousers/trousers.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoryComponent } from './accessory/accessory.component';

@NgModule({
  declarations: [
    ShirtComponent,
    TrousersComponent,
    ShoesComponent,
    AccessoryComponent
  ],
  imports: [CommonModule],
  exports: [CommonModule,ShirtComponent,
    TrousersComponent,
    ShoesComponent,
    AccessoryComponent],
})
export class IconsModule { }

