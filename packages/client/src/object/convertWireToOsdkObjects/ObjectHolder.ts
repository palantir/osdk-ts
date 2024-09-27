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

import type { Osdk } from "@osdk/api";
import type { OntologyObjectV2 } from "@osdk/internal.foundry.core";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import type { DollarAsFn } from "./getDollarAs.js";
import type { get$link } from "./getDollarLink.js";
import type {
  ClientRef,
  ObjectDefRef,
  RawObject,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";

/** @internal */
export interface ObjectHolderPrototypeOwnProps {
  readonly [ObjectDefRef]: FetchedObjectTypeDefinition;
  readonly [ClientRef]: MinimalClient;
  readonly "$as": DollarAsFn;
  readonly "$link": ReturnType<typeof get$link>;
  readonly "$updateInternalValues": (newValues: Record<string, any>) => void;
}
/** @internal */
export interface ObjectHolderOwnProperties {
  [RawObject]: OntologyObjectV2;
}

/** @internal */
export interface ObjectHolder<Q extends FetchedObjectTypeDefinition>
  extends ObjectHolderPrototypeOwnProps, ObjectHolderOwnProperties
{
  [UnderlyingOsdkObject]: Osdk<Q>;
}
