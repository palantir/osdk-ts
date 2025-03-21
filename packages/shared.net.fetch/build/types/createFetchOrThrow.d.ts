/**
* Wraps a fetch plugin so that all errors (including when statusCode is not in the 200s) are converted to either PalantirApiError or UnknownError.
*
* If the returned promise does not have an error state, you are free to immediately call `.json()` or equivalent.
*
* @param fetchFn
* @returns
*/
export declare function createFetchOrThrow(fetchFn?: typeof fetch): (url: RequestInfo | URL, requestInit?: RequestInit) => Promise<Response>;
