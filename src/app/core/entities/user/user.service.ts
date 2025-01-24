import { Injectable } from '@angular/core';
import { EntityService } from '../entity.service';
import { UserDto } from './user.dto';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityService<UserDto> {
  constructor(
    protected override http: HttpClient,
    protected override messageService: MessageService
  ) {
    super(http, messageService, 'http://localhost:8081/users');
  }
}
