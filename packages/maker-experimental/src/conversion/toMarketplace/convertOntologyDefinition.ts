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

import type { OntologyIrV2 } from "@osdk/client.unstable";
import type { OntologyDefinition } from "@osdk/maker";
import { getImportedTypes } from "@osdk/maker";
import type { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import { convertOntologyDefinitionToWireBlockData } from "./convertOntologyDefinitionToWireBlockData.js";
import { convertOntologyToValueTypeIr } from "./convertOntologyToValueTypeIr.js";

export function convertOntologyDefinition(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGeneratorImpl,
  randomnessKey?: string,
): OntologyIrV2 {
  return {
    ontology: convertOntologyDefinitionToWireBlockData(ontology, ridGenerator),
    importedOntology: convertOntologyDefinitionToWireBlockData(
      getImportedTypes(),
      ridGenerator,
    ),
    valueTypes: convertOntologyToValueTypeIr(ontology),
    importedValueTypes: convertOntologyToValueTypeIr(getImportedTypes()),
    randomnessKey,
  };
}
