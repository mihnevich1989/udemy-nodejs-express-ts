import { inject, injectable } from 'inversify';
import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error';
import { NextFunction, Request, Response } from 'express';
import { TYPES } from '../types';
import { ILogger } from '../logger/logger.interface';
import 'reflect-metadata';
import { IUserController } from './user.controller.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
  constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
    super(loggerService);
    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'get', func: this.login },
    ]);
  }

  login(req: Request, res: Response, next: NextFunction): void {
    next(new HTTPError(401, 'Не авторизован', 'login'));
  }
  register(req: Request, res: Response, next: NextFunction): void {
    this.ok<string>(res, 'register');
  }
}
