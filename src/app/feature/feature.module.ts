import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from '../components/components.module';
import { UsersComponent } from './general-configuration/users/users.component';
import { UserService } from '../core/entities/user/user.service';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { PermissionsComponent } from './general-configuration/permissions/permissions.component';
import {LoginComponent} from "./login/login.component";
import {TasksComponent} from "./task/tasks.component";

@NgModule({
  declarations: [LoginComponent, UsersComponent, PermissionsComponent, TasksComponent],
  imports: [
    CommonModule,
    CoreModule,
    ComponentsModule,
    DialogModule,
    PanelModule,
    NgOptimizedImage,
  ],
  providers: [UserService, MessageService],
  exports: [LoginComponent, UsersComponent, PermissionsComponent, TasksComponent],
})
export class FeatureModule {}
