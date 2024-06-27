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

import type { OntologyBranchRid } from "../OntologyBranchRid.js";
import type { LinkTypeEntityMetadataLoadRequest } from "./LinkTypeEntityMetadataLoadRequest.js";
import type { ObjectTypeEntityMetadataLoadRequest } from "./ObjectTypeEntityMetadataLoadRequest.js";

/**
 * Request to load the EntityMetadata for the specified ObjectTypeRids/LinkTypeRids at the specified OntologyVersion.
 * If an OntologyVersion is not present, the EntityMetadata will be loaded from the latest "system" OntologyVersion.
 * A "system" OntologyVersion is an OntologyVersion created using the modifySystemEntityMetadata endpoint as opposed
 * to the modifyOntology endpoint.
 * If no EntityMetadata has been set for an existing ObjectType or LinkType, a default empty
 * ObjectTypeEntityMetadata/LinkTypeEntityMetadata object will be returned.
 */
export interface LoadEntityMetadataRequest {
  objectTypes: Array<ObjectTypeEntityMetadataLoadRequest>;
  linkTypes: Array<LinkTypeEntityMetadataLoadRequest>;
  ontologyBranchRid: OntologyBranchRid | undefined;
  includeSystemEntityMetadata: boolean | undefined;
  loadRedacted: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
