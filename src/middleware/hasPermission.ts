import { ExpressMiddlewareInterface } from "routing-controllers";
import { Request, Response, NextFunction } from "express";
import { Message } from "../constants";

export class hasPermission implements ExpressMiddlewareInterface {

    use(req: Request, res: Response, next: NextFunction): any {

        const token = req.headers["admin-token"];

        //...
        console.log(token);

        if (token && token === "test") return next();

        return res.status(401).json(Message.MISSING_PERMISSIONS);

    }

}