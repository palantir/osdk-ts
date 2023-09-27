import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyDefinitionFrom,
} from "#ontology";
import type { AggregatableKeys } from "./AggregatableKeys";
import type { GroupByMapper } from "./GroupByMapper";

export type GroupByClause<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in AggregatableKeys<O, K>]?: GroupByEntry<O, K, P>;
};
export type StringGroupByValue = "exact" | { exactWithLimit: number };

type GroupByEntry<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  P extends AggregatableKeys<O, K>,
> = PropertyDefinitionFrom<O, K, P>["type"] extends keyof GroupByMapper
  ? GroupByMapper[PropertyDefinitionFrom<O, K, P>["type"]]
  : never;

export type AllGroupByValues = GroupByMapper[keyof GroupByMapper];
