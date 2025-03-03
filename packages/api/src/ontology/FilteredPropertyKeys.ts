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

import type { ObjectOrInterfaceDefinition } from "./ObjectOrInterface.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";

export type FilteredPropertyKeys<
  O extends ObjectOrInterfaceDefinition,
  T extends WirePropertyTypes,
> = {
  [K in keyof NonNullable<O["__DefinitionMetadata"]>["properties"]]:
    NonNullable<O["__DefinitionMetadata"]>["properties"][K]["type"] extends T
      ? K
      : never;
}[keyof NonNullable<O["__DefinitionMetadata"]>["properties"]];

export type VectorPropertyKeys<Q extends ObjectOrInterfaceDefinition> =
  FilteredPropertyKeys<Q, "vector">;
