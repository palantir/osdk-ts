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

import * as OntologiesV2 from "@osdk/foundry.ontologies";
import { addUserAgentAndRequestContextHeaders } from "../util/addUserAgentAndRequestContextHeaders.js";
import { resolveBaseObjectSetType } from "../util/objectSetUtils.js";
export function augment(type, ...properties) {
  return {
    [type.apiName]: properties
  };
}

/** @internal */
export function objectSetToSearchJsonV2(objectSet, expectedApiName, existingWhere = undefined) {
  if (objectSet.type === "base" || objectSet.type === "interfaceBase") {
    if (objectSet.type === "base" && objectSet.objectType !== expectedApiName) {
      throw new Error(`Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.objectType}`);
    }
    if (objectSet.type === "interfaceBase" && objectSet.interfaceType !== expectedApiName) {
      throw new Error(`Expected objectSet.objectType to be ${expectedApiName}, but got ${objectSet.interfaceType}`);
    }
    return existingWhere;
  }
  if (objectSet.type === "filter") {
    return objectSetToSearchJsonV2(objectSet.objectSet, expectedApiName, existingWhere == null ? objectSet.where : {
      type: "and",
      value: [existingWhere, objectSet.where]
    });
  }
  throw new Error(`Unsupported objectSet type: ${objectSet.type}`);
}

/** @internal */
export function resolveInterfaceObjectSet(objectSet, interfaceTypeApiName, args) {
  return args?.$includeAllBaseObjectProperties ? {
    type: "intersect",
    objectSets: [objectSet, {
      type: "interfaceBase",
      interfaceType: interfaceTypeApiName,
      includeAllBaseObjectProperties: true
    }]
  } : objectSet;
}
async function fetchInterfacePage(client, interfaceType, args, objectSet) {
  if (args.$__UNSTABLE_useOldInterfaceApis) {
    const result = await OntologiesV2.OntologyInterfaces.search(addUserAgentAndRequestContextHeaders(client, interfaceType), await client.ontologyRid, interfaceType.apiName, applyFetchArgs(args, {
      augmentedProperties: {},
      augmentedSharedPropertyTypes: {},
      otherInterfaceTypes: [],
      selectedObjectTypes: [],
      selectedSharedPropertyTypes: args.$select ?? [],
      where: objectSetToSearchJsonV2(objectSet, interfaceType.apiName)
    }), {
      preview: true
    });
    result.data = await client.objectFactory(client, result.data,
    // drop readonly
    interfaceType.apiName, !args.$includeRid);
    return result;
  }
  const result = await OntologiesV2.OntologyObjectSets.loadMultipleObjectTypes(addUserAgentAndRequestContextHeaders(client, interfaceType), await client.ontologyRid, applyFetchArgs(args, {
    objectSet: resolveInterfaceObjectSet(objectSet, interfaceType.apiName, args),
    select: args?.$select ?? [],
    excludeRid: !args?.$includeRid
  }), {
    preview: true
  });
  return Promise.resolve({
    data: await client.objectFactory2(client, result.data, interfaceType.apiName, !args.$includeRid, args.$select, false, result.interfaceToObjectTypeMappings),
    nextPageToken: result.nextPageToken,
    totalCount: result.totalCount
  });
}

/** @internal */
export async function fetchPageInternal(client, objectType, objectSet, args = {}) {
  if (objectType.type === "interface") {
    return await fetchInterfacePage(client, objectType, args, objectSet); // fixme
  } else {
    return await fetchObjectPage(client, objectType, args, objectSet); // fixme
  }
}

/** @internal */
export async function fetchPageWithErrorsInternal(client, objectType, objectSet, args = {}) {
  try {
    const result = await fetchPageInternal(client, objectType, objectSet, args);
    return {
      value: result
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e
      };
    }
    return {
      error: e
    };
  }
}

/**
 * @param client
 * @param objectType
 * @param args
 * @param objectSet
 * @returns
 * @internal
 */
export async function fetchPage(client, objectType, args, objectSet = resolveBaseObjectSetType(objectType)) {
  return fetchPageInternal(client, objectType, objectSet, args);
}

/** @internal */
export async function fetchPageWithErrors(client, objectType, args, objectSet = resolveBaseObjectSetType(objectType)) {
  return fetchPageWithErrorsInternal(client, objectType, objectSet, args);
}
function applyFetchArgs(args, body) {
  if (args?.$nextPageToken) {
    body.pageToken = args.$nextPageToken;
  }
  if (args?.$pageSize != null) {
    body.pageSize = args.$pageSize;
  }
  if (args?.$orderBy != null) {
    body.orderBy = {
      fields: Object.entries(args.$orderBy).map(([field, direction]) => ({
        field,
        direction
      }))
    };
  }
  return body;
}

/** @internal */
export async function fetchObjectPage(client, objectType, args, objectSet) {
  const r = await OntologiesV2.OntologyObjectSets.load(addUserAgentAndRequestContextHeaders(client, objectType), await client.ontologyRid, applyFetchArgs(args, {
    objectSet,
    // We have to do the following case because LoadObjectSetRequestV2 isn't readonly
    select: args?.$select ?? [],
    // FIXME?
    excludeRid: !args?.$includeRid
  }));
  return Promise.resolve({
    data: await client.objectFactory(client, r.data, undefined, undefined, args.$select),
    nextPageToken: r.nextPageToken,
    totalCount: r.totalCount
  });
}
//# sourceMappingURL=fetchPage.js.map