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

import type {
  InterfaceParameterConstraintApiName,
  OntologyIrInterfaceParameterConstraint,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";

import { cloneDefinition } from "./cloneDefinition.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import { importedTypes, namespace } from "./defineOntology.js";
import type { InterfaceActionTypeConstraintDefinition } from "./InterfaceActionTypeConstraintDefinition.js";
import { combineApiNamespaceIfMissing } from "./namespace/combineApiNamespaceIfMissing.js";

export function defineInterfaceActionTypeConstraint(
  input: InterfaceActionTypeConstraintDefinition
): void {
  const def = cloneDefinition(input);

  invariant(
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE][
      def.interfaceType.apiName
    ] == null,
    `Cannot define an action type constraint on imported interface ${def.interfaceType.apiName}. The interface must be locally defined.`
  );

  const apiNameWithNamespace = combineApiNamespaceIfMissing(
    namespace,
    def.apiName
  );

  invariant(
    def.interfaceType.actionTypeConstraints.find(
      (a) => a.metadata.apiName === apiNameWithNamespace
    ) == null,
    `Action type constraint with apiName ${apiNameWithNamespace} already exists on interface ${def.interfaceType.apiName}`
  );

  const parameters: Record<
    InterfaceParameterConstraintApiName,
    OntologyIrInterfaceParameterConstraint
  > = {};
  const seenParamApiNames = new Set<string>();
  for (const param of def.parameters) {
    invariant(
      !seenParamApiNames.has(param.apiName),
      `Duplicate parameter constraint apiName "${param.apiName}" in action type constraint ${apiNameWithNamespace}`
    );
    seenParamApiNames.add(param.apiName);
    parameters[param.apiName] = {
      displayMetadata: {
        displayName: param.displayName,
        apiName: param.apiName,
      },
      type: param.type,
      requireImplementation: param.requireImplementation,
    };
  }

  def.interfaceType.actionTypeConstraints.push({
    metadata: {
      apiName: apiNameWithNamespace,
      displayName: def.displayName,
      description: def.description,
    },
    parameters,
    requireImplementation: def.requireImplementation,
  });
}
