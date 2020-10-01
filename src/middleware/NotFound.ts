import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';
import { Request, Response } from 'express';
import { Message, Code } from '../constants';

@Middleware({ type: 'after' })
export class NotFound implements ExpressMiddlewareInterface {

    public use(req: Request, res: Response) {
        if (!res.headersSent) res.status(Code.ROUTE_NOT_FOUND).json(Message.ROUTE_NOT_FOUND);
        res.end();
    }
}