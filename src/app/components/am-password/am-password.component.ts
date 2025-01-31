import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import getErrorMessage from '../../shared/error-utils';

@Component({
  selector: 'am-password',
  templateUrl: './am-password.component.html',
  styleUrl: './am-password.component.css',
})
export class AmPasswordComponent {
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
