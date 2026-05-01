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

import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";

// === No derived properties ===

/** A bare ObjectSet<EmployeeApiTest> value. */
declare const probe_objectSet: ObjectSet<EmployeeApiTest>;

/** The clause argument of objectSet.where(...). */
declare const probe_where_clause_param: Parameters<
  ObjectSet<EmployeeApiTest>["where"]
>[0];

/** The listener argument of objectSet.subscribe(...). */
declare const probe_subscribe_listener_param: Parameters<
  ObjectSet<EmployeeApiTest>["subscribe"]
>[0];

/** The awaited result of objectSet.fetchPage(). */
declare const probe_fetchPage_result: Awaited<
  ReturnType<ObjectSet<EmployeeApiTest>["fetchPage"]>
>;

/** The result of objectSet.asyncIter(). */
declare const probe_asyncIter_result: ReturnType<
  ObjectSet<EmployeeApiTest>["asyncIter"]
>;

/** The req argument of objectSet.aggregate(...). */
declare const probe_aggregate_param: Parameters<
  ObjectSet<EmployeeApiTest>["aggregate"]
>[0];

// === With derived properties ===

/** An ObjectSet with a derived property mom: integer. */
declare const probe_objectSet_with_rdp: ObjectSet<
  EmployeeApiTest,
  { mom: "integer" }
>;

/** The clause argument of .where(...) on an ObjectSet with a derived mom. */
declare const probe_where_clause_with_rdp: Parameters<
  ObjectSet<EmployeeApiTest, { mom: "integer" }>["where"]
>[0];

// TS instantiation-expression form so we capture the post-call shape, not the
// constraint default `{ [x: string]: SimplePropertyDef; }`.
declare const _withProperties: ObjectSet<EmployeeApiTest>["withProperties"];
/** The result of objectSet.withProperties({ mom: ..., dad: ... }). */
declare const probe_withProperties_return: ReturnType<
  typeof _withProperties<{ mom: "integer"; dad: "string" | undefined }>
>;
