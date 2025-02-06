/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { InterfaceDefinition } from "./InterfaceDefinition.js";
import type { ObjectTypeDefinition } from "./ObjectTypeDefinition.js";
import type { SimpleWirePropertyTypes } from "./WirePropertyTypes.js";

export type ObjectOrInterfaceDefinition =
  | ObjectTypeDefinition
  | InterfaceDefinition;

type Properties<O extends ObjectOrInterfaceDefinition> = NonNullable<
  O["__DefinitionMetadata"]
>["properties"];

export type PropertyKeys<
  O extends ObjectOrInterfaceDefinition,
> = keyof Properties<O> & string;

export type VectorType = Extract<SimpleWirePropertyTypes, "vector">;
export type VectorPropertyKeys<O extends ObjectOrInterfaceDefinition> =
  & keyof {
    [
      K in keyof Properties<O> as Properties<O>[K]["type"] extends VectorType
        ? K
        : never
    ]: any;
  }
  & string;
