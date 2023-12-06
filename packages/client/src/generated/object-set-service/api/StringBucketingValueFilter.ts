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

import type { ExcludeByRegexStringBucketingValueFilter } from "./ExcludeByRegexStringBucketingValueFilter.js";
import type { ExcludeValuesStringBucketingValueFilter } from "./ExcludeValuesStringBucketingValueFilter.js";
import type { IncludeByRegexStringBucketingValueFilter } from "./IncludeByRegexStringBucketingValueFilter.js";
import type { IncludeValuesStringBucketingValueFilter } from "./IncludeValuesStringBucketingValueFilter.js";
export interface StringBucketingValueFilter_includeValues {
  type: "includeValues";
  includeValues: IncludeValuesStringBucketingValueFilter;
}

export interface StringBucketingValueFilter_excludeValues {
  type: "excludeValues";
  excludeValues: ExcludeValuesStringBucketingValueFilter;
}

export interface StringBucketingValueFilter_includeByRegex {
  type: "includeByRegex";
  includeByRegex: IncludeByRegexStringBucketingValueFilter;
}

export interface StringBucketingValueFilter_excludeByRegex {
  type: "excludeByRegex";
  excludeByRegex: ExcludeByRegexStringBucketingValueFilter;
}
/**
 * Available value filters to use when doing aggregations with string bucketing.
 * Please refer to documentation of particular filters for more details.
 */
export type StringBucketingValueFilter =
  | StringBucketingValueFilter_includeValues
  | StringBucketingValueFilter_excludeValues
  | StringBucketingValueFilter_includeByRegex
  | StringBucketingValueFilter_excludeByRegex;
