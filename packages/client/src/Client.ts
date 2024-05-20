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
  ObjectTypeDefinition,
  VersionBound,
} from "@osdk/api";
import type { SharedClient } from "@osdk/shared.net";
import type { ActionSignatureFromDef } from "./actions/Actions.js";
import type { MinimalClient } from "./MinimalClientContext.js";
import type { ObjectSet } from "./objectSet/ObjectSet.js";
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
  <Q extends (ObjectTypeDefinition<any, any> & VersionBound<any>)>(
    o: CheckVersionBound<Q>,
  ): ObjectSet<Q>;

  <Q extends ActionDefinition<any, any, any>>(
    o: CheckVersionBound<Q>,
  ): ActionSignatureFromDef<Q>;
}

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const MaxOsdkVersion = "0.20.0";
// END: THIS IS GENERATED CODE. DO NOT EDIT.
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage = Symbol("ErrorMessage");
