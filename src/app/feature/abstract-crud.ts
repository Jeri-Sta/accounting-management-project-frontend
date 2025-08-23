import {FormGroup} from "@angular/forms";
import {Table} from "primeng/table";
import {EntityService} from "../core/entities/entity.service";
import {MessageService} from "primeng/api";
import {finalize} from "rxjs";
import {PermissionDto} from "../core/entities/permission/permission.dto";

export abstract class AbstractCrud<T> {

  protected selectedRows: any[] = [];
  protected formGroup!: FormGroup;
  protected table!: Table;
  protected visibleForm: boolean = false;
  protected loading: boolean = false;
  protected isNew!: boolean;
  protected registers!: T[];

  protected constructor(protected entityService: EntityService<any>, protected messageService: MessageService) {
    this.entityService = entityService;
    this.messageService = messageService;
  }

  protected onChangeSelection(event: any) {
    this.selectedRows = event;
  }

  protected handleTableReady(table: any) {
    this.table = table;
  }

  protected onRowSelect(row: any) {
    this.isNew = false;
    this.fillFormGroup(row);
    this.visibleForm = true;
  }

  protected closeFormScreen() {
    this.formGroup.reset();
    this.visibleForm = false;
  }

  protected newRegister() {
    this.isNew = true;
    this.visibleForm = true;
  }

  protected getRegisters() {
    return this.entityService.list().subscribe((registers) => {
      this.registers = registers as T[];
    });
  }

  protected saveForm(): void {
    const observable = this.isNew
      ? this.getInsertObservable()
      : this.getUpdateObservable();

    this.loading = true;
    observable
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'O registro foi criado com sucesso!',
        });
        this.formGroup.reset();
        this.visibleForm = false;
        this.getRegisters();
        this.loading = false;
      });
  }

  protected getInsertObservable() {
    return this.entityService.insert(this.toDto());
  }

  protected getUpdateObservable() {
    return this.entityService.update(this.toDto());
  }

  protected deleteForm() {
    this.loading = true;
    this.entityService
      .delete(this.formGroup.get('id')?.value)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'O registro foi excluído com sucesso!',
        });
        this.formGroup.reset();
        this.visibleForm = false;
        this.getRegisters();
        this.loading = false;
      });
  }

  protected deleteGrid() {
    const selectedRecords: PermissionDto[] = this.selectedRows;
    const idsToDelete: number[] = selectedRecords.map((record) => record.id);

    idsToDelete.forEach((id) => {
      this.entityService.delete(id).subscribe(() => {
        this.getRegisters();
      });
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'Os registros foram excluídos com sucesso!',
    });
  }

  protected abstract getFormGroup(): void;

  protected abstract toDto(): T;

  protected abstract fillFormGroup(row: any): void;
}
