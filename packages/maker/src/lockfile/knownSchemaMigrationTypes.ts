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

import type {
  InterfaceSchemaGracePeriod,
  InterfaceSchemaMigrationInstruction,
} from "../api/interface/InterfaceSchemaMigrations.js";

/**
 * Which schema migration discriminants this version of maker understands.
 *
 * Only reading a persisted lockfile needs these. A lockfile can have been written by a newer maker
 * than the one now reading it, so parsing has to ask whether it recognizes a discriminant before
 * trusting it — a question that never arises for an authored definition, where the type system has
 * already settled it.
 */

/**
 * Whether `type` names an instruction variant this version of maker understands. Takes `unknown`
 * because its callers are reading unvalidated on-disk data.
 */
export function isKnownInstructionType(type: unknown): boolean {
  return (
    typeof type === "string" && Object.hasOwn(KNOWN_INSTRUCTION_TYPES, type)
  );
}

/**
 * Whether `type` names a grace period kind this version of maker understands. Takes `unknown`
 * because its callers are reading unvalidated on-disk data.
 */
export function isKnownGracePeriodType(type: unknown): boolean {
  return (
    typeof type === "string" && Object.hasOwn(KNOWN_GRACE_PERIOD_TYPES, type)
  );
}

/**
 * Total over the instruction discriminant by construction, so adding a variant is a compile error
 * here rather than a lockfile silently accepting an instruction maker cannot apply. A `switch`
 * cannot stand in for this: the set of known types is needed as runtime data, not control flow.
 */
const KNOWN_INSTRUCTION_TYPES: Record<
  InterfaceSchemaMigrationInstruction["type"],
  true
> = {
  addRequiredProperty: true,
};

/**
 * Total over the grace period discriminant by construction, so adding a kind is a compile error
 * here rather than a lockfile silently accepting a grace period maker cannot compare.
 */
const KNOWN_GRACE_PERIOD_TYPES: Record<
  InterfaceSchemaGracePeriod["type"],
  true
> = {
  afterInstall: true,
  deadline: true,
};
