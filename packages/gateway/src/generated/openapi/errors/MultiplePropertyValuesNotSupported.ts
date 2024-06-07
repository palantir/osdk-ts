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

import type { PropertyApiName } from "../components/PropertyApiName.js";
import type { PropertyFilter } from "../components/PropertyFilter.js";

/**
 * One of the requested property filters does not support multiple values. Please include only a single value for
 * it.
 */
export interface MultiplePropertyValuesNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "MultiplePropertyValuesNotSupported";
  errorInstanceId: string;
  parameters: {
    propertyFilter: PropertyFilter;
    property: PropertyApiName;
  };
}
