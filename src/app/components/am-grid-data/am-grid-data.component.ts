import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Table } from 'primeng/table';
import {ColumnType} from "../../shared/column-options";
import moment from "moment";

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

  protected readonly ColumnType = ColumnType;

  protected getFormattedDate(date: any): string {
    return moment(date).format('DD/MM/YYYY');
  }

  protected getFormattedEnum(value: string): string {
    if (value.length === 0) {
      return ""; // Handle empty string case
    }
    const firstLetter = value.charAt(0).toUpperCase();
    const restOfString = value.slice(1);
    return firstLetter + restOfString;
  }
}
