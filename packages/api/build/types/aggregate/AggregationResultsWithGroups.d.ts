import type { OsdkObjectPropertyType } from "../Definitions.js";
import type { GroupByClause, GroupByRange } from "../groupby/GroupByClause.js";
import type { ObjectOrInterfaceDefinition, PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups.js";
import type { OrderedAggregationClause, UnorderedAggregationClause } from "./AggregationsClause.js";
export type AggregationResultsWithGroups<
	Q extends ObjectOrInterfaceDefinition,
	A extends UnorderedAggregationClause<Q> | OrderedAggregationClause<Q>,
	G extends GroupByClause<Q> | undefined
> = ({
	$group: { [P in keyof G & PropertyKeys<Q>] : G[P] extends {
		$ranges: GroupByRange<infer T>[]
	} ? {
		startValue: T
		endValue: T
	} : OsdkObjectPropertyType<CompileTimeMetadata<Q>["properties"][P], true> }
} & AggregationResultsWithoutGroups<Q, A>)[];
