export type IError = { field: string; message: string };

export interface IErrorResponse {
  errors: IError[];
  data?: any;
}
