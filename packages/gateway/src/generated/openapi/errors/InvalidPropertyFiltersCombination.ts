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

import type { PropertyApiName } from "../components/PropertyApiName";
import type { PropertyFilter } from "../components/PropertyFilter";

/** The provided filters cannot be used together. */
export interface InvalidPropertyFiltersCombination {
  errorCode: "INVALID_ARGUMENT";
  errorName: "InvalidPropertyFiltersCombination";
  errorInstanceId: string;
  parameters: {
    propertyFilters: ReadonlyArray<PropertyFilter>;
    property: PropertyApiName;
  };
}
