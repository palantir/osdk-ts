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

import type { ObjectSet } from "../../objectSet/ObjectSet.js";
import type { EmployeeApiTest } from "../../test/EmployeeApiTest.js";

// Anchor every probe at ObjectSet.aggregate so the snapshot reflects what
// users actually see hovering `await objectSet.aggregate({...})` — including
// the WithDerivedProperties intersection that ObjectSet threads through Q.
declare const _aggregate: ObjectSet<EmployeeApiTest>["aggregate"];

// === No groupBy ===

/** The result of objectSet.aggregate({ $select: { $count: "unordered" } }). */
declare const aggregate_result_count_only: Awaited<
  ReturnType<typeof _aggregate<{ $select: { $count: "unordered" } }>>
>;

/** Aggregation across one property with multiple metrics. */
declare const aggregate_result_single_prop_multi_metrics: Awaited<
  ReturnType<
    typeof _aggregate<{
      $select: {
        "employeeId:max": "unordered";
        "employeeId:min": "unordered";
        "employeeId:avg": "unordered";
      };
    }>
  >
>;

/** Aggregation across multiple properties, including $count. */
declare const aggregate_result_mixed_props: Awaited<
  ReturnType<
    typeof _aggregate<{
      $select: {
        $count: "unordered";
        "employeeId:sum": "unordered";
        "fullName:approximateDistinct": "unordered";
      };
    }>
  >
>;

// === With groupBy ===

/** Aggregation grouped by a single property — result becomes an array of $group plus aggregations. */
declare const aggregate_result_groupBy_basic: Awaited<
  ReturnType<
    typeof _aggregate<{
      $select: { $count: "unordered" };
      $groupBy: { class: "exact" };
    }>
  >
>;

/** GroupBy with $includeNullValue: true — the group key becomes nullable. */
declare const aggregate_result_groupBy_includeNullValue: Awaited<
  ReturnType<
    typeof _aggregate<{
      $select: { $count: "unordered" };
      $groupBy: { class: { $exact: { $includeNullValue: true } } };
    }>
  >
>;

/** GroupBy a numeric property by $ranges — group becomes a startValue/endValue pair. */
declare const aggregate_result_groupBy_ranges: Awaited<
  ReturnType<
    typeof _aggregate<{
      $select: { $count: "unordered" };
      $groupBy: {
        employeeId: { $ranges: [[0, 100], [100, 200]] };
      };
    }>
  >
>;

/** GroupBy a numeric property by $fixedWidth — group is the bucket's numeric value. */
declare const aggregate_result_groupBy_fixedWidth: Awaited<
  ReturnType<
    typeof _aggregate<{
      $select: { $count: "unordered" };
      $groupBy: { employeeId: { $fixedWidth: 10 } };
    }>
  >
>;
