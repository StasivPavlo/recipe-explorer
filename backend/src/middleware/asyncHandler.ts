import { Request, Response, NextFunction } from 'express';
import { ApiError } from './errorHandler';

export const asyncHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}; 