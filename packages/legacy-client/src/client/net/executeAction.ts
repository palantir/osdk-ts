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
import { applyActionBatchV2, applyActionV2 } from "@osdk/gateway/requests";
import type { ApplyActionRequestOptions } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import type {
  ActionArgs,
  ActionReturnType,
  BulkActionReturnType,
  WrappedActionReturnType,
  WrappedBulkActionReturnType,
} from "../actions/actions";
import {
  ActionExecutionMode,
  ActionResponse,
  BulkActionResponse,
  ReturnEditsMode,
} from "../baseTypes";
import type {
  ActionExecutionOptions,
  BulkActionExecutionOptions,
} from "../baseTypes";
import { ExecuteActionErrorHandler, handleExecuteActionError } from "../errors";
import { getParameterValueMapping } from "./util/getParameterValueMapping";
import { wrapResult } from "./util/wrapResult";

export async function executeAction<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  Op extends ActionExecutionOptions,
>(
  client: ClientContext<OntologyDefinition<any>>,
  actionApiName: A,
  params?: ActionArgs<O, A>,
  options?: Op,
): WrappedActionReturnType<O, A, Op> {
  return wrapResult(
    async () => {
      const response = await applyActionV2(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
        actionApiName as string,
        {
          parameters: params ? remapActionParams(params) : {},
          options: options ? remapOptions(options) : {},
        },
      );

      return ActionResponse.of(client, response) as ActionReturnType<
        O,
        A,
        Op
      >;
    },
    e =>
      handleExecuteActionError(
        new ExecuteActionErrorHandler(),
        e,
        e.parameters,
      ),
  );
}

export async function executeBatchAction<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  Op extends BulkActionExecutionOptions,
>(
  client: ClientContext<OntologyDefinition<any>>,
  actionApiName: A,
  params?: ActionArgs<O, A>[],
  options?: Op,
): WrappedBulkActionReturnType<O, A, Op> {
  return wrapResult(
    async () => {
      const response = await applyActionBatchV2(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
        actionApiName as string,
        {
          requests: params
            ? remapBulkActionParams<O, A>(params)
            : [],
          options: options ? remapBulkOptions(options) : {},
        },
      );
      return BulkActionResponse.of(client, response) as BulkActionReturnType<
        O,
        A,
        Op
      >;
    },
    e =>
      handleExecuteActionError(
        new ExecuteActionErrorHandler(),
        e,
        e.parameters,
      ),
  );
}

function remapActionParams<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
>(params: ActionArgs<O, A>) {
  const parameterMap: { [parameterName: string]: any } = {};
  const remappedParams = Object.entries(params).reduce((acc, [key, value]) => {
    acc[key] = getParameterValueMapping(value);
    return acc;
  }, parameterMap);

  return remappedParams;
}

function remapBulkActionParams<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
>(params: ActionArgs<O, A>[]) {
  const remappedParams: { parameters: { [parameterName: string]: any } }[] =
    params.map(
      param => {
        return { parameters: remapActionParams<O, A>(param) };
      },
    );

  return remappedParams;
}

function remapOptions(
  options: ActionExecutionOptions,
): ApplyActionRequestOptions {
  if (options.mode === ActionExecutionMode.VALIDATE_ONLY) {
    return {
      mode: "VALIDATE_ONLY",
    };
  }
  return {
    mode: "VALIDATE_AND_EXECUTE",
    returnEdits: options.returnEdits === ReturnEditsMode.ALL ? "ALL" : "NONE",
  };
}

function remapBulkOptions(
  options: BulkActionExecutionOptions,
): ApplyActionRequestOptions {
  return {
    returnEdits: options.returnEdits === ReturnEditsMode.ALL ? "ALL" : "NONE",
  };
}
