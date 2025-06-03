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

interface OsdkMakerRegistry {
  ontologyDefinition: OntologyDefinition;
  importedTypes: OntologyDefinition;
}

const GLOBAL_REGISTRY_KEY = Symbol.for("@osdk/maker:registry");

function getRegistry(): OsdkMakerRegistry {
  return (globalThis as any)[GLOBAL_REGISTRY_KEY];
}

export function ontologyDefinition(): OntologyDefinition {
  return getRegistry().ontologyDefinition;
}

export function importedTypes(): OntologyDefinition {
  return getRegistry().importedTypes;
}

export function resetGlobals(): void {
  (globalThis as any)[GLOBAL_REGISTRY_KEY] = {
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
}
