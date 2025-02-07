/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyIrDerivedPropertiesDefinition } from "./derivedproperties/OntologyIrDerivedPropertiesDefinition.js";

/**
 * Object type datasource which is backed by derived properties definition.
 *
 * This source provides property values that are derived from property types on other object type(s)
 * via links or additional aggregations and computations.
 *
 * Note: if a property type is backed by an ObjectTypeDerivedPropertiesDatasource, the Type of the property
 * type will be resolved by OMS automatically. The TypeForModification will be ignored for that property type.
 *
 * This type is only compatible with object storage v2.
 */
export interface OntologyIrObjectTypeDerivedPropertiesDatasource {
  definition: OntologyIrDerivedPropertiesDefinition;
}
