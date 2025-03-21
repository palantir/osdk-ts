import { BaseLogger } from "./BaseLogger.js";
import type { Logger } from "./Logger.js";
export declare class MinimalLogger extends BaseLogger implements Logger {
	constructor(bindings?: Record<string, any>, options?: {
		level?: string
		msgPrefix?: string
	});
}
