import {GenericType} from "../core/enums/generic-type";
import FilterOptions from "./filter-options";

export default interface FieldOptions {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: GenericType[];
  filterOptions?: FilterOptions;
}
