export default interface ColumnOptions {
  header: string;
  field: string;
  type?: ColumnType;
}

export enum ColumnType {
  DATE,
  BOOLEAN
}
