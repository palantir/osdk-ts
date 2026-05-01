/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
  ActionDefinition,
  ActionMetadata,
  CompileTimeMetadata,
  InterfaceDefinition,
  InterfaceMetadata,
  ObjectMetadata,
  ObjectSet,
  ObjectTypeDefinition,
  QueryDefinition,
  QueryMetadata,
  VersionBound,
} from "@osdk/api";
import type {
  Experiment,
  ExperimentFns,
  MinimalObjectSet,
} from "@osdk/api/unstable";
import type { SharedClient } from "@osdk/shared.client2";
import type { ActionSignatureFromDef } from "./actions/applyAction.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import type { QuerySignatureFromDef } from "./queries/types.js";
import type { SatisfiesSemver } from "./SatisfiesSemver.js";

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
type OldSharedClient = import("@osdk/shared.client").SharedClient;

export type CheckVersionBound<Q> = Q extends VersionBound<infer V> ? (
    SatisfiesSemver<V, MaxOsdkVersion> extends true ? Q
      : Q & {
        [ErrorMessage]:
          `Your SDK requires a semver compatible version with ${V}. You have ${MaxOsdkVersion}. Update your package.json`;
      }
  )
  : Q;

export interface Client extends SharedClient, OldSharedClient {
  /**
   * Returns the operation surface for the given ontology definition. The shape of the
   * returned value is dispatched on what kind of definition is passed:
   * - object type → the object set type for that ontology object (typically a generated extension of {@link ObjectSet})
   * - interface → a {@link MinimalObjectSet} for the interface
   * - action → a callable with `applyAction` / `batchApplyAction`
   * - query → a callable with `executeFunction`
   * - experiment → the unstable feature surface for that experiment
   *
   * @param o - The object type definition to wrap.
   * @example
   * ```ts
   * const employees = await client(Employee).fetchPage({ $pageSize: 30 });
   * const employee = await client(Employee).fetchOne(12345);
   * ```
   * @returns an object set scoped to all objects of this type.
   */
  <Q extends ObjectTypeDefinition>(
    o: Q,
  ): unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q>
    : CompileTimeMetadata<Q>["objectSet"];

  /**
   * @param o - The interface definition to wrap.
   * @example
   * ```ts
   * const page = await client(MyInterface).fetchPage({ $pageSize: 30 });
   * ```
   * @returns a minimal object set over all objects implementing the interface.
   */
  <Q extends (InterfaceDefinition)>(
    o: Q,
  ): unknown extends CompileTimeMetadata<Q>["objectSet"] ? MinimalObjectSet<Q>
    : CompileTimeMetadata<Q>["objectSet"];

  /**
   * @param o - The action definition to invoke.
   * @example
   * ```ts
   * const result = await client(createEmployee).applyAction(
   *   { name: "Jane", department: "Engineering" },
   *   { $returnEdits: true },
   * );
   * ```
   * @returns a callable for applying (or batch-applying) the action.
   */
  <Q extends ActionDefinition<any>>(
    o: Q,
  ): ActionSignatureFromDef<Q>;

  /**
   * @param o - The query definition to invoke.
   * @example
   * ```ts
   * const result = await client(getEmployeeCount).executeFunction({ department: "Engineering" });
   * ```
   * @returns a callable for executing the query function.
   */
  <Q extends QueryDefinition<any>>(
    o: Q,
  ): QuerySignatureFromDef<Q>;

  /**
   * @param experiment - The experiment marker that gates an unstable feature.
   * @example
   * ```ts
   * const ref = await client(__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference)
   *   .createMediaReference({ data: blob, fileName: "media.mp4", objectType: Employee, propertyType: "photo" });
   * ```
   * @returns the experiment-specific function surface.
   */
  <
    Q extends
      | Experiment<"2.0.8">
      | Experiment<"2.1.0">
      | Experiment<"2.2.0">
      | Experiment<"2.8.0">,
  >(
    experiment: Q,
  ): ExperimentFns<Q>;

  /**
   * Fetches runtime metadata for the given ontology definition. The returned shape
   * is dispatched on the kind of definition passed: {@link ObjectMetadata},
   * {@link InterfaceMetadata}, {@link ActionMetadata}, or {@link QueryMetadata}.
   * @param o - The object type, interface, action, or query definition to look up.
   * @example
   * ```ts
   * const meta = await client.fetchMetadata(Employee);
   * console.log(meta.displayName, meta.description);
   * ```
   * @returns a promise resolving to the metadata for the given definition.
   */
  fetchMetadata<
    Q extends (
      | ObjectTypeDefinition
      | InterfaceDefinition
      | ActionDefinition<any>
      | QueryDefinition<any>
    ),
  >(o: Q): Promise<
    Q extends ObjectTypeDefinition ? ObjectMetadata
      : Q extends InterfaceDefinition ? InterfaceMetadata
      : Q extends ActionDefinition<any> ? ActionMetadata
      : Q extends QueryDefinition<any> ? QueryMetadata
      : never
  >;

  /** @internal */
  [additionalContext]: MinimalClient;
}

// DO NOT EXPORT FROM PACKAGE
/** @internal */
export const additionalContext: unique symbol = Symbol("additionalContext");

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const MaxOsdkVersion = "2.13.0";
// END: THIS IS GENERATED CODE. DO NOT EDIT.
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage: unique symbol = Symbol("ErrorMessage");
