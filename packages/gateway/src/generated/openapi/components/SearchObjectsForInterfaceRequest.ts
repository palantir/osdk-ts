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

import type { InterfaceTypeApiName } from "./InterfaceTypeApiName.js";
import type { ObjectTypeApiName } from "./ObjectTypeApiName.js";
import type { PageSize } from "./PageSize.js";
import type { PageToken } from "./PageToken.js";
import type { PropertyApiName } from "./PropertyApiName.js";
import type { SearchJsonQueryV2 } from "./SearchJsonQueryV2.js";
import type { SearchOrderBy } from "./SearchOrderBy.js";
import type { SharedPropertyTypeApiName } from "./SharedPropertyTypeApiName.js";

export interface SearchObjectsForInterfaceRequest {
  where?: SearchJsonQueryV2;
  orderBy?: SearchOrderBy;
  /**
   * A map from object type API name to a list of property type API names. For each returned object, if the
   * object’s object type is a key in the map, then we augment the response for that object type with the list
   * of properties specified in the value.
   */
  augmentedProperties: Record<ObjectTypeApiName, Array<PropertyApiName>>;
  /**
   * A map from interface type API name to a list of shared property type API names. For each returned object, if
   * the object implements an interface that is a key in the map, then we augment the response for that object
   * type with the list of properties specified in the value.
   */
  augmentedSharedPropertyTypes: Record<
    InterfaceTypeApiName,
    Array<SharedPropertyTypeApiName>
  >;
  /**
   * A list of shared property type API names of the interface type that should be included in the response.
   * Omit this parameter to include all properties of the interface type in the response.
   */
  selectedSharedPropertyTypes: Array<SharedPropertyTypeApiName>;
  /**
   * A list of object type API names that should be included in the response. If non-empty, object types that are
   * not mentioned will not be included in the response even if they implement the specified interface. Omit the
   * parameter to include all object types.
   */
  selectedObjectTypes: Array<ObjectTypeApiName>;
  /**
   * A list of interface type API names. Object types must implement all the mentioned interfaces in order to be
   * included in the response.
   */
  otherInterfaceTypes: Array<InterfaceTypeApiName>;
  pageSize?: PageSize;
  pageToken?: PageToken;
}
