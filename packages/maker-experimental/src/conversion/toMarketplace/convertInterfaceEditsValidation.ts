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

import type {
  InterfaceActionTypeEditsValidation,
  OntologyIrInterfaceActionTypeConstraint,
  OntologyIrInterfaceActionTypeEditsValidation,
} from "@osdk/client.unstable";
import type { InterfaceType, OntologyDefinition } from "@osdk/maker";
import { mapInterfaceEditsValidationReferences } from "@osdk/maker";

import type { OntologyRidGenerator } from "../../util/generateRid.js";

export function convertInterfaceEditsValidation(
  validation: OntologyIrInterfaceActionTypeEditsValidation,
  interfaceType: InterfaceType,
  constraint: Pick<
    OntologyIrInterfaceActionTypeConstraint,
    "metadata" | "parameters"
  >,
  ridGenerator: OntologyRidGenerator,
  ontologies: OntologyDefinition[],
): InterfaceActionTypeEditsValidation | undefined {
  return mapInterfaceEditsValidationReferences(
    validation,
    interfaceType,
    constraint,
    ontologies,
    {
      convertObject: (apiName) =>
        ridGenerator.generateRidForObjectType(apiName),
      convertInterface: (apiName) =>
        ridGenerator.generateRidForInterface(apiName),
      convertParameter: (parameterApiName) =>
        ridGenerator.generateRidForInterfaceParameterConstraint(
          constraint.metadata.apiName,
          interfaceType.apiName,
          parameterApiName,
        ),
      convertLink: (apiName, declaringInterfaceApiName) =>
        ridGenerator.generateRidForInterfaceLinkType(
          apiName,
          declaringInterfaceApiName,
        ),
    },
  );
}
