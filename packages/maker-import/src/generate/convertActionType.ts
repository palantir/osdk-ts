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

import { OntologyEntityTypeEnum } from "@osdk/maker";
import { consola } from "consola";
import { mapActionParameterType } from "./mapActionParameterType.js";
import { withoutNamespace } from "./utils.js";

interface GatewayActionTypeV2 {
  apiName: string;
  displayName?: string;
  description?: string;
  status: string;
  parameters: Record<
    string,
    {
      displayName?: string;
      description?: string;
      dataType: { type: string; [key: string]: unknown };
      required: boolean;
    }
  >;
  operations: Array<{ type: string; [key: string]: unknown }>;
}

// Structural type matching maker's ActionParameter (ActionParameterType is not exported)
interface ConvertedActionParameter {
  id: string;
  displayName: string;
  type: string | { type: string; [key: string]: unknown };
  validation: { required?: boolean };
}

// Structural type matching maker's ActionType
interface ConvertedActionType {
  __type: OntologyEntityTypeEnum.ACTION_TYPE;
  apiName: string;
  displayName: string;
  status: string;
  rules: Array<unknown>;
  parameters: Array<ConvertedActionParameter>;
}

export function convertActionType(
  action: GatewayActionTypeV2,
): ConvertedActionType {
  const parameters: Array<ConvertedActionParameter> = [];

  for (const [paramId, paramV2] of Object.entries(action.parameters)) {
    const mappedType = mapActionParameterType(paramV2.dataType);
    if (!mappedType) {
      consola.warn(
        `Skipping parameter "${paramId}" on action "${action.apiName}": unsupported type "${paramV2.dataType.type}"`,
      );
      continue;
    }

    parameters.push({
      id: paramId,
      displayName: paramV2.displayName ?? paramId,
      type: mappedType,
      validation: {
        required: paramV2.required,
      },
    });
  }

  const shortName = withoutNamespace(action.apiName);

  return {
    __type: OntologyEntityTypeEnum.ACTION_TYPE,
    apiName: action.apiName,
    displayName: action.displayName ?? shortName,
    status: mapActionStatus(action.status),
    rules: [],
    parameters,
  };
}

function mapActionStatus(
  status: string,
): "active" | "experimental" | "example" {
  switch (status) {
    case "ACTIVE":
      return "active";
    case "EXPERIMENTAL":
      return "experimental";
    default:
      return "active";
  }
}
