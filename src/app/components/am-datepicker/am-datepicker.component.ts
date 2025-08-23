import {Component, Input} from '@angular/core';
import {FormGroup, ValidationErrors} from "@angular/forms";
import {GenericType} from "../../core/enums/GenericType";
import getErrorMessage from "../../shared/error-utils";

@Component({
  selector: 'am-datepicker',
  templateUrl: './am-datepicker.component.html',
  styleUrl: './am-datepicker.component.scss'
})
export class AmDatepickerComponent {
  @Input()
  label!: string | undefined;
  @Input()
  formGroup!: FormGroup;
  @Input()
  controlName!: string;
  @Input()
  errors!: ValidationErrors | null | undefined;
  @Input()
  options!: GenericType[] | undefined;

  get error(): string {
    if (!this.errors) return '';

    const firstErrorKey = Object.keys(this.errors)[0];
    return getErrorMessage(firstErrorKey) || '';
  }
}
