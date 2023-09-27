import type { ObjectDefinition } from "#ontology";
import type {
  AndWhereClause,
  NotWhereClause,
  OrWhereClause,
  PossibleWhereClauseFilters,
  WhereClause,
} from "#client/query";
import type { Wire } from "#net";
import invariant from "tiny-invariant";

export function modernToLegacyWhereClause<T extends ObjectDefinition<any, any>>(
  whereClause: WhereClause<T>,
): Wire.SearchJsonQueryV2 {
  if ("$and" in whereClause) {
    return {
      type: "and",
      value: (whereClause as AndWhereClause<T>).$and.map(
        modernToLegacyWhereClause,
      ),
    };
  } else if ("$or" in whereClause) {
    return {
      type: "or",
      value: (whereClause as OrWhereClause<T>).$or.map(
        modernToLegacyWhereClause,
      ),
    };
  } else if ("$not" in whereClause) {
    return {
      type: "not",
      value: modernToLegacyWhereClause((whereClause as NotWhereClause<T>).$not),
    };
  }

  const parts = Object.entries(whereClause);

  if (parts.length === 1) {
    const [field, filter] = parts[0];
    invariant(
      filter != null,
      "Defined key values are only allowed when they are not undefined.",
    );
    if (typeof filter === "string" || typeof filter === "number") {
      return {
        type: "eq",
        field,
        value: filter,
      };
    }

    invariant(
      Object.keys(filter).length === 1,
      "WhereClause Filter with multiple properties isn't allowed",
    );
    const type = Object.keys(filter)[0] as PossibleWhereClauseFilters;
    invariant(filter[type] != null);

    if (type === "ne") {
      return {
        type: "not",
        value: {
          type: "eq",
          field,
          value: filter[type],
        },
      };
    }

    return {
      type,
      field,
      value: filter[type] as any,
    };
  }

  return {
    type: "and",
    value: Object.entries(whereClause).map<Wire.SearchJsonQueryV2>(
      ([field, filter]) => {
        invariant(
          filter != null,
          "Defined key values are only allowed when they are not undefined.",
        );
        if (typeof filter === "string" || typeof filter === "number") {
          return {
            type: "eq",
            field,
            value: filter,
          };
        }

        invariant(
          Object.keys(filter).length === 1,
          "WhereClause Filter with multiple properties isn't allowed",
        );
        const q = Object.keys(filter)[0] as PossibleWhereClauseFilters;
        invariant(filter[q] != null);

        if (q === "ne") {
          return {
            type: "not",
            value: {
              type: "eq",
              field,
              value: filter[q],
            },
          };
        }

        return {
          type: q,
          field,
          value: filter[q] as any,
        };
      },
    ),
  };
}
