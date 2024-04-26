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

/**
 * At least one of the requested property filters are not supported. See the documentation of `PropertyFilter` for
 * a list of supported property filters.
 */
export interface PropertyFiltersNotSupported {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertyFiltersNotSupported";
  errorInstanceId: string;
  parameters: {
    propertyFilters: ReadonlyArray<PropertyFilter>;
    property: PropertyApiName;
  };
}
