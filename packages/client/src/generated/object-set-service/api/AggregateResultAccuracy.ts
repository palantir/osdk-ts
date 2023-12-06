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

import type { AccurateAggregateResultAccuracy } from "./AccurateAggregateResultAccuracy.js";
import type { ApproximateAggregateResultAccuracy } from "./ApproximateAggregateResultAccuracy.js";
export interface AggregateResultAccuracy_accurate {
  type: "accurate";
  accurate: AccurateAggregateResultAccuracy;
}

export interface AggregateResultAccuracy_approximate {
  type: "approximate";
  approximate: ApproximateAggregateResultAccuracy;
}
/**
 * The accuracy of an aggregation result.
 */
export type AggregateResultAccuracy =
  | AggregateResultAccuracy_accurate
  | AggregateResultAccuracy_approximate;
