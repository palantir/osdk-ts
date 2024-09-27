/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
  AllowedBucketKeyTypes,
  AllowedBucketTypes,
  CompileTimeMetadata,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  OsdkBase,
  PrimaryKeyType,
  QueryDataTypeDefinition,
  QueryDefinition,
  QueryParameterDefinition,
} from "@osdk/api";
import type { DataValue } from "@osdk/internal.foundry.core";
import * as OntologiesV2 from "@osdk/internal.foundry.ontologiesv2";
import { createAttachmentFromRid } from "../createAttachmentFromRid.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { toDataValueQueries } from "../util/toDataValueQueries.js";
import type { QueryParameterType, QueryReturnType } from "./types.js";

export async function applyQuery<
  QD extends QueryDefinition<any, any, any>,
  P extends QueryParameterType<CompileTimeMetadata<QD>["parameters"]>,
>(
  client: MinimalClient,
  query: QD,
  params?: P,
): Promise<
  QueryReturnType<CompileTimeMetadata<QD>["output"]>
> {
  const qd = await client.ontologyProvider.getQueryDefinition(query.apiName);

  const response = await OntologiesV2.Queries.executeQueryV2(
    addUserAgentAndRequestContextHeaders(
      augmentRequestContext(client, _ => ({ finalMethodCall: "applyQuery" })),
      query,
    ),
    await client.ontologyRid,
    query.apiName,
    {
      parameters: params
        ? await remapQueryParams(
          params as { [parameterId: string]: any },
          client,
          qd.parameters,
        )
        : {},
    },
  );
  const objectOutputDefs = await getRequiredDefinitions(qd.output, client);
  const remappedResponse = await remapQueryResponse(
    client,
    qd.output,
    response.value,
    objectOutputDefs,
  );
  return remappedResponse as QueryReturnType<CompileTimeMetadata<QD>["output"]>;
}

async function remapQueryParams(
  params: { [parameterId: string]: any },
  client: MinimalClient,
  paramTypes: Record<string, QueryParameterDefinition<any>>,
): Promise<{ [parameterId: string]: any }> {
  const parameterMap: { [parameterName: string]: unknown } = {};
  for (const [key, value] of Object.entries(params)) {
    parameterMap[key] = await toDataValueQueries(
      value,
      client,
      paramTypes[key],
    );
  }
  return parameterMap;
}

async function remapQueryResponse<
  K extends string,
  Q extends ObjectTypeDefinition,
  T extends QueryDataTypeDefinition<K, Q | never>,
