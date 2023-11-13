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

import type { BooleanType } from "./BooleanType";
import type { DateType } from "./DateType";
import type { DoubleType } from "./DoubleType";
import type { IntegerType } from "./IntegerType";
import type { QueryAggregationRangeType } from "./QueryAggregationRangeType";
import type { StringType } from "./StringType";
import type { TimestampType } from "./TimestampType";

export interface QueryAggregationKeyType_Boolean extends BooleanType {
  type: "boolean";
}

export interface QueryAggregationKeyType_Date extends DateType {
  type: "date";
}

export interface QueryAggregationKeyType_Double extends DoubleType {
  type: "double";
}

export interface QueryAggregationKeyType_Integer extends IntegerType {
  type: "integer";
}

export interface QueryAggregationKeyType_String extends StringType {
  type: "string";
}

export interface QueryAggregationKeyType_Timestamp extends TimestampType {
  type: "timestamp";
}

export interface QueryAggregationKeyType_Range
  extends QueryAggregationRangeType
{
  type: "range";
}

export type QueryAggregationKeyType =
  | QueryAggregationKeyType_Boolean
  | QueryAggregationKeyType_Date
  | QueryAggregationKeyType_Double
  | QueryAggregationKeyType_Integer
  | QueryAggregationKeyType_String
  | QueryAggregationKeyType_Timestamp
  | QueryAggregationKeyType_Range;
