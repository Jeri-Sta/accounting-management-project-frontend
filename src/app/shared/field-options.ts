import {GenericType} from "../core/enums/GenericType";

export default interface FieldOptions {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  options?: GenericType[];
  lookupValues?: any[];
}
