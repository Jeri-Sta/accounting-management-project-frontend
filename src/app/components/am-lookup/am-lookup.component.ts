import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import getErrorMessage from "../../shared/error-utils";
import FilterOptions from "../../shared/filter-options";
import {Table} from "primeng/table";

@Component({
  selector: 'am-lookup',
  templateUrl: './am-lookup.component.html',
  styleUrl: './am-lookup.component.scss'
})
export class AmLookupComponent implements OnInit {
  @Input()
  placeholder!: string;
  @Input()
  label!: string | undefined;
  @Input()
  formGroup!: FormGroup;
  @Input()
  controlName!: string;
  @Input()
  errors!: ValidationErrors | null | undefined;
  @Input()
  filterOptions!: FilterOptions | undefined;

  isVisible = false;
  form!: FormGroup;
  data: any[] = [];
  selectedRow!: any;
  @ViewChild('table') table!: Table;

  get filterFields(): string[] | undefined {
    return this.filterOptions?.fields.map((field) => field.name);
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.getFormGroup();
  }

  private loadRegisters() {
    const entityService = this.filterOptions?.filterEntityService;
    if (entityService) {
      entityService.list().subscribe((results) => {
        this.data = results as any[];
      })
    }
  }

  protected getEventValue(event: any) {
    return event.target.value;
  }

  private getFormGroup() {
    this.form = this.formBuilder.group({});

    let names = this.filterOptions?.fields.map((field) => {
      this.form.addControl(field.name, new FormControl());
    });
  }

  get error(): string {
    if (!this.errors) return '';

    const firstErrorKey = Object.keys(this.errors)[0];
    return getErrorMessage(firstErrorKey) || '';
  }

  get header(): string {
    return this.filterOptions?.header || '';
  }

  protected openFilter(): void {
    this.loadRegisters();
    this.isVisible = true;
  }

  protected closeFilter(): void {
    this.isVisible = false;
  }

  protected onSubmit(): void {
    this.formGroup.get(this.controlName)?.setValue(this.selectedRow);
    this.closeFilter();
  }

  protected getFieldLabel(): string {
    let fieldsToDisplay = this.filterOptions?.fieldsToDisplay;
    const form = this.formGroup.get(this.controlName);

    if (fieldsToDisplay && form?.value) {
      let finalString: string = '';
      fieldsToDisplay.forEach((field) => {
        const value = form.value[field];

        if (finalString !== '') {
          finalString = `${finalString} - ${value}`;
        } else {
          finalString = value;
        }
      });
      return finalString;
    }
    return '';
  }
}
