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

import type {
  InterfaceDefinition,
  InterfaceDefinitionFrom,
  InterfaceKeysFrom,
  InterfacePropertyKeysFrom,
} from "./InterfaceDefinition.js";
import type {
  ObjectTypeDefinition,
  ObjectTypeDefinitionFrom,
  ObjectTypeKeysFrom,
  ObjectTypePropertyKeysFrom,
} from "./ObjectTypeDefinition.js";

import type { OntologyDefinition } from "./OntologyDefinition.js";

export type ObjectOrInterfaceKeysFrom<O extends OntologyDefinition<any, any>> =
  | ObjectTypeKeysFrom<O>
  | InterfaceKeysFrom<O>;

export type ObjectOrInterfaceDefinition<K extends string, L extends string> =
  | ObjectTypeDefinition<K, L>
  | InterfaceDefinition<K, L>;

export type ObjectOrInterfacePropertyKeysFrom<
  O extends OntologyDefinition<any, any>,
  K extends ObjectOrInterfaceKeysFrom<O>,
> = K extends InterfaceKeysFrom<O> ? InterfacePropertyKeysFrom<O, K>
  : ObjectTypePropertyKeysFrom<O, K>;

export type ObjectOrInterfaceDefinitionFrom<
  O extends OntologyDefinition<any, any>,
  K extends ObjectOrInterfaceKeysFrom<O>,
> = K extends InterfaceKeysFrom<O> ? InterfaceDefinitionFrom<O, K>
  : ObjectTypeDefinitionFrom<O, K>;
