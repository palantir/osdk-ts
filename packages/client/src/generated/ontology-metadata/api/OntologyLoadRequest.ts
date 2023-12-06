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

import type { ObjectTypeId } from "./ObjectTypeId.js";
import type { OntologyVersion } from "./OntologyVersion.js";
import type { RelationId } from "./RelationId.js";

/**
 * Request to batch load Ontology entities. If any of the requested entities are not available
 * in the specified OntologyVersion (or latest if not specified), they will not be present in the
 * response.
 *
 * Please note that this has been deprecated. Please switch to the OntologyBulkLoadEntitiesRequest
 * instead.
 */
export interface OntologyLoadRequest {
  partialObjectTypeVersions: Record<ObjectTypeId, OntologyVersion | undefined>;
  bidirectionalRelationVersions: Record<
    RelationId,
    OntologyVersion | undefined
  >;
}
