export declare class PalantirApiError extends Error implements PalantirApiError {
	message: string;
	errorName?: string;
	errorCode?: string;
	statusCode?: number;
	errorInstanceId?: string;
	parameters?: any;
	constructor(message: string, errorName?: string, errorCode?: string, statusCode?: number, errorInstanceId?: string, parameters?: any);
}
