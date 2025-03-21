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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import invariant from "tiny-invariant";
import { createObjectSpecifierFromPrimaryKey } from "../object/createObjectSpecifierFromPrimaryKey.js";
import { createObjectSet } from "../objectSet/createObjectSet.js";
import { hydrateAttachmentFromRidInternal } from "../public-utils/hydrateAttachmentFromRid.js";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { augmentRequestContext } from "../util/augmentRequestContext.js";
import { toDataValueQueries } from "../util/toDataValueQueries.js";
export async function applyQuery(client, query, params) {
  const qd = await client.ontologyProvider.getQueryDefinition(query.apiName);
  const response = await OntologiesV2.Queries.execute(addUserAgentAndRequestContextHeaders(augmentRequestContext(client, () => ({
    finalMethodCall: "applyQuery"
  })), query), await client.ontologyRid, query.apiName, {
    parameters: params ? await remapQueryParams(params, client, qd.parameters) : {}
  });
  const objectOutputDefs = await getRequiredDefinitions(qd.output, client);
  const remappedResponse = await remapQueryResponse(client, qd.output, response.value, objectOutputDefs);
  return remappedResponse;
}
async function remapQueryParams(params, client, paramTypes) {
  const parameterMap = {};
  for (const [key, value] of Object.entries(params)) {
    parameterMap[key] = await toDataValueQueries(value, client, paramTypes[key]);
  }
  return parameterMap;
}
async function remapQueryResponse(client, responseDataType, responseValue, definitions) {
  // handle null responses
  if (responseValue == null) {
    if (responseDataType.nullable) {
      return undefined;
    } else {
      throw new Error("Got null response when nullable was not allowed");
    }
  }
  if (responseDataType.multiplicity != null && responseDataType.multiplicity) {
    const withoutMultiplicity = {
      ...responseDataType,
      multiplicity: false
    };
    for (let i = 0; i < responseValue.length; i++) {
      responseValue[i] = await remapQueryResponse(client, withoutMultiplicity, responseValue[i], definitions);
    }
    return responseValue;
  }
  switch (responseDataType.type) {
    case "union":
      {
        throw new Error("Union return types are not yet supported");
      }
    case "set":
      {
        for (let i = 0; i < responseValue.length; i++) {
          responseValue[i] = await remapQueryResponse(client, responseDataType.set, responseValue[i], definitions);
        }
        return responseValue;
      }
    case "attachment":
      {
        return hydrateAttachmentFromRidInternal(client, responseValue);
      }
    case "object":
      {
        const def = definitions.get(responseDataType.object);
        if (!def) {
          throw new Error(`Missing definition for ${responseDataType.object}`);
        }
        return createQueryObjectResponse(responseValue, def);
      }
    case "objectSet":
      {
        const def = definitions.get(responseDataType.objectSet);
        if (!def) {
          throw new Error(`Missing definition for ${responseDataType.objectSet}`);
        }
        if (typeof responseValue === "string") {
          return createObjectSet(def, client, {
            type: "intersect",
            objectSets: [{
              type: "base",
              objectType: responseDataType.objectSet
            }, {
              type: "reference",
              reference: responseValue
            }]
          });
        }
        return createObjectSet(def, client, responseValue);
      }
    case "struct":
      {
        // figure out what keys need to be fixed up
        for (const [key, subtype] of Object.entries(responseDataType.struct)) {
          if (requiresConversion(subtype)) {
            responseValue[key] = await remapQueryResponse(client, subtype, responseValue[key], definitions);
          }
        }
        return responseValue;
      }
    case "map":
      {
        const map = {};
        !Array.isArray(responseValue) ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected array entry") : invariant(false) : void 0;
        for (const entry of responseValue) {
          !entry.key ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected key") : invariant(false) : void 0;
          !entry.value ? process.env.NODE_ENV !== "production" ? invariant(false, "Expected value") : invariant(false) : void 0;
          const key = responseDataType.keyType.type === "object" ? getObjectSpecifier(entry.key, responseDataType.keyType.object, definitions) : entry.key;
          const value = await remapQueryResponse(client, responseDataType.valueType, entry.value, definitions);
          map[key] = value;
        }
        return map;
      }
    case "twoDimensionalAggregation":
      {
        const result = [];
        for (const {
          key,
          value
        } of responseValue.groups) {
          result.push({
            key,
            value
          });
        }
        return result;
      }
    case "threeDimensionalAggregation":
      {
        const result = [];
        for (const {
          key,
          groups
        } of responseValue.groups) {
          const subResult = [];
          for (const {
            key: subKey,
            value
          } of groups) {
            subResult.push({
              key: subKey,
              value
            });
          }
          result.push({
            key,
            groups: subResult
          });
        }
        return result;
      }
  }
  return responseValue;
}
async function getRequiredDefinitions(dataType, client) {
  const result = new Map();
  switch (dataType.type) {
    case "objectSet":
      {
        const objectDef = await client.ontologyProvider.getObjectDefinition(dataType.objectSet);
        result.set(dataType.objectSet, objectDef);
        break;
      }
    case "object":
      {
        const objectDef = await client.ontologyProvider.getObjectDefinition(dataType.object);
        result.set(dataType.object, objectDef);
        break;
      }
    case "set":
      {
        return getRequiredDefinitions(dataType.set, client);
      }
    case "map":
      {
        for (const value of [dataType.keyType, dataType.valueType]) {
          for (const [type, objectDef] of await getRequiredDefinitions(value, client)) {
            result.set(type, objectDef);
          }
        }
        break;
      }
    case "struct":
      {
        for (const value of Object.values(dataType.struct)) {
          for (const [type, objectDef] of await getRequiredDefinitions(value, client)) {
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
  }
  return result;
}
function requiresConversion(dataType) {
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
function getObjectSpecifier(primaryKey, objectTypeApiName, definitions) {
  const def = definitions.get(objectTypeApiName);
  if (!def) {
    throw new Error(`Missing definition for ${objectTypeApiName}`);
  }
  return createObjectSpecifierFromPrimaryKey(def, primaryKey);
}
export function createQueryObjectResponse(primaryKey, objectDef) {
  return {
    $apiName: objectDef.apiName,
    $title: undefined,
    $objectType: objectDef.apiName,
    $primaryKey: primaryKey,
    $objectSpecifier: createObjectSpecifierFromPrimaryKey(objectDef, primaryKey)
  };
}
//# sourceMappingURL=applyQuery.js.map