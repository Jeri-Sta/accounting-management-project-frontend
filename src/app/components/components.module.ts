import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AmButtonComponent } from './am-button/am-button.component';
import { AmInputTextComponent } from './am-input-text/am-input-text.component';
import { AmPageFrameComponent } from './am-page-frame/am-page-frame.component';
import { RouterModule } from '@angular/router';
import { AmPageHeaderComponent } from './am-page-header/am-page-header.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TableModule } from 'primeng/table';
import { AmGridDataComponent } from './am-grid-data/am-grid-data.component';
import { FormsModule } from '@angular/forms';
import { AmFormComponent } from './am-form/am-form.component';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { AmDynamicFieldComponent } from './am-dynamic-field/am-dynamic-field.component';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AmButtonComponent,
    AmInputTextComponent,
    AmPageFrameComponent,
    AmPageHeaderComponent,
    AmGridDataComponent,
    AmFormComponent,
    AmDynamicFieldComponent,
  ],
  exports: [
    AmButtonComponent,
    AmInputTextComponent,
    AmPageFrameComponent,
    AmPageHeaderComponent,
    AmGridDataComponent,
    AmFormComponent,
    AmDynamicFieldComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RouterModule,
    AutoCompleteModule,
    InputGroupModule,
    InputGroupAddonModule,
    IconFieldModule,
    InputIconModule,
    TableModule,
    FormsModule,
    DialogModule,
    PanelModule,
    BadgeModule,
  ],
})
export class ComponentsModule {}
