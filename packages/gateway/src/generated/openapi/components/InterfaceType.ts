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

import type { DisplayName } from "./DisplayName.js";
import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { InterfaceTypeRid } from "./InterfaceTypeRid.js";
import type { SharedPropertyType } from "./SharedPropertyType.js";
import type { SharedPropertyTypeApiName } from "./SharedPropertyTypeApiName.js";

/** Represents an interface type in the Ontology. */
export interface InterfaceType {
  rid: InterfaceTypeRid;
  apiName: InterfaceTypeApiName;
  displayName: DisplayName;
  /** The description of the interface. */
  description?: string;
  /**
   * A map from a shared property type API name to the corresponding shared property type. The map describes the
   * set of properties the interface has. A shared property type must be unique across all of the properties.
   */
  properties: Record<SharedPropertyTypeApiName, SharedPropertyType>;
  /**
   * A list of interface API names that this interface extends. An interface can extend other interfaces to
   * inherit their properties.
   */
  extendsInterfaces: Array<InterfaceTypeApiName>;
}
