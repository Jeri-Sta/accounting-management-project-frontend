import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AmButtonComponent } from './am-button/am-button.component';

@NgModule({
  declarations: [AmButtonComponent],
  exports: [AmButtonComponent],
  imports: [CommonModule, ButtonModule],
})
export class ComponentsModule {}
