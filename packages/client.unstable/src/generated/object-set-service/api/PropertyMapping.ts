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

import type { PropertyTypeIdentifier } from "./PropertyTypeIdentifier.js";

/**
 * A mapping from the property of one ObjectType to the property of another. The two properties must share
 * the same Shared Property Type. One of the properties must be a primary key.
 */
export interface PropertyMapping {
  fromProperty: PropertyTypeIdentifier;
  toProperty: PropertyTypeIdentifier;
}
