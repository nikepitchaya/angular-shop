import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShirtComponent } from './shirt/shirt.component';
import { TrousersComponent } from './trousers/trousers.component';
import { ShoesComponent } from './shoes/shoes.component';
import { AccessoryComponent } from './accessory/accessory.component';
import { MittenComponent } from './mitten/mitten.component';
import { HeartComponent } from './heart/heart.component';
import { CartComponent } from './cart/cart.component';
import { InformationComponent } from './information/information.component';
import { GithubComponent } from './github/github.component';

@NgModule({
  declarations: [
    ShirtComponent,
    TrousersComponent,
    ShoesComponent,
    AccessoryComponent,
    MittenComponent,
    HeartComponent,
    CartComponent,
    InformationComponent,
    GithubComponent
  ],
  imports: [CommonModule],
  exports: [CommonModule, ShirtComponent,
    TrousersComponent,
    ShoesComponent,
    AccessoryComponent, MittenComponent, HeartComponent, CartComponent, InformationComponent, GithubComponent],
})
export class IconsModule { }

