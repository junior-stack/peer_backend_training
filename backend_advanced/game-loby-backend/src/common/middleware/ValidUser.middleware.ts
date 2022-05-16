import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidUserMiddleWare implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const userID = req.params.userID;
  }
}
