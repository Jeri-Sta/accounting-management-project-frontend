import { Component, Input } from '@angular/core';
import FieldOptions from '../../shared/field-options';

@Component({
  selector: 'am-dynamic-field',
  templateUrl: './am-dynamic-field.component.html',
  styleUrl: './am-dynamic-field.component.css',
})
export class AmDynamicFieldComponent {
  @Input()
  fieldOptions!: FieldOptions;
}
