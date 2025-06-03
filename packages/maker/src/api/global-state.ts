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

import type { OntologyDefinition } from "./types.js";

// global-state.ts

interface OsdkMakerGlobals {
  ontologyDefinition: OntologyDefinition;
  importedTypes: OntologyDefinition;
  namespace: string;
}

let osdkMakerGlobals: OsdkMakerGlobals;

export function resetGlobals(): void {
  const g = globalThis as any;
  g.__osdkMaker = {
    ontologyDefinition: {
      OBJECT_TYPE: {},
      ACTION_TYPE: {},
      LINK_TYPE: {},
      INTERFACE_TYPE: {},
      SHARED_PROPERTY_TYPE: {},
      VALUE_TYPE: {},
    },
    importedTypes: {
      SHARED_PROPERTY_TYPE: {},
      OBJECT_TYPE: {},
      ACTION_TYPE: {},
      LINK_TYPE: {},
      INTERFACE_TYPE: {},
      VALUE_TYPE: {},
    },
  };

  osdkMakerGlobals = g.__osdkMaker;
}

export function getOrCreateGlobals(): OsdkMakerGlobals {
  if (!osdkMakerGlobals) {
    resetGlobals();
  }
  return osdkMakerGlobals;
}

export function ontologyDefinition(): OntologyDefinition {
  return getOrCreateGlobals().ontologyDefinition;
}

// export function updateOntologyDefinition(definition: OntologyDefinition): void {
//   getOrCreateGlobals().ontologyDefinition = definition;
// }

export function importedTypes(): OntologyDefinition {
  return getOrCreateGlobals().importedTypes;
}

// export function updateImportedTypes(
//   type: OntologyEntityTypeEnum,
//   apiName: string,
//   entity: OntologyEntityTypeMapping[OntologyEntityTypeEnum],
// ): void {
//   getOrCreateGlobals().importedTypes[type][apiName] = entity as any;
// }
