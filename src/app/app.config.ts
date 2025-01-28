import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { UsersComponent } from './feature/general-configuration/users/users.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PermissionsComponent } from './feature/general-configuration/permissions/permissions.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'permissions', component: PermissionsComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()],
};
