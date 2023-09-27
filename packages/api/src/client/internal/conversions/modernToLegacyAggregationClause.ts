import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";
import type { AggregationClause } from "#client/query";
import type { Wire } from "#net";

export function modernToLegacyAggregationClause<
  T extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<T>,
  AC extends AggregationClause<T, K>,
>(select: AC) {
  return Object.entries(select).flatMap<Wire.AggregationClause>(([k, v]) => {
    if (Array.isArray(v)) {
      return (v as string[]).map((v2) => {
        return {
          type: v2,
          name: `${k}.${v2}`,
          field: k,
        };
      });
    } else {
      return [
        {
          type: v as string,
          name: `${k}.${v}`,
          field: k,
        },
      ];
    }
  });
}
