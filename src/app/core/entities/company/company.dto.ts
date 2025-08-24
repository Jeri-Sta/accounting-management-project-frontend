export interface CompanyDto {
  id: number;
  cnpj: string;
  descriptionCadastralStatus: string;
  registrationStatusDate: string | undefined;
  dateInitialActivity: string | undefined;
  cnaeTaxDescription: string;
}
