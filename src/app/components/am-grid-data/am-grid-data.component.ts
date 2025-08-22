import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Table } from 'primeng/table';

@Component({
  selector: 'am-grid-data',
  templateUrl: './am-grid-data.component.html',
  styleUrls: ['./am-grid-data.component.scss', './am-grid-data.component.notebook.scss'],
})
export class AmGridDataComponent implements AfterViewInit {

  @Input()
  columns!: any[];
  @Input()
  data!: any[];
  @Input()
  filterFields: string[] = [];

  @Output()
  onClickRow: EventEmitter<any> = new EventEmitter();

  @ViewChild('table') table!: Table;
  @Output() tableReady = new EventEmitter<Table>();

  @Input() selectedRows: any[] = [];
  @Output() selectedRowsChange = new EventEmitter<any[]>();

  ngAfterViewInit(): void {
    this.tableReady.emit(this.table);
  }

  updateSelection(event: any): void {
    this.selectedRows = event;
    this.selectedRowsChange.emit(this.selectedRows);
  }
}
