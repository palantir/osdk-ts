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

import type { OntologyDefinition } from "@osdk/api";
import { applyActionV2 } from "@osdk/gateway/requests";
import type { DataValue } from "@osdk/gateway/types";
import type { ClientContext } from "@osdk/shared.net";
import { createOpenApiRequest } from "@osdk/shared.net";
import { toDataValue } from "../util/toDataValue.js";
import type {
  ActionEditResponse,
  Actions,
  ActionValidationResponse,
} from "./Actions.js";
import { ActionValidationError } from "./ActionValidationError.js";

// cannot specify both validateOnly and returnEdits as true
export type ApplyActionOptions =
  | { returnEdits?: true; validateOnly?: false }
  | {
    validateOnly?: true;
    returnEdits?: false;
  };

export type ActionReturnTypeForOptions<Op extends ApplyActionOptions> =
  Op extends { validateOnly: true } ? ActionValidationResponse
    : Op extends { returnEdits: true } ? ActionEditResponse
    : undefined;

export async function applyAction<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  Op extends ApplyActionOptions,
>(
  client: ClientContext<O>,
  actionApiName: A,
  parameters?: Parameters<Actions<O>[A]>[0],
  options: Op = {} as Op,
): Promise<ActionReturnTypeForOptions<Op>> {
  const response = await applyActionV2(
    createOpenApiRequest(client.stack, client.fetch),
    client.ontology.metadata.ontologyApiName,
    actionApiName as string,
    {
      parameters: remapActionParams(parameters),
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

function remapActionParams<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
>(params: Parameters<Actions<O>[A]>[0] | undefined): Record<string, DataValue> {
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
