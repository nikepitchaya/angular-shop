import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { UsersModule } from './users/users.module';
import { IconsModule } from '../icons/icons.module';
@NgModule({
  declarations: [],
  imports: [CommonModule, AdminModule, UsersModule, IconsModule],
  exports: [CommonModule],
})
export class PagesModule {}
