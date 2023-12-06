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

import type { DatasourceType } from "./DatasourceType.js";
import type { InterfaceTypeLoadRequest } from "./InterfaceTypeLoadRequest.js";
import type { LinkTypeLoadRequest } from "./LinkTypeLoadRequest.js";
import type { ObjectTypeLoadRequest } from "./ObjectTypeLoadRequest.js";
import type { SharedPropertyTypeLoadRequest } from "./SharedPropertyTypeLoadRequest.js";
import type { TypeGroupLoadRequest } from "./TypeGroupLoadRequest.js";

/**
 * Request to batch load Ontology entities. If any of the requested
 * entities are not available in the specified version or the user is
 * missing permissions to see them, the corresponding entry in the
 * response will be empty.
 */
export interface OntologyBulkLoadEntitiesRequest {
  datasourceTypes: Array<DatasourceType>;
  objectTypes: Array<ObjectTypeLoadRequest>;
  linkTypes: Array<LinkTypeLoadRequest>;
  sharedPropertyTypes: Array<SharedPropertyTypeLoadRequest>;
  interfaceTypes: Array<InterfaceTypeLoadRequest>;
  typeGroups: Array<TypeGroupLoadRequest>;
  loadRedacted: boolean | undefined;
  includeObjectTypeCount: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
  includeEntityMetadata: boolean | undefined;
}
