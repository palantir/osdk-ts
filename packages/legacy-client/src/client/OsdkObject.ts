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

import {
  type LinkDefinitionFrom,
  type LinkKeysFrom,
  type LinkTargetTypeFrom,
  type ObjectTypesFrom,
  type OntologyDefinition,
  type PropertyDefinition,
  type PropertyDefinitionFrom,
  type PropertyKeysFrom,
} from "@osdk/api";
import type {
  Attachment,
  GeoPoint,
  GeoShape,
  LocalDate,
  MultiLink,
  OntologyObject,
  SingleLink,
  Timestamp,
} from "../ontology-runtime/baseTypes";

export interface ValidLegacyPropertyTypes {
  string: string;
  datetime: LocalDate;
  double: number;
  boolean: boolean;
  integer: number;
  timestamp: Timestamp;
  short: number;
  long: number;
  float: number;
  decimal: number;
  byte: number;

  attachment: Attachment;
  geopoint: GeoPoint;
  geoshape: GeoShape;
}

type MaybeArray<T extends PropertyDefinition, U> = T["multiplicity"] extends
  true ? Array<U> : U;

type MaybeNullable<T extends PropertyDefinition, U> = T["nullable"] extends true
  ? U | undefined
  : U;

export type OsdkObjectLegacyPropertyType<T extends PropertyDefinition> =
  MaybeNullable<T, MaybeArray<T, ValidLegacyPropertyTypes[T["type"]]>>;

export type OsdkLegacyPropertiesFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [P in PropertyKeysFrom<O, K>]: OsdkObjectLegacyPropertyType<
    PropertyDefinitionFrom<O, K, P>
  >;
};

export type OsdkLegacyLinksFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = {
  [L in LinkKeysFrom<O, K>]: LinkTargetTypeFrom<O, K, L> extends
    keyof O["objects"]
    ? LinkDefinitionFrom<O, K, L>["multiplicity"] extends true
      ? MultiLink<OsdkLegacyObjectFrom<O, LinkTargetTypeFrom<O, K, L>>>
    : SingleLink<
      OsdkLegacyObjectFrom<O, LinkTargetTypeFrom<O, K, L>>
    >
    : never;
};

export type OsdkLegacyPrimaryKeyType<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = ValidLegacyPropertyTypes[O["objects"][K]["primaryKeyType"]];

export type OsdkLegacyOntologyObject<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = K extends string ? OntologyObject<K, OsdkLegacyPrimaryKeyType<O, K>>
  : never;

export type OsdkLegacyObjectFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = K extends string ?
    & OsdkLegacyPropertiesFrom<O, K>
    & OsdkLegacyLinksFrom<O, K>
    & OsdkLegacyOntologyObject<O, K>
  : never;
