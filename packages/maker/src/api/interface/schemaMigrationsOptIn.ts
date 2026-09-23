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

import { OntologyEntityTypeEnum } from "../common/OntologyEntityTypeEnum.js";
import { importedTypes } from "../defineOntology.js";
import type { InterfaceType } from "./InterfaceType.js";

/**
 * Whether an interface has definitely opted into schema migrations.
 *
 * Unknown imported metadata is treated as not opted in, as required by the wire format.
 */
export function isOptedIntoSchemaMigrations(
  interfaceType: InterfaceType,
): boolean {
  return (
    interfaceType.schemaMigrations !== undefined ||
    interfaceType.schemaMigrationsEnabled === true
  );
}

/**
 * Whether an interface has opted into schema migrations, preserving an unknown imported state.
 *
 * Imported interfaces rely on the upstream ontology's reported state because their transitions
 * are unavailable locally. Older imported metadata does not report that state, so it remains
 * unknown rather than being treated as opted out.
 */
export function resolveSchemaMigrationsOptIn(
  interfaceType: InterfaceType,
): boolean | undefined {
  if (interfaceType.schemaMigrations !== undefined) {
    return true;
  }
  if (interfaceType.schemaMigrationsEnabled !== undefined) {
    return interfaceType.schemaMigrationsEnabled;
  }
  return isImportedInterfaceType(interfaceType) ? undefined : false;
}

export function isImportedInterfaceType(interfaceType: InterfaceType): boolean {
  return (
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE][
      interfaceType.apiName
    ] !== undefined
  );
}
