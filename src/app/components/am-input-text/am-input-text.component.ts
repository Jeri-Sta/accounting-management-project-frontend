import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import getErrorMessage from '../../shared/error-utils';

@Component({
  selector: 'am-input-text',
  templateUrl: './am-input-text.component.html',
  styleUrl: './am-input-text.component.css',
})
export class AmInputTextComponent {
  @Input()
  placeholder!: string;
  @Input()
  label!: string | undefined;
  @Input()
  formGroup!: FormGroup;
  @Input()
  controlName!: string;
  @Input()
  errors!: ValidationErrors | null | undefined;

  // get error(): string {
  //   const firstErrorKey = Object.keys(this.errors)[0];
  //   return getErrorMessage(firstErrorKey);
  // }

  get error(): string {
    if (!this.errors) return '';

    const firstErrorKey = Object.keys(this.errors)[0];
    return getErrorMessage(firstErrorKey) || '';
  }
}
