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

import type { InterfaceDefinition } from "@osdk/api";
import type { FetchedObjectTypeDefinition } from "../../ontology/OntologyProvider.js";
import type { Osdk } from "../../OsdkObjectFrom.js";
import type {
  InterfaceDefRef,
  UnderlyingOsdkObject,
} from "./InternalSymbols.js";
import type { ObjectHolder } from "./ObjectHolder.js";

export interface InterfaceHolderOwnProps<
  Q extends FetchedObjectTypeDefinition<any, any>,
> {
  [UnderlyingOsdkObject]: Osdk<Q> & ObjectHolder<Q>;
  [InterfaceDefRef]: InterfaceDefinition<any>;
}

export interface InterfaceHolder<
  Q extends FetchedObjectTypeDefinition<any, any>,
> extends InterfaceHolderOwnProps<Q> {
}
