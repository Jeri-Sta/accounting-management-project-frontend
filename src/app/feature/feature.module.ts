import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from '../components/components.module';
import { UsersComponent } from './general-configuration/users/users.component';
import { UserService } from '../core/entities/user/user.service';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { PermissionsComponent } from './general-configuration/permissions/permissions.component';

@NgModule({
  declarations: [UsersComponent, PermissionsComponent],
  imports: [
    CommonModule,
    CoreModule,
    ComponentsModule,
    DialogModule,
    PanelModule,
  ],
  providers: [UserService, MessageService],
  exports: [UsersComponent, PermissionsComponent],
})
export class FeatureModule {}
