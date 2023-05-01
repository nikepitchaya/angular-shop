import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { IconsModule } from 'src/app/icons/icons.module';

@NgModule({
  declarations: [
    LandingComponent,
    ProductsComponent
  ],
  imports: [CommonModule, IconsModule],
  exports: [CommonModule],
})
export class UsersModule { }
