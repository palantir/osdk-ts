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

import {
  createOpenApiRequest,
  type OntologyDefinition,
  type ThinClient,
} from "@osdk/api";
import { applyActionV2 } from "@osdk/gateway/requests";
import type { ApplyActionRequestOptions } from "@osdk/gateway/types";
import type {
  ActionArgs,
  ActionReturnType,
  WrappedActionReturnType,
} from "../../../client/actions";
import type {
  ActionExecutionOptions,
  ObjectSetDefinition,
  PrimitiveParameterValue,
} from "../../baseTypes";
import {
  ActionExecutionMode,
  ActionResponse,
  GeoPoint,
  GeoShape,
  isAttachment,
  isOntologyObject,
  LocalDate,
  ReturnEditsMode,
  Timestamp,
} from "../../baseTypes";
import {
  ExecuteActionErrorHandler,
  handleExecuteActionError,
} from "../ErrorHandlers";
import { wrapResult } from "./util/wrapResult";

export async function executeAction<
  O extends OntologyDefinition<any>,
  A extends keyof O["actions"],
  Op extends ActionExecutionOptions,
>(
  client: ThinClient<OntologyDefinition<any>>,
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

function getParameterValueMapping(
  value: any,
): PrimitiveParameterValue {
  if (isOntologyObject(value)) {
    return getParameterValueMapping(value.__primaryKey);
  } else if (value instanceof LocalDate) {
    return value.toISOString();
  } else if (value instanceof Timestamp) {
    return value.toISOString();
  } else if (isAttachment(value)) {
    return value.attachmentRid!;
  } else if (Array.isArray(value)) {
    return value.map(a => getParameterValueMapping(a));
  } else if (GeoShape.isGeoShape(value)) {
    return value.toGeoJson();
  } else if (value instanceof GeoPoint) {
    return value.toGeoJson();
  } else if (isOntologyObjectSet(value)) {
    return value.definition;
  } else if (typeof value === "object") {
    // Since structs are valid arguments for Queries, we map the values
    return Object.entries(value).reduce((acc, [key, structValue]) => {
      acc[key] = getParameterValueMapping(structValue);
      return acc;
    }, {} as { [key: string]: PrimitiveParameterValue });
  }

  return value as string | number | boolean;
}

function isOntologyObjectSet(
  obj: any,
): obj is { definition: ObjectSetDefinition } {
  return obj && obj.definition;
}
