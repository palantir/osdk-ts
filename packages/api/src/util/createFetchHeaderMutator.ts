/**
 * Wraps a fetch function, allowing the headers from the `requestInit` to be modified.
 *
 * @param fetchFn the fetch function to replace
 * @param mutator function that returns the new headers to use. You may mutate the headers passed to you
 * @returns a new fetch function
 */
export function createFetchHeaderMutator(
  fetchFn: typeof fetch = fetch,
  mutator: (headers: Headers) => Promise<Headers> | Headers,
): typeof fetch {
  return async function headerMutatedFetch(
    url: RequestInfo | URL,
    requestInit?: RequestInit,
  ) {
    if (!requestInit) {
      return fetchFn(url, { headers: await mutator(new Headers()) });
    }

    return fetchFn(url, {
      ...requestInit,
      headers: await mutator(new Headers(requestInit.headers)),
    });
  };
}
