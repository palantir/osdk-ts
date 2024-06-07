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
  Bucketing,
  BucketKey,
  Double,
  ExactValueBucketing,
  FixedWidthBucketing,
  Range,
  RangeBucketing,
} from "../Aggregations.js";
import { GroupKeyType } from "./GroupKeyType.js";

export interface NumericGroupBy<TBucketKey extends BucketKey> {
  /** Divides objects into groups with the specified width. */
  fixedWidth(n: number): Bucketing<TBucketKey, Range<Double>>;
  /** Divides objects into groups according to an exact value.
   * If omitted, the default maxGroupCount is 10,000.
   */
  exact(maxGroupCount?: number): Bucketing<TBucketKey, Double>;
  /** Divides objects into groups according to specified ranges. */
  ranges: (
    ranges: Array<Range<number>>,
  ) => Bucketing<TBucketKey, Range<number>>;
}

export const NumericGroupBy = (
  propertyApiName: string,
): NumericGroupBy<string> => ({
  fixedWidth: (n: number): FixedWidthBucketing<string, Range<Double>> => ({
    type: "Bucketing",
    kind: "FixedWidthBucketing",
    keyDataType: GroupKeyType.NUMERIC,
    propertyApiName,
    fixedWidth: n,
  }),

  exact: (maxGroupCount: number): ExactValueBucketing<string, Double> => ({
    type: "Bucketing",
    kind: "ExactValueBucketing",
    keyDataType: GroupKeyType.NUMERIC,
    propertyApiName,
    maxGroupCount,
  }),

  ranges: (
    ranges: Array<Range<number>>,
  ): RangeBucketing<string, Range<number>> => ({
    type: "Bucketing",
    kind: "RangeBucketing",
    keyDataType: GroupKeyType.NUMERIC,
    propertyApiName,
    ranges,
  }),
});
