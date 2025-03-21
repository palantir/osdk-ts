declare class PalantirApiError extends Error implements PalantirApiError {
    message: string;
    errorName?: string;
    errorCode?: string;
    statusCode?: number;
    errorInstanceId?: string;
    parameters?: any;
    constructor(message: string, errorName?: string, errorCode?: string, statusCode?: number, errorInstanceId?: string, parameters?: any);
}

declare class UnknownError extends PalantirApiError {
    originalError: Error | undefined;
    constructor(message: string, errorName?: string, originalError?: Error, statusCode?: number);
}

export { PalantirApiError, UnknownError };
