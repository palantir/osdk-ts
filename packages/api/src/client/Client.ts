import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";
import type { ObjectSetCreator } from "./ObjectSetCreator";
import type { ObjectSet, ObjectSetOptions } from "./objectSet/ObjectSet";

export type ConcreteObjectType<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = O["objects"][K];

export interface Client<O extends OntologyDefinition<any>> {
  objectSet: <const K extends ObjectTypesFrom<O>>(
    type: K,
    opts?: ObjectSetOptions<O, K>,
  ) => ObjectSet<O, K>;

  objects: ObjectSetCreator<O>;
}
