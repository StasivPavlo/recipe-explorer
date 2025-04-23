import { NextFunction, Request, Response } from "express";

type ControllerFunction = (req: Request, res: Response, next: NextFunction) => any;

export default ControllerFunction;
