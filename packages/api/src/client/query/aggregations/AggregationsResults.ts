import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";
import type { AggregateOpts } from "./AggregateOpts";
import type { AggregationResultsWithGroups } from "./AggregationResultsWithGroups";
import type { AggregationResultsWithoutGroups } from "./AggregationResultsWithoutGroups";

export type AggregationsResults<
  T extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<T>,
  AO extends AggregateOpts<T, K, any>,
> = unknown extends AO["groupBy"] // groupBy is missing
  ? AggregationResultsWithoutGroups<T, K, AO["select"]>
  : Exclude<AO["groupBy"], undefined> extends never // groupBy is explicitly undefined
  ? AggregationResultsWithoutGroups<T, K, AO["select"]>
  : AggregationResultsWithGroups<T, K, AO["select"], AO["groupBy"]>;
