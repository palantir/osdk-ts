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

import type { ObjectOrInterfaceDefinition } from "..";
import type { OntologyDefinition } from "./OntologyDefinition";
import type { WirePropertyTypes } from "./WirePropertyTypes";

export type ObjectTypeDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = O["objects"][K];

export type ObjectTypeKeysFrom<O extends OntologyDefinition<string>> =
  keyof O["objects"];

export type ObjectTypePropertyKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = keyof ObjectTypeDefinitionFrom<O, K>["properties"] & string;

export type ObjectTypePropertyDefinitionsFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = ObjectTypeDefinitionFrom<O, K>["properties"];

export type ObjectTypePropertyDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
  P extends ObjectTypePropertyKeysFrom<O, K>,
> = ObjectTypePropertyDefinitionsFrom<O, K>[P];

export type ObjectTypePropertyDefinitionFrom2<
  Q extends ObjectOrInterfaceDefinition<any, any>,
  P extends keyof Q["properties"] & string,
> = Q["properties"][P];

export interface ObjectInterfaceBaseDefinition<K extends string, N = unknown> {
  type: "object" | "interface";
  apiName: K & { __OsdkType?: N };
  description?: string;
  properties: Record<string, ObjectTypePropertyDefinition>;
  links: Record<
    string,
    ObjectTypeLinkDefinition<any, any>
  >;
}

export interface ObjectTypeDefinition<
  K extends string,
  N = unknown,
> extends ObjectInterfaceBaseDefinition<K, N> {
  type: "object";
  primaryKeyApiName: keyof this["properties"];
  primaryKeyType: WirePropertyTypes;

  spts?: Record<string, string>;
}

export type ObjectTypeLinkKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = keyof ObjectTypeDefinitionFrom<O, K>["links"];

export type ObjectTypeLinkKeysFrom2<O extends ObjectTypeDefinition<any>> =
  & keyof O["links"]
  & string;

export interface ObjectTypeLinkDefinition<
  O extends ObjectTypeDefinition<any, any>,
  M extends boolean,
> {
  __OsdkLinkTargetType?: O;
  targetType: O["apiName"];
  multiplicity: M;
}

export type ObjectTypeLinkDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
  L extends ObjectTypeLinkKeysFrom<O, K>,
> = ObjectTypeDefinitionFrom<O, K>["links"][L];

export type ObjectTypeLinkTargetTypeFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
  L extends ObjectTypeLinkKeysFrom<O, K>,
> = ObjectTypeLinkDefinitionFrom<O, K, L>["targetType"];

export interface ObjectTypePropertyDefinition {
  readonly?: boolean;
  displayName?: string;
  description?: string;
  type: WirePropertyTypes;
  multiplicity?: boolean;
  nullable?: boolean;
}

export type PropertyDef<
  T extends WirePropertyTypes,
  N extends "nullable" | "non-nullable" = "nullable",
  M extends "array" | "single" = "single",
  E extends Record<string, any> = {},
> =
  & {
    type: T;
    multiplicity: M extends "array" ? true : false;
    nullable: N extends "nullable" ? true : false;
  }
  & E
  & ObjectTypePropertyDefinition;
