import type { OntologyDefinition } from "#ontology";
import {
  createFetchAsJson,
  createFetchHeaderMutator,
  createFetchOrThrow,
  createRetryingFetch,
} from "#util";
import type { ThinClient } from "./ThinClient";

/**
 * The goal of the thin client is to provide a way to tree shake as much as possible.
 */

export function createThinClient<T extends OntologyDefinition<any>>(
  ontology: T,
  stack: string,
  tokenProvider: () => string,
  fetchFn: typeof globalThis.fetch = fetch,
): ThinClient<T> {
  const retryingFetchWithAuthOrThrow = createFetchHeaderMutator(
    createRetryingFetch(createFetchOrThrow(fetchFn)),
    async (headers) => {
      const token = await tokenProvider();
      headers.set("Authorization", `Bearer ${token}`);
      headers.set("Fetch-User-Agent", ontology.metadata.userAgent);
      return headers;
    },
  );

  return {
    ontology,
    stack,
    fetch: retryingFetchWithAuthOrThrow,
    fetchJson: createFetchAsJson(retryingFetchWithAuthOrThrow),
  };
}
