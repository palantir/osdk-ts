import { createFetchHeaderMutator } from "./createFetchHeaderMutator";
import { stringifyBody } from "./stringifyBody";

/**
 * Fetches the given URL, converting the body to JSON, setting the Content-Type header to application/json,
 * and calling .json() on the response.
 */
export type FetchAsJsonFn = (
  url: URL,
  requestInit: Omit<RequestInit, "body"> & { body?: object | undefined },
) => Promise<any>;
/**
 * Wraps a fetch function to set the Content-Type header to application/json, to handle JSON.stringify(),
 * and to parse the response as JSON.
 *
 * @param fetchFn The fetch function to wrap
 * @returns
 */
export function createFetchAsJson(
  fetchFn: typeof fetch = fetch,
): FetchAsJsonFn {
  fetchFn = createFetchHeaderMutator(fetchFn, (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  });

  return async function fetchAsJson(
    url: URL,
    requestInit: Omit<RequestInit, "body"> & { body?: object },
  ) {
    return (
      await fetchFn(url, {
        ...requestInit,
        body: stringifyBody(requestInit.body),
        // TODO fix headers
      })
    ).json();
  };
}
