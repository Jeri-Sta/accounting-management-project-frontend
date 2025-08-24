import {Component, OnInit} from '@angular/core';
import {AbstractCrud} from "../abstract-crud";
import {TaskDto} from "../../core/entities/task/task.dto";
import ColumnOptions, {ColumnType} from "../../shared/column-options";
import FieldOptions from "../../shared/field-options";
import {getAllRecurringType} from "../../core/enums/recurring-type";
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TaskService} from "../../core/entities/task/task.service";
import {UserService} from "../../core/entities/user/user.service";
import moment from "moment";

@Component({
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent extends AbstractCrud<TaskDto> implements OnInit{

  protected columns: ColumnOptions[] = [
    { header: 'Nº da tarefa', field: 'taskNumber' },
    { header: 'Data de vencimento', field: 'expirationDate', type: ColumnType.DATE },
    { header: 'Tipo de recorrência', field: 'recurringType' },
    { header: 'Gera multas', field: 'generatesFine', type: ColumnType.BOOLEAN },
  ];

  protected fieldOptions: FieldOptions[] = [
    {
      name: 'taskName',
      type: 'TEXT',
      label: 'Nome da tarefa',
      required: true,
    },
    {
      name: 'recurringType',
      type: 'ENUM',
      label: 'Tipo de recorrência',
      required: true,
      options: getAllRecurringType()
    },
    {
      name: 'additionalInformation',
      type: 'TEXT',
      label: 'Informações adicionais',
      required: false,
    },
    {
      name: 'expirationDate',
      type: 'DATE',
      label: 'Data de vencimento',
      required: true,
    },
    {
      name: 'generatesFine',
      type: 'BOOLEAN',
      label: 'Gera multas',
      required: true,
    },
    {
      name: 'taskNumber',
      type: 'NUMBER',
      label: 'Número da tarefa',
      required: true,
    },
    {
      name: 'taskStatus',
      type: 'TEXT',
      label: 'Status da tarefa',
      required: true,
    },
    {
      name: 'automaticallyGenerating',
      type: 'BOOLEAN',
      label: 'Gerando automaticamente',
      required: true,
    },
    {
      name: 'user',
      type: 'LOOKUP',
      label: 'Usuário responsável',
      required: true,
      filterOptions: {
        header: 'Usuário',
        filterEntityService: this.userService,
        fieldsToDisplay: ['id', 'name'],
        fields: [
          {
            name: 'name',
            label: 'Nome',
            type: 'TEXT',
          },
        ],
        columns: [
          { field: 'name', header: 'Name' },
          { field: 'email', header: 'Email' },
        ]
      }
    },
  ];

  protected filterFields: string[] = ['taskNumber', 'user', 'taskName'];

  constructor(
    _taskService: TaskService,
    _messageService: MessageService,
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService,
  ) {
    super(_taskService, _messageService);
  }

  ngOnInit(): void {
    this.getRegisters();
    this.getFormGroup();
  }

  protected override getFormGroup() {
    this.formGroup = this.formBuilder.group({
      id: new FormControl(undefined),
      user: new FormControl(undefined, Validators.required),
      taskName: new FormControl(undefined, Validators.required),
      additionalInformation: new FormControl(undefined, Validators.required),
      recurringType: new FormControl(undefined, Validators.required),
      expirationDate: new FormControl(undefined, Validators.required),
      generatesFine: new FormControl(false, Validators.required),
      taskNumber: new FormControl(undefined, Validators.required),
      taskStatus: new FormControl(undefined, Validators.required),
      automaticallyGenerating: new FormControl(false, Validators.required),
      generationEndDate: new FormControl(undefined),
      pendingFlag: new FormControl(false, Validators.required),
      previousFlag: new FormControl(false, Validators.required),
      taskCreationDate: new FormControl(undefined),
    });
  }

  protected override toDto(): TaskDto {
    let dto: TaskDto = this.formGroup.getRawValue();

    dto.expirationDate = dto.expirationDate ? moment(dto.expirationDate).format('YYYY-MM-DD') : undefined;
    dto.generationEndDate = dto.generationEndDate ? moment(dto.generationEndDate).format('YYYY-MM-DD') : undefined;
    dto.taskCreationDate = dto.taskCreationDate ? moment(dto.taskCreationDate).format('YYYY-MM-DD') : undefined;
    dto.user.timestampCreatedAt = dto.user.timestampCreatedAt ? moment(dto.user.timestampCreatedAt).format('YYYY-MM-DDTHH:MM:SS.sssZ') : undefined;
    dto.user.timestampUpdatedAt = dto.user.timestampUpdatedAt ? moment(dto.user.timestampUpdatedAt).format('YYYY-MM-DDTHH:MM:SS.sssZ') : undefined;

    return dto;
  }

  protected override fillFormGroup(row: any) {
    let dto = row;

    dto.expirationDate = dto.expirationDate ? moment(dto.expirationDate).toDate() : undefined;
    dto.generationEndDate = dto.generationEndDate ? moment(dto.generationEndDate).toDate() : undefined;
    dto.taskCreationDate = dto.taskCreationDate ? moment(dto.taskCreationDate).toDate() : undefined;
    dto.user.timestampCreatedAt = dto.user.timestampCreatedAt ? moment(dto.user.timestampCreatedAt).toDate() : undefined;
    dto.user.timestampUpdatedAt = dto.user.timestampUpdatedAt ? moment(dto.user.timestampUpdatedAt).toDate() : undefined;

    this.formGroup.patchValue(dto);
  }
}
