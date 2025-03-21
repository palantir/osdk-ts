import type { GroupByClause } from "../groupby/GroupByClause.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { OrderedAggregationClause, UnorderedAggregationClause } from "./AggregationsClause.js";
export type AggregateOpts<Q extends ObjectOrInterfaceDefinition> = {
	$select: UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>
	$groupBy?: GroupByClause<Q>
};
