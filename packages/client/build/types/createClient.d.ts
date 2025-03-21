import { type Client } from "./Client.js";
import { type Logger } from "./logger/Logger.js";
export declare const createClient: (baseUrl: string, ontologyRid: string | Promise<string>, tokenProvider: () => Promise<string>, options?: {
	logger?: Logger
} | undefined, fetchFn?: typeof fetch | undefined) => Client;
