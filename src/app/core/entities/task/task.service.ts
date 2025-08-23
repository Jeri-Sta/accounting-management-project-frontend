import {Injectable} from "@angular/core";
import {EntityService} from "../entity.service";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {TaskDto} from "./task.dto";

@Injectable({
  providedIn: 'root',
})
export class TaskService extends EntityService<TaskDto> {
  constructor(
    protected override http: HttpClient,
    protected override messageService: MessageService
  ) {
    super(http, messageService, 'http://localhost:8081/tasks');
  }
}
