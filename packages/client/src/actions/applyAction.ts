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
  ActionEditResponse,
  ActionMetadata,
  ActionParam,
  ActionReturnTypeForOptions,
  ApplyActionOptions,
  ApplyBatchActionOptions,
  CompileTimeMetadata as CompileTimeActionMetadata,
  DataValueClientToWire,
} from "@osdk/api";
import type {
  BatchApplyActionResponseV2,
  DataValue,
  SyncApplyActionResponseV2,
} from "@osdk/foundry.ontologies";
import * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { MinimalClient } from "../MinimalClientContext.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import type { NOOP } from "../util/NOOP.js";
import type { NullableProps } from "../util/NullableProps.js";
import type { PartialBy } from "../util/partialBy.js";
import { toDataValue } from "../util/toDataValue.js";
import { ActionValidationError } from "./ActionValidationError.js";

type BaseType<APD extends Pick<ActionMetadata.Parameter<any>, "type">> =
  APD["type"] extends ActionMetadata.DataType.Object<infer TTargetType>
    ? ActionParam.ObjectType<TTargetType>
    : APD["type"] extends ActionMetadata.DataType.ObjectSet<infer TTargetType>
      ? ActionParam.ObjectSetType<TTargetType>
    : APD["type"] extends ActionMetadata.DataType.Struct<infer TStructType>
      ? ActionParam.StructType<TStructType>
    : APD["type"] extends keyof DataValueClientToWire
      ? ActionParam.PrimitiveType<APD["type"]>
    : never;

type MaybeArrayType<APD extends ActionMetadata.Parameter<any>> =
  APD["multiplicity"] extends true ? Array<BaseType<APD>>
    : BaseType<APD>;

type NotOptionalParams<X extends ActionParametersDefinition> = {
  [P in keyof X]: MaybeArrayType<X[P]>;
};

export type OsdkActionParameters<
  X extends ActionParametersDefinition,
> = NullableProps<X> extends never ? NotOptionalParams<X>
  : PartialBy<NotOptionalParams<X>, NullableProps<X>>;

export type ActionSignatureFromDef<
  T extends ActionDefinition<any>,
> = {
  applyAction:
    [CompileTimeActionMetadata<T>["signatures"]["applyAction"]] extends [never]
      ? ActionSignature<CompileTimeActionMetadata<T>["parameters"]>
      : CompileTimeActionMetadata<T>["signatures"]["applyAction"];

  batchApplyAction:
    [CompileTimeActionMetadata<T>["signatures"]["batchApplyAction"]] extends
      [never] ? BatchActionSignature<CompileTimeActionMetadata<T>["parameters"]>
      : CompileTimeActionMetadata<T>["signatures"]["batchApplyAction"];
};

type ActionParametersDefinition = Record<
  any,
  ActionMetadata.Parameter<any>
>;

export type ActionSignature<
  X extends Record<any, ActionMetadata.Parameter<any>>,
> = <
  A extends NOOP<OsdkActionParameters<X>>,
  OP extends ApplyActionOptions,
>(
  args: A,
  options?: OP,
) => Promise<
  ActionReturnTypeForOptions<OP>
>;

export type BatchActionSignature<
  X extends Record<any, ActionMetadata.Parameter<any>>,
> = <
  A extends NOOP<OsdkActionParameters<X>>[],
  OP extends ApplyBatchActionOptions,
>(
  args: A,
  options?: OP,
) => Promise<
  ActionReturnTypeForOptions<OP>
>;

