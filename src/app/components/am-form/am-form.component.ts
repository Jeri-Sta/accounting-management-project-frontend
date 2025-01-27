import { Component, EventEmitter, Input, Output } from '@angular/core';
import FieldOptions from '../../shared/field-options';

@Component({
  selector: 'am-form',
  templateUrl: './am-form.component.html',
  styleUrl: './am-form.component.css',
})
export class AmFormComponent {
  @Input()
  visibleForm: boolean = false;
  @Input()
  fieldOptions!: FieldOptions[];

  @Output()
  closeForm: EventEmitter<any> = new EventEmitter();
}
