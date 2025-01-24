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

  public columns = [
    { field: 'name', header: 'Name' },
    { field: 'email', header: 'Email' },
    { field: 'name', header: 'Data de criação' },
    { field: 'email', header: 'Última alteração' },
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
    console.log(event);
  }

  handleTableReady(table: any) {
    this.table = table;
  }
}
