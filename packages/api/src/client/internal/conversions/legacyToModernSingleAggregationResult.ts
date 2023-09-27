import type { ArrayElement } from "#util";
import type { Wire } from "#net";
import type {
  AggregationClause,
  AggregationResultsWithoutGroups,
} from "#client/query";
import invariant from "tiny-invariant";

export function legacyToModernSingleAggregationResult<
  AC extends AggregationClause<any, any>,
>(
  entry: ArrayElement<Wire.AggregateObjectsResponseV2["data"]>,
): AggregationResultsWithoutGroups<any, any, AC> {
  return entry.metrics.reduce(
    (accumulator, curValue) => {
      const parts = curValue.name.split(".");
      invariant(
        parts.length == 2,
        "assumed we were getting a `${key}.${type}`",
      );
      if (!(parts[0] in accumulator)) {
        accumulator[parts[0]] = {};
      }
      accumulator[parts[0]][parts[1]] = curValue.value;

      return accumulator;
    },
    {} as AggregationResultsWithoutGroups<any, any, any>,
  );
}
