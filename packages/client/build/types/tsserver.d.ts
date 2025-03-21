import type { Subprocess } from "execa";
import { EventEmitter } from "node:events";
import { server as s } from "typescript";
import type { Logger } from "./logger/Logger.js";
type RequestFn<
	T extends s.protocol.Request,
	X extends s.protocol.Response = never
> = (args: T["arguments"]) => Promise<{
	req: T
	resp: X
}>;
declare class TsServerImpl extends EventEmitter<{
	exit: []
}> {
	#private;
	constructor(tsServerPath: string, logger: Logger);
	get subprocess(): Subprocess<{
		ipc: true
		serialization: "json"
	}> | undefined;
	start(): Promise<this>;
	stop(): void;
	getOneMessage<X>(filter?: (m: unknown) => m is X): Promise<X>;
	sendOpenRequest: RequestFn<s.protocol.OpenRequest>;
	sendQuickInfoRequest: RequestFn<s.protocol.QuickInfoRequest, s.protocol.QuickInfoResponse>;
}
export type TsServer = Omit<TsServerImpl, Exclude<keyof EventEmitter, "on" | "addListener" | "off" | "once" | "removeListener" | "removeAllListeners">>;
export declare function startTsServer(logger: Logger): Promise<TsServer>;
export declare function isEvent(m: unknown): m is s.protocol.Event;
export declare function isResponse(m: unknown): m is s.protocol.Response;
export declare function isProjectLoadingStart(m: unknown): m is s.protocol.ProjectLoadingStartEvent;
export declare function isProjectLoadingEnd(m: unknown): m is s.protocol.ProjectLoadingStartEvent;
export declare function isQuickInfoResponse(m: unknown, requestSeq?: number): m is s.protocol.QuickInfoResponse;
export {};
