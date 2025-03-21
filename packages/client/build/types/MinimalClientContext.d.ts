import type { SharedClientContext } from "@osdk/shared.client2";
import type { Logger } from "./logger/Logger.js";
import type { OntologyProvider } from "./ontology/OntologyProvider.js";
declare const tag: unique symbol;
export type ClientCacheKey = {} & {
	readonly [tag]: void
};
export type RequestContext = {
	finalMethodCall?: string
};
export interface MinimalClient extends SharedClientContext {
	ontologyRid: string | Promise<string>;
	ontologyProvider: OntologyProvider;
	logger?: Logger;
	clientCacheKey: ClientCacheKey;
	requestContext: RequestContext;
}
export type MinimalClientParams = {
	metadata: MinimalClientMetadata
	provider: OntologyProvider
};
export interface MinimalClientMetadata {
	ontologyRid: string | Promise<string>;
}
export {};
