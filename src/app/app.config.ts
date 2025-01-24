import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { UsersComponent } from './feature/general-configuration/users/users.component';

const routes: Routes = [{ path: 'users', component: UsersComponent }];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
