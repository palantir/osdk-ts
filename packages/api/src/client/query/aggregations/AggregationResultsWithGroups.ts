import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyKeysFrom,
  OsdkObjectPropertyType,
  PropertyDefinitionFrom,
} from "#ontology";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups";
import type { AggregationClause } from "./AggregationsClause";
import type { GroupByClause } from "./GroupByClause";

export type AggregationResultsWithGroups<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  A extends AggregationClause<O, K>,
  G extends GroupByClause<O, K> | undefined,
> = {
  group: {
    [P in keyof G & PropertyKeysFrom<O, K>]: OsdkObjectPropertyType<
      PropertyDefinitionFrom<O, K, P>
    >;
  };
  values: AggregationResultsWithoutGroups<O, K, A>;
}[];
