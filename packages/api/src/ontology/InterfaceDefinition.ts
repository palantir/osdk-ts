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

import type { ObjectTypePropertyDefinition } from "./ObjectTypeDefinition.js";
import type { OntologyDefinition } from "./OntologyDefinition.js";

export type InterfaceDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceKeysFrom<O>,
> = O["interfaces"] extends {} ? O["interfaces"][K] : never;

export type InterfaceKeysFrom<O extends OntologyDefinition<string>> =
  keyof O["interfaces"];

export type InterfacePropertyKeysFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceKeysFrom<O>,
> = keyof InterfaceDefinitionFrom<O, K>["properties"] & string;

export type InterfacePropertyDefinitionsFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceKeysFrom<O>,
> = InterfaceDefinitionFrom<O, K>["properties"];

export type InterfacePropertyDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends InterfaceKeysFrom<O>,
  P extends InterfacePropertyKeysFrom<O, K>,
> = InterfacePropertyDefinitionsFrom<O, K>[P];

export interface InterfaceDefinition<
  K extends string,
  _L extends string,
> {
  apiName: K;
  description?: string;
  properties: Record<string, ObjectTypePropertyDefinition>;
}
