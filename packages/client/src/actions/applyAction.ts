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
import { Ontologies, OntologiesV2 } from "@osdk/internal.foundry";
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
      await client.ontologyRid,
      action.apiName,
      {
        requests: parameters
          ? await remapBatchActionParams(parameters, client)
          : [],
        options: {
          returnEdits: options?.$returnEdits ? "ALL" : "NONE",
        },
      },
    );

    return (options?.$returnEdits
      ? response.edits
      : undefined) as ActionReturnTypeForOptions<Op>;
  } else {
    const response = await OntologiesV2.Actions.applyActionV2(
      addUserAgent(client, action),
      await client.ontologyRid,
      action.apiName,
      {
        parameters: await remapActionParams(
          parameters as OsdkActionParameters<AD["parameters"]>,
          client,
        ),
        options: {
          mode: (options as ApplyActionOptions)?.$validateOnly
            ? "VALIDATE_ONLY"
            : "VALIDATE_AND_EXECUTE",
          returnEdits: options
              ?.$returnEdits
            ? "ALL"
            : "NONE",
        },
      },
    );

    if ((options as ApplyActionOptions)?.$validateOnly) {
      return response.validation as ActionReturnTypeForOptions<Op>;
    }

    if (response.validation?.result === "INVALID") {
      throw new ActionValidationError(response.validation);
    }

    return (options?.$returnEdits
      ? response.edits
      : undefined) as ActionReturnTypeForOptions<Op>;
  }
}

async function remapActionParams<AD extends ActionDefinition<any, any>>(
  params: OsdkActionParameters<AD["parameters"]> | undefined,
  client: MinimalClient,
): Promise<Record<string, DataValue>> {
  if (params == null) {
    return {};
  }

  const parameterMap: { [parameterName: string]: unknown } = {};
  for (const [key, value] of Object.entries(params)) {
    parameterMap[key] = await toDataValue(value, client);
  }

  return parameterMap;
}

async function remapBatchActionParams<
  AD extends ActionDefinition<any, any>,
>(params: OsdkActionParameters<AD["parameters"]>[], client: MinimalClient) {
  const remappedParams = await Promise.all(params.map(
    async param => {
      return { parameters: await remapActionParams<AD>(param, client) };
    },
  ));

  return remappedParams;
}
