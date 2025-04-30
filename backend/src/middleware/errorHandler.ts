import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { HTTPStatusCode } from '../utils/statusCodes';
import ApiError from '../exception/ApiError';

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error('Error:', err);

  if (err instanceof ApiError) {
    res.status(err.status).json({
      status: 'error',
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
    return;
  }

  if (err.name === 'AxiosError') {
    res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: 'External API error occurred',
      ...(process.env.NODE_ENV === 'development' && { details: err.message }),
    });
    return;
  }

  res.status(HTTPStatusCode.INTERNAL_SERVER_ERROR).json({
    status: 'error',
    message: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};
