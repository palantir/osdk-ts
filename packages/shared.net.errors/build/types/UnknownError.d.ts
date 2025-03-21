import { PalantirApiError } from "./PalantirApiError.js";
export declare class UnknownError extends PalantirApiError {
	originalError: Error | undefined;
	constructor(message: string, errorName?: string, originalError?: Error, statusCode?: number);
}
