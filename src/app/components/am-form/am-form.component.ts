import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import FieldOptions from '../../shared/field-options';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import getErrorMessage from '../../shared/error-utils';

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

  save() {
    this.validateFormGroup(this.form);
    this.form.updateValueAndValidity();
    if (this.form.valid) {
      this.saveForm.emit();
    }
  }

  validateFormGroup(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field: any) => {
      const control = formGroup.get(field);
      control?.updateValueAndValidity();
      control?.markAsDirty();
    });
  }
}
