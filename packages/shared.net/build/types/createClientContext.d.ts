import type { SharedClientContext } from "@osdk/shared.client2";
/**
* The goal of the thin client is to provide a way to tree shake as much as possible.
*/
/**
* @deprecated use `createSharedClientContext` from `@osdk/shared.client.impl` instead
*/
export declare function createClientContext(baseUrl: string, tokenProvider: () => Promise<string> | string, userAgent: string, fetchFn?: typeof globalThis.fetch): SharedClientContext;
