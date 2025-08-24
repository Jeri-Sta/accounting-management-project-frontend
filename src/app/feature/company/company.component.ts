import {Component, OnInit} from '@angular/core';
import {AbstractCrud} from "../abstract-crud";
import {CompanyDto} from "../../core/entities/company/company.dto";
import moment from "moment/moment";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {CompanyService} from "../../core/entities/company/company.service";
import ColumnOptions, {ColumnType} from "../../shared/column-options";
import FieldOptions from "../../shared/field-options";

@Component({
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent extends AbstractCrud<CompanyDto> implements OnInit {

  protected columns: ColumnOptions[] = [
    { header: 'CNPJ', field: 'cnpj' },
    { header: 'Situação', field: 'descriptionCadastralStatus' },
    { header: 'Data situação cadastral', field: 'registrationStatusDate', type: ColumnType.DATE },
    { header: 'Data início das atividades', field: 'dateInitialActivity', type: ColumnType.DATE },
    { header: 'CNAE', field: 'cnaeTaxDescription' },
  ];

  protected fieldOptions: FieldOptions[] = [
    {
      name: 'cnpj',
      type: 'TEXT',
      label: 'CNPJ',
      required: true,
    },
    {
      name: 'descriptionCadastralStatus',
      type: 'TEXT',
      label: 'Situação',
      required: true,
    },
    {
      name: 'registrationStatusDate',
      type: 'DATE',
      label: 'Data situação cadastral',
      required: false,
    },
    {
      name: 'dateInitialActivity',
      type: 'DATE',
      label: 'Data início das atividades',
      required: true,
    },
    {
      name: 'cnaeTaxDescription',
      type: 'TEXT',
      label: 'CNAE',
      required: true,
    },
  ];

  protected filterFields: string[] = ['cnpj'];

  constructor(
    _companyService: CompanyService,
    _messageService: MessageService,
    private readonly formBuilder: FormBuilder) {
    super(_companyService, _messageService);
  }

  ngOnInit(): void {
    this.getRegisters();
    this.getFormGroup();
  }

  protected override getFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(undefined),
      cnpj: new FormControl(undefined, Validators.required),
      descriptionCadastralStatus: new FormControl(undefined, Validators.required),
      registrationStatusDate: new FormControl(undefined, Validators.required),
      dateInitialActivity: new FormControl(undefined, Validators.required),
      cnaeTaxDescription: new FormControl(undefined, Validators.required),
    });
  }

  protected override toDto(): CompanyDto {
    let dto: CompanyDto = this.formGroup.getRawValue();

    dto.registrationStatusDate = dto.registrationStatusDate ? moment(dto.registrationStatusDate).format('YYYY-MM-DD') : undefined;
    dto.dateInitialActivity = dto.dateInitialActivity ? moment(dto.dateInitialActivity).format('YYYY-MM-DD') : undefined;

    return dto;
  }

  protected override fillFormGroup(row: any) {
    let dto = row;

    dto.registrationStatusDate = dto.registrationStatusDate ? moment(dto.registrationStatusDate).toDate() : undefined;
    dto.dateInitialActivity = dto.dateInitialActivity ? moment(dto.dateInitialActivity).toDate() : undefined;

    this.formGroup.patchValue(dto);
  }
}
