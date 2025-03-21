import { RequestInitRetryParams } from 'fetch-retry';

declare function createFetchHeaderMutator(fetchFn: typeof fetch | undefined, mutator: (headers: Headers) => Promise<Headers> | Headers): typeof fetch;

/**
 * Wraps a fetch plugin so that all errors (including when statusCode is not in the 200s) are converted to either PalantirApiError or UnknownError.
 *
 * If the returned promise does not have an error state, you are free to immediately call `.json()` or equivalent.
 *
 * @param fetchFn
 * @returns
 */
declare function createFetchOrThrow(fetchFn?: typeof fetch): (url: RequestInfo | URL, requestInit?: RequestInit) => Promise<Response>;

declare function createRetryingFetch(fetch: typeof globalThis.fetch): (input: RequestInfo | URL, init?: (RequestInit & RequestInitRetryParams<typeof globalThis.fetch>) | undefined) => ReturnType<typeof globalThis.fetch>;

export { createFetchHeaderMutator, createFetchOrThrow, createRetryingFetch };
