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
  OsdkActionParameters,
} from "@osdk/client.api";
import type { DataValue } from "@osdk/internal.foundry";
import { Ontologies, OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "../MinimalClientContext.js";
import { Attachment, isAttachmentUpload } from "../object/Attachment.js";
import { addUserAgent } from "../util/addUserAgent.js";
import { toDataValue } from "../util/toDataValue.js";
import { ActionValidationError } from "./ActionValidationError.js";

export async function applyAction<
  AD extends ActionDefinition<any, any>,
  Op extends ApplyActionOptions,
>(
  client: MinimalClient,
  action: AD,
  parameters?: OsdkActionParameters<AD["parameters"]>,
  options: Op = {} as Op,
): Promise<ActionReturnTypeForOptions<Op>> {
  const response = await OntologiesV2.Actions.applyActionV2(
    addUserAgent(client, action),
    client.ontologyRid,
    action.apiName,
    {
      parameters: await remapActionParams(parameters, client),
      options: {
        mode: options?.validateOnly ? "VALIDATE_ONLY" : "VALIDATE_AND_EXECUTE",
        returnEdits: options?.returnEdits ? "ALL" : "NONE",
      },
    },
  );

  if (options?.validateOnly) {
    return response.validation as ActionReturnTypeForOptions<Op>;
  }

  if (response.validation?.result === "INVALID") {
    throw new ActionValidationError(response.validation);
  }

  return (options?.returnEdits
    ? response.edits
    : undefined) as ActionReturnTypeForOptions<Op>;
}

async function remapActionParams<AD extends ActionDefinition<any, any>>(
  params: OsdkActionParameters<AD["parameters"]> | undefined,
  client: MinimalClient,
): Promise<Record<string, DataValue>> {
  if (params == null) {
    return {};
  }

  const parameterMap: { [parameterName: string]: any } = {};
  const remappedParams = Object.entries(params).reduce(
    async (promisedAcc, [key, value]) => {
      const acc = await promisedAcc;
      acc[key] = await toDataValue(value, client);
      return acc;
    },
    Promise.resolve(parameterMap),
  );

  return remappedParams;
}
