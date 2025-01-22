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

import type { BuilderEntityProvenance } from "./BuilderEntityProvenance.js";
import type { MarketplaceEntityProvenance } from "./MarketplaceEntityProvenance.js";
import type { OntologyIrEditsHistoryProvenance } from "./OntologyIrEditsHistoryProvenance.js";
export interface OntologyIrEntityProvenanceSource_builder {
  type: "builder";
  builder: BuilderEntityProvenance;
}

export interface OntologyIrEntityProvenanceSource_marketplace {
  type: "marketplace";
  marketplace: MarketplaceEntityProvenance;
}

export interface OntologyIrEntityProvenanceSource_editsHistory {
  type: "editsHistory";
  editsHistory: OntologyIrEditsHistoryProvenance;
}
/**
 * Information describing the source provenance of an ontology entity modeled as an extensible union.
 * Each service or client which defines the definition of an ontology entity can declare their custom
 * representation of provenance metadata. Examples may include references to resources, their versions,
 * timestamps etc.
 */
export type OntologyIrEntityProvenanceSource =
  | OntologyIrEntityProvenanceSource_builder
  | OntologyIrEntityProvenanceSource_marketplace
  | OntologyIrEntityProvenanceSource_editsHistory;
