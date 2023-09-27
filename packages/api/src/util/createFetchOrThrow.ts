import { PalantirApiError } from "../client/PalantirApiError";
import { UnknownError } from "../client/UnknownError";

/**
 * Wraps a fetch plugin so that all errors (including when statusCode is not in the 200s) are converted to either PalantirApiError or UnknownError.
 *
 * If the returned promise does not have an error state, you are free to immediately call `.json()` or equivalent.
 *
 * @param fetchFn
 * @returns
 */
export function createFetchOrThrow(fetchFn: typeof fetch = fetch) {
  return async function fetchOrThrow(
    url: RequestInfo | URL,
    requestInit?: RequestInit,
  ) {
    let response;

    try {
      response = await fetchFn(url, requestInit);
    } catch (e) {
      throw convertError(e, "A network error occured");
    }

    if (!response.ok) {
      let body;
      try {
        body = await response.json();
      } catch (e) {
        throw convertError(e, "A network error occured while reading response");
      }

      throw new PalantirApiError(
        body?.message ??
          `Failed to fetch ${response.status} ${response.statusText}`,
        body?.errorName,
        body?.errorCode,
        response.status,
        body?.errorInstanceId,
        body?.parameters,
      );
    }
    return response;
  };
}

function convertError(
  e: any,
  msgIfNotError: string = "An unknown error occurred",
) {
  if (e instanceof Error) {
    return new UnknownError(e.message, "UNKNOWN", e);
  }
  return new UnknownError(msgIfNotError, "UNKNOWN");
}
