import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserService } from './entities/user/user.service';
import { PermissionService } from './entities/permission/permission.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [UserService, PermissionService],
})
export class CoreModule {}
