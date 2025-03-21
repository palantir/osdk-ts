export interface BaseAPIError {
	errorCode: string;
	errorName: string;
	errorInstanceId: string;
	parameters: Record<string, any>;
}
export declare function isBaseApiError(error: any): error is BaseAPIError;
