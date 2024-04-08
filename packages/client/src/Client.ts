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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  VersionBound,
} from "@osdk/api";
import type { ActionSignatureFromDef } from "./actions/Actions.js";
import type { MinimalObjectSet, ObjectSet } from "./objectSet/ObjectSet.js";
import type { SatisfiesSemver } from "./SatisfiesSemver.js";

export interface Client {
  <
    Q extends
      | (ObjectTypeDefinition<any, any> & VersionBound<any>)
      | (InterfaceDefinition<any, any> & VersionBound<any>)
      | ActionDefinition<any, any, any>,
  >(
    o: Q extends VersionBound<infer V> ? (
        SatisfiesSemver<V, MaxOsdkVersion> extends true ? Q
          : Q & {
            [ErrorMessage]:
              `Your SDK requires a semver compatible version with ${V}. You have ${MaxOsdkVersion}. Update your package.json`;
          }
      )
      : Q,
  ): Q extends ObjectTypeDefinition<any, any> ? ObjectSet<Q>
    : Q extends InterfaceDefinition<any, any> ? MinimalObjectSet<Q>
    : Q extends ActionDefinition<any, any, any> ? ActionSignatureFromDef<Q>
    : never;

  __UNSTABLE_preexistingObjectSet<T extends ObjectOrInterfaceDefinition>(
    type: T,
    rid: string,
  ): ObjectSet<T>;

  ctx: unknown;
}

const MaxOsdkVersion = "0.15.0";
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage = Symbol("ErrorMessage");
