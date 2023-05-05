import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { TopmenusComponent } from './products/topmenus/topmenus.component';
import { SidemenusComponent } from './products/sidemenus/sidemenus.component';
import { GridproductsComponent } from './products/gridproducts/gridproducts.component';

@NgModule({
  declarations: [
    LandingComponent,
    ProductsComponent,
    TopmenusComponent,
    SidemenusComponent,
    GridproductsComponent
  ],
  imports: [CommonModule, IconsModule],
  exports: [CommonModule],
})
export class UsersModule { }
