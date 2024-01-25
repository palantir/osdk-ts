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
  AggregationKeyDataType,
  OntologyDefinition,
  QueryDataTypeDefinition,
  RangeAggregationKeyDataType,
} from "@osdk/api";
import { executeQueryV2 } from "@osdk/gateway/requests";
import type { QueryThreeDimensionalAggregation } from "@osdk/gateway/types";
import { createOpenApiRequest } from "@osdk/shared.net";
import type { ClientContext } from "@osdk/shared.net";
import { LocalDate, Timestamp } from "../baseTypes/index.js";
import type {
  ObjectSetDefinition,
  ParameterValue,
  PrimitiveParameterValue,
  QueryBucketKey,
} from "../baseTypes/index.js";
import {
  ExecuteQueryErrorHandler,
  handleExecuteQueryError,
} from "../errors/index.js";
import { createOsdkObjectSet } from "../index.js";
import { convertWireToOsdkObject } from "../objects/convertWireToOsdkObject.js";
import type {
  BucketValue,
  QueryTwoDimensionalAggregation,
  Range,
  Rangeable,
} from "../objectSets/aggregations/index.js";
import type {
  QueryNamesFrom,
  QueryParameters,
  WrappedQueryReturnType,
} from "../queries.js";
import { isOk } from "../Result.js";
import { getObject } from "./getObject.js";
import { getParameterValueMapping } from "./util/getParameterValueMapping.js";
import { wrapResult } from "./util/wrapResult.js";
import type { WireOntologyObjectV2 } from "./WireOntologyObjectV2.js";

export function executeQuery<
  O extends OntologyDefinition<any>,
  Q extends QueryNamesFrom<O>,
>(
  client: ClientContext<O>,
  apiName: Q,
  params?: QueryParameters<O, Q>,
): WrappedQueryReturnType<O, Q> {
  return wrapResult(
    async () => {
      const response: { value: PrimitiveParameterValue } = await executeQueryV2(
        createOpenApiRequest(client.stack, client.fetch),
        client.ontology.metadata.ontologyApiName,
        apiName as string,
        {
          parameters: params ? getRemappedParameters(params) : {},
        },
      );
      const remappedResponse = await remapQueryResponseType(
        client,
        client.ontology.queries[apiName].output,
        response.value,
      );

      return { value: remappedResponse as any };
    },
    e =>
      handleExecuteQueryError(
        new ExecuteQueryErrorHandler(),
        e,
        e.parameters,
      ),
  );
}

function getRemappedParameters(
  params: { [parameterId: string]: any },
): { [parameterId: string]: any } {
  const parameterMap: { [parameterName: string]: any } = {};
  const remappedParams = Object.entries(params).reduce(
    (acc, [key, value]) => {
      acc[key] = getParameterValueMapping(value);
      return acc;
    },
    parameterMap,
  );

  return remappedParams;
}

async function remapQueryResponseType<
  O extends OntologyDefinition<any>,
  K extends string,
