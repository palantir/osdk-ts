import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";
import type { Client } from "./Client";
import type { ObjectSet } from "./objectSet/ObjectSet";

/**
 * A type that creates an object set for each object in the ontology.
 */
export type ObjectSetCreator<D extends OntologyDefinition<any>> = {
  [T in ObjectTypesFrom<D>]: ObjectSet<D, T>;
};

/**
 * Create a proxy for the object set creator.
 * @param client The client to use to create the object sets.
 * @returns A proxy for the object set creator.
 */
export function createObjectSetCreator<T extends Client<any>>(client: T) {
  return new Proxy(
    {},
    {
      get: (target, p, receiver) => {
        if (typeof p === "string") return client.objectSet(p);

        return undefined;
      },
    },
  );
}
