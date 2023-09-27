import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyKeysFrom,
  ObjectInfoFrom,
} from "#ontology";

type Q<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  P extends PropertyKeysFrom<O, K>,
> = ObjectInfoFrom<O, K>["properties"][P]["type"] extends "string"
  ? K
  : ObjectInfoFrom<O, K>["properties"][P]["type"] extends "double"
  ? K
  : never;

export type AggregatableKeys<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = keyof {
  [P in PropertyKeysFrom<O, K>]: any;
};
