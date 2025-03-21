import type { LogFn, Logger } from "./Logger.js";
interface LoggerConstructor {
	new (bindings: Record<string, any>, options?: {
		level?: string
		msgPrefix?: string
	}): Logger;
}
export declare abstract class BaseLogger implements Logger {
	#private;
	protected bindings: Record<string, any>;
	protected options: {
		level?: string
		msgPrefix?: string
	} | undefined;
	constructor(bindings: Record<string, any>, options: {
		level?: string
		msgPrefix?: string
	} | undefined, factory: LoggerConstructor);
	trace: LogFn;
	debug: LogFn;
	warn: LogFn;
	info: LogFn;
	error: LogFn;
	fatal: LogFn;
	child(bindings: Record<string, any>, options?: {
		level?: string
		msgPrefix?: string
	}): Logger;
	isLevelEnabled(level: string): boolean;
}
export {};