>(
  client: MinimalClient,
  responseDataType: T,
  responseValue: DataValue,
  definitions: Map<string, ObjectOrInterfaceDefinition>,
): Promise<QueryReturnType<T>> {
  // handle null responses
  if (responseValue == null) {
    if (responseDataType.nullable) {
      return undefined as unknown as QueryReturnType<typeof responseDataType>;
    } else {
      throw new Error("Got null response when nullable was not allowed");
    }
  }

  if (
    responseDataType.multiplicity != null
    && responseDataType.multiplicity !== false
  ) {
    const withoutMultiplicity = { ...responseDataType, multiplicity: false };
    for (let i = 0; i < responseValue.length; i++) {
      responseValue[i] = await remapQueryResponse(
        responseValue[i],
        withoutMultiplicity,
        client,
        definitions,
      );
    }
    return responseValue as QueryReturnType<typeof responseDataType>;
  }

  switch (responseDataType.type) {
    case "union": {
      throw new Error("Union return types are not yet supported");
    }

    case "set": {
      for (let i = 0; i < responseValue.length; i++) {
        responseValue[i] = await remapQueryResponse(
          responseValue[i],
          responseDataType.set,
          client,
          definitions,
        );
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }

    case "attachment": {
      return createAttachmentFromRid(client, responseValue) as QueryReturnType<
        typeof responseDataType
      >;
    }
    case "object": {
      const def = definitions.get(responseDataType.object);
      if (!def) {
        throw new Error(
          `Missing definition for ${responseDataType.object}`,
        );
      }
      return createQueryObjectResponse(
        responseValue,
        def,
      ) as QueryReturnType<
        typeof responseDataType
      >;
    }

    case "objectSet": {
      const def = definitions.get(responseDataType.objectSet);
      if (!def) {
        throw new Error(
          `Missing definition for ${responseDataType.objectSet}`,
        );
      }
      if (typeof responseValue === "string") {
        return createObjectSet(def, client, {
          type: "intersect",
          objectSets: [
            { type: "base", objectType: responseDataType.objectSet },
            { type: "reference", reference: responseValue },
          ],
        }) as QueryReturnType<typeof responseDataType>;
      }

      return createObjectSet(
        def,
        client,
        responseValue,
      ) as QueryReturnType<
        typeof responseDataType
      >;
    }
    case "struct": {
      // figure out what keys need to be fixed up
      for (const [key, subtype] of Object.entries(responseDataType.struct)) {
        if (requiresConversion(subtype)) {
          responseValue[key] = await remapQueryResponse(
            responseValue[key],
            subtype,
            client,
            definitions,
          );
        }
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }
    case "twoDimensionalAggregation": {
      const result: {
        key: AllowedBucketKeyTypes;
        value: AllowedBucketTypes;
      }[] = [];
      for (const { key, value } of responseValue.groups) {
        result.push({ key, value });
      }
      return result as QueryReturnType<typeof responseDataType>;
    }

    case "threeDimensionalAggregation": {
      const result: {
        key: AllowedBucketKeyTypes;
        groups: { key: AllowedBucketKeyTypes; value: AllowedBucketTypes }[];
      }[] = [];
      for (const { key, groups } of responseValue.groups) {
        const subResult: { key: any; value: any }[] = [];
        for (const { key: subKey, value } of groups) {
          subResult.push({ key: subKey, value });
        }
        result.push({ key, groups: subResult });
      }
      return result as QueryReturnType<typeof responseDataType>;
    }
  }

  return responseValue as QueryReturnType<typeof responseDataType>;
}

async function getRequiredDefinitions(
  dataType: QueryDataTypeDefinition<any>,
  client: MinimalClient,
): Promise<Map<string, ObjectOrInterfaceDefinition>> {
  const result = new Map<string, ObjectOrInterfaceDefinition>();
  switch (dataType.type) {
    case "objectSet": {
      const objectDef = await client.ontologyProvider.getObjectDefinition(
        dataType.objectSet,
      );
      result.set(dataType.objectSet, objectDef);
      break;
    }
    case "object": {
      const objectDef = await client.ontologyProvider.getObjectDefinition(
        dataType.object,
      );
      result.set(dataType.object, objectDef);
      break;
    }

    case "set": {
      return getRequiredDefinitions(dataType.set, client);
    }

    case "struct": {
      for (const value of Object.values(dataType.struct)) {
        for (
          const [type, objectDef] of await getRequiredDefinitions(value, client)
        ) {
          result.set(type, objectDef);
        }
      }
      break;
    }
    case "attachment":
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "object":
    case "string":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
    case "union":
      break;
  }

  return result;
}
function requiresConversion(dataType: QueryDataTypeDefinition<any>) {
  switch (dataType.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "object": // JSON encoded primary key
    case "string":
    case "timestamp":
      return false;

    case "union":
      return true;

    case "struct":
      return Object.values(dataType.struct).some(requiresConversion);

    case "set":
      return requiresConversion(dataType.set);

    case "attachment":
    case "objectSet":
    case "twoDimensionalAggregation":
    case "threeDimensionalAggregation":
      return true;

    default:
      return false;
  }
}

export function createQueryObjectResponse<
  Q extends ObjectOrInterfaceDefinition,
>(
  primaryKey: PrimaryKeyType<Q>,
  objectDef: Q,
): OsdkBase<Q> {
  return {
    $apiName: objectDef.apiName,
    $title: undefined,
    $objectType: objectDef.apiName,
    $primaryKey: primaryKey,
  };
}
