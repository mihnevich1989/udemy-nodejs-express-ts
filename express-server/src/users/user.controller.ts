import { BaseController } from '../common/base.controller';
import { HTTPError } from '../errors/http-error';
import { LoggerService } from '../logger/logger.service';
import { NextFunction, Request, Response } from 'express';

export class UserController extends BaseController {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'get', func: this.login }
    ]);
  }

  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'Не авторизован', 'login'));
  }
  register(req: Request, res: Response, next: NextFunction) {
    this.ok<string>(res, 'register');
  }
}
