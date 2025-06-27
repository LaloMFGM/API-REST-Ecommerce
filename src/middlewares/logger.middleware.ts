import { Request, Response, NextFunction } from 'express';
import { buildLogger } from '../utils/logger';

const log = buildLogger('request');

export function loggerMiddleware(req: Request, _res: Response, next: NextFunction) {
  log.info(`${req.method} ${req.url}`);
  next();
}