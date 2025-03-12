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

import type {
  ObjectOrInterfaceDefinition,
  ObjectSpecifier,
  Osdk,
} from "@osdk/api";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import type { get$link } from "./getDollarLink.js";
import type { InterfaceHolder } from "./InterfaceHolder.js";
import type {
  ClientRef,
  ObjectDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";

/** @internal */
export interface BaseHolder {
  readonly [UnderlyingOsdkObject]: ObjectHolder;

  readonly $apiName: string;
  readonly $objectType: string;
  readonly $primaryKey: string | number | boolean;
  readonly $title: string | undefined;
  readonly $objectSpecifier: ObjectSpecifier<any>;

  readonly "$as": (
    newDef: string | ObjectOrInterfaceDefinition,
  ) => ObjectHolder | InterfaceHolder;

  readonly "$clone": (
    newProps?: Record<string, any>,
  ) => this;

  // [key: `$$${string}`]: any;
  // Unlike SimpleOsdkProperties, all of our remaining types are unknown as the full
  // union is basically `any` when you consider the above fields.
  [key: string]: unknown;
}

/**
 * @internal
 *
 * The unused generic parameter `_Q` can be used as an added check when casting.
 * That is its only purpose
 */
export interface ObjectHolder<_Q extends Osdk.Instance<any> = never>
  extends BaseHolder
{
  readonly [ObjectDefRef]: FetchedObjectTypeDefinition;
  readonly [ClientRef]: MinimalClient;

  readonly "$link": ReturnType<typeof get$link>;
}
