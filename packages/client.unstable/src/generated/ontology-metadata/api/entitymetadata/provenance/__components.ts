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

import type {
  BuilderPipelineRid as _api_BuilderPipelineRid,
  ObjectTypeApiName as _api_ObjectTypeApiName,
  ObjectTypeRid as _api_ObjectTypeRid,
} from "../../__components.js";

/**
 * Information describing the provenance of an action type.
 */
export interface ActionTypeProvenance {
  source: ActionTypeProvenanceSource;
}
export interface ActionTypeProvenanceSource_marketplace {
  type: "marketplace";
  marketplace: MarketplaceEntityProvenance;
}
/**
 * Information describing the source provenance of an ontology entity modeled as an extensible union.
 * Each service or client which defines the definition of an ontology entity can declare their custom
 * representation of provenance metadata. Examples may include references to resources, their versions,
 * timestamps etc.
 */
export type ActionTypeProvenanceSource = ActionTypeProvenanceSource_marketplace;

/**
 * Provenance of an entity originating from Builder pipeline.
 */
export interface BuilderEntityProvenance {
  pipelineRid: _api_BuilderPipelineRid;
}
/**
 * Edits History
 */
export interface EditsHistoryProvenance {
  objectTypeRid: _api_ObjectTypeRid;
}
/**
 * Information describing the provenance of an ontology entity.
 */
export interface EntityProvenance {
  source: EntityProvenanceSource;
}
export interface EntityProvenanceSource_builder {
  type: "builder";
  builder: BuilderEntityProvenance;
}

export interface EntityProvenanceSource_marketplace {
  type: "marketplace";
  marketplace: MarketplaceEntityProvenance;
}

export interface EntityProvenanceSource_editsHistory {
  type: "editsHistory";
  editsHistory: EditsHistoryProvenance;
}
/**
 * Information describing the source provenance of an ontology entity modeled as an extensible union.
 * Each service or client which defines the definition of an ontology entity can declare their custom
 * representation of provenance metadata. Examples may include references to resources, their versions,
 * timestamps etc.
 */
export type EntityProvenanceSource =
  | EntityProvenanceSource_builder
  | EntityProvenanceSource_marketplace
  | EntityProvenanceSource_editsHistory;

export type MarketplaceBlockSetInstallationRid = string;

/**
 * Provenance of an entity originating from Marketplace product installation.
 */
export interface MarketplaceEntityProvenance {
  installationRid: MarketplaceBlockSetInstallationRid;
}
/**
 * Edits History
 */
export interface OntologyIrEditsHistoryProvenance {
  objectTypeRid: _api_ObjectTypeApiName;
}
/**
 * Information describing the provenance of an ontology entity.
 */
export interface OntologyIrEntityProvenance {
  source: OntologyIrEntityProvenanceSource;
}
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

/**
 * Provenance of an entity originating from ontology metadata application (OMA).
 */
export interface OntologyMetadataAppEntityProvenance {
}
