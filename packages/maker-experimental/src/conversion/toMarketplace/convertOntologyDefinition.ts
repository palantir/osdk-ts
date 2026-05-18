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
import type { FunctionsIr } from "../../api/defineOntologyV2.js";
import type { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import { convertOntologyDefinitionToWireBlockData } from "./convertOntologyDefinitionToWireBlockData.js";
import { convertValueTypeToWireBlockData } from "./convertValueTypeToWireBlockData.js";

export function convertOntologyDefinition(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGeneratorImpl,
  functionsIr?: FunctionsIr,
  randomnessKey?: string,
): OntologyIrV2 {
  // Convert main ontology first. During conversion, accessing properties on
  // proxy-wrapped imported entities (e.g. i.apiName in extendsInterfaces)
  // triggers wrapWithProxy's get-trap, which calls importOntologyEntity()
  // and populates the global importedTypes. This matches the legacy path's
  // ordering.
  const importedTypes = getImportedTypes();
  const allOntologies = [ontology, importedTypes];
  const mainOntology = convertOntologyDefinitionToWireBlockData(
    ontology,
    ridGenerator,
    allOntologies,
    functionsIr,
  );

  // Convert imported ontology second, now that importedTypes has been
  // populated by the proxy triggers above.
  const importedOntology = convertOntologyDefinitionToWireBlockData(
    importedTypes,
    ridGenerator,
  );

  return {
    ontology: mainOntology,
    importedOntology,
    valueTypes: convertValueTypeToWireBlockData(ontology),
    importedValueTypes: convertValueTypeToWireBlockData(importedTypes),
    randomnessKey,
  };
}
