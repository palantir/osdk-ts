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

import type GeoJSON from "geojson";
import type { ActionDefinition } from "./ActionDefinition";
import type { OntologyMetadata } from "./OntologyMetadata";
import type { QueryDefinition } from "./QueryDefinition";

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

export interface OntologyDefinition<
  K extends string,
  A extends string = any,
  Q extends string = any,
> {
  metadata: OntologyMetadata;
  objects: {
    [KK in K]: ObjectDefinition<KK, K>;
  };
  actions: {
    [AA in A]: ActionDefinition<AA, K>;
  };
  queries: {
    [QQ in Q]: QueryDefinition<QQ, K>;
  };
}

export interface ObjectDefinition<
  K extends string,
  L extends string,
> {
  apiName: K;
  description?: string;
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

export type LinkTargetTypeFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  L extends LinkKeysFrom<O, K>,
> = LinkDefinitionFrom<O, K, L>["targetType"];

export interface PropertyDefinition {
  readonly?: boolean;
  displayName?: string;
  description?: string;
  type: keyof ValidPropertyTypes; // FIXME WHAT ARE THE TYPES
  multiplicity?: boolean;
  nullable?: boolean;
}

// When these values are not an array, the raw and converted
// types are the same. When it is an array, the converted type
// is on the right (from, to)
export interface ValidPropertyTypes {
  string: string;
  datetime: string;
  double: number;
  boolean: boolean;
  integer: number;
  timestamp: string;
  short: number;
  long: number;
  float: number;
  decimal: number;
  byte: number;

  numericTimeseries: any;
  stringTimeseries: any;

  attachment: any;
  geopoint: GeoJSON.Point;
  geoshape: GeoJSON.Geometry;
}

type MaybeArray<T extends { multiplicity?: boolean | undefined }, U> =
  T["multiplicity"] extends true ? Array<U> : U;

type MaybeNullable<T extends PropertyDefinition, U> = T["nullable"] extends true
  ? U | undefined
  : U;

type Raw<T> = T extends Array<any> ? T[0] : T;
type Converted<T> = T extends Array<any> ? T[1] : T;

export type OsdkObjectPropertyType<T extends PropertyDefinition> =
  MaybeNullable<T, MaybeArray<T, Converted<ValidPropertyTypes[T["type"]]>>>;

export type OsdkObjectRawPropertyType<T extends PropertyDefinition> =
  MaybeNullable<T, MaybeArray<T, Raw<ValidPropertyTypes[T["type"]]>>>;

export type OsdkObjectLink<
  K extends string,
  O extends OntologyDefinition<K>,
  T extends LinkDefinition<any>,
> = MaybeArray<T, OsdkObjectLink_Inner<K, O, T>>;

type OsdkObjectLink_Inner<
  K extends string,
  O extends OntologyDefinition<K>,
  T extends LinkDefinition<any>,
> = T["targetType"] extends keyof O["objects"] ? O["objects"][T["targetType"]]
  : never;
