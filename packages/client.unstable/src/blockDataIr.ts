/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  OntologyBlockDataV2,
  OntologyIrOntologyBlockDataV2,
} from "./generated/ontology-metadata/api/blockdata/index.js";
import type {
  OntologyIrValueTypeBlockData,
  ValueTypeBlockData,
} from "./generated/type-registry-marketplace/__components.js";

export type InterfaceTypeApiName = string;
export type ObjectTypeFieldApiName = string;
export type InterfaceLinkTypeApiName = string;
export type { OntologyIrOntologyBlockDataV2 } from "./generated/ontology-metadata/api/blockdata/index.js";

export interface OntologyIr {
  ontology: OntologyIrOntologyBlockDataV2;
  importedOntology: OntologyIrOntologyBlockDataV2;
  valueTypes: OntologyIrValueTypeBlockData;
  importedValueTypes: OntologyIrValueTypeBlockData;
  randomnessKey?: string;
}

export interface OntologyIrV2 {
  ontology: OntologyBlockDataV2;
  importedOntology: OntologyBlockDataV2;
  valueTypes: ValueTypeBlockData[];
  importedValueTypes: ValueTypeBlockData[];
  transitiveImportedOntology: OntologyBlockDataV2;
  randomnessKey?: string;
}
