import type { RequestInitRetryParams } from "fetch-retry";
export declare function createRetryingFetch(fetch: typeof globalThis.fetch): (input: RequestInfo | URL, init?: (RequestInit & RequestInitRetryParams<typeof globalThis.fetch>) | undefined) => ReturnType<typeof globalThis.fetch>;
