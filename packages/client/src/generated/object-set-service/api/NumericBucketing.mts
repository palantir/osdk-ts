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

import type { FixedBucketCountBucketing } from "./FixedBucketCountBucketing.mjs";
import type { FixedWidthBucketing } from "./FixedWidthBucketing.mjs";
import type { RangeBucketing } from "./RangeBucketing.mjs";
export interface NumericBucketing_fixedBucketCount {
  type: "fixedBucketCount";
  fixedBucketCount: FixedBucketCountBucketing;
}

export interface NumericBucketing_fixedWidth {
  type: "fixedWidth";
  fixedWidth: FixedWidthBucketing;
}

export interface NumericBucketing_range {
  type: "range";
  range: RangeBucketing;
}

export type NumericBucketing =
  | NumericBucketing_fixedBucketCount
  | NumericBucketing_fixedWidth
  | NumericBucketing_range;
