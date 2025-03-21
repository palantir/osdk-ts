import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { AggregatableKeys, ValidAggregationKeys } from "./AggregatableKeys.js";
import type { AggregateOpts } from "./AggregateOpts.js";
import type { AggregationResultsWithGroups } from "./AggregationResultsWithGroups.js";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups.js";
export type AggregationsResults<
	Q extends ObjectOrInterfaceDefinition,
	AO extends AggregateOpts<Q>
> = Exclude<keyof AO["$select"], ValidAggregationKeys<Q>> extends never ? unknown extends AO["$groupBy"] ? AggregationResultsWithoutGroups<Q, AO["$select"]> : Exclude<AO["$groupBy"], undefined> extends never ? AggregationResultsWithoutGroups<Q, AO["$select"]> : Exclude<keyof AO["$groupBy"], AggregatableKeys<Q>> extends never ? AggregationResultsWithGroups<Q, AO["$select"], AO["$groupBy"]> : `Sorry, the following are not valid groups for an aggregation: ${Exclude<keyof AO["$groupBy"] & string, AggregatableKeys<Q>>}` : `Sorry, the following are not valid selectors for an aggregation: ${Exclude<keyof AO["$select"] & string, ValidAggregationKeys<Q>>}`;
