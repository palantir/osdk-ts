import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { ValidAggregationKeys } from "./AggregatableKeys.js";
export type UnorderedAggregationClause<Q extends ObjectOrInterfaceDefinition> = { [AK in ValidAggregationKeys<Q>]? : "unordered" };
export type OrderedAggregationClause<Q extends ObjectOrInterfaceDefinition> = { [AK in ValidAggregationKeys<Q>]? : "unordered" | "asc" | "desc" };
export type AggregationClause<Q extends ObjectOrInterfaceDefinition> = UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>;
