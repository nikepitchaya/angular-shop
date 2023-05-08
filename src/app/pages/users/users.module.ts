import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { ProductsComponent } from './products/products.component';
import { IconsModule } from 'src/app/icons/icons.module';
import { TopmenusComponent } from './products/topmenus/topmenus.component';
import { SidemenusComponent } from './products/sidemenus/sidemenus.component';
import { GridproductsComponent } from './products/gridproducts/gridproducts.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ItemComponent } from './products/item/item.component';

@NgModule({
  declarations: [
    LandingComponent,
    ProductsComponent,
    TopmenusComponent,
    SidemenusComponent,
    GridproductsComponent,
    AboutComponent,
    BlogComponent,
    ItemComponent
  ],
  imports: [CommonModule, IconsModule , FormsModule],
  exports: [CommonModule],
})
export class UsersModule { }
