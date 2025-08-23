import FieldOptions from "./field-options";
import ColumnOptions from "./column-options";
import {EntityService} from "../core/entities/entity.service";

export default interface FilterOptions {
  header: string;
  fields: FieldOptions[];
  columns: ColumnOptions[];
  filterEntityService: EntityService<any>;
  fieldsToDisplay: string[];
}
