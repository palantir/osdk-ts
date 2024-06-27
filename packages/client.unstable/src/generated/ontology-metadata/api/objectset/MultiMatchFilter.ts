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

import type { MultiMatchFilterOperator } from "./MultiMatchFilterOperator.js";
import type { PropertySet } from "./PropertySet.js";

/**
 * An object matches a MultiMatchFilter iff any of the fields matches the query, or in the case where a
 * property whitelist is provided - iff any of the specifed fields matches the query.
 */
export interface MultiMatchFilter {
  query: string;
  propertySet: PropertySet;
  fuzzy: boolean;
  operator: MultiMatchFilterOperator | undefined;
}
