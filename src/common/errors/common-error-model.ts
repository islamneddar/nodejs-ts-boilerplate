import {ErrorResponse, ErrorType, ErrorValidation} from '@/common/errors/common-error-types';


export class CustomError extends Error {

  constructor(
    readonly httpStatusCode: number,
    readonly errorType: ErrorType,
    readonly message: string,
    readonly errors: string[] | null = null,
    readonly errorRaw: any = null,
    readonly errorsValidation: ErrorValidation[] | null = null,
  ) {
    super(message);

    this.name = this.constructor.name;

    this.httpStatusCode = httpStatusCode;
    this.errorType = errorType;
    this.errors = errors;
    this.errorRaw = errorRaw;
    this.errorsValidation = errorsValidation;
  }

  get HttpStatusCode() {
    return this.httpStatusCode;
  }

  get JSON(): ErrorResponse {
    return {
      errorType: this.errorType,
      errorMessage: this.message,
      errors: this.errors,
      errorRaw: this.errorRaw,
      errorsValidation: this.errorsValidation,
      stack: this.stack,
    };
  }
}