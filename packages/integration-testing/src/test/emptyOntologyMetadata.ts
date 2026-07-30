/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";

/** The smallest metadata the ontology server accepts. */
export const EMPTY_ONTOLOGY_METADATA: OntologyFullMetadata = {
  ontology: {
    apiName: "ontology",
    rid: "ri.ontology.main.ontology.0",
    displayName: "ontology",
    description: "local ontology",
  },
  objectTypes: {},
  actionTypes: {},
  queryTypes: {},
  interfaceTypes: {},
  sharedPropertyTypes: {},
  valueTypes: {},
};
