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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { defaultOntologyMetadata as defaultOntology } from "./ontologies/defaultOntologyMetadata.js";
import { legacyFullOntology } from "./ontologies/legacyFullOntology.js";

export const defaultOntologyForConjure = {
  apiName: defaultOntology.apiName as string,
  displayName: defaultOntology.displayName as string,
  description: defaultOntology.description as string,
  currentOntologyVersion: "0000000c-aaaa-bbbb-cccc-ddddeeeeffff",
  defaultBranchRid:
    "ri.ontology.main.branch.99999999-8888-7777-6666-555555555555",
} as const;

export const fullOntology: OntologyFullMetadata = legacyFullOntology
  .getOntologyFullMetadata();
