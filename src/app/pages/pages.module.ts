import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminModule, UsersModule, AppRoutingModule],
  exports: [CommonModule],
})
export class PagesModule { }
