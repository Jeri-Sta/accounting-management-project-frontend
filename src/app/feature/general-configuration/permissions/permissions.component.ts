import {Component, OnInit} from '@angular/core';
import { PermissionDto } from '../../../core/entities/permission/permission.dto';
import ColumnOptions from '../../../shared/column-options';
import { PermissionService } from '../../../core/entities/permission/permission.service';
import FieldOptions from '../../../shared/field-options';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import moment from 'moment';
import { MessageService } from 'primeng/api';
import {AbstractCrud} from "../../abstract-crud";

@Component({
  templateUrl: './permissions.component.html',
  styleUrl: './permissions.component.css',
})
export class PermissionsComponent extends AbstractCrud<PermissionDto> implements OnInit {

  columns: ColumnOptions[] = [
    { header: 'Nome da permissão', field: 'permissionName' },
    { header: 'Tipo', field: 'type' },
    { header: 'Data de criação', field: 'creationDate' },
  ];

  protected fieldOptions: FieldOptions[] = [
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

  constructor(
    _permissionService: PermissionService,
    _messageService: MessageService,
    private readonly formBuilder: FormBuilder
  ) {
    super(_permissionService, _messageService);
  }

  ngOnInit(): void {
    this.getRegisters();
    this.getFormGroup();
  }

  protected override getFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(undefined),
      permissionName: new FormControl(undefined, Validators.required),
      type: new FormControl(undefined, Validators.required),
      description: new FormControl(undefined),
      creationDate: new FormControl(moment(new Date()).format('YYYY-MM-DD')),
    });
  }

  protected override newRegister() {
    this.isNew = true;
    this.formGroup.patchValue({
      creationDate: moment(new Date()).format('YYYY-MM-DD'),
    });
    this.visibleForm = true;
  }

  protected override toDto(): PermissionDto {
    return this.formGroup.getRawValue();
  }

  protected override fillFormGroup(row: any) {
    return this.formGroup.patchValue(row);
  }
}
