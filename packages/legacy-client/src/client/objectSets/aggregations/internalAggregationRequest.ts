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

import type { ObjectSetDefinition } from "../../baseTypes/index.js";
import type {
  AggregationClause,
  BucketKey,
  BucketValue,
  InternalBucketing,
} from "../aggregations/index.js";

export interface InternalAggregationRequest {
  objectSet: ObjectSetDefinition;
  aggregation: AggregationClause[];
  groupBy?: Array<InternalBucketing<BucketKey, BucketValue>>;
}
