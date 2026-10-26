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

import type { InterfaceType } from "./InterfaceType.js";

/**
 * Interface Schema Migrations declare impending, but not yet enforced, schema changes
 * for an interface. These give implementing object types a grace period to comply with the
 * schema change before it becomes enforced, enabling rollout of otherwise breaking schema changes.
 *
 * Presence of this field on an interface type definition opts the interface type into
 * stricter backwards-compatibility checks (e.g. you may not add a new required-to-be-implemented
 * property except via an interface schema migration).
 */
export interface InterfaceSchemaMigrations {
  /**
   * The set of in-flight transitions.
   *
   * An empty array means "opted into interface schema migrations, but no in-flight migrations".
   */
  transitions: InterfaceSchemaTransition[];
}

/**
 * A logical bundle of multiple schema migrations (e.g. adding multiple related properties at once),
 * along with metadata about the changes.
 */
export interface InterfaceSchemaTransition {
  /**
   * A stable identifier for this transition; must be unique across all transitions specified
   * by this interface type.
   *
   * Must be between 1 and 150 characters, and match `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`:
   * a letter or digit followed by letters, digits, underscores, or dashes.
   */
  id: string;
  title: string;
  description?: string;
  gracePeriod: InterfaceSchemaGracePeriod;
  /**
   * The individual migrations that are part of this transition.
   */
  instructions: InterfaceSchemaMigrationInstruction[];
}

/**
 * How long implementing object types have to adopt the schema migrations.
 */
export type InterfaceSchemaGracePeriod =
  /**
   * The grace period begins once the schema migration is installed.
   *
   * This is preferred for distributed/Marketplace artifacts as it enables
   * lagging stacks to upgrade at their own cadence.
   */
  | { type: "afterInstall"; days: number }
  /**
   * An absolute ISO-8601 UTC datetime by which the schema migration must be completed,
   * e.g. "2026-01-31T00:00:00Z".
   *
   * WARNING: this fixed deadline is baked into the published artifact: installing the
   * artifact after the deadline has passed will fail the installation.
   * Prefer `afterInstall` grace periods for Marketplace-published ontologies, as that
   * is relative rather than fixed.
   */
  | { type: "deadline"; deadline: string };

/**
 * A single interface type schema change.
 */
export type InterfaceSchemaMigrationInstruction =
  /**
   * A new or existing property will become required-to-implement once the grace period elapses.
   *
   * The referenced property must be declared `required: false` on the interface type until
   * the schema migration is finalized.
   */
  | { type: "addRequiredProperty"; property: string }
  /**
   * A new or existing interface action type constraint will become required-to-implement once the
   * grace period elapses.
   *
   * The referenced constraint must be defined directly on this interface type (not inherited) via
   * `defineInterfaceActionTypeConstraint`, and must be `requireImplementation: false` until the
   * schema migration is finalized.
   *
   * @param actionTypeConstraint the API name of the interface action type constraint
   */
  | { type: "addRequiredActionTypeConstraint"; actionTypeConstraint: string }
  /**
   * Every object type's implementation of this interface type is replaced with an implementation of
   * `replacement`, so that no object type implements this interface type once the grace period
   * elapses.
   *
   * Use this to replace an interface type with another, for example when API names change.
   * Proposals swap each object type's implementation of this interface type for the replacement.
   * Consumers must already read both interface types, because object types move over one at a time
   * during the grace period.
   *
   * The interface type must have a `deprecated` status, and this must be the only instruction of the
   * only transition it declares. Finalize the migration by keeping the `deprecated` status; delete it
   * by reverting to a non-deprecated status.
   */
  | { type: "replace"; replacement: InterfaceTypeReplacement };

export interface InterfaceTypeReplacement {
  /**
   * The interface type that replaces this one. Pass the object returned by `defineInterface`, or an
   * API name for an interface type declared as an input to this project.
   */
  interfaceType: InterfaceType | string;
  /**
   * Maps this interface type's property API names to the replacement's. Every property that is
   * required on the replacement must be a target, so that proposals produce a valid implementation.
   */
  propertyMappings: Record<string, string>;
  /**
   * Maps this interface type's link type constraint API names to the replacement's, with the same
   * semantics as `propertyMappings`.
   */
  linkTypeConstraintMappings?: Record<string, string>;
  /**
   * Maps this interface type's action type constraint API names to the replacement's, with the same
   * semantics as `propertyMappings`.
   */
  actionTypeConstraintMappings?: Record<
    string,
    InterfaceActionTypeConstraintReplacement
  >;
}

export interface InterfaceActionTypeConstraintReplacement {
  /** The API name of the replacement's action type constraint. */
  actionTypeConstraint: string;
  /**
   * Maps this action type constraint's parameter API names to the replacement constraint's. Every
   * parameter that is `requireImplementation: true` on the replacement constraint must be a target,
   * and each mapped pair must have the same type.
   */
  parameterMappings?: Record<string, string>;
}
