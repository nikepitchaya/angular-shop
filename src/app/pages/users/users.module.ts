import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    LandingComponent,
    ProductsComponent
  ],
  imports: [CommonModule],
  exports: [CommonModule],
})
export class UsersModule {}
