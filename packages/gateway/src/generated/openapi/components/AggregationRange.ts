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

/** Specifies a date range from an inclusive start date to an exclusive end date. */
export interface AggregationRange {
  /** Exclusive end date. */
  lt?: any;
  /** Inclusive end date. */
  lte?: any;
  /** Exclusive start date. */
  gt?: any;
  /** Inclusive start date. */
  gte?: any;
}
