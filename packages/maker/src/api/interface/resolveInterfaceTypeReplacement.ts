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
import {
  importedTypes,
  namespace,
  ontologyDefinition,
} from "../defineOntology.js";
import type { InterfaceTypeReplacement } from "./InterfaceSchemaMigrations.js";
import type { InterfaceType } from "./InterfaceType.js";

export interface ResolvedReplacementInterfaceType {
  /** The fully-qualified API name the replacement is published under. */
  apiName: string;
  /** The replacement's definition, local when defined in this ontology and imported otherwise. */
  definition: InterfaceType;
}

/**
 * Resolves the interface type a `replace` instruction's replacement refers to: an object returned
 * by `defineInterface`, or the API name of a locally-defined or imported interface type. Mappings
 * can only be checked and published against a definition, so a replacement known only by API name
 * is rejected.
 */
export function resolveReplacementInterfaceType(
  replacedInterfaceType: InterfaceType,
  replacement: InterfaceTypeReplacement,
): ResolvedReplacementInterfaceType {
  const { interfaceType } = replacement;
  const localTypes = ontologyDefinition[OntologyEntityTypeEnum.INTERFACE_TYPE];
  const importedInterfaceTypes =
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE];

  const apiName =
    typeof interfaceType !== "string"
      ? interfaceType.apiName
      : !Object.hasOwn(localTypes, interfaceType) &&
          !Object.hasOwn(importedInterfaceTypes, interfaceType) &&
          Object.hasOwn(localTypes, namespace + interfaceType)
        ? namespace + interfaceType
        : interfaceType;

  const definition = Object.hasOwn(localTypes, apiName)
    ? localTypes[apiName]
    : Object.hasOwn(importedInterfaceTypes, apiName)
      ? importedInterfaceTypes[apiName]
      : undefined;
  if (definition === undefined) {
    throw new Error(
      `Interface ${replacedInterfaceType.apiName} is being replaced by ${apiName}, which is neither defined in this ontology nor imported. Import it with \`importOntologyEntity\` so that it becomes an input to this block.`,
    );
  }
  return { apiName, definition };
}
