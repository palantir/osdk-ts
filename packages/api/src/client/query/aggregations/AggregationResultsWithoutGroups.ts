import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyKeysFrom,
  OsdkObjectPropertyType,
  PropertyDefinitionFrom,
} from "#ontology";
import type { StringArrayToUnion } from "#util";
import type { AggregationClause } from "./AggregationsClause";

export type AggregationResultsWithoutGroups<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  AC extends AggregationClause<O, K>,
> = {
  [P in PropertyKeysFrom<O, K>]: AC[P] extends readonly string[] | string
    ? {
        [Z in StringArrayToUnion<AC[P]>]: Z extends "approximateDistinct"
          ? number
          : OsdkObjectPropertyType<PropertyDefinitionFrom<O, K, P>>;
      }
    : never;
};
