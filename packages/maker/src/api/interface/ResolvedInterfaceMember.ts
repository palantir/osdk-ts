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

import type { InterfacePropertyType } from "./InterfacePropertyType.js";

/** An entity (property, link type constraint, action type constraint) of an interface type. */
export interface ResolvedInterfaceMember {
  /** The fully-qualified API name the entity is published under. */
  apiName: string;
  /** The interface type that declares the entity: an ancestor's API name when inherited. */
  interfaceTypeApiName: string;
}

export interface ResolvedInterfaceProperty extends ResolvedInterfaceMember {
  /** The key the property is authored under on `interfaceTypeApiName`. */
  authoredKey: string;
  property: InterfacePropertyType;
}
