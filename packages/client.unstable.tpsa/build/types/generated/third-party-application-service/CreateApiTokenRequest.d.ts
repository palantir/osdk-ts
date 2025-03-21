import type { TokenCapability } from "./TokenCapability.js";
/**
* A request to create a new token with a set of capabilities.
*/
export interface CreateApiTokenRequest {
	name: string;
	description: string | undefined;
	secondsToLive: number;
	capabilities: Array<TokenCapability>;
}
