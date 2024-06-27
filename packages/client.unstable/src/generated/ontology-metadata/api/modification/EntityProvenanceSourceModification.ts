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

import type { BuilderEntityProvenance } from "../entitymetadata/provenance/BuilderEntityProvenance.js";
import type { MarketplaceEntityProvenance } from "../entitymetadata/provenance/MarketplaceEntityProvenance.js";
import type { NoneEntityProvenance } from "./NoneEntityProvenance.js";
export interface EntityProvenanceSourceModification_builder {
  type: "builder";
  builder: BuilderEntityProvenance;
}

export interface EntityProvenanceSourceModification_marketplace {
  type: "marketplace";
  marketplace: MarketplaceEntityProvenance;
}

export interface EntityProvenanceSourceModification_none {
  type: "none";
  none: NoneEntityProvenance;
}
export type EntityProvenanceSourceModification =
  | EntityProvenanceSourceModification_builder
  | EntityProvenanceSourceModification_marketplace
  | EntityProvenanceSourceModification_none;
