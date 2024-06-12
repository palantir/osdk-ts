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

import type { OntologyObjectV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "../../MinimalClientContext.js";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import type { Osdk } from "../../OsdkObjectFrom.js";
import type { DollarAsFn } from "./getDollarAs.js";
import type { get$link } from "./getDollarLink.js";
import type {
  ClientRef,
  ObjectDefRef,
  RawObject,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";

export interface ObjectHolderPrototypeOwnProps {
  readonly [ObjectDefRef]: FetchedObjectTypeDefinition<any, any>;
  readonly [ClientRef]: MinimalClient;
  readonly "$as": DollarAsFn;
  readonly "$link": ReturnType<typeof get$link>;
  readonly "$updateInternalValues": (newValues: Record<string, any>) => void;
}
export interface ObjectHolderOwnProperties {
  [RawObject]: OntologyObjectV2;
}

export interface ObjectHolder<Q extends FetchedObjectTypeDefinition<any, any>>
  extends ObjectHolderPrototypeOwnProps, ObjectHolderOwnProperties
{
  [UnderlyingOsdkObject]: Osdk<Q>;
}
