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
  type ObjectTypeKeysFrom,
  type ObjectTypeLinkDefinitionFrom,
  type ObjectTypeLinkKeysFrom,
  type ObjectTypeLinkTargetTypeFrom,
  type ObjectTypePropertyDefinition,
  type ObjectTypePropertyDefinitionFrom,
  type ObjectTypePropertyKeysFrom,
  type OntologyDefinition,
} from "@osdk/api";
import type {
  Attachment,
  GeoPoint,
  GeoShape,
  LocalDate,
  MultiLink,
  OntologyObject,
  SingleLink,
  TimeSeries,
  Timestamp,
} from "./baseTypes";
import type { reservedKeywordsList } from "./utils/reservedKeywords";

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
  numericTimeseries: TimeSeries<number>;
  stringTimeseries: TimeSeries<string>;
}

type MaybeArray<T extends ObjectTypePropertyDefinition, U> =
  T["multiplicity"] extends true ? Array<U> : U;

type MaybeNullable<T extends ObjectTypePropertyDefinition, U> =
  T["nullable"] extends true ? U | undefined
    : U;

export type OsdkObjectLegacyPropertyType<
  T extends ObjectTypePropertyDefinition,
> = MaybeNullable<T, MaybeArray<T, ValidLegacyPropertyTypes[T["type"]]>>;

export type OsdkLegacyPropertiesFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> =
  & {
    [P in ObjectTypePropertyKeysFrom<O, K>]: OsdkObjectLegacyPropertyType<
      ObjectTypePropertyDefinitionFrom<O, K, P>
    >;
  }
  & {
    [
      P in ObjectTypePropertyKeysFrom<
        O,
        K
      > as Extract<P, typeof reservedKeywordsList[number]> extends never ? never
        : P extends string ? `${P}_`
        : never
    ]: OsdkObjectLegacyPropertyType<ObjectTypePropertyDefinitionFrom<O, K, P>>;
  };

export type OsdkLegacyLinksFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = {
  [L in ObjectTypeLinkKeysFrom<O, K>]:
    ObjectTypeLinkTargetTypeFrom<O, K, L> extends keyof O["objects"]
      ? ObjectTypeLinkDefinitionFrom<O, K, L>["multiplicity"] extends true
        ? MultiLink<
          OsdkLegacyObjectFrom<O, ObjectTypeLinkTargetTypeFrom<O, K, L>>
        >
      : SingleLink<
        OsdkLegacyObjectFrom<O, ObjectTypeLinkTargetTypeFrom<O, K, L>>
      >
      : never;
};

export type OsdkLegacyPrimaryKeyType<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = ValidLegacyPropertyTypes[O["objects"][K]["primaryKeyType"]];

export type OsdkLegacyOntologyObject<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = K extends string ? OntologyObject<K, OsdkLegacyPrimaryKeyType<O, K>>
  : never;

export type OsdkLegacyObjectFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypeKeysFrom<O>,
> = K extends string ?
    & OsdkLegacyPropertiesFrom<O, K>
    & OsdkLegacyLinksFrom<O, K>
    & OsdkLegacyOntologyObject<O, K>
  : never;
