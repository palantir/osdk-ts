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
} from "../ontology/ObjectOrInterface.js";
import type {
  ObjectMetadata,
  PropertyDef,
} from "../ontology/ObjectTypeDefinition.js";
import type { BaseWithPropertyObjectSet } from "./WithPropertyObjectSet.js";

export type WithPropertyDefinition<
  T extends ObjectMetadata.Property,
> = {
  definitionId: string;
  type: T;
};

export type WithPropertiesClause<
  Q extends ObjectOrInterfaceDefinition,
> = {
  [key: string]: (
    baseObjectSet: BaseWithPropertyObjectSet<Q>,
  ) => WithPropertyDefinition<ObjectMetadata.Property>;
};
