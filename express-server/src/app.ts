import express, { Express } from 'express';
import { userRouter } from './users/users';
import { Server } from 'http';

export class App {
  app: Express;
  server: Server;
  port: number;
  host: string;

  constructor() {
    this.app = express();
    this.port = 8000;
    this.host = 'http://localhost.com';
  }

  useRoutes() {
    this.app.use('/users', userRouter);
  }

  public async init() {

    this.useRoutes();
    this.server = this.app.listen(this.port);
    console.log('Server online', this.host, ':', this.port);
  }
}

