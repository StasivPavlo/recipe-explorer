import { Request, Response, NextFunction } from 'express';
import ControllerFunction from "../types/controller";

export const asyncHandler = (fn: ControllerFunction ) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
