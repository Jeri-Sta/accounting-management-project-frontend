import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'am-page-header',
  templateUrl: './am-page-header.component.html',
  styleUrl: './am-page-header.component.css',
})
export class AmPageHeaderComponent {
  @Input()
  pageTitle!: string;

  @Output()
  filterActions: EventEmitter<any> = new EventEmitter();

  activeIcon = true;

  controlIcon(event: any) {
    this.activeIcon = event.target.defaultValue == '' ? true : false;
  }
}
