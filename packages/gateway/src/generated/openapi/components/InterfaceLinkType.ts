/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { DisplayName } from "./DisplayName";
import type { InterfaceLinkTypeApiName } from "./InterfaceLinkTypeApiName";
import type { InterfaceLinkTypeCardinality } from "./InterfaceLinkTypeCardinality";
import type { InterfaceLinkTypeLinkedEntityApiName } from "./InterfaceLinkTypeLinkedEntityApiName";
import type { InterfaceLinkTypeRid } from "./InterfaceLinkTypeRid";

/**
 * A link type constraint defined at the interface level where the implementation of the links is provided
 * by the implementing object types.
 */
export interface InterfaceLinkType {
  rid: InterfaceLinkTypeRid;
  apiName: InterfaceLinkTypeApiName;
  displayName: DisplayName;
  /** The description of the interface link type. */
  description?: string;
  linkedEntityApiName: InterfaceLinkTypeLinkedEntityApiName;
  cardinality: InterfaceLinkTypeCardinality;
  /**
   * Whether each implementing object type must declare at least one implementation of this link.
   */
  required: boolean;
}
