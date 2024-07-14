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

import type { PropertyTypeRid } from "../../PropertyTypeRid.js";
import type { Bound } from "./Bound.js";

/**
 * An object matches a TimeRange iff the value of the provided date property is within the provided time range. The specified bounds will always have TimestampFilterValue as values. At least one of the bounds is guaranteed to be present.
 */
export interface TimeRangeFilter {
  property: PropertyTypeRid;
  lowerBound: Bound | undefined;
  upperBound: Bound | undefined;
}
