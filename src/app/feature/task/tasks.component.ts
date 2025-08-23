import {Component, OnInit} from '@angular/core';
import {AbstractCrud} from "../abstract-crud";
import {TaskDto} from "../../core/entities/task/task.dto";
import ColumnOptions from "../../shared/column-options";
import FieldOptions from "../../shared/field-options";
import {getAllRecurringType} from "../../core/enums/recurring-type";
import {PermissionService} from "../../core/entities/permission/permission.service";
import {MessageService} from "primeng/api";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {TaskService} from "../../core/entities/task/task.service";
import moment from "moment/moment";

@Component({
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent extends AbstractCrud<TaskDto> implements OnInit{

  protected columns: ColumnOptions[] = [
    { header: 'Nº da tarefa', field: 'taskNumber' },
    { header: 'Data de vencimento', field: 'expirationDate' },
    { header: 'Tipo de recorrência', field: 'recurringType' },
    { header: 'Gera multas', field: 'generatesFine' },
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
      lookupValues: []
    },
  ];

  protected filterFields: string[] = ['taskNumber', 'user', 'taskName'];

  constructor(
    _taskService: TaskService,
    _messageService: MessageService,
    private readonly formBuilder: FormBuilder
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
      taskCreationDate: new FormControl(undefined, Validators.required),
    });
  }
}