export async function applyAction<
  AD extends ActionDefinition<any>,
  P extends
    | OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]>
    | OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]>[],
  Op extends P extends OsdkActionParameters<
    CompileTimeActionMetadata<AD>["parameters"]
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
    const response = await OntologiesV2.Actions.applyBatch(
      clientWithHeaders,
      await client.ontologyRid,
      action.apiName,
      {
        requests: parameters
          ? await remapBatchActionParams(
            parameters,
            client,
            await client.ontologyProvider.getActionDefinition(action.apiName),
          )
          : [],
        options: {
          returnEdits: options?.$returnEdits ? "ALL" : "NONE",
        },
      },
      { branch: client.branch },
    );

    const edits = response.edits;
    return (options?.$returnEdits
      ? edits?.type === "edits" ? remapActionResponse(response) : edits
      : undefined) as ActionReturnTypeForOptions<Op>;
  } else {
    const response = await OntologiesV2.Actions.apply(
      clientWithHeaders,
      await client.ontologyRid,
      action.apiName,
      {
        parameters: await remapActionParams(
          parameters as OsdkActionParameters<
            CompileTimeActionMetadata<AD>["parameters"]
          >,
          client,
          await client.ontologyProvider.getActionDefinition(action.apiName),
        ),
        options: {
          mode: (options as ApplyActionOptions)?.$validateOnly
            ? "VALIDATE_ONLY"
            : "VALIDATE_AND_EXECUTE",
          returnEdits: options
              ?.$returnEdits
            ? "ALL_V2_WITH_DELETIONS"
            : "NONE",
        },
      },
      { branch: client.branch, transactionId: client.transactionId },
    );

    if ((options as ApplyActionOptions)?.$validateOnly) {
      return response.validation as ActionReturnTypeForOptions<Op>;
    }

    if (response.validation && response.validation?.result === "INVALID") {
      const validation = response.validation;
      throw new ActionValidationError(validation);
    }

    const edits = response.edits;
    return (options?.$returnEdits
      ? edits?.type === "edits" ? remapActionResponse(response) : edits
      : undefined) as ActionReturnTypeForOptions<Op>;
  }
}

async function remapActionParams<AD extends ActionDefinition<any>>(
  params:
    | OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]>
    | undefined,
  client: MinimalClient,
  actionMetadata: ActionMetadata,
): Promise<Record<string, DataValue>> {
  if (params == null) {
    return {};
  }

  const parameterMap: { [parameterName: string]: unknown } = {};
  for (const [key, value] of Object.entries(params)) {
    parameterMap[key] = await toDataValue(value, client, actionMetadata);
  }

  return parameterMap;
}

async function remapBatchActionParams<
  AD extends ActionDefinition<any>,
>(
  params: OsdkActionParameters<CompileTimeActionMetadata<AD>["parameters"]>[],
  client: MinimalClient,
  actionMetadata: ActionMetadata,
) {
  const remappedParams = await Promise.all(params.map(
    async param => {
      return {
        parameters: await remapActionParams<AD>(param, client, actionMetadata),
      };
    },
  ));

  return remappedParams;
}

export function remapActionResponse(
  response: SyncApplyActionResponseV2 | BatchApplyActionResponseV2,
): ActionEditResponse | undefined {
  const editResponses = response?.edits;
  if (editResponses?.type === "edits") {
    const remappedActionResponse: ActionEditResponse = {
      type: editResponses.type,
      deletedLinksCount: editResponses.deletedLinksCount,
      deletedObjectsCount: editResponses.deletedObjectsCount,
      addedLinks: [],
      deletedLinks: [],
      addedObjects: [],
      deletedObjects: [],
      modifiedObjects: [],
      editedObjectTypes: [],
    };

    const editedObjectTypesSet = new Set<string>();
    for (const edit of editResponses.edits) {
      if (edit.type === "addLink" || edit.type === "deleteLink") {
        const osdkEdit = {
          linkTypeApiNameAtoB: edit.linkTypeApiNameAtoB,
          linkTypeApiNameBtoA: edit.linkTypeApiNameBtoA,
          aSideObject: edit.aSideObject,
          bSideObject: edit.bSideObject,
        };
        edit.type === "addLink"
          ? remappedActionResponse.addedLinks.push(
            osdkEdit,
          )
          : remappedActionResponse.deletedLinks?.push(osdkEdit);
        editedObjectTypesSet.add(edit.aSideObject.objectType);
        editedObjectTypesSet.add(edit.bSideObject.objectType);
      } else if (
        edit.type === "addObject" || edit.type === "deleteObject"
        || edit.type === "modifyObject"
      ) {
        const osdkEdit = {
          objectType: edit.objectType,
          primaryKey: edit.primaryKey,
        };
        if (edit.type === "addObject") {
          remappedActionResponse.addedObjects.push(osdkEdit);
        } else if (edit.type === "deleteObject") {
          remappedActionResponse.deletedObjects?.push(osdkEdit);
        } else if (edit.type === "modifyObject") {
          remappedActionResponse.modifiedObjects.push(osdkEdit);
        }
        editedObjectTypesSet.add(edit.objectType);
      } else {
        if (process.env.NODE_ENV !== "production") {
          // eslint-disable-next-line no-console
          console.warn(
            `Unexpected edit type: ${JSON.stringify(edit)}`,
          );
        }
      }
    }
    remappedActionResponse.editedObjectTypes = [...editedObjectTypesSet];
    return remappedActionResponse;
  }
}
