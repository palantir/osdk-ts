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
import type {
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  OsdkActionParameters,
} from "@osdk/client.api";
import type { DataValue } from "@osdk/internal.foundry";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgent } from "../util/addUserAgent.js";
import { toDataValue } from "../util/toDataValue.js";
import { ActionValidationError } from "./ActionValidationError.js";

export async function applyAction<
  AD extends ActionDefinition<any, any>,
  P extends OsdkActionParameters<AD["parameters"]> | OsdkActionParameters<
    AD["parameters"]
  >[],
  Op extends P extends OsdkActionParameters<
    AD["parameters"]
  >[] ? ApplyBatchActionOptions
    : ApplyActionOptions,
>(
  client: MinimalClient,
  action: AD,
  parameters?: P,
  options: Op = {} as Op,
): Promise<
  ActionReturnTypeForOptions<Op>
> {
  if (Array.isArray(parameters)) {
    const response = await OntologiesV2.Actions.applyActionBatchV2(
      addUserAgent(client, action),
      client.ontologyRid,
      action.apiName,
      {
        requests: parameters ? remapBatchActionParams(parameters) : [],
        options: {
          returnEdits: options?.returnEdits ? "ALL" : "NONE",
        },
      },
    );

    return (options?.returnEdits
      ? response.edits
      : undefined) as ActionReturnTypeForOptions<Op>;
  } else {
    const response = await OntologiesV2.Actions.applyActionV2(
      addUserAgent(client, action),
      client.ontologyRid,
      action.apiName,
      {
        parameters: remapActionParams(
          parameters as OsdkActionParameters<AD["parameters"]>,
        ),
        options: {
          mode: (options as ApplyActionOptions)?.validateOnly
            ? "VALIDATE_ONLY"
            : "VALIDATE_AND_EXECUTE",
          returnEdits: options?.returnEdits ? "ALL" : "NONE",
        },
      },
    );

    if ((options as ApplyActionOptions)?.validateOnly) {
      return response.validation as ActionReturnTypeForOptions<Op>;
    }

    if (response.validation?.result === "INVALID") {
      throw new ActionValidationError(response.validation);
    }

    return (options?.returnEdits
      ? response.edits
      : undefined) as ActionReturnTypeForOptions<Op>;
  }
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

function remapBatchActionParams<
  AD extends ActionDefinition<any, any>,
>(params: OsdkActionParameters<AD["parameters"]>[]) {
  const remappedParams: { parameters: { [parameterName: string]: any } }[] =
    params.map(
      param => {
        return { parameters: remapActionParams<AD>(param) };
      },
    );

  return remappedParams;
}
