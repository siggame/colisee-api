import { Request, Response, NextFunction } from "express";
import * as qs from "querystring";
import { HttpError } from "./types";
import * as _ from "lodash";

import * as vars from "./vars";

export function log(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.method} ${req.path} - ?${qs.stringify(req.query)}`);
  next();
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
  if (req.headers["token"] === vars.TOKEN) return next();

  const err = new HttpError("Invalid token", 404);
  next(err);
}

export function handleErrors(err: HttpError, req: Request, res: Response) {
  res.status(err.status_code).send(err.message);
}
