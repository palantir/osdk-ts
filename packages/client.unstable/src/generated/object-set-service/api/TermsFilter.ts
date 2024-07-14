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
 * An object matches a TermsFilter iff the tokens of the provided property match any of the provided terms.
 *
 * For example, a property with value "The Quick Brown Fox", using the default analyzer, would produce the tokens
 * ["the", "quick", "brown", "fox"], and would therefore match a terms filter with "brown" as a term,
 * but not one with "Brown" or "Brown Fox" as a term.
 * It is recommended to use filter only against properties which support exact matches.
 *
 * If no property is provided, this filter will consider the tokens for all properties.
 * If no terms are provided, this filter will match all objects.
 */
export interface TermsFilter {
  propertyId: PropertyId | undefined;
  terms: Array<any>;
}
