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
  ObjectOrInterfaceDefinition,
  ObjectSet,
  ObjectTypeDefinition,
  Osdk,
  QueryDefinition,
  QueryMetadata,
  VersionBound,
} from "@osdk/api";
import type {
  __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks,
  __EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet,
  MinimalObjectSet,
} from "@osdk/api/unstable";
import type { SharedClient } from "@osdk/shared.client";
import type { BulkLinkResult } from "./__unstable/createBulkLinksAsyncIterFactory.js";
import type { ActionSignatureFromDef } from "./actions/applyAction.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import type { QuerySignatureFromDef } from "./queries/types.js";
import type { SatisfiesSemver } from "./SatisfiesSemver.js";

export type CheckVersionBound<Q> = Q extends VersionBound<infer V> ? (
    SatisfiesSemver<V, MaxOsdkVersion> extends true ? Q
      : Q & {
        [ErrorMessage]:
          `Your SDK requires a semver compatible version with ${V}. You have ${MaxOsdkVersion}. Update your package.json`;
      }
  )
  : Q;

export interface Client extends SharedClient<MinimalClient> {
  <Q extends ObjectTypeDefinition>(
    o: Q,
  ): unknown extends CompileTimeMetadata<Q>["objectSet"] ? ObjectSet<Q>
    : CompileTimeMetadata<Q>["objectSet"];

  <Q extends (InterfaceDefinition)>(
    o: Q,
  ): unknown extends CompileTimeMetadata<Q>["objectSet"] ? MinimalObjectSet<Q>
    : CompileTimeMetadata<Q>["objectSet"];

  <Q extends ActionDefinition<any>>(
    o: Q,
  ): ActionSignatureFromDef<Q>;

  <Q extends QueryDefinition<any>>(
    o: Q,
  ): QuerySignatureFromDef<Q>;

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

  /**
   * WARNING. THIS METHOD IS EXPERIMENTAL AND NOT SUPPORTED YET.
   *
   * It may change at any time and does not follow semantic versioning. Use at your own risk.
   *
   *  @alpha
   */
  readonly [__EXPERIMENTAL__NOT_SUPPORTED_YET__preexistingObjectSet]: <
    T extends ObjectOrInterfaceDefinition,
  >(
    type: T,
    rid: string,
  ) => ObjectSet<T>;

  /**
   * WARNING. THIS METHOD IS EXPERIMENTAL AND NOT SUPPORTED YET.
   *
   * It may change at any time and does not follow semantic versioning. Use at your own risk.
   *
   *  @alpha
   */
  readonly [__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks]: <
    T extends ObjectOrInterfaceDefinition,
  >(
    objs: Osdk<T>[],
    links: string[],
  ) => AsyncGenerator<BulkLinkResult, void, undefined>;
}

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const MaxOsdkVersion = "2.0.1";
// END: THIS IS GENERATED CODE. DO NOT EDIT.
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage = Symbol("ErrorMessage");
