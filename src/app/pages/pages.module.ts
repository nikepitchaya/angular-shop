import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminModule, UsersModule],
  exports: [CommonModule],
})
export class PagesModule { }
