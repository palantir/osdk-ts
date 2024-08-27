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

import type {
  ActionDefinition,
  ActionParameterDefinition,
  ObjectActionDataType,
  ObjectSetActionDataType,
} from "@osdk/api";
import type {
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  DataValueClientToWire,
} from "@osdk/client.api";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { DataValue } from "@osdk/internal.foundry.core";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import type { NOOP } from "../util/NOOP.js";
import type { NullableProps } from "../util/NullableProps.js";
import type { PartialBy } from "../util/partialBy.js";
import { toDataValue } from "../util/toDataValue.js";
import { ActionValidationError } from "./ActionValidationError.js";

type BaseType<APD extends Pick<ActionParameterDefinition<any, any>, "type">> =
  APD["type"] extends ObjectActionDataType<any, infer TTargetType>
    ? ActionParam.ObjectType<TTargetType>
    : APD["type"] extends ObjectSetActionDataType<any, infer TTargetType>
      ? ActionParam.ObjectSetType<TTargetType>
    : APD["type"] extends keyof DataValueClientToWire
      ? ActionParam.PrimitiveType<APD["type"]>
    : never;

type MaybeArrayType<APD extends ActionParameterDefinition<any, any>> =
  APD["multiplicity"] extends true ? Array<BaseType<APD>>
    : BaseType<APD>;

type NotOptionalParams<X extends ActionParametersDefinition> = {
  [P in keyof X]: MaybeArrayType<X[P]>;
};

export type OsdkActionParameters<
  X extends ActionParametersDefinition,
> = NullableProps<X> extends never ? NotOptionalParams<X>
  : PartialBy<NotOptionalParams<X>, NullableProps<X>>;

export type ActionSignatureFromDef<T extends ActionDefinition<any, any, any>> =
  {
    applyAction: NonNullable<T["__OsdkActionType"]> extends never
      ? ActionSignature<T["parameters"]>
      : NonNullable<T["__OsdkActionType"]>;
  };

type ActionParametersDefinition = Record<
  any,
  ActionParameterDefinition<any, any>
>;

export type ActionSignature<
  X extends Record<any, ActionParameterDefinition<any, any>>,
> = <
  A extends NOOP<OsdkActionParameters<X>> | NOOP<OsdkActionParameters<X>>[],
  OP extends A extends NOOP<OsdkActionParameters<X>>[] ? ApplyBatchActionOptions
    : ApplyActionOptions,
>(
  args: A,
  options?: OP,
) => Promise<
  ActionReturnTypeForOptions<OP>
>;

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
  const clientWithHeaders = addUserAgentAndRequestContextHeaders(
    augmentRequestContext(client, _ => ({ finalMethodCall: "applyAction" })),
    action,
  );
  if (Array.isArray(parameters)) {
    const response = await OntologiesV2.Actions.applyActionBatchV2(
      clientWithHeaders,
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
      clientWithHeaders,
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
