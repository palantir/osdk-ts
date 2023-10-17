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
 * Results could not be filtered by the requested properties. Please mark the properties as *Searchable* and
 * *Selectable* in the **Ontology Manager** to be able to filter on those properties. There may be a short delay
 * between the time a property is marked *Searchable* and *Selectable* and when it can be used.
 */
export interface PropertiesNotFilterable {
  errorCode: "INVALID_ARGUMENT";
  errorName: "PropertiesNotFilterable";
  errorInstanceId: string;
  parameters: {
    properties: Array<PropertyApiName>;
  };
}
