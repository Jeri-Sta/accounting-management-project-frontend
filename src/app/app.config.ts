import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { UsersComponent } from './feature/general-configuration/users/users.component';
import { provideAnimations } from '@angular/platform-browser/animations';

const routes: Routes = [{ path: 'users', component: UsersComponent }];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()],
};
