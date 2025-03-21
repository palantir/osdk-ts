import type { SharedClientContext } from "@osdk/shared.client2";
type OldSharedClientContext = import("@osdk/shared.client").SharedClientContext;
export declare function createSharedClientContext(baseUrl: string, tokenProvider: () => Promise<string>, userAgent: string, fetchFn?: typeof globalThis.fetch): SharedClientContext & OldSharedClientContext;
export {};
