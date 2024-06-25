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

import type { GroupId } from "../GroupId.js";
import type { OntologyApiName } from "../OntologyApiName.js";
import type { OrganizationMarkingId } from "../OrganizationMarkingId.js";
import type { CompassNamespaceRid } from "./CompassNamespaceRid.js";

/**
 * Request to create a new Ontology. This should be a one-time
 * action when a new tenant needs to be onboarded and needs
 * to have a private Ontology. Requires the "ontology:create-ontology"
 * permission on the Ontology Root node.
 */
export interface OntologyCreateRequest {
  apiName: OntologyApiName;
  displayName: string;
  description: string;
  ontologyOwnersGroupId: GroupId;
  organizationMarkingIds: Array<OrganizationMarkingId>;
  compassNamespaceRid: CompassNamespaceRid;
}
