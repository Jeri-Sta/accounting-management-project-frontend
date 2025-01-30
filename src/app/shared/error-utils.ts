const errorMessages: Record<string, string> = {
  required: 'Este campo é obrigatório',
  minlength: 'Este campo precisa ter pelo menos {requiredLength} caracteres',
  maxlength: 'Este campo não pode ter mais de {requiredLength} caracteres',
  pattern: 'Este campo não corresponde ao padrão especificado',
  email: 'Este campo precisa ser um endereço de e-mail válido',
  custom: 'Este campo possui um erro personalizado',
};

export default function getErrorMessage(err: string): string {
  return errorMessages[err] || 'Erro desconhecido.';
}
