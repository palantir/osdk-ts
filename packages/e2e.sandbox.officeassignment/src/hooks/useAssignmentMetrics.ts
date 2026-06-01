import type { WhereClause } from "@osdk/api";
import { useOsdkObjects } from "@osdk/react";
import React from "react";
import { ASSIGNMENT_BASE_WHERE } from "../constants/baseFilter.js";
import { Assignment } from "../generatedNoCheck2/index.js";
import { combineWhere } from "../utils/combineWhere.js";

export interface AssignmentMetrics {
  readonly total: number | undefined;
  readonly shown: number | undefined;
  readonly isLoading: boolean;
}

function parseCount(totalCount: string | undefined): number | undefined {
  if (totalCount == null) {
    return undefined;
  }
  const n = Number(totalCount);
  return Number.isNaN(n) ? undefined : n;
}

/**
 * Counts of active+permanent assignments (total) and those matching the current filter (shown).
 * Uses lightweight count queries via the API's `totalCount`.
 */
export function useAssignmentMetrics(
  tableFilter: WhereClause<Assignment> | undefined,
): AssignmentMetrics {
  const total = useOsdkObjects(Assignment, {
    where: ASSIGNMENT_BASE_WHERE,
    pageSize: 1,
  });

  const shownWhere = React.useMemo<WhereClause<Assignment>>(
    () =>
      combineWhere<Assignment>([ASSIGNMENT_BASE_WHERE, tableFilter])
        ?? ASSIGNMENT_BASE_WHERE,
    [tableFilter],
  );

  // When nothing narrows the set, "shown" equals "total" — skip the duplicate count query.
  const isFiltered = tableFilter != null;
  const shown = useOsdkObjects(Assignment, {
    where: shownWhere,
    pageSize: 1,
    enabled: isFiltered,
  });

  const totalCount = parseCount(total.totalCount);

  return {
    total: totalCount,
    shown: isFiltered ? parseCount(shown.totalCount) : totalCount,
    isLoading: total.isLoading || (isFiltered && shown.isLoading),
  };
}
