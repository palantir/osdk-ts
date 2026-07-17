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

  // Convert the MAIN ontology first. Imported entities are registered into
  // `importedTypes` lazily by wrapWithProxy (see importOntologyEntity), and only
  // when one of their properties is first accessed. That first access happens
  // while the main ontology is being converted (e.g. reading an `extends`
  // target's apiName). If we converted the imported ontology first, we would
  // snapshot an empty/partial `importedTypes` and silently drop directly-imported
  // entities — and any interface-link targets that point at them — from
  // `importedOntology`, which later makes resolveBlockDataApiName fall through to
  // the raw RID.
  const allOntologies = [ontology, importedTypes];
  const mainOntology = convertOntologyDefinitionToWireBlockData(
    ontology,
    ridGenerator,
    allOntologies,
    functionsIr
  );

  const importedOntology = convertOntologyDefinitionToWireBlockData(
    importedTypes,
    ridGenerator
  );

  const importedInterfaceApiNames = new Set(
    Object.keys(importedTypes.INTERFACE_TYPE)
  );
  const transitiveInterfaces: OntologyDefinition["INTERFACE_TYPE"] = {};
  // Imported interface objects embed nested copies of their related interfaces,
  // and deeper copies are truncated to empty linkedInterfaces/extendsInterfaces
  // (see filterCyclicReferences in @osdk/maker). We must therefore recurse into
  // whichever copy actually carries children — not merely the first copy we
  // happen to encounter — otherwise an interface that is only reachable through
  // a truncated copy (e.g. an interface-link target like `report`) is dropped
  // and later resolves to a raw RID. `expanded` breaks cycles while still
  // allowing a richer copy to be expanded after a truncated one.
  const expanded = new Set<string>();

  function relatedInterfaces(iface: InterfaceType): InterfaceType[] {
    return [
      ...(iface.linkedInterfaces ?? []),
      ...iface.extendsInterfaces,
    ].filter(
      (related): related is InterfaceType => typeof related !== "string"
    );
  }

  function collectTransitive(iface: InterfaceType): void {
    const related = relatedInterfaces(iface);
    for (const linked of related) {
      if (importedInterfaceApiNames.has(linked.apiName)) continue;
      const existing = transitiveInterfaces[linked.apiName];
      // Keep the richest copy so the transitive interface's own
      // extendsInterfaces/links survive rather than a truncated placeholder.
      if (existing === undefined || relatedInterfaces(existing).length === 0) {
        transitiveInterfaces[linked.apiName] = linked;
      }
    }
    // A truncated copy carries no children; don't let it mark this interface as
    // expanded, so a later richer copy can still be walked.
    if (related.length === 0 || expanded.has(iface.apiName)) return;
    expanded.add(iface.apiName);
    for (const linked of related) {
      collectTransitive(linked);
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
