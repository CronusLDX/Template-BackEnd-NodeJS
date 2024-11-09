import express from 'express';
import routes from './routes.js';
import cors from 'cors';

class Application {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export const app = new Application().server;
