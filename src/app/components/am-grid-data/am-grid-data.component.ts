import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'am-grid-data',
  templateUrl: './am-grid-data.component.html',
  styleUrl: './am-grid-data.component.css',
})
export class AmGridDataComponent implements OnInit {
  @Input()
  columns!: any[];
  @Input()
  data!: any[];

  @Output()
  onClickRow: EventEmitter<any> = new EventEmitter();

  selectedRows: any[] = [];

  ngOnInit(): void {}
}
