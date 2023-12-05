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

import type { LoadAllObjectTypesPageToken } from "./LoadAllObjectTypesPageToken.js";
import type { OntologyRid } from "./OntologyRid.js";
import type { VersionReference } from "./VersionReference.js";

/**
 * Request to load a page of all ObjectTypes visible to the user in an Ontology.
 */
export interface LoadAllObjectTypesFromOntologyPageRequest {
  ontologyRid: OntologyRid;
  versionReference: VersionReference;
  pageToken: LoadAllObjectTypesPageToken | undefined;
  pageSizeLimit: string;
  loadRedacted: boolean | undefined;
  includeObjectTypesWithoutSearchableDatasources: boolean | undefined;
}
