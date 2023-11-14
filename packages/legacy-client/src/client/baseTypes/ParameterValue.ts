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

import type { ObjectSet } from "../../client";
import type {
  BucketValue,
  QueryThreeDimensionalAggregation,
  QueryTwoDimensionalAggregation,
} from "../objectSets/aggregations";
import type { Attachment } from "./attachments";
import type { GeoJson, GeoJsonPoint, GeoPoint, GeoShape } from "./geoshapes";
import type { LocalDate } from "./localDate";
import type { ObjectSetDefinition } from "./objectset";
import type { OntologyObject } from "./OntologyObject";
import type {
  QueryBucketKey,
  ThreeDimensionalAggregation,
  TwoDimensionalAggregation,
} from "./Queries";
import type { TimeSeries } from "./timeseries";
import type { Timestamp } from "./timestamp";

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
