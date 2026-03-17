/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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
  ObjectOrInterfaceDefinition,
  Osdk,
  PrimaryKeyType,
  PropertyKeys,
} from "@osdk/api";

export type ObjectHookArgs<Q extends ObjectOrInterfaceDefinition> =
  | [Osdk.Instance<Q>, (boolean | { suspense: true } | undefined)?]
  | [
    Q,
    PrimaryKeyType<Q>,
    (
      | boolean
      | { $select?: readonly PropertyKeys<Q>[]; enabled?: boolean }
      | { $select?: readonly PropertyKeys<Q>[]; suspense: true }
      | undefined
    )?,
  ];

export interface ParsedObjectArgs<Q extends ObjectOrInterfaceDefinition> {
  typeOrApiName: Q["apiName"] | Q;
  primaryKey: PrimaryKeyType<Q>;
  mode: "offline" | undefined;
  selectArg: readonly PropertyKeys<Q>[] | undefined;
  apiNameString: string;
}

export function parseObjectArgs<Q extends ObjectOrInterfaceDefinition>(
  args: ObjectHookArgs<Q>,
): ParsedObjectArgs<Q> {
  const isInstanceSignature = "$objectType" in args[0];

  const optionsArg = !isInstanceSignature
      && args[2] != null
      && typeof args[2] === "object"
    ? args[2] as { $select?: readonly PropertyKeys<Q>[] }
    : undefined;

  const selectArg = optionsArg?.$select;
  const mode = isInstanceSignature ? "offline" as const : undefined;

  const typeOrApiName: Q["apiName"] | Q = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$objectType as Q["apiName"]
    : args[0] as Q;

  const primaryKey: PrimaryKeyType<Q> = isInstanceSignature
    ? (args[0] as Osdk.Instance<Q>).$primaryKey as PrimaryKeyType<Q>
    : args[1] as PrimaryKeyType<Q>;

  const apiNameString = typeof typeOrApiName === "string"
    ? typeOrApiName
    : typeOrApiName.apiName;

  return { typeOrApiName, primaryKey, mode, selectArg, apiNameString };
}
