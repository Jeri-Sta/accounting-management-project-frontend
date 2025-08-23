import {Component, Input} from '@angular/core';
import {FormGroup, ValidationErrors} from "@angular/forms";
import getErrorMessage from "../../shared/error-utils";

@Component({
  selector: 'am-input-number',
  templateUrl: './am-input-number.component.html',
  styleUrl: './am-input-number.component.scss'
})
export class AmInputNumberComponent {
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

  get error(): string {
    if (!this.errors) return '';

    const firstErrorKey = Object.keys(this.errors)[0];
    return getErrorMessage(firstErrorKey) || '';
  }
}
