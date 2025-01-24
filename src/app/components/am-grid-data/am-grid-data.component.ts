import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'am-grid-data',
  templateUrl: './am-grid-data.component.html',
  styleUrl: './am-grid-data.component.css',
})
export class AmGridDataComponent implements AfterViewInit {
  @Input()
  columns!: any[];
  @Input()
  data!: any[];

  @Output()
  onClickRow: EventEmitter<any> = new EventEmitter();

  @ViewChild('table') table!: Table;
  @Output() tableReady = new EventEmitter<Table>();

  selectedRows: any[] = [];

  ngAfterViewInit(): void {
    this.tableReady.emit(this.table);
  }
}
