import { HTTPStatusCode } from '../utils/statusCodes';

interface ApiErrorProps {
  status: HTTPStatusCode;
  message: string;
  errors: any;
}

class ApiError extends Error {
  status: number;
  errors: any;

  constructor({ status, message, errors = {} }: ApiErrorProps) {
    super(JSON.stringify(message));

    this.status = status;
    this.errors = errors;
  }

  static badRequest(message: string, errors?: any) {
    return new ApiError({
      message,
      errors,
      status: HTTPStatusCode.BAD_REQUEST,
    });
  }

  static notFound(message = 'Not Found', errors?: any) {
    return new ApiError({
      message,
      errors,
      status: HTTPStatusCode.NOT_FOUND,
    });
  }

  static apiError(message = 'Api Error', errors?: any) {
    return new ApiError({
      message,
      errors,
      status: HTTPStatusCode.INTERNAL_SERVER_ERROR,
    })
  }
}

export default ApiError;
