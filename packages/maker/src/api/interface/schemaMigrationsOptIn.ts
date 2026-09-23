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
 * Whether an interface has opted into schema migrations, as a definite yes or no.
 *
 * A locally defined interface opts in by declaring `schemaMigrations`. An imported one carries the
 * upstream ontology's answer in `schemaMigrationsEnabled`, since its transitions are unavailable to
 * us. An unknown answer is reported as opted out, which is what the wire format requires.
 */
export function isSchemaMigrationsOptedIn(
  interfaceType: InterfaceType,
): boolean {
  return (
    interfaceType.schemaMigrations !== undefined ||
    interfaceType.schemaMigrationsEnabled === true
  );
}

/**
 * Like {@link isSchemaMigrationsOptedIn}, but distinguishes "opted out" from "we cannot tell".
 *
 * An imported interface only reports `schemaMigrationsEnabled` if the ontology metadata it was
 * generated from carried the field. Metadata predating it says nothing either way, and reading that
 * silence as opted out would reject hierarchies that are in fact opted in upstream.
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
  return isImported(interfaceType) ? undefined : false;
}

export function isImported(interfaceType: InterfaceType): boolean {
  return (
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE][
      interfaceType.apiName
    ] !== undefined
  );
}
