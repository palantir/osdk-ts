export declare class ExitProcessError extends Error {
	readonly errorCode: number;
	readonly msg?: string;
	readonly tip?: string;
	readonly originalError?: Error | undefined;
	constructor(errorCode: number, msg?: string, tip?: string, originalError?: Error | undefined);
}
