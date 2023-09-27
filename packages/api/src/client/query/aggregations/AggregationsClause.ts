import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyDefinitionsFrom,
} from "#ontology";
import type { AggregatableKeys } from "./AggregatableKeys";

type StringAggregateOption = "approximateDistinct";
type NumericAggregateOption =
  | "min"
  | "max"
  | "sum"
  | "avg"
  | "approximateDistinct";

export type AggregationClause<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in AggregatableKeys<O, K>]?: PropertyDefinitionsFrom<
    O,
    K
  >[P]["type"] extends "string"
    ? StringAggregateOption | StringAggregateOption[]
    : PropertyDefinitionsFrom<O, K>[P]["type"] extends "double"
    ? NumericAggregateOption | NumericAggregateOption[]
    : PropertyDefinitionsFrom<O, K>[P]["type"];
};