>(
  client: ClientContext<O>,
  definition: QueryDataTypeDefinition<K>,
  responseValue: PrimitiveParameterValue,
): Promise<ParameterValue> {
  // handle null responses
  if (responseValue == null) {
    if (definition.nullable) {
      return undefined;
    } else {
      throw new Error("Got null response when nullable was not allowed");
    }
  }

  // handle arrays
  if (definition.multiplicity) {
    const definitionWithoutMultiplicity = {
      ...definition,
      multiplicity: false,
    };
    return await Promise.all(
      (responseValue as PrimitiveParameterValue[]).map(it =>
        remapQueryResponseType(client, definitionWithoutMultiplicity, it)
      ),
    );
  }

  switch (definition.type) {
    case "attachment":
      throw new Error("Attachment type not supported in response");
    case "date":
      return LocalDate.fromISOString(responseValue as string);
    case "timestamp":
      return Timestamp.fromISOString(responseValue as string);
    case "string":
      return responseValue as string;
    case "boolean":
      return responseValue as boolean;
    case "double":
    case "float":
    case "integer":
    case "long":
      return responseValue as number;
    default:
      switch (definition.type) {
        case "object": {
          if (typeof responseValue !== "object") {
            const result = await getObject(
              client,
              definition.object,
              responseValue,
              [],
            );

            if (isOk(result)) {
              return result.value;
            } else {
              throw result.error;
            }
          }

          // The API Gateway returns the object's primary key, but this is defensive
          // in the case we change it to return the full type
          return convertWireToOsdkObject(
            client,
            responseValue as WireOntologyObjectV2<any>,
          );
        }

        case "set": {
          if (!Array.isArray(responseValue)) {
            throw new Error(
              `Expected response in array format, but received ${typeof responseValue}`,
            );
          }

          const remappedResponse = await Promise.all(
            responseValue.map(async arrayValue =>
              remapQueryResponseType(
                client,
                definition.set,
                arrayValue,
              )
            ),
          );

          return new Set(remappedResponse);
        }

        case "struct": {
          if (typeof responseValue !== "object") {
            throw new Error(
              `Expected object response, but received ${typeof responseValue}`,
            );
          }

          const responseEntries = Object.entries(responseValue);
          const remappedResponseEntries = await Promise.all(
            responseEntries.map(async ([key, structValue]) => {
              const structType = definition.struct[key];
              const remappedValue = await remapQueryResponseType(
                client,
                structType,
                structValue,
              );
              return [key, remappedValue];
            }),
          );
          const remappedResponse = remappedResponseEntries.reduce(
            (acc, [key, mappedValue]) => {
              acc[key as string] = mappedValue as ParameterValue;
              return acc;
            },
            {} as { [key: string]: ParameterValue },
          );

          return remappedResponse;
        }

        case "twoDimensionalAggregation": {
          const typedValue = responseValue as QueryTwoDimensionalAggregation;
          const groups = typedValue.groups.map(group => {
            const key = remapQueryBucketKeyType(
              definition.twoDimensionalAggregation,
              group.key,
            );
            const value = remapQueryBucketValueType(
              definition.twoDimensionalAggregation.valueType,
              group.value,
            );
            return {
              key,
              value,
            };
          });

          return {
            groups,
          };
        }

        case "threeDimensionalAggregation": {
          const typedValue = responseValue as QueryThreeDimensionalAggregation;
          const groups = typedValue.groups.map(group => {
            const key = remapQueryBucketKeyType(
              definition.threeDimensionalAggregation,
              group.key,
            );
            const subBuckets = group.groups.map(subGroup => {
              return {
                key: remapQueryBucketKeyType(
                  definition.threeDimensionalAggregation.valueType,
                  subGroup.key,
                ),
                value: remapQueryBucketValueType(
                  definition.threeDimensionalAggregation.valueType.valueType,
                  subGroup.value,
                ),
              };
            });
            return {
              key,
              value: subBuckets,
            };
          });

          return {
            groups,
          };
        }

        case "objectSet":
          return createOsdkObjectSet(
            client,
            definition.objectSet,
            responseValue as ObjectSetDefinition,
          );

        case "union":
          throw new Error("Union type is not supported in response");
        default:
          const _: never = definition;
          throw new Error(
            `Cannot remap query response of type ${JSON.stringify(definition)}`,
          );
      }
  }
}

function remapQueryBucketKeyType(
  queryBucketKeyType: AggregationKeyDataType,
  value: any,
): QueryBucketKey {
  if (typeof queryBucketKeyType.keyType === "string") {
    switch (queryBucketKeyType.keyType) {
      case "string":
        return value as string;
      case "boolean":
        return value as boolean;
      case "range":
        return remapRangeType(queryBucketKeyType, value);
      default:
        const _: never = queryBucketKeyType;
    }
  }
  throw new Error(
    `Unsupported queryBucketKeyType ${
      JSON.stringify(queryBucketKeyType)
    } in remapQueryBucketKey`,
  );
}

function remapQueryBucketValueType(
  queryBucketValueType: "double" | "timestamp" | "date",
  value: any,
): BucketValue {
  switch (queryBucketValueType) {
    case "date":
      return LocalDate.fromISOString(value as string);
    case "double":
      return value as number;
    case "timestamp":
      return Timestamp.fromISOString(value as string);
    default:
      const _: never = queryBucketValueType;
      throw new Error(
        `Cannot remapQueryBucketValueType, ${queryBucketValueType} is unsupported`,
      );
  }
}

function remapRangeType(
  rangeType: RangeAggregationKeyDataType,
  value: any,
): Range<Rangeable> {
  switch (rangeType.keySubtype) {
    case "date":
      return {
        startValue: value.startValue
          ? LocalDate.fromISOString(value.startValue as string)
          : undefined,
        endValue: value.endValue
          ? LocalDate.fromISOString(value.endValue as string)
          : undefined,
      } as Range<Rangeable>;

    case "timestamp":
      return {
        startValue: value.startValue
          ? Timestamp.fromISOString(value.startValue as string)
          : undefined,
        endValue: value.endValue
          ? Timestamp.fromISOString(value.endValue as string)
          : undefined,
      } as Range<Rangeable>;

    case "double":
    case "integer":
      return {
        startValue: value.startValue as number | undefined,
        endValue: value.endValue as number | undefined,
      } as Range<Rangeable>;

    default:
      const _: never = rangeType.keySubtype;
      throw new Error(
        `Cannot remapRangeType with unsupported type ${rangeType.keySubtype}`,
      );
  }
}
