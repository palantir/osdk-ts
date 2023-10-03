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

/**
 * Results could not be ordered by the requested properties. Please mark the properties as *Searchable* and
 * *Sortable* in the **Ontology Manager** to enable their use in `orderBy` parameters. There may be a short delay
 * between the time a property is set to *Searchable* and *Sortable* and when it can be used.
 */
export interface PropertiesNotSortable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertiesNotSortable";
  errorInstanceId: string;
  parameters: {
    properties: Array<PropertyApiName>;
  };
}
