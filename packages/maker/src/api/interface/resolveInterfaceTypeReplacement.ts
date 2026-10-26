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
  /** Present when the replacement is defined locally, absent when only known by API name. */
  local?: InterfaceType;
  /** Present when the replacement is declared as an input to this project. */
  imported?: InterfaceType;
}

/**
 * Resolves the interface type a `replace` instruction's replacement refers to: an object returned
 * by `defineInterface`, or the API name of a locally-defined or imported interface type.
 */
export function resolveReplacementInterfaceType(
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

  return {
    apiName,
    ...(Object.hasOwn(localTypes, apiName)
      ? { local: localTypes[apiName] }
      : {}),
    ...(Object.hasOwn(importedInterfaceTypes, apiName)
      ? { imported: importedInterfaceTypes[apiName] }
      : {}),
  };
}
