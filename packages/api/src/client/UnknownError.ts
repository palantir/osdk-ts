import { PalantirApiError } from "./PalantirApiError";

export class UnknownError extends PalantirApiError {
  originalError: Error | undefined;
  constructor(message: string, errorType: string, originalError?: Error) {
    super(message, errorType);
    this.originalError = originalError;
  }
}
