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

import type { GetDependenciesV2PagingToken } from "./GetDependenciesV2PagingToken.js";
import type { ProvenanceOntologyEntityRid } from "./ProvenanceOntologyEntityRid.js";
import type { Version } from "./Version.js";

/**
 * Contains a page of OntologyEntities that are depended on by the requested resource at the tagged version.
 */
export interface GetDependenciesForTaggedDependentResponseV2Success {
  ontologyEntityPageItems: Array<ProvenanceOntologyEntityRid>;
  version: Version | undefined;
  nextPageToken: GetDependenciesV2PagingToken | undefined;
  totalEntitiesCount: string;
}
