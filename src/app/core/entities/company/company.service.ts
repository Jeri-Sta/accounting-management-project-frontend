import {Injectable} from "@angular/core";
import {EntityService} from "../entity.service";
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {CompanyDto} from "./company.dto";

@Injectable({
  providedIn: 'root',
})
export class CompanyService extends EntityService<CompanyDto> {
  constructor(
    protected override http: HttpClient,
    protected override messageService: MessageService
  ) {
    super(http, messageService, 'http://localhost:8081/cnpjs');
  }
}
