import { Component, OnInit } from '@angular/core';
import { PermissionDto } from '../../../core/entities/permission/permission.dto';
import ColumnOptions from '../../../shared/column-options';
import { Table } from 'primeng/table';
import { PermissionService } from '../../../core/entities/permission/permission.service';
import FieldOptions from '../../../shared/field-options';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import moment from 'moment';
import { MessageService } from 'primeng/api';

@Component({
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css',
})
export class PermissionsComponent implements OnInit {
  permissions!: PermissionDto[];
  table!: Table;
  visibleForm: boolean = false;

  columns: ColumnOptions[] = [
    { header: 'Nome da permissão', field: 'permissionName' },
    { header: 'Tipo', field: 'type' },
    { header: 'Data de criação', field: 'creationDate' },
  ];

  public fieldOptions: FieldOptions[] = [
    {
      name: 'permissionName',
      type: 'TEXT',
      label: 'Nome da permissão',
      required: true,
    },
    {
      name: 'type',
      type: 'TEXT',
      label: 'Tipo',
      required: true,
    },
    {
      name: 'description',
      type: 'TEXT',
      label: 'Descrição',
      required: false,
    },
    {
      name: 'creationDate',
      type: 'TEXT',
      label: 'Data de criação',
      required: false,
    },
  ];

  public filterFields: string[] = ['permissionName', 'type', 'description'];

  formGroup!: FormGroup;
  isNew!: boolean;

  constructor(
    private _permissionService: PermissionService,
    private _messageService: MessageService
  ) {}

  get selectedRows(): number {
    return this.table ? this.table.selection.length : 0;
  }

  ngOnInit(): void {
    this.getPermissions();
    this.getFormGroup();
  }

  private getFormGroup() {
    this.formGroup = new FormGroup({
      id: new FormControl(''),
      permissionName: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      description: new FormControl(''),
      creationDate: new FormControl(moment(new Date()).format('YYYY-MM-DD')),
    });
  }

  public getPermissions() {
    return this._permissionService.list().subscribe((permissions) => {
      this.permissions = permissions as PermissionDto[];
    });
  }

  handleTableReady(table: any) {
    this.table = table;
  }

  onRowSelect(row: any) {
    this.isNew = false;
    this.formGroup.patchValue(row);
    this.visibleForm = true;
  }

  closeFormScreen() {
    this.formGroup.reset();
    this.visibleForm = false;
  }

  newRegister() {
    this.isNew = true;
    this.formGroup.patchValue({
      creationDate: moment(new Date()).format('YYYY-MM-DD'),
    });
    this.visibleForm = true;
  }

  saveForm() {
    const observable = this.isNew
      ? this.getInsertObservable()
      : this.getUpdateObservable();

    observable.subscribe(() => {
      this._messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'O registro foi criado com sucesso!',
      });
      this.formGroup.reset();
      this.visibleForm = false;
      this.getPermissions();
    });
  }

  getInsertObservable() {
    return this._permissionService.insert(this.formGroup.getRawValue());
  }

  getUpdateObservable() {
    return this._permissionService.update(this.formGroup.getRawValue());
  }

  deleteForm() {
    this._permissionService
      .delete(this.formGroup.get('id')?.value)
      .subscribe(() => {
        this._messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'O registro foi excluído com sucesso!',
        });
        this.formGroup.reset();
        this.visibleForm = false;
        this.getPermissions();
      });
  }

  deleteGrid() {
    const selectedRecords: PermissionDto[] = this.table.selection;
    const idsToDelete: number[] = selectedRecords.map((record) => record.id);

    idsToDelete.forEach((id) => {
      this._permissionService.delete(id).subscribe(() => {
        this.getPermissions();
      });
    });
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Os registros foram excluídos com sucesso!',
    });
  }
}
