import type { SingleKeyObject } from "type-fest";
import type { GroupByClause } from "../groupby/GroupByClause.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { AggregateOpts } from "./AggregateOpts.js";
import type { UnorderedAggregationClause } from "./AggregationsClause.js";
export type AggregateOptsThatErrorsAndDisallowsOrderingWithMultipleGroupBy<
	Q extends ObjectOrInterfaceDefinition,
	AO extends AggregateOpts<Q>
> = SingleKeyObject<AO["$groupBy"]> extends never ? (AO["$select"] extends UnorderedAggregationClause<Q> ? AggregateOptsThatErrors<Q, AO> : {} extends AO["$groupBy"] ? AggregateOptsThatErrors<Q, AO> : {
	$groupBy: AO["$groupBy"]
	$select: UnorderedAggregationClause<Q>
}) : AggregateOptsThatErrors<Q, AO>;
type AggregateOptsThatErrors<
	Q extends ObjectOrInterfaceDefinition,
	AO extends AggregateOpts<Q>
> = AO & {
	$select: Pick<AO["$select"], keyof AggregateOpts<Q>["$select"] & keyof AO["$select"]> & Record<Exclude<keyof AO["$select"], keyof AggregateOpts<Q>["$select"]>, never>
} & (unknown extends AO["$groupBy"] ? {} : Exclude<AO["$groupBy"], undefined> extends never ? {} : {
	$groupBy: Pick<AO["$groupBy"], keyof GroupByClause<Q> & keyof AO["$groupBy"]> & Record<Exclude<keyof AO["$groupBy"], keyof GroupByClause<Q>>, never>
});
export {};
