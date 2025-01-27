import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { UserDto } from '../../../core/entities/user/user.dto';
import { UserService } from '../../../core/entities/user/user.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  public users!: UserDto[];
  public selectedUsers!: UserDto[];
  public table!: Table;
  public visibleForm: boolean = false;

  public columns = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'name', header: 'Data de criação' },
    { field: 'email', header: 'Última alteração' },
  ];

  public fieldOptions = [
    {
      type: 'TEXT',
      label: 'Nome',
    },
    {
      type: 'TEXT',
      label: 'Nome',
    },
    {
      type: 'TEXT',
      label: 'Nome',
    },
    {
      type: 'TEXT',
      label: 'Nome',
    },
    {
      type: 'TEXT',
      label: 'Nome',
    },
    {
      type: 'TEXT',
      label: 'Nome',
    },
  ];

  constructor(private _userService: UserService) {}
  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    return this._userService.list().subscribe((users) => {
      this.users = users as UserDto[];
    });
  }

  onRowSelect(event: any) {
    this.visibleForm = true;
  }

  handleTableReady(table: any) {
    this.table = table;
  }

  closeFormScreen() {
    this.visibleForm = false;
  }
}
