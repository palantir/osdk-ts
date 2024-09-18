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
  QueryDefinition,
  VersionBound,
} from "@osdk/api";
import type { ObjectSet } from "@osdk/client.api";
import type { SharedClient } from "@osdk/shared.client";
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
    // Q
  )
  : Q;

export interface Client extends SharedClient<MinimalClient> {
  <Q extends ObjectTypeDefinition<any, any>>(
    o: Q,
  ): Q["objectSet"];

  <Q extends ActionDefinition<any, any, any>>(
    o: Q,
  ): ActionSignatureFromDef<Q>;

  <Q extends QueryDefinition<any, any, any>>(
    o: Q,
  ): QuerySignatureFromDef<Q>;

  fetchMetadata<
    Q extends ObjectTypeDefinition<any, any>,
  >(o: Q): Promise<any>;
}

// BEGIN: THIS IS GENERATED CODE. DO NOT EDIT.
const MaxOsdkVersion = "2.0.0";
// END: THIS IS GENERATED CODE. DO NOT EDIT.
export type MaxOsdkVersion = typeof MaxOsdkVersion;
const ErrorMessage = Symbol("ErrorMessage");
