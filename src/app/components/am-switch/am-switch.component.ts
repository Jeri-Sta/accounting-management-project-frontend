import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'am-switch',
  templateUrl: './am-switch.component.html',
  styleUrl: './am-switch.component.scss'
})
export class AmSwitchComponent {
  @Input()
  label!: string | undefined;
  @Input()
  formGroup!: FormGroup;
  @Input()
  controlName!: string;
}
