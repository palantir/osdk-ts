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

import type { PropertyValueResultOrdering } from "./PropertyValueResultOrdering.js";
import type { RelevancyResultOrdering } from "./RelevancyResultOrdering.js";
import type { UnspecifiedResultOrdering } from "./UnspecifiedResultOrdering.js";
export interface ResultOrdering_relevancy {
  type: "relevancy";
  relevancy: RelevancyResultOrdering;
}

export interface ResultOrdering_propertyValue {
  type: "propertyValue";
  propertyValue: PropertyValueResultOrdering;
}

export interface ResultOrdering_unspecified {
  type: "unspecified";
  unspecified: UnspecifiedResultOrdering;
}
/**
 * Describes how results should be ordered.
 */
export type ResultOrdering =
  | ResultOrdering_relevancy
  | ResultOrdering_propertyValue
  | ResultOrdering_unspecified;
