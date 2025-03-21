import type { ConfidentialOauthClient } from "./ConfidentialOauthClient.js";
/**
* @param client_id
* @param client_secret
* @param url the base url of your foundry server
* @param scopes
* @param fetchFn
* @param ctxPath
* @returns which can be used as a token provider
*/
export declare function createConfidentialOauthClient(client_id: string, client_secret: string, url: string, scopes?: string[], fetchFn?: typeof globalThis.fetch, ctxPath?: string): ConfidentialOauthClient;
