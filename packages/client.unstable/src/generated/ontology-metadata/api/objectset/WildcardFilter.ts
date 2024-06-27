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

import type { PropertyTypeId } from "../PropertyTypeId.js";

/**
 * An object matches a WildcardFilter iff the value of the provided property matches the provided term, or in case when
 * no property is provided - iff any of the properties match the provided term.
 */
export interface WildcardFilter {
  propertyId: PropertyTypeId | undefined;
  term: string;
}
