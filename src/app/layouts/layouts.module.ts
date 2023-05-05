import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, IconsModule],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutsModule { }
