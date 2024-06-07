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

import type { ObjectSet } from "../../client/index.js";
import type {
  BucketValue,
  QueryThreeDimensionalAggregation,
  QueryTwoDimensionalAggregation,
} from "../objectSets/aggregations/index.js";
import type { Attachment } from "./attachments/index.js";
import type {
  GeoJson,
  GeoJsonPoint,
  GeoPoint,
  GeoShape,
} from "./geoshapes/index.js";
import type { LocalDate } from "./localDate.js";
import type { ObjectSetDefinition } from "./objectset/index.js";
import type { OntologyObject } from "./OntologyObject.js";
import type {
  QueryBucketKey,
  ThreeDimensionalAggregation,
  TwoDimensionalAggregation,
} from "./Queries.js";
import type { TimeSeries } from "./timeseries/index.js";
import type { Timestamp } from "./timestamp.js";

export type ParameterValue =
  | undefined
  | string
  | number
  | boolean
  | LocalDate
  | Timestamp
  | GeoShape
  | GeoPoint
  | OntologyObject
  | Attachment
  | Set<ParameterValue>
  | TwoDimensionalAggregation<QueryBucketKey, BucketValue>
  | ThreeDimensionalAggregation<QueryBucketKey, QueryBucketKey, BucketValue>
  | TimeSeries<any>
  | ObjectSet<any>
  | ParameterValue[]
  | {
    [key: string]: ParameterValue;
  };

export type PrimitiveParameterValue =
  | string
  | number
  | boolean
  | OntologyObject
  | ObjectSetDefinition
  | GeoJson
  | GeoJsonPoint
  | PrimitiveParameterValue[]
  | {
    [key: string]: PrimitiveParameterValue;
  }
  | QueryTwoDimensionalAggregation
  | QueryThreeDimensionalAggregation;
