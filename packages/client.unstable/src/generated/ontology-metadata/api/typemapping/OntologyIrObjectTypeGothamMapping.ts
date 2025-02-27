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

import type { ObjectTypeFieldApiName } from "../ObjectTypeFieldApiName.js";
import type { GothamIntrinsicV2 } from "./GothamIntrinsicV2.js";
import type { GothamObjectIntrinsicMapping } from "./GothamObjectIntrinsicMapping.js";
import type { GothamObjectTypeUri } from "./GothamObjectTypeUri.js";
import type { GothamOntologyParentType } from "./GothamOntologyParentType.js";
import type { GothamOntologyParentTypeUri } from "./GothamOntologyParentTypeUri.js";
import type { OntologyIrGothamPropertyDatasourceMapping } from "./OntologyIrGothamPropertyDatasourceMapping.js";
import type { OntologyIrGothamPropertyIntrinsicMapping } from "./OntologyIrGothamPropertyIntrinsicMapping.js";
import type { OntologyIrGothamPropertyIntrinsicMappingV2 } from "./OntologyIrGothamPropertyIntrinsicMappingV2.js";
import type { OntologyIrGothamPropertyIntrinsicMappingV3 } from "./OntologyIrGothamPropertyIntrinsicMappingV3.js";
import type { PropertyTypeGothamMapping } from "./PropertyTypeGothamMapping.js";
import type { RevDbIntegrationState } from "./RevDbIntegrationState.js";
export interface OntologyIrObjectTypeGothamMapping {
  uri: GothamObjectTypeUri;
  parentType: GothamOntologyParentType;
  parentTypeUri: GothamOntologyParentTypeUri | undefined;
  gothamMappingEnabled: boolean | undefined;
  propertyMapping: Record<ObjectTypeFieldApiName, PropertyTypeGothamMapping>;
  objectLevelIntrinsics: Record<
    ObjectTypeFieldApiName,
    GothamObjectIntrinsicMapping
  >;
  propertyLevelIntrinsics: Record<
    ObjectTypeFieldApiName,
    OntologyIrGothamPropertyIntrinsicMapping
  >;
  objectLevelIntrinsicsV2: Record<GothamIntrinsicV2, ObjectTypeFieldApiName>;
  propertyLevelIntrinsicsV2: Record<
    ObjectTypeFieldApiName,
    OntologyIrGothamPropertyIntrinsicMappingV2
  >;
  propertyLevelIntrinsicsV3: Record<
    ObjectTypeFieldApiName,
    OntologyIrGothamPropertyIntrinsicMappingV3
  >;
  propertyLevelDatasources: Record<
    ObjectTypeFieldApiName,
    OntologyIrGothamPropertyDatasourceMapping
  >;
  dataSource: ObjectTypeFieldApiName | undefined;
  gothamTitleProperty: ObjectTypeFieldApiName | undefined;
  revDbIntegrationState: RevDbIntegrationState;
}
