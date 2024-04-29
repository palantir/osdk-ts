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

import type { OntologyRid } from "../OntologyRid.js";
import type { OntologyInformationInternal } from "./OntologyInformationInternal.js";

/**
 * Response to LoadAllOntologiesInternalRequest. This includes information
 * about the Ontologies that a user can access. It is expected
 * that only administrative users should have access to multiple
 * Ontologies. This is only expected to be used by Ontology Metadata App.
 */
export interface LoadAllOntologiesInternalResponse {
  ontologies: Record<OntologyRid, OntologyInformationInternal>;
}
