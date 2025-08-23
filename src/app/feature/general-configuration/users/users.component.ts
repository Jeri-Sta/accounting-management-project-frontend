import {Component, OnInit} from '@angular/core';
import { UserDto } from '../../../core/entities/user/user.dto';
import { UserService } from '../../../core/entities/user/user.service';
import ColumnOptions from '../../../shared/column-options';
import FieldOptions from '../../../shared/field-options';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import {AbstractCrud} from "../../abstract-crud";
import moment from "moment/moment";
import {TaskDto} from "../../../core/entities/task/task.dto";

@Component({
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent extends AbstractCrud<UserDto> implements OnInit {

  public columns: ColumnOptions[] = [
    { field: 'name', header: 'Name' },
    { field: 'username', header: 'Usuário' },
    { field: 'email', header: 'Email' },
    { field: 'timestampCreatedAt', header: 'Data de criação' },
    { field: 'timestampUpdatedAt', header: 'Última alteração' },
  ];

  public fieldOptions: FieldOptions[] = [
    {
      name: 'name',
      type: 'TEXT',
      label: 'Nome',
      required: true,
    },
    {
      name: 'username',
      type: 'TEXT',
      label: 'Usuário',
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

  constructor(
    _userService: UserService,
    _messageService: MessageService,
    private readonly formBuilder: FormBuilder,
  ) {
    super(_userService, _messageService);
  }

  ngOnInit(): void {
    this.getRegisters();
    this.getFormGroup();
  }

  protected override getFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(undefined),
      name: new FormControl(undefined, Validators.required),
      username: new FormControl(undefined, Validators.required),
      email: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, Validators.required),
    });
  }

  protected override getRegisters() {
    return this.entityService.list().subscribe((registers) => {
      this.registers = (registers as UserDto[]).filter((dto: UserDto) => dto.active);
    });
  }

  protected override toDto(): UserDto {
    let dto: UserDto = this.formGroup.getRawValue();

    dto.timestampCreatedAt = dto.timestampCreatedAt ? moment(dto.timestampCreatedAt).format('YYYY-MM-DDTHH:MM:SS.sssZ') : undefined;
    dto.timestampUpdatedAt = dto.timestampUpdatedAt ? moment(dto.timestampUpdatedAt).format('YYYY-MM-DDTHH:MM:SS.sssZ') : undefined;

    return this.formGroup.getRawValue();
  }

  protected override fillFormGroup(row: any) {
    let dto = row;

    dto.timestampCreatedAt = moment(dto.timestampCreatedAt).toDate();
    dto.timestampUpdatedAt = moment(dto.timestampUpdatedAt).toDate();

    this.formGroup.patchValue(row);
  }
}
