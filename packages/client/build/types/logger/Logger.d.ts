export interface Logger {
	trace: LogFn;
	debug: LogFn;
	fatal: LogFn;
	error: LogFn;
	warn: LogFn;
	info: LogFn;
	isLevelEnabled(level: string): boolean;
	child(bindings: Record<string, any>, options?: {
		level?: string
		msgPrefix?: string
	}): Logger;
}
export interface LogFn {
	(obj: unknown, msg?: string, ...args: any[]): void;
	(msg: string, ...args: any[]): void;
}
