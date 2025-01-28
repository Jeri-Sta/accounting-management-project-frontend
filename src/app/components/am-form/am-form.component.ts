import { Component, EventEmitter, Input, Output } from '@angular/core';
import FieldOptions from '../../shared/field-options';
import { FormControl, FormGroup } from '@angular/forms';

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
  @Input()
  formTitle!: string;
  @Input()
  subTitle!: string;
  @Input()
  form!: FormGroup;
  @Input()
  isNew!: boolean;

  @Output()
  closeForm: EventEmitter<any> = new EventEmitter();
  @Output()
  saveForm: EventEmitter<any> = new EventEmitter();
  @Output()
  deleteForm: EventEmitter<any> = new EventEmitter();

  getFormControl(name: string): FormControl {
    return this.form.get(name) as FormControl;
  }

  getFieldLabel(name?: string, required?: boolean): string {
    let finalLabel = '';
    if (name) {
      finalLabel = required ? name + '*' : name;
    }
    return finalLabel;
  }
}
