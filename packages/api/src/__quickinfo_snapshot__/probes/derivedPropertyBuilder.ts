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

// The (builder) => ... callback argument of objectSet.withProperties({...}).
// The clause shape is already pinned at the objectSet surface; these probes
// drill into the builder vocabulary itself — `where`, `pivotTo`,
// `selectProperty`, `aggregate` — across the constrained / unconstrained
// branches users hit while chaining.

import type { DerivedProperty } from "../../derivedProperties/DerivedProperty.js";
import type { EmployeeApiTest } from "../../test/EmployeeApiTest.js";

type Builder = DerivedProperty.Builder<EmployeeApiTest, false>;
type AggregateBuilder = DerivedProperty.AggregateBuilder<EmployeeApiTest, true>;

// Probe individual builder methods via index access (the same way users hover
// `builder.where` / `builder.selectProperty`). Probing the builder type
// directly only renders the alias name, so each per-method probe captures
// the actual signature TS shows on hover.

/** builder.where — narrows the candidate object set before chaining. */
declare const probe_builder_where: Builder["where"];

/** builder.pivotTo — follows a link to another object/interface, branching builder constraints. */
declare const probe_builder_pivotTo: Builder["pivotTo"];

/** builder.selectProperty — terminal step that picks a property of the current object set. */
declare const probe_builder_selectProperty: Builder["selectProperty"];

/** aggregateBuilder.aggregate — terminal step on the constrained branch. */
declare const probe_aggregate_builder_aggregate: AggregateBuilder["aggregate"];

/** aggregateBuilder.where — same narrowing surface, but returns an AggregateBuilder. */
declare const probe_aggregate_builder_where: AggregateBuilder["where"];

// Force instantiation of the generic Creator so we capture its post-call shape
// rather than the raw constraint default.
declare const _creator: DerivedProperty.Creator<EmployeeApiTest, "integer">;
/** The value entry in withProperties({ myProp: <here> }) — a (builder) => Definition callback. */
declare const probe_creator: typeof _creator;

/** The argument the user receives in (builder) => — equals the Builder above. */
declare const probe_creator_callback_arg: Parameters<typeof _creator>[0];

/** The return type of the (builder) => ... callback for an integer property. */
declare const probe_creator_return: ReturnType<typeof _creator>;

/** The full clause object accepted by withProperties({...}). */
declare const probe_clause: DerivedProperty.Clause<EmployeeApiTest>;
