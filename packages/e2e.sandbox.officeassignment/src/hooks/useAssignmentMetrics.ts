/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
  tableFilter: WhereClause<Assignment> | undefined
): AssignmentMetrics {
  const total = useOsdkObjects(Assignment, {
    where: ASSIGNMENT_BASE_WHERE,
    pageSize: 1,
  });

  const shownWhere = React.useMemo<WhereClause<Assignment>>(
    () =>
      combineWhere<Assignment>([ASSIGNMENT_BASE_WHERE, tableFilter]) ??
      ASSIGNMENT_BASE_WHERE,
    [tableFilter]
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
