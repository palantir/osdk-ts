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

import type { ObjectMetadata, Osdk } from "@osdk/api";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import type { BaseHolder } from "./BaseHolder.js";
import type { get$link } from "./getDollarLink.js";
import type { ClientRef, ObjectDefRef } from "./InternalSymbols.js";

/**
 * @internal
 *
 * The unused generic parameter `_Q` can be used as an added check when casting.
 * That is its only purpose
 */
export interface ObjectHolder<Q extends Osdk.Instance<any> = never>
  extends BaseHolder
{
  readonly [ObjectDefRef]: FetchedObjectTypeDefinition;
  readonly [ClientRef]: MinimalClient;

  readonly "$link": ReturnType<typeof get$link>;

  readonly "$metadata": ObjectMetadata;
}
