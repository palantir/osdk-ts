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

// Probes for the hover-snapshot test. See README.md for workflow and
// objectSetProbes.ts for the type-utility cheat sheet.

import type { AggregationsResults } from "../aggregate/AggregationsResults.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";

// === No groupBy ===

/** The result of objectSet.aggregate({ $select: { $count: "unordered" } }). */
declare const probe_count_only: AggregationsResults<
  EmployeeApiTest,
  { $select: { $count: "unordered" } }
>;

/** Aggregation across one property with multiple metrics. */
declare const probe_single_prop_multi_metrics: AggregationsResults<
  EmployeeApiTest,
  {
    $select: {
      "employeeId:max": "unordered";
      "employeeId:min": "unordered";
      "employeeId:avg": "unordered";
    };
  }
>;

/** Aggregation across multiple properties, including $count. */
declare const probe_mixed_props: AggregationsResults<
  EmployeeApiTest,
  {
    $select: {
      $count: "unordered";
      "employeeId:sum": "unordered";
      "fullName:approximateDistinct": "unordered";
    };
  }
>;

// === With groupBy ===

/** Aggregation grouped by a single property — result becomes an array of $group plus aggregations. */
declare const probe_with_groupBy: AggregationsResults<
  EmployeeApiTest,
  {
    $select: { $count: "unordered" };
    $groupBy: { class: "exact" };
  }
>;

/** GroupBy with $includeNullValue: true — the group key becomes nullable. */
declare const probe_groupBy_includeNullValue: AggregationsResults<
  EmployeeApiTest,
  {
    $select: { $count: "unordered" };
    $groupBy: { class: { $exact: { $includeNullValue: true } } };
  }
>;

/** GroupBy a numeric property by $ranges — group becomes a startValue/endValue pair. */
declare const probe_groupBy_ranges: AggregationsResults<
  EmployeeApiTest,
  {
    $select: { $count: "unordered" };
    $groupBy: {
      employeeId: { $ranges: [[0, 100], [100, 200]] };
    };
  }
>;

/** GroupBy a numeric property by $fixedWidth — group is the bucket's numeric value. */
declare const probe_groupBy_fixedWidth: AggregationsResults<
  EmployeeApiTest,
  {
    $select: { $count: "unordered" };
    $groupBy: { employeeId: { $fixedWidth: 10 } };
  }
>;
