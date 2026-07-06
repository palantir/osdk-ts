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
import type { InterfaceType, OntologyDefinition } from "@osdk/maker";
import { getImportedTypes } from "@osdk/maker";

import type { FunctionsIr } from "../../api/defineOntologyV2.js";
import { OntologyRidGeneratorImpl } from "../../util/generateRid.js";
import { convertOntologyDefinitionToWireBlockData } from "./convertOntologyDefinitionToWireBlockData.js";
import { convertValueTypeToWireBlockData } from "./convertValueTypeToWireBlockData.js";

export function convertOntologyDefinition(
  ontology: OntologyDefinition,
  ridGenerator: OntologyRidGeneratorImpl,
  functionsIr?: FunctionsIr,
  randomnessKey?: string
): OntologyIrV2 {
  const importedTypes = getImportedTypes();

  // Convert imported ontology FIRST so that all imported entity RIDs and IDs
  // are registered in the ridGenerator before the main ontology's
  // knownIdentifiers is built.
  const importedOntology = convertOntologyDefinitionToWireBlockData(
    importedTypes,
    ridGenerator
  );

  const allOntologies = [ontology, importedTypes];
  const mainOntology = convertOntologyDefinitionToWireBlockData(
    ontology,
    ridGenerator,
    allOntologies,
    functionsIr
  );

  const importedInterfaceApiNames = new Set(
    Object.keys(importedTypes.INTERFACE_TYPE)
  );
  const transitiveInterfaces: OntologyDefinition["INTERFACE_TYPE"] = {};

  function collectTransitive(iface: InterfaceType): void {
    for (const linked of iface.linkedInterfaces ?? []) {
      if (typeof linked === "string") continue;
      if (
        !importedInterfaceApiNames.has(linked.apiName) &&
        !(linked.apiName in transitiveInterfaces)
      ) {
        transitiveInterfaces[linked.apiName] = linked;
        collectTransitive(linked);
      }
    }
    for (const parent of iface.extendsInterfaces) {
      if (
        !importedInterfaceApiNames.has(parent.apiName) &&
        !(parent.apiName in transitiveInterfaces)
      ) {
        transitiveInterfaces[parent.apiName] = parent;
        collectTransitive(parent);
      }
    }
  }

  for (const iface of Object.values(importedTypes.INTERFACE_TYPE)) {
    collectTransitive(iface);
  }
  const transitiveOntology: OntologyDefinition = {
    INTERFACE_TYPE: transitiveInterfaces,
    OBJECT_TYPE: {},
    ACTION_TYPE: {},
    LINK_TYPE: {},
    SHARED_PROPERTY_TYPE: {},
    VALUE_TYPE: {},
  };

  const throwawayRidGenerator = new OntologyRidGeneratorImpl(
    getImportedTypes(),
    randomnessKey
  );
  const transitiveImportedOntology = convertOntologyDefinitionToWireBlockData(
    transitiveOntology,
    throwawayRidGenerator
  );

  return {
    ontology: mainOntology,
    importedOntology,
    transitiveImportedOntology,
    valueTypes: convertValueTypeToWireBlockData(ontology),
    importedValueTypes: convertValueTypeToWireBlockData(importedTypes),
    randomnessKey,
  };
}
