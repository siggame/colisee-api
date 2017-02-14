 import {Request, Response, NextFunction} from "express";
 import * as qs from "querystring";

 import * as vars from "./vars";

export function log(req: Request, res: Response, next: NextFunction) {
    console.log(`${req.method} ${req.path} - ?${qs.stringify(req.query)}`);
    next();
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
    if(req.headers["token"] === vars.TOKEN) return next();
    
    next(new Error("Invalid token"));
}