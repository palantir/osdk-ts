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

import type { PropertyTypeRid } from "../PropertyTypeRid.js";
import type { GothamIntrinsicV2 } from "./GothamIntrinsicV2.js";
import type { GothamObjectIntrinsicMapping } from "./GothamObjectIntrinsicMapping.js";
import type { GothamObjectTypeUri } from "./GothamObjectTypeUri.js";
import type { GothamOntologyParentType } from "./GothamOntologyParentType.js";
import type { GothamOntologyParentTypeUri } from "./GothamOntologyParentTypeUri.js";
import type { GothamPropertyDatasourceMapping } from "./GothamPropertyDatasourceMapping.js";
import type { GothamPropertyIntrinsicMapping } from "./GothamPropertyIntrinsicMapping.js";
import type { GothamPropertyIntrinsicMappingV2 } from "./GothamPropertyIntrinsicMappingV2.js";
import type { GothamPropertyIntrinsicMappingV3 } from "./GothamPropertyIntrinsicMappingV3.js";
import type { PropertyTypeGothamMapping } from "./PropertyTypeGothamMapping.js";
import type { RevDbIntegrationState } from "./RevDbIntegrationState.js";
export interface ObjectTypeGothamMapping {
  uri: GothamObjectTypeUri;
  parentType: GothamOntologyParentType;
  parentTypeUri: GothamOntologyParentTypeUri | undefined;
  gothamMappingEnabled: boolean | undefined;
  propertyMapping: Record<PropertyTypeRid, PropertyTypeGothamMapping>;
  objectLevelIntrinsics: Record<PropertyTypeRid, GothamObjectIntrinsicMapping>;
  propertyLevelIntrinsics: Record<
    PropertyTypeRid,
    GothamPropertyIntrinsicMapping
  >;
  objectLevelIntrinsicsV2: Record<GothamIntrinsicV2, PropertyTypeRid>;
  propertyLevelIntrinsicsV2: Record<
    PropertyTypeRid,
    GothamPropertyIntrinsicMappingV2
  >;
  propertyLevelIntrinsicsV3: Record<
    PropertyTypeRid,
    GothamPropertyIntrinsicMappingV3
  >;
  propertyLevelDatasources: Record<
    PropertyTypeRid,
    GothamPropertyDatasourceMapping
  >;
  dataSource: PropertyTypeRid | undefined;
  gothamTitleProperty: PropertyTypeRid | undefined;
  revDbIntegrationState: RevDbIntegrationState;
}
