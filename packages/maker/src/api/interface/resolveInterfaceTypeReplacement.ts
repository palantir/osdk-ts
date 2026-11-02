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
import { namespace } from "../defineOntology.js";
import type { OntologyValidationContext } from "../validateOntology.js";
import type { InterfaceTypeReplacement } from "./InterfaceSchemaMigrations.js";
import type { InterfaceType } from "./InterfaceType.js";

export interface ResolvedReplacementInterfaceType {
  /** The fully-qualified API name the replacement is published under. */
  apiName: string;
  /** The replacement's definition, local when defined in this ontology and imported otherwise. */
  definition: InterfaceType;
}

/**
 * Resolves the interface type a `replace` instruction's replacement refers to.
 */
export function resolveReplacementInterfaceType(
  { ontology, importedTypes }: OntologyValidationContext,
  replacedInterfaceType: InterfaceType,
  replacement: InterfaceTypeReplacement,
): ResolvedReplacementInterfaceType {
  const { interfaceType } = replacement;
  const localTypes = ontology[OntologyEntityTypeEnum.INTERFACE_TYPE];
  const importedInterfaceTypes =
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE];

  const requestedApiName =
    typeof interfaceType === "string" ? interfaceType : interfaceType.apiName;
  const resolved =
    findInterfaceType(requestedApiName, localTypes, importedInterfaceTypes) ??
    (typeof interfaceType === "string"
      ? findInterfaceType(namespace + interfaceType, localTypes)
      : undefined);
  if (resolved === undefined) {
    throw new Error(
      `Interface ${replacedInterfaceType.apiName} is being replaced by ${requestedApiName}, which is neither defined in this ontology nor imported. Import it with \`importOntologyEntity\` so that it becomes an input to this block.`,
    );
  }
  return resolved;
}

function findInterfaceType(
  apiName: string,
  ...interfaceTypesByApiName: Array<Record<string, InterfaceType>>
): ResolvedReplacementInterfaceType | undefined {
  const interfaceTypes = interfaceTypesByApiName.find((types) =>
    Object.hasOwn(types, apiName),
  );
  if (interfaceTypes === undefined) {
    return undefined;
  }

  return { apiName, definition: interfaceTypes[apiName] };
}
