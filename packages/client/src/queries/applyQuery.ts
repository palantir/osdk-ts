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
  ObjectOrInterfaceDefinition,
  QueryDataTypeDefinition,
  QueryDefinition,
  QueryParameterDefinition,
} from "@osdk/api";
import type {
  DataValueWireToClient,
  QueryObjectResponse,
  QueryParameterType,
  QueryReturnType,
} from "@osdk/client.api";
import type {
  DataValue,
  ObjectSet as WireObjectSet,
} from "@osdk/internal.foundry";
import { OntologiesV2 } from "@osdk/internal.foundry";
import type { MinimalClient } from "../MinimalClientContext.js";
import { Attachment } from "../object/Attachment.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { addUserAgent } from "../util/addUserAgent.js";
import { toDataValue } from "../util/toDataValue.js";
import { toDataValueQueries } from "../util/toDataValueQueries.js";

export async function applyQuery<
  QD extends QueryDefinition<any, any>,
  P extends QueryParameterType<QD["parameters"]>,
>(
  client: MinimalClient,
  query: QD,
  params?: P,
): Promise<
  QueryReturnType<QD["output"]>
> {
  const response = await OntologiesV2.QueryTypes.executeQueryV2(
    addUserAgent(client, query),
    client.ontologyRid,
    query.apiName,
    {
      parameters: params
        ? await remapQueryParams(
          params as { [parameterId: string]: any },
          client,
          query.parameters,
        )
        : {},
    },
  );
  const remappedResponse = await remapQueryResponse(
    client,
    query.output,
    response.value,
  );
  return remappedResponse;
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
  T extends QueryDataTypeDefinition<K>,
>(
  client: MinimalClient,
  responseDataType: T,
  responseValue: DataValue,
  // definitions: Map<string, ObjectOrInterfaceDefinition>,
): Promise<QueryReturnType<T>> {
  // handle null responses
  if (responseValue == null) {
    if (responseDataType.nullable) {
      return undefined as unknown as QueryReturnType<typeof responseDataType>;
    } else {
      throw new Error("Got null response when nullable was not allowed");
    }
  }

  if (responseDataType.multiplicity !== false) {
    const withoutMultiplicity = { ...responseDataType, multiplicity: false };
    for (let i = 0; i < responseValue.length; i++) {
      responseValue[i] = remapQueryResponse(
        responseValue[i],
        withoutMultiplicity,
        client,
      );
    }
    return responseValue as QueryReturnType<typeof responseDataType>;
  }

  switch (responseDataType.type) {
    case "union": {
      throw new Error("Union return types are not supported");
    }

    case "set": {
      for (let i = 0; i < responseValue.length; i++) {
        responseValue[i] = remapQueryResponse(
          responseValue[i],
          responseDataType.set,
          client,
        );
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }

    case "attachment": {
      return new Attachment(responseValue) as QueryReturnType<
        typeof responseDataType
      >;
    }
    case "object": {
      return createQueryObjectResponse(
        responseDataType.object,
        responseValue,
        responseDataType.object,
      ) as QueryReturnType<
        typeof responseDataType
      >;
    }
    //   const def = definitions.get(responseDataType.object);
    //   const withPk: WireObjectSet = {
    //     type: "filter",
    //     objectSet: {
    //       type: "base",
    //       objectType: responseDataType.object,
    //     },
    //     where: {
    //       type: "eq",
    //       field: def?.properties["pr"],
    //       value: primaryKey,
    //     },
    //   };
    // }

    // return await fetchSingle(
    //   clientCtx,
    //   objectType,
    //   options,
    //   withPk,
    // ) as Osdk<Q>;
    case "objectSet": {
      throw new Error("not implemented");
      // const def = definitions.get(responseDataType.objectSet);
      // if (!def) {
      //   throw new Error(
      //     `Missing definition for ${responseDataType.objectSet}`,
      //   );
      // }
      // if (typeof responseValue === "string") {
      //   return createObjectSet(def, client, {
      //     type: "intersect",
      //     objectSets: [
      //       { type: "base", objectType: responseDataType.objectSet },
      //       { type: "reference", reference: responseValue },
      //     ],
      //   }) as unknown as QueryReturnType<typeof responseDataType>;
      // }

      // return createObjectSet(
      //   def,
      //   client,
      //   responseValue,
      // ) as unknown as QueryReturnType<
      //   typeof responseDataType
      // >;
    }
    case "struct": {
      // figure out what keys need to be fixed up
      for (const [key, subtype] of Object.entries(responseDataType.struct)) {
        if (requiresConversion(subtype)) {
          responseValue[key] = remapQueryResponse(
            responseValue[key],
            subtype,
            client,
          );
        }
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }
    case "twoDimensionalAggregation": {
      const result: Record<any, any> = {};
      for (const { key, value } of responseValue.groups) {
        result[key] = value;
      }
      return result as QueryReturnType<typeof responseDataType>;
    }

    case "threeDimensionalAggregation": {
      const result: Record<any, Record<any, any>> = {};
      for (const { key, groups } of responseValue.groups) {
        const subresult: Record<any, any> = {};
        result[key] = subresult;
        for (const { key: subkey, value } of groups) {
          subresult[subkey] = value;
        }
      }
      return result as QueryReturnType<typeof responseDataType>;
    }
  }

  return responseValue as QueryReturnType<typeof responseDataType>;
}

export function getRequiredDefinitions(
  dataType: QueryDataTypeDefinition<any>,
): Set<string> {
  const result = new Set<string>();
  switch (dataType.type) {
    case "objectSet":
      result.add(dataType.objectSet);
      break;

    case "set":
      for (const s of getRequiredDefinitions(dataType.set)) {
        result.add(s);
      }
      break;

    case "struct":
      for (const value of Object.values(dataType.struct)) {
        for (const s of getRequiredDefinitions(value)) {
          result.add(s);
        }
      }
      break;

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

    default:
      const _: never = dataType;
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
      const _: never = dataType;
      return false;
  }
}

export function createQueryObjectResponse<N extends string>(
  objectType: string,
  primaryKey: string,
  apiName: N,
): QueryObjectResponse<N> {
  return { apiName, objectType, primaryKey };
}
