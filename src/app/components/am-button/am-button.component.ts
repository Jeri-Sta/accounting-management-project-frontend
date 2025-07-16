import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'am-button',
  templateUrl: './am-button.component.html',
  styleUrl: './am-button.component.css',
})
export class AmButtonComponent {
  @Input()
  label!: string;

  @Input()
  severity!:
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'help'
    | 'primary'
    | 'secondary'
    | 'contrast'
    | null
    | undefined;

  @Input()
  size: 'samll' | 'medium' | 'large' | null | undefined;

  @Input()
  isLoading = false;

  @Input()
  disabled!: boolean;

  @Output()
  onClickButton: EventEmitter<void> = new EventEmitter();
}
