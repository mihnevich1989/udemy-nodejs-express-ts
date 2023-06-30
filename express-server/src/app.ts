import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'http';
import { LoggerService } from './logger/logger.service';

export class App {
  app: Express;
  server: Server;
  port: number;
  host: string;
  logger: LoggerService;

  constructor(logger: LoggerService) {
    this.app = express();
    this.port = 8000;
    this.host = 'http://localhost.com';
    this.logger = logger;
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {

    this.useRoutes();
    this.server = this.app.listen(this.port);
    this.logger.log('Server online', this.host, ':', this.port);
  }
}

