import type { SimplePropertyDef, WhereClause } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react";
import React from "react";
import { ASSIGNMENT_BASE_WHERE } from "../constants/baseFilter.js";
import { Assignment } from "../generatedNoCheck2/index.js";
import {
  buildLatestStatusQuery,
  type LatestStatusSelection,
} from "../utils/statusFilter.js";

export interface MatchedKeysResult {
  /** The assignment primary keys whose latest status matches, or `undefined` when no filter is active. */
  readonly matchedKeys: string[] | undefined;
  readonly isLoading: boolean;
  readonly error: Error | undefined;
}

/**
 * Runs the latest-status RDP query (targetMax / diff / count aggregations over the StatusUpdate
 * link) and returns the matching assignment primary keys. Returns `matchedKeys: undefined` when no
 * selections are active, so callers can skip narrowing entirely.
 */
export function useMatchedAssignmentKeys(
  selections: readonly LatestStatusSelection[],
  composeAcrossTypes: "$and" | "$or",
): MatchedKeysResult {
  const query = React.useMemo(
    () => buildLatestStatusQuery(selections, { composeAcrossTypes }),
    [selections, composeAcrossTypes],
  );

  const where = React.useMemo<
    WhereClause<Assignment, Record<string, SimplePropertyDef>> | undefined
  >(
    () =>
      query == null
        ? undefined
        : { $and: [ASSIGNMENT_BASE_WHERE, query.where] },
    [query],
  );

  const { data, isLoading, error } = useOsdkObjects<
    Assignment,
    Record<string, SimplePropertyDef>
  >(Assignment, {
    where,
    withProperties: query?.withProperties,
    enabled: query != null,
    pageSize: 100,
    // Fetch every matching key, not just the first page, so the table + metrics never under-report.
    autoFetchMore: true,
  });

  const matchedKeys = React.useMemo(
    () => (query == null ? undefined : (data ?? []).map((o) => o.$primaryKey)),
    [query, data],
  );

  return { matchedKeys, isLoading, error };
}
