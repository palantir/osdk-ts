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
  Attachment,
  GeoPoint,
  GeoShape,
  LocalDate,
  OntologyObject,
  Timestamp,
} from "../baseTypes/index.js";
import type {
  ArrayFilter,
  AttachmentFilter,
  BooleanFilter,
  GeoPointFilter,
  GeoShapeFilter,
  LocalDateFilter,
  NumericFilter,
  StringFilter,
  TimestampFilter,
  WhereClause,
} from "../objectSets/filters/index.js";
import type { OrderByFunction } from "./ordering.js";
import type { OmitMetadataProperties } from "./utils/OmitProperties.js";

export declare type ObjectTypeFilterFunction<T extends OntologyObject> = (
  objectType: ObjectSetFilterArg<T>,
) => WhereClause;

export declare type ObjectTypeOrderByFunction<T extends OntologyObject> =
  OrderByFunction<T>;

type IsFilterableProperty<T> = NonNullable<T> extends
  | number
  | LocalDate
  | Timestamp
  | string
  | boolean
  | GeoShape
  | GeoPoint
  | Attachment ? true
  : false;

type FilterableProperties<T extends OntologyObject> = {
  [K in keyof T as IsFilterableProperty<T[K]> extends true ? K : never]: T[K];
};

export declare type ObjectSetFilterArg<T extends OntologyObject> = {
  [
    K in keyof OmitMetadataProperties<
      FilterableProperties<T>
    >
  ]: FilterFromType<
    T[K]
  >;
};

type FilterFromType<T> = T extends number ? NumericFilter
  : T extends string ? StringFilter
  : T extends LocalDate ? LocalDateFilter
  : T extends Timestamp ? TimestampFilter
  : T extends boolean ? BooleanFilter
  : T extends GeoPoint ? GeoPointFilter
  : T extends GeoShape ? GeoShapeFilter
  : T extends Attachment ? AttachmentFilter
  : T extends Array<
    infer U extends
      | string
      | number
      | boolean
      | LocalDate
      | Timestamp
      | GeoShape
      | GeoPoint
      | Attachment
  > ? IsFilterableProperty<U> extends true ? ArrayFilter<U> : never
  : never;
