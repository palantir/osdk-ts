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

import type { IncludeValuesExtending } from "../util/IncludeValuesExtending.js";
import type { InterfaceDefinition } from "./InterfaceDefinition.js";
import type {
  CompileTimeMetadata,
  ObjectTypeDefinition,
} from "./ObjectTypeDefinition.js";
import type { SimplePropertyDef } from "./SimplePropertyDef.js";
import type { WirePropertyTypes } from "./WirePropertyTypes.js";

export type ObjectOrInterfaceDefinition =
  | ObjectTypeDefinition
  | InterfaceDefinition;

export namespace DerivedObjectOrInterfaceDefinition {
  export type WithDerivedProperties<
    K extends ObjectOrInterfaceDefinition,
    D extends Record<string, SimplePropertyDef>,
  > = {
    __DefinitionMetadata: {
      properties: {
        [T in keyof D]: SimplePropertyDef.ToPropertyDef<D[T]>;
      };
      props?: {
        [T in keyof D]: SimplePropertyDef.ToRuntimeProperty<D[T]>;
      };
    } | undefined;
  } & K;
}

export type PropertyKeys<
  O extends ObjectOrInterfaceDefinition,
> =
  & (keyof CompileTimeMetadata<O>["properties"])
  & string;

export namespace PropertyKeys {
  export type Filtered<
    Q extends ObjectOrInterfaceDefinition,
    T extends WirePropertyTypes,
  > = keyof IncludeValuesExtending<
    CompileTimeMetadata<Q>["properties"],
    { type: T }
  >;
}
