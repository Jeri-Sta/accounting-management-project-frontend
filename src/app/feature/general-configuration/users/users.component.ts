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

@Component({
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent extends AbstractCrud<UserDto> implements OnInit {

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
      email: new FormControl(undefined, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(undefined, Validators.required),
    });
  }
}
