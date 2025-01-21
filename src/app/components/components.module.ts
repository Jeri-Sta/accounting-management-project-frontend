import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AmButtonComponent } from './am-button/am-button.component';
import { AmInputTextComponent } from './am-input-text/am-input-text.component';
import { AmPageFrameComponent } from './am-page-frame/am-page-frame.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AmButtonComponent, AmInputTextComponent, AmPageFrameComponent],
  exports: [AmButtonComponent, AmInputTextComponent, AmPageFrameComponent],
  imports: [CommonModule, ButtonModule, InputTextModule, RouterModule],
})
export class ComponentsModule {}
