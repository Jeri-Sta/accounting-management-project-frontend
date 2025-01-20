import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AmButtonComponent } from './am-button/am-button.component';
import { AmInputTextComponent } from './am-input-text/am-input-text.component';

@NgModule({
  declarations: [AmButtonComponent, AmInputTextComponent],
  exports: [AmButtonComponent, AmInputTextComponent],
  imports: [CommonModule, ButtonModule, InputTextModule],
})
export class ComponentsModule {}
