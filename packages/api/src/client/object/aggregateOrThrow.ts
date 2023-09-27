import type { Wire } from "#net";
import { aggregateObjectsV2 } from "#net";
import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";
import {
  legacyToModernSingleAggregationResult,
  modernToLegacyAggregationClause,
  modernToLegacyGroupByClause,
  modernToLegacyWhereClause,
} from "#client/converters";
import type {
  AggregationResultsWithGroups,
  AggregationsResults,
} from "#client/query";
import invariant from "tiny-invariant";
import type { ThinClient } from "../ThinClient";
import type { AggregateOpts } from "../query/aggregations/AggregateOpts";

export async function aggregateOrThrow<
  T extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<T>,
  const AO extends AggregateOpts<T, K, any>,
>(
  thinClient: ThinClient<T>,
  objectType: K,
  req: AO,
): Promise<AggregationsResults<T, K, AO>> {
  const body: Wire.AggregateObjectsV2Body = {
    aggregation: modernToLegacyAggregationClause<T, K, AO["select"]>(
      req.select,
    ),
  };

  if (req.groupBy) {
    body.groupBy = modernToLegacyGroupByClause(req.groupBy);
  }
  if (req.where) {
    body.where = {
      where: modernToLegacyWhereClause(req.where),
      // TODO: orderBy
      // TODO The token stuff here sucks
    };
  }
  const result = await aggregateObjectsV2(
    thinClient.fetchJson,
    thinClient.stack,
    thinClient.ontology.metadata.ontologyApiName,
    objectType,
    body,
  );

  if (!req.groupBy) {
    invariant(
      result.data.length === 1,
      "no group by clause should mean only one data result",
    );

    return legacyToModernSingleAggregationResult<AO["select"]>(
      result.data[0],
    ) as any;
  }

  const ret: AggregationResultsWithGroups<T, K, AO["select"], any> =
    result.data.map((entry) => {
      return {
        group: entry.group as any,
        values: legacyToModernSingleAggregationResult(entry),
      };
    }) as any; // fixme

  return ret as any; // FIXME
}
