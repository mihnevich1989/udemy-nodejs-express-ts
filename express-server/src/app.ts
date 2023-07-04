import express, { Express } from 'express';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/user.controller';
import { ExceptionFilter } from './errors/exception.filter';
import { ILogger } from './logger/logger.interface';

export class App {
  app: Express;
  server: Server;
  port: number;
  host: string;
  logger: ILogger;
  userController: UserController;
  exceptionFilter: ExceptionFilter;

  constructor(
    logger: ILogger,
    userController: UserController,
    exceptionFilter: ExceptionFilter
  ) {
    this.app = express();
    this.port = 8000;
    this.host = 'http://localhost.com';
    this.logger = logger;
    this.userController = userController;
    this.exceptionFilter = exceptionFilter;
  }

  useRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExceptionFilters() {
    this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter));
  }

  public async init() {
    this.useRoutes();
    this.useExceptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log('Server online', this.host, ':', this.port);
  }
}

