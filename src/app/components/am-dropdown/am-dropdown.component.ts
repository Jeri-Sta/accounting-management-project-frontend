import {Component, Input} from '@angular/core';
import {FormGroup, ValidationErrors} from "@angular/forms";
import getErrorMessage from "../../shared/error-utils";
import {GenericType} from "../../core/enums/generic-type";

@Component({
  selector: 'am-dropdown',
  templateUrl: './am-dropdown.component.html',
  styleUrl: './am-dropdown.component.scss'
})
export class AmDropdownComponent {
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
  @Input()
  options!: GenericType[] | undefined;

  get error(): string {
    if (!this.errors) return '';

    const firstErrorKey = Object.keys(this.errors)[0];
    return getErrorMessage(firstErrorKey) || '';
  }

}
