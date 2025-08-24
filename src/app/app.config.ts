import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { UserComponent } from './feature/general-configuration/users/user.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PermissionComponent } from './feature/general-configuration/permissions/permission.component';
import {TaskComponent} from "./feature/task/task.component";
import {CompanyComponent} from "./feature/company/company.component";

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'permission', component: PermissionComponent },
  { path: 'task', component: TaskComponent },
  { path: 'company', component: CompanyComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()],
};
