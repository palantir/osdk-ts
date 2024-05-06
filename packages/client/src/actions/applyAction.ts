/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { ActionDefinition } from "@osdk/api";
import type { DataValue } from "@osdk/internal.foundry";
import { applyActionV2 } from "@osdk/internal.foundry/OntologiesV2_Action";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgent } from "../util/addUserAgent.js";
import { toDataValue } from "../util/toDataValue.js";
import type {
  ActionEditResponse,
  ActionValidationResponse,
  ApplyActionOptions,
  OsdkActionParameters,
} from "./Actions.js";
import { ActionValidationError } from "./ActionValidationError.js";

// cannot specify both validateOnly and returnEdits as true

export type ActionReturnTypeForOptions<Op extends ApplyActionOptions> =
  Op extends { $validateOnly: true } ? ActionValidationResponse
    : Op extends { $returnEdits: true } ? ActionEditResponse
    : undefined;

export async function applyAction<
  AD extends ActionDefinition<any, any>,
  Op extends ApplyActionOptions,
>(
  client: MinimalClient,
  action: AD,
  parameters?: OsdkActionParameters<AD["parameters"]>,
  options: Op = {} as Op,
): Promise<ActionReturnTypeForOptions<Op>> {
  const response = await applyActionV2(
    addUserAgent(client, action),
    client.ontologyRid,
    action.apiName,
    {
      parameters: remapActionParams(parameters),
      options: {
        mode: options?.$validateOnly ? "VALIDATE_ONLY" : "VALIDATE_AND_EXECUTE",
        returnEdits: options?.$returnEdits ? "ALL" : "NONE",
      },
    },
  );

  if (options?.$validateOnly) {
    return response.validation as ActionReturnTypeForOptions<Op>;
  }

  if (response.validation?.result === "INVALID") {
    throw new ActionValidationError(response.validation);
  }

  return (options?.$returnEdits
    ? response.edits
    : undefined) as ActionReturnTypeForOptions<Op>;
}

function remapActionParams<AD extends ActionDefinition<any, any>>(
  params: OsdkActionParameters<AD["parameters"]> | undefined,
): Record<string, DataValue> {
  if (params == null) {
    return {};
  }

  const parameterMap: { [parameterName: string]: any } = {};
  const remappedParams = Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = toDataValue(value);
    return acc;
  }, parameterMap);

  return remappedParams;
}
