import {GenericType} from "./generic-type";

export enum RecurringType {
  ANUAL = "Anual",
  MENSAL = "Mensal",
  TRIMESTRAL = "Trimestral",
}

export function getAllRecurringType(): GenericType[] {
  return [
    { name: "Anual", type: "ANUAL" },
    { name: "Mensal", type: "MENSAL" },
    { name: "Trimestral", type: "TRIMESTRAL" },
  ];
}
