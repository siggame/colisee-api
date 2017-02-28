/**
 * ripped off from this guy
 * https://gist.github.com/justmoon/15511f92e5216fa2624b#gistcomment-1928632
 *
 */

export interface ErrorBase extends Error {
  readonly name: string;
  readonly message: string;
  readonly stack: string;
};
export interface ErrorBaseConstructor {
  new (message: string): ErrorBase;
  readonly prototype: ErrorBase;
}

export const ErrorBase: ErrorBaseConstructor = <any>class ErrorBase {
  public constructor(message: string) {
    Object.defineProperty(this, 'name', {
      get: () => (this.constructor as any).name,
    });
    Object.defineProperty(this, 'message', {
      get: () => message,
    });
    Error.captureStackTrace(this, this.constructor);
  }
};

export class HttpError extends ErrorBase {
  public status_code: number
  public constructor(message: string, code?: number) {
    super(message);
    this.status_code = code;
  }
}

(ErrorBase as any).prototype = Object.create(Error.prototype);
ErrorBase.prototype.constructor = ErrorBase;
