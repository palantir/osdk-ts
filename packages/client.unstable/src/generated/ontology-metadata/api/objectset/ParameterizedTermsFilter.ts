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
import type { FilterParameter } from "./FilterParameter.js";

/**
 * An object matches a TermsFilter iff the analyzed value of the provided property matches any of the provided terms, or in case when
 * no property is provided - iff analyzed value of any of the properties matches any of the provided terms.
 * If no terms are provided, this filter will match ALL objects.
 */
export interface ParameterizedTermsFilter {
  propertyId: PropertyTypeId | undefined;
  terms: Array<FilterParameter>;
}
