/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceDefinition } from "../ontology/InterfaceDefinition.js";
import type {
  ObjectOrInterfaceDefinition,
  PropertyKeys,
} from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata } from "../ontology/ObjectTypeDefinition.js";

export type NullabilityAdherence = false | "throw" | "drop";
export namespace NullabilityAdherence {
  export type Default = "throw";
}

export interface SelectArg<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
  S extends NullabilityAdherence = NullabilityAdherence.Default,
> {
  $select?: readonly L[];
  $includeRid?: R;
}

export interface OrderByArg<
  Q extends ObjectOrInterfaceDefinition,
  L extends PropertyKeys<Q> = PropertyKeys<Q>,
> {
  $orderBy?: {
    [K in L]?: "asc" | "desc";
  };
}

export type SelectArgToKeys<
  Q extends ObjectOrInterfaceDefinition,
  A extends SelectArg<Q, any, any>,
> = A extends SelectArg<Q, never> ? PropertyKeys<Q>
  : A["$select"] extends readonly string[] ? A["$select"][number]
  : PropertyKeys<Q>;

export interface FetchPageArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
  A extends Augments = {},
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  U extends boolean = false,
> extends AsyncIterArgs<Q, K, R, A, S, U> {
  $nextPageToken?: string;
  $pageSize?: number;
}

export interface AsyncIterArgs<
  Q extends ObjectOrInterfaceDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
  A extends Augments = {},
  S extends NullabilityAdherence = NullabilityAdherence.Default,
  U extends boolean = false,
> extends SelectArg<Q, K, R, S>, OrderByArg<Q, PropertyKeys<Q>> {
  $augment?: U extends true ? never : A;
  $__EXPERIMENTAL_selectedObjectTypes?: string[];
  $__EXPERIMENTAL_useUnstableInterfaces?: U;
}

export type Augment<
  X extends ObjectOrInterfaceDefinition,
  T extends string,
> = { [K in CompileTimeMetadata<X>["apiName"]]: T[] };

export type Augments = Record<string, string[]>;

export interface FetchInterfacePageArgs<
  Q extends InterfaceDefinition,
  K extends PropertyKeys<Q> = PropertyKeys<Q>,
  R extends boolean = false,
> extends SelectArg<Q, K, R>, OrderByArg<Q, PropertyKeys<Q>> {
  $nextPageToken?: string;
  $pageSize?: number;
  $augment?: Augments;
}
