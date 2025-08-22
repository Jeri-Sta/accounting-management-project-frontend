import {Component, OnInit} from '@angular/core';
import { UserDto } from '../../../core/entities/user/user.dto';
import { UserService } from '../../../core/entities/user/user.service';
import { Table } from 'primeng/table';
import ColumnOptions from '../../../shared/column-options';
import FieldOptions from '../../../shared/field-options';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import {finalize} from "rxjs";

@Component({
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  public users!: UserDto[];
  public selectedUsers!: UserDto[];
  public table!: Table;
  public visibleForm: boolean = false;
  public loading: boolean = false;

  public columns: ColumnOptions[] = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'name', header: 'Data de criação' },
    { field: 'email', header: 'Última alteração' },
  ];

  public fieldOptions: FieldOptions[] = [
    {
      name: 'name',
      type: 'TEXT',
      label: 'Nome',
      required: true,
    },
    {
      name: 'email',
      type: 'TEXT',
      label: 'E-mail',
      required: true,
    },
    {
      name: 'password',
      type: 'PASSWORD',
      label: 'Senha',
      required: true,
    },
  ];

  public filterFields: string[] = ['name', 'email'];

  formGroup!: FormGroup;
  isNew!: boolean;

  constructor(
    private readonly _userService: UserService,
    private readonly _messageService: MessageService,
    private readonly formBuilder: FormBuilder,
  ) {}

  get selectedRows(): number {
    return this.table ? this.table.selection.length : 0;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getFormGroup();
  }

  private getFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(undefined),
      name: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, Validators.required),
    });
  }

  public getUsers() {
    return this._userService.list().subscribe((users) => {
      this.users = users as UserDto[];
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
    this.visibleForm = true;
  }

  saveForm(): void {
    const observable = this.isNew
      ? this.getInsertObservable()
      : this.getUpdateObservable();

    this.loading = true;
    observable
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(() => {
      this._messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'O registro foi criado com sucesso!',
      });
      this.formGroup.reset();
      this.visibleForm = false;
      this.getUsers();
      this.loading = false;
    });
  }

  getInsertObservable() {
    return this._userService.insert(this.formGroup.getRawValue());
  }

  getUpdateObservable() {
    return this._userService.update(this.formGroup.getRawValue());
  }

  deleteForm() {
    this.loading = true;
    this._userService.delete(this.formGroup.get('id')?.value)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(() => {
      this._messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'O registro foi excluído com sucesso!',
      });
      this.formGroup.reset();
      this.visibleForm = false;
      this.getUsers();
      this.loading = false;
    });
  }

  deleteGrid() {
    const selectedRecords: UserDto[] = this.table.selection;
    const idsToDelete: number[] = selectedRecords.map((record) => record.id);

    idsToDelete.forEach((id) => {
      this._userService.delete(id).subscribe(() => {
        this.getUsers();
      });
    });
    this._messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Os registros foram excluídos com sucesso!',
    });
  }
}
