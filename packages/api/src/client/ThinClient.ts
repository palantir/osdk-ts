import type * as ontology from "#ontology";
import type { FetchAsJsonFn } from "#util";

export interface ThinClient<O extends ontology.OntologyDefinition<any>> {
  ontology: O;
  stack: string;
  /**
   * The fetch function to use for all requests.
   *
   * TODO: Document what is needed to get retry logic
   */
  fetch: typeof globalThis.fetch;

  fetchJson: FetchAsJsonFn;
}
