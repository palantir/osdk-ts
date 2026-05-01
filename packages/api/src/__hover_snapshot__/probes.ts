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

// Probes for the hover-snapshot test in renderHovers.test.ts. Each
// `declare const probe_*: ...` declaration is rendered as a string via the
// TypeScript compiler API and snapshotted. This pins the user-facing hover
// shape of high-traffic ObjectSet methods so future type-graph refactors
// surface as snapshot diffs in code review.
//
// Adding a probe: write `declare const probe_<name>: <type>` with a JSDoc
// describing the user-facing intent (the JSDoc is required and becomes the
// snapshot's leading comment). Then run `pnpm updateSnapshots` from
// packages/api/.
//
// Useful TypeScript built-ins for sculpting the type you want to snapshot:
//   - `Parameters<F>[N]` — the Nth parameter type of a function/method.
//     Example: `Parameters<ObjectSet<E>["where"]>[0]` for the clause arg.
//   - `ReturnType<F>` — the return type of a function/method.
//     Example: `ReturnType<ObjectSet<E>["asyncIter"]>` for the iter result.
//   - `Awaited<T>` — unwrap a `Promise<X>` to `X`.
//     Example: `Awaited<ReturnType<ObjectSet<E>["fetchPage"]>>`.
//   - `typeof <value>` — reference a value's type. Combine with TS 4.7+
//     instantiation-expression syntax `typeof fn<T>` to capture what a
//     generic method returns when called with a specific type argument.
//     Example: see `_withProperties` below — declaring an intermediate
//     value lets us write `typeof _withProperties<{...}>` to model the
//     post-call shape, which is otherwise buried behind a constraint default.
//   - Index access (`["key"]`, `[number]`) — drill into an object/tuple
//     type. Example: `Foo["bar"]` or `Tuple[0]`.
//
// The JSDoc on each probe should describe the user-facing situation in
// plain English ("The clause argument of objectSet.where(...)") rather than
// restating the type-level expression. This is what reviewers see in the
// snapshot diff to understand what's being captured.

import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { EmployeeApiTest } from "../test/EmployeeApiTest.js";

// === No derived properties (the overwhelmingly common path) ===

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

// Force these to be considered "used" so a future tsconfig change with
// `noUnusedLocals` does not silently break the test.
export type _probes =
  | typeof probe_objectSet
  | typeof probe_where_clause_param
  | typeof probe_subscribe_listener_param
  | typeof probe_fetchPage_result
  | typeof probe_asyncIter_result
  | typeof probe_aggregate_param
  | typeof probe_objectSet_with_rdp
  | typeof probe_where_clause_with_rdp
  | typeof probe_withProperties_return;

// Every public member of `ObjectSet`. Split for documentation: methods we
// have probes for vs methods we've intentionally chosen to skip (covered by
// other probes, internal-only, or low-value to snapshot). When a new method
// is added to `ObjectSet`, the type-level assertion in `renderHovers.test.ts`
// fails to typecheck until the new key is acknowledged here — at which point
// the author decides whether to add a probe or to skip it.
export type ProbedObjectSetMethods =
  | "where"
  | "subscribe"
  | "fetchPage"
  | "asyncIter"
  | "aggregate"
  | "withProperties";

export type SkippedObjectSetMethods =
  | "$objectSetInternals" // internal marker, not part of user-facing surface
  | "fetchPageWithErrors" // shape mirrors fetchPage
  | "fetchOne" // shape mirrors fetchPage's element type
  | "fetchOneWithErrors" // shape mirrors fetchOne
  | "experimental_asyncIterLinks" // experimental; not stable enough to pin
  | "intersect" // returns `this` — uninteresting hover
  | "subtract" // returns `this`
  | "union" // returns `this`
  | "narrowToType" // exhaustively covered in ObjectSet.test.ts
  | "nearestNeighbors" // exhaustively covered in ObjectSet.test.ts
  | "pivotTo"; // exhaustively covered in ObjectSet.test.ts

export type KnownObjectSetMethods =
  | ProbedObjectSetMethods
  | SkippedObjectSetMethods;
