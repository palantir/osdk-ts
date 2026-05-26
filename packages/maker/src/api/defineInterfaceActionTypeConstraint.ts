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
  InterfaceActionTypeConstraintRid,
  InterfaceParameterConstraintRid,
  OntologyIrBaseParameterConstraintType,
  OntologyIrInterfaceParameterConstraint,
} from "@osdk/client.unstable";
import invariant from "tiny-invariant";
import { cloneDefinition } from "./cloneDefinition.js";
import { OntologyEntityTypeEnum } from "./common/OntologyEntityTypeEnum.js";
import {
  importedTypes,
  namespace,
  withoutNamespace,
} from "./defineOntology.js";
import type { InterfaceType } from "./interface/InterfaceType.js";
import { combineApiNamespaceIfMissing } from "./namespace/combineApiNamespaceIfMissing.js";

interface ParameterConstraintDefinition {
  apiName?: string;
  displayName: string;
  type: OntologyIrBaseParameterConstraintType;
  requireImplementation?: boolean;
}

interface InterfaceActionTypeConstraintDefinition {
  from: InterfaceType;
  apiName: string;
  displayName?: string;
  description?: string;
  requireImplementation?: boolean;
  parameters?: Array<ParameterConstraintDefinition>;
}

let constraintCounter = 0;
let parameterCounter = 0;

function generateConstraintRid(): InterfaceActionTypeConstraintRid {
  return `ri.ontology.main.interface-action-type-constraint.${++constraintCounter}` as InterfaceActionTypeConstraintRid;
}

function generateParameterConstraintRid(): InterfaceParameterConstraintRid {
  return `ri.ontology.main.interface-parameter-constraint.${++parameterCounter}` as InterfaceParameterConstraintRid;
}

export function defineInterfaceActionTypeConstraint(
  input: InterfaceActionTypeConstraintDefinition,
): void {
  const def = cloneDefinition(input);

  invariant(
    importedTypes[OntologyEntityTypeEnum.INTERFACE_TYPE][def.from.apiName]
      == null,
    `Cannot define an action type constraint on imported interface ${def.from.apiName}. The "from" side must be a locally defined interface.`,
  );

  const apiNameWithNamespace = combineApiNamespaceIfMissing(
    namespace,
    def.apiName,
  );
  const apiNameWithoutNamespace = withoutNamespace(apiNameWithNamespace);

  invariant(
    def.from.actionTypeConstraints.find(
      a => a.metadata.apiName === apiNameWithNamespace,
    ) == null,
    `Action type constraint with apiName ${apiNameWithNamespace} already exists on interface ${def.from.apiName}`,
  );

  const parameters: Record<
    InterfaceParameterConstraintRid,
    OntologyIrInterfaceParameterConstraint
  > = {};
  for (const param of def.parameters ?? []) {
    const paramRid = generateParameterConstraintRid();
    const paramApiName = param.apiName ?? param.displayName;
    parameters[paramRid] = {
      displayMetadata: {
        displayName: param.displayName,
        apiName: paramApiName,
      },
      type: param.type,
      requireImplementation: param.requireImplementation ?? true,
    };
  }

  def.from.actionTypeConstraints.push({
    rid: generateConstraintRid(),
    metadata: {
      apiName: apiNameWithNamespace,
      displayName: def.displayName ?? apiNameWithoutNamespace,
      description: def.description ?? def.displayName
        ?? apiNameWithoutNamespace,
    },
    parameters,
    requireImplementation: def.requireImplementation ?? true,
  });
}
