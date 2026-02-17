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
  InterfaceDefinition,
  ObjectOrInterfaceDefinition,
  ObjectTypeDefinition,
  OsdkBase,
  PrimaryKeyType,
  QueryDataTypeDefinition,
  QueryDefinition,
  QueryMetadata,
  QueryParameterDefinition,
} from "@osdk/api";
import type { DataValue } from "@osdk/foundry.ontologies";
import * as Queries from "@osdk/foundry.ontologies/Query";
import invariant from "tiny-invariant";
import type { MinimalClient } from "../MinimalClientContext.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { hydrateAttachmentFromRidInternal } from "../public-utils/hydrateAttachmentFromRid.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import {
  createObjectSpecifierFromInterfaceSpecifier,
  createObjectSpecifierFromPrimaryKey,
} from "../util/objectSpecifierUtils.js";
import { toDataValueQueries } from "../util/toDataValueQueries.js";
import type { QueryParameterType, QueryReturnType } from "./types.js";

export async function applyQuery<
  QD extends QueryDefinition<any>,
  P extends QueryParameterType<CompileTimeMetadata<QD>["parameters"]>,
>(
  client: MinimalClient,
  query: QD,
  params?: P,
): Promise<
  QueryReturnType<CompileTimeMetadata<QD>["output"]>
> {
  // We fire and forget so if a function has no parameters we don't unnecessarily load all metadata
  const qd: Promise<QueryMetadata> = client.ontologyProvider.getQueryDefinition(
    query.apiName,
    query.isFixedVersion ? query.version : undefined,
  );

  if (client.flushEdits != null) {
    await client.flushEdits();
  }

  const response = await Queries.execute(
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
          (await qd).parameters,
        )
        : {},
    },
    {
      version: query.isFixedVersion ? query.version : undefined,
      transactionId: client.transactionId,
    },
  );

  const objectOutputDefs = await getRequiredDefinitions(
    (await qd).output,
    client,
  );
  const remappedResponse = await remapQueryResponse(
    client,
    (await qd).output,
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
  Q extends ObjectTypeDefinition,
  T extends QueryDataTypeDefinition<Q | never>,
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

  switch (responseDataType.type) {
    case "union": {
      throw new Error("Union return types are not yet supported");
    }

    case "array": {
      for (let i = 0; i < responseValue.length; i++) {
        responseValue[i] = await remapQueryResponse(
          client,
          responseDataType.array,
          responseValue[i],
          definitions,
        );
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }

    case "set": {
      for (let i = 0; i < responseValue.length; i++) {
        responseValue[i] = await remapQueryResponse(
          client,
          responseDataType.set,
          responseValue[i],
          definitions,
        );
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }

    case "attachment": {
      return hydrateAttachmentFromRidInternal(
        client,
        responseValue,
      ) as QueryReturnType<
        typeof responseDataType
      >;
    }

    case "object": {
      const def = definitions.get(responseDataType.object);
      if (!def || def.type !== "object") {
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

    case "interface": {
      const def = definitions.get(responseDataType.interface);
      if (!def || def.type !== "interface") {
        throw new Error(
          `Missing definition for ${responseDataType.interface}`,
        );
      }

      return createQueryInterfaceResponse(
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
            client,
            subtype,
            responseValue[key],
            definitions,
          );
        }
      }

      return responseValue as QueryReturnType<typeof responseDataType>;
    }

    case "map": {
      const map = {} as any;

      invariant(Array.isArray(responseValue), "Expected array entry");
      for (const entry of responseValue) {
        invariant(entry.key != null, "Expected key");
        invariant(entry.value != null, "Expected value");
        const key = responseDataType.keyType.type === "object"
          ? getObjectSpecifier(
            entry.key,
            responseDataType.keyType.object,
            definitions,
          )
          : entry.key;
        const value = await remapQueryResponse(
          client,
          responseDataType.valueType,
          entry.value,
          definitions,
        );
        map[key] = value;
      }
      return map;
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
  dataType: QueryDataTypeDefinition,
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
    case "interfaceObjectSet": {
      const interfaceDef = await client.ontologyProvider.getInterfaceDefinition(
        dataType.objectSet,
      );
      result.set(dataType.objectSet, interfaceDef);
      break;
    }
    case "object": {
      const objectDef = await client.ontologyProvider.getObjectDefinition(
        dataType.object,
      );
      result.set(dataType.object, objectDef);
      break;
    }

    case "interface": {
      const interfaceDef = await client.ontologyProvider.getInterfaceDefinition(
        dataType.interface,
      );
      result.set(dataType.interface, interfaceDef);
      break;
    }

    case "set": {
      return getRequiredDefinitions(dataType.set, client);
    }
    case "array": {
      return getRequiredDefinitions(dataType.array, client);
    }

    case "map": {
      const types = [dataType.keyType, dataType.valueType];

      const allDefs = await Promise.all(
        types.map(value => getRequiredDefinitions(value, client)),
      );

      for (const defs of allDefs) {
        for (const [type, objectDef] of defs) {
          result.set(type, objectDef);
        }
      }
      break;
    }

    case "struct": {
      const structValues = Object.values(dataType.struct);

      const allDefs = await Promise.all(
        structValues.map(value => getRequiredDefinitions(value, client)),
      );

      for (const defs of allDefs) {
        for (const [type, objectDef] of defs) {
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
    case "string":
    case "threeDimensionalAggregation":
    case "timestamp":
    case "twoDimensionalAggregation":
    case "union":
      break;
    default: {
      const _: never = dataType;
      break;
    }
  }

  return result;
}
function requiresConversion(dataType: QueryDataTypeDefinition) {
  switch (dataType.type) {
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
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
    case "object":
      return true;

    default:
      return false;
  }
}

function getObjectSpecifier(
  primaryKey: any,
  objectTypeApiName: string,
  definitions: Map<string, ObjectOrInterfaceDefinition>,
): string {
  const def = definitions.get(objectTypeApiName);
  if (!def || def.type !== "object") {
    throw new Error(
      `Missing definition for ${objectTypeApiName}`,
    );
  }
  return createObjectSpecifierFromPrimaryKey(
    def,
    primaryKey,
  );
}

export function createQueryObjectResponse<
  Q extends ObjectTypeDefinition,
>(
  primaryKey: PrimaryKeyType<Q>,
  objectDef: Q,
): OsdkBase<Q> {
  return {
    $apiName: objectDef.apiName,
    $title: undefined,
    $objectType: objectDef.apiName,
    $primaryKey: primaryKey,
    $objectSpecifier: createObjectSpecifierFromPrimaryKey(
      objectDef,
      primaryKey,
    ),
  };
}

export function createQueryInterfaceResponse<
  Q extends InterfaceDefinition,
>(
  interfaceSpecifier: {
    objectTypeApiName: string;
    primaryKeyValue: PrimaryKeyType<Q>;
  },
  interfaceDef: Q,
): OsdkBase<Q> {
  return {
    $apiName: interfaceDef.apiName,
    $title: undefined,
    $objectType: interfaceSpecifier.objectTypeApiName,
    $primaryKey: interfaceSpecifier.primaryKeyValue,
    $objectSpecifier: createObjectSpecifierFromInterfaceSpecifier(
      interfaceDef,
      interfaceSpecifier,
    ),
  };
}
