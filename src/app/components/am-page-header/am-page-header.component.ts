import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'am-page-header',
  templateUrl: './am-page-header.component.html',
  styleUrl: './am-page-header.component.css',
})
export class AmPageHeaderComponent {
  @Input()
  pageTitle!: string;
  @Input()
  selectedRows!: number;

  @Output()
  filterActions: EventEmitter<any> = new EventEmitter();
  @Output()
  newRegister: EventEmitter<any> = new EventEmitter();
  @Output()
  deleteRegister: EventEmitter<any> = new EventEmitter();

  filterField!: string;

  isFilterEmpty() {
    return this.filterField == undefined || this.filterField == '';
  }

  teste() {
    console.log('Teste');
  }
}
