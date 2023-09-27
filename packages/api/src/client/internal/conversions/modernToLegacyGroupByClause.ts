import type { OntologyDefinition, ObjectTypesFrom } from "#ontology";
import type { AllGroupByValues, GroupByClause } from "#client/query";
import type { Wire } from "#net";

export function modernToLegacyGroupByClause<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
>(groupByClause: GroupByClause<O, K> | undefined) {
  if (!groupByClause) return undefined;

  return Object.entries(
    groupByClause as Record<string, AllGroupByValues>,
  ).flatMap<Wire.GroupByClause>(([field, type]) => {
    if (type === "exact") {
      return [{ type, field }];
    } else if (type.exactWithLimit) {
      return [
        {
          type: "exact",
          field,
          maxGroupCount: type.exactWithLimit,
        },
      ];
    } else {
      return [];
    }
  });
}
