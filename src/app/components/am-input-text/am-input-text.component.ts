import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

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
}
