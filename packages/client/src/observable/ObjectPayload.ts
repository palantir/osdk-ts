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

import type { ObjectTypeDefinition, Osdk } from "@osdk/api";
import type { ObjectHolder } from "../object/convertWireToOsdkObjects/ObjectHolder.js";
import type { ObserveObjectCallbackArgs } from "./ObservableClient.js";

export interface ObjectPayload
  extends Omit<ObserveObjectCallbackArgs<any>, "object">
{
  object: ObjectHolder | undefined;
}

export interface TypedObjectPayload<T extends ObjectTypeDefinition>
  extends ObjectPayload
{
  object: ObjectHolder<Osdk.Instance<T>> & Osdk.Instance<T> | undefined;
}
