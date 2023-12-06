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

import type { PropertyId } from "./PropertyId.js";

/**
 * This filter does not analyze the query string.
 *
 * An object matches a WildcardFilter iff the tokens of the provided property matches the term with a wildcard
 * suffix.
 *
 * For example, a query with value "The Quick Brown F" will search for tokens which match "The Quick Brown F*".
 * If searched on a property with the default analyzer with value "The Quick Brown Fox", it will not match
 * as the value tokens are ["the", "quick", "brown", "fox"].
 * It is recommended to use filter only against properties which support exact matches.
 *
 * If no property is provided, this filter will consider the tokens for all properties.
 */
export interface WildcardFilter {
  propertyId: PropertyId | undefined;
  term: string;
}
