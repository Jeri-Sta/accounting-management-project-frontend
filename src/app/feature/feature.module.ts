import {CommonModule, NgOptimizedImage} from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from '../components/components.module';
import { UserComponent } from './general-configuration/users/user.component';
import { UserService } from '../core/entities/user/user.service';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { PermissionComponent } from './general-configuration/permissions/permission.component';
import {LoginComponent} from "./login/login.component";
import {TaskComponent} from "./task/task.component";
import {CompanyComponent} from "./company/company.component";

@NgModule({
  declarations: [LoginComponent, UserComponent, PermissionComponent, TaskComponent, CompanyComponent],
  imports: [
    CommonModule,
    CoreModule,
    ComponentsModule,
    DialogModule,
    PanelModule,
    NgOptimizedImage,
  ],
  providers: [UserService, MessageService],
  exports: [LoginComponent, UserComponent, PermissionComponent, TaskComponent, CompanyComponent],
})
export class FeatureModule {}
