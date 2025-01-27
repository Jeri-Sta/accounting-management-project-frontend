import { Component, Input } from '@angular/core';

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
}
