export class HTTPError extends Error {
  statusCode: number;
  context?: string;

  constructor(code: number, message: string, context?: string) {
    super(message);
    this.statusCode = code;
    this.context = context;
  }
}
