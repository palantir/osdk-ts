export class PalantirApiError extends Error implements PalantirApiError {
  public message: string;
  public errorName?: string;
  public errorType?: string;
  public statusCode?: number;
  public errorInstanceId?: string;
  public parameters?: any;

  constructor(
    message: string,
    errorName?: string,
    errorType?: string,
    statusCode?: number,
    errorInstanceId?: string,
    parameters?: any,
  ) {
    super(message);
    this.message = message;
    this.errorName = errorName;
    this.errorType = errorType;
    this.statusCode = statusCode;
    this.errorInstanceId = errorInstanceId;
    this.parameters = parameters;
  }
}
