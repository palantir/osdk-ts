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

import type { OntologyMetadata } from "./OntologyMetadata";

export type ObjectInfoFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = O["objects"][K];

export type ObjectTypesFrom<O extends OntologyDefinition<string>> =
  keyof O["objects"];

export type PropertyKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = keyof ObjectInfoFrom<O, K>["properties"];

export type PropertyDefinitionsFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = ObjectInfoFrom<O, K>["properties"];

export type PropertyDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  P extends PropertyKeysFrom<O, K>,
> = PropertyDefinitionsFrom<O, K>[P];

export interface OntologyDefinition<K extends string> {
  metadata: OntologyMetadata;
  objects: {
    [KK in K]: ObjectDefinition<KK, K>;
  };
}

export interface ObjectDefinition<
  K extends string,
  L extends string,
> {
  apiName: K;
  primaryKeyType: keyof ValidPropertyTypes;
  properties: Record<string, PropertyDefinition>;
  links: Record<string, LinkDefinition<L>>;
}

export type LinkKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = keyof ObjectInfoFrom<O, K>["links"];

export interface LinkDefinition<K extends string> {
  targetType: K;
  multiplicity: boolean;
}

export type LinkDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  L extends LinkKeysFrom<O, K>,
> = ObjectInfoFrom<O, K>["links"][L];

export interface PropertyDefinition {
  readonly?: boolean;
  displayName?: string;
  description?: string;
  type: keyof ValidPropertyTypes; // FIXME WHAT ARE THE TYPES
  nullable?: boolean;
}

export interface ValidPropertyTypes {
  string: string;
  datetime: Date;
  double: number;
  boolean: boolean;
  integer: number;
}

export type OsdkObjectPropertyType<T extends PropertyDefinition> =
  T["nullable"] extends false ? ValidPropertyTypes[T["type"]]
    : ValidPropertyTypes[T["type"]] | undefined;

export type OsdkObjectLink<
  K extends string,
  O extends OntologyDefinition<K>,
  T extends LinkDefinition<any>,
> = T["multiplicity"] extends true ? Array<OsdkObjectLink_Inner<K, O, T>>
  : OsdkObjectLink_Inner<K, O, T>;

type OsdkObjectLink_Inner<
  K extends string,
  O extends OntologyDefinition<K>,
  T extends LinkDefinition<any>,
> = T["targetType"] extends keyof O["objects"] ? O["objects"][T["targetType"]]
  : never;
