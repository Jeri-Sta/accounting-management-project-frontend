import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ComponentsModule } from '../components/components.module';
import { UsersComponent } from './general-configuration/users/users.component';
import { TableModule } from 'primeng/table';
import { UserService } from '../core/entities/user/user.service';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, CoreModule, ComponentsModule, TableModule],
  providers: [UserService, MessageService],
  exports: [UsersComponent],
})
export class FeatureModule {}
