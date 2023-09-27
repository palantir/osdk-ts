import type { OntologyDefinition } from "#ontology";
import { createObjectSetCreator } from "./ObjectSetCreator";
import { createObjectSet } from "./objectSet/createObjectSet";
import type { ObjectSetFactory } from "./objectSet/ObjectSet";
import type { Client } from "./Client";
import { createThinClient } from "./createThinClient";

export function createClient<O extends OntologyDefinition<any>>(
  ontology: O,
  stack: string,
  tokenProvider: () => string,
  fetchFn: typeof globalThis.fetch = fetch,
): Client<O> {
  const thinClient = createThinClient<O>(
    ontology,
    stack,
    tokenProvider,
    fetchFn,
  );

  const objectSetFactory: ObjectSetFactory<O> = (type, opts) =>
    createObjectSet(type, thinClient, opts);

  const client: Client<O> = Object.defineProperties({} as Client<O>, {
    objectSet: { get: () => objectSetFactory },
    objects: { get: () => createObjectSetCreator(client) },
  } satisfies Record<keyof Client<any>, PropertyDescriptor>);

  return client;
}
