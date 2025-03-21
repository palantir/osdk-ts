'use strict';

var chunkQ7SFCCGT_cjs = require('./chunk-Q7SFCCGT.cjs');
var shared_net_errors = require('@osdk/shared.net.errors');
var shared_net_fetch = require('@osdk/shared.net.fetch');

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/Action.js
var Action_exports = {};
chunkQ7SFCCGT_cjs.__export(Action_exports, {
  apply: () => apply,
  applyAsync: () => applyAsync,
  applyBatch: () => applyBatch
});

// ../../node_modules/.pnpm/@osdk+shared.client@1.0.1/node_modules/@osdk/shared.client/index.js
var symbolClientContext = Symbol("ClientContext");

// ../../node_modules/.pnpm/@osdk+shared.client2@1.0.0/node_modules/@osdk/shared.client2/index.js
var symbolClientContext2 = "__osdkClientContext";
async function foundryPlatformFetch(client, [httpMethodNum, origPath, flags, contentType, responseContentType], ...args) {
  const path = origPath.replace(/\{([^}]+)\}/g, () => encodeURIComponent(args.shift()));
  const body = flags & 1 ? args.shift() : undefined;
  const queryArgs = flags & 2 ? args.shift() : undefined;
  const headerArgs = flags & 4 ? args.shift() : undefined;
  const method = ["GET", "POST", "PUT", "DELETE", "PATCH"][httpMethodNum];
  return await apiFetch(client[symbolClientContext2] ?? client[symbolClientContext] ?? client, method, path, body, queryArgs, headerArgs, contentType, responseContentType);
}
async function apiFetch(clientCtx, method, endpointPath, data, queryArguments, headers, requestMediaType, responseMediaType) {
  const url = parseUrl(clientCtx.baseUrl, endpointPath);
  for (const [key, value] of Object.entries(queryArguments || {})) {
    if (value == null) {
      continue;
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        url.searchParams.append(key, item);
      }
    } else {
      url.searchParams.append(key, value);
    }
  }
  const headersInit = new Headers();
  headersInit.set("Content-Type", requestMediaType ?? "application/json");
  headersInit.set("Accept", responseMediaType ?? "application/json");
  Object.entries(headers || {}).forEach(([key, value]) => {
    if (value != null) {
      headersInit.append(key, value.toString());
    }
  });
  const body = data == null || data instanceof globalThis.Blob ? data : JSON.stringify(data);
  const response = await clientCtx.fetch(url.toString(), {
    body,
    method,
    headers: headersInit
  });
  if (!response.ok) {
    try {
      const convertedError = await response.json();
      return new shared_net_errors.PalantirApiError(convertedError.message, convertedError.errorName, convertedError.errorCode, response.status, convertedError.errorInstanceId, convertedError.parameters);
    } catch (e) {
      if (e instanceof Error) {
        return new shared_net_errors.UnknownError(e.message, "UNKNOWN");
      }
      return new shared_net_errors.UnknownError("Unable to parse error response", "UNKNOWN");
    }
  }
  if (response.status === 204) {
    return;
  }
  if (responseMediaType == null || responseMediaType === "application/json") {
    return await response.json();
  }
  return response;
}
function parseUrl(baseUrl, endpointPath) {
  baseUrl += baseUrl.endsWith("/") ? "" : "/";
  return new URL(`api${endpointPath}`, baseUrl);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/Action.js
var _apply = [1, "/v2/ontologies/{0}/actions/{1}/apply", 3];
function apply($ctx, ...args) {
  return foundryPlatformFetch($ctx, _apply, ...args);
}
var _applyAsync = [1, "/v2/ontologies/{0}/actions/{1}/applyAsync", 3];
function applyAsync($ctx, ...args) {
  return foundryPlatformFetch($ctx, _applyAsync, ...args);
}
var _applyBatch = [1, "/v2/ontologies/{0}/actions/{1}/applyBatch", 3];
function applyBatch($ctx, ...args) {
  return foundryPlatformFetch($ctx, _applyBatch, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/ActionTypeV2.js
var ActionTypeV2_exports = {};
chunkQ7SFCCGT_cjs.__export(ActionTypeV2_exports, {
  get: () => get,
  list: () => list
});
var _list = [0, "/v2/ontologies/{0}/actionTypes", 2];
function list($ctx, ...args) {
  return foundryPlatformFetch($ctx, _list, ...args);
}
var _get = [0, "/v2/ontologies/{0}/actionTypes/{1}"];
function get($ctx, ...args) {
  return foundryPlatformFetch($ctx, _get, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/Attachment.js
var Attachment_exports = {};
chunkQ7SFCCGT_cjs.__export(Attachment_exports, {
  get: () => get2,
  read: () => read,
  upload: () => upload
});
var _upload = [1, "/v2/ontologies/attachments/upload", 7, "*/*"];
function upload($ctx, ...args) {
  const headerParams = {
    ...args[2],
    "Content-Type": args[2]?.["Content-Type"] ?? args[0].type,
    "Content-Length": args[0].size.toString()
  };
  return foundryPlatformFetch($ctx, _upload, args[0], args[1], headerParams);
}
var _read = [0, "/v2/ontologies/attachments/{0}/content", , , "*/*"];
function read($ctx, ...args) {
  return foundryPlatformFetch($ctx, _read, ...args);
}
var _get2 = [0, "/v2/ontologies/attachments/{0}"];
function get2($ctx, ...args) {
  return foundryPlatformFetch($ctx, _get2, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/MediaReferenceProperty.js
var MediaReferenceProperty_exports = {};
chunkQ7SFCCGT_cjs.__export(MediaReferenceProperty_exports, {
  getMediaContent: () => getMediaContent,
  getMediaMetadata: () => getMediaMetadata,
  upload: () => upload2
});
var _getMediaContent = [0, "/v2/ontologies/{0}/objects/{1}/{2}/media/{3}/content", 2, , "*/*"];
function getMediaContent($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getMediaContent, ...args);
}
var _getMediaMetadata = [0, "/v2/ontologies/{0}/objects/{1}/{2}/media/{3}/metadata", 2];
function getMediaMetadata($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getMediaMetadata, ...args);
}
var _upload2 = [1, "/v2/ontologies/{0}/objectTypes/{1}/media/{2}/upload", 3, "*/*"];
function upload2($ctx, ...args) {
  return foundryPlatformFetch($ctx, _upload2, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/ObjectTypeV2.js
var ObjectTypeV2_exports = {};
chunkQ7SFCCGT_cjs.__export(ObjectTypeV2_exports, {
  get: () => get3,
  getFullMetadata: () => getFullMetadata,
  getOutgoingLinkType: () => getOutgoingLinkType,
  list: () => list2,
  listOutgoingLinkTypes: () => listOutgoingLinkTypes
});
var _list2 = [0, "/v2/ontologies/{0}/objectTypes", 2];
function list2($ctx, ...args) {
  return foundryPlatformFetch($ctx, _list2, ...args);
}
var _get3 = [0, "/v2/ontologies/{0}/objectTypes/{1}"];
function get3($ctx, ...args) {
  return foundryPlatformFetch($ctx, _get3, ...args);
}
var _getFullMetadata = [0, "/v2/ontologies/{0}/objectTypes/{1}/fullMetadata", 2];
function getFullMetadata($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getFullMetadata, ...args);
}
var _listOutgoingLinkTypes = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes", 2];
function listOutgoingLinkTypes($ctx, ...args) {
  return foundryPlatformFetch($ctx, _listOutgoingLinkTypes, ...args);
}
var _getOutgoingLinkType = [0, "/v2/ontologies/{0}/objectTypes/{1}/outgoingLinkTypes/{2}"];
function getOutgoingLinkType($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getOutgoingLinkType, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/OntologyInterface.js
var OntologyInterface_exports = {};
chunkQ7SFCCGT_cjs.__export(OntologyInterface_exports, {
  aggregate: () => aggregate,
  get: () => get4,
  list: () => list3,
  search: () => search
});
var _list3 = [0, "/v2/ontologies/{0}/interfaceTypes", 2];
function list3($ctx, ...args) {
  return foundryPlatformFetch($ctx, _list3, ...args);
}
var _get4 = [0, "/v2/ontologies/{0}/interfaceTypes/{1}", 2];
function get4($ctx, ...args) {
  return foundryPlatformFetch($ctx, _get4, ...args);
}
var _search = [1, "/v2/ontologies/{0}/interfaces/{1}/search", 3];
function search($ctx, ...args) {
  return foundryPlatformFetch($ctx, _search, ...args);
}
var _aggregate = [1, "/v2/ontologies/{0}/interfaces/{1}/aggregate", 3];
function aggregate($ctx, ...args) {
  return foundryPlatformFetch($ctx, _aggregate, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/OntologyObjectSet.js
var OntologyObjectSet_exports = {};
chunkQ7SFCCGT_cjs.__export(OntologyObjectSet_exports, {
  aggregate: () => aggregate2,
  createTemporary: () => createTemporary,
  get: () => get5,
  load: () => load,
  loadMultipleObjectTypes: () => loadMultipleObjectTypes,
  loadObjectsOrInterfaces: () => loadObjectsOrInterfaces
});
var _createTemporary = [1, "/v2/ontologies/{0}/objectSets/createTemporary", 1];
function createTemporary($ctx, ...args) {
  return foundryPlatformFetch($ctx, _createTemporary, ...args);
}
var _get5 = [0, "/v2/ontologies/{0}/objectSets/{1}"];
function get5($ctx, ...args) {
  return foundryPlatformFetch($ctx, _get5, ...args);
}
var _load = [1, "/v2/ontologies/{0}/objectSets/loadObjects", 3];
function load($ctx, ...args) {
  return foundryPlatformFetch($ctx, _load, ...args);
}
var _loadMultipleObjectTypes = [1, "/v2/ontologies/{0}/objectSets/loadObjectsMultipleObjectTypes", 3];
function loadMultipleObjectTypes($ctx, ...args) {
  return foundryPlatformFetch($ctx, _loadMultipleObjectTypes, ...args);
}
var _loadObjectsOrInterfaces = [1, "/v2/ontologies/{0}/objectSets/loadObjectsOrInterfaces", 3];
function loadObjectsOrInterfaces($ctx, ...args) {
  return foundryPlatformFetch($ctx, _loadObjectsOrInterfaces, ...args);
}
var _aggregate2 = [1, "/v2/ontologies/{0}/objectSets/aggregate", 3];
function aggregate2($ctx, ...args) {
  return foundryPlatformFetch($ctx, _aggregate2, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/Query.js
var Query_exports = {};
chunkQ7SFCCGT_cjs.__export(Query_exports, {
  execute: () => execute
});
var _execute = [1, "/v2/ontologies/{0}/queries/{1}/execute", 3];
function execute($ctx, ...args) {
  return foundryPlatformFetch($ctx, _execute, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/QueryType.js
var QueryType_exports = {};
chunkQ7SFCCGT_cjs.__export(QueryType_exports, {
  get: () => get6,
  list: () => list4
});
var _list4 = [0, "/v2/ontologies/{0}/queryTypes", 2];
function list4($ctx, ...args) {
  return foundryPlatformFetch($ctx, _list4, ...args);
}
var _get6 = [0, "/v2/ontologies/{0}/queryTypes/{1}"];
function get6($ctx, ...args) {
  return foundryPlatformFetch($ctx, _get6, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/TimeSeriesPropertyV2.js
var TimeSeriesPropertyV2_exports = {};
chunkQ7SFCCGT_cjs.__export(TimeSeriesPropertyV2_exports, {
  getFirstPoint: () => getFirstPoint,
  getLastPoint: () => getLastPoint,
  streamPoints: () => streamPoints
});
var _getFirstPoint = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/firstPoint", 2];
function getFirstPoint($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getFirstPoint, ...args);
}
var _getLastPoint = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/lastPoint", 2];
function getLastPoint($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getLastPoint, ...args);
}
var _streamPoints = [1, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/streamPoints", 3, , "*/*"];
function streamPoints($ctx, ...args) {
  return foundryPlatformFetch($ctx, _streamPoints, ...args);
}

// ../../node_modules/.pnpm/@osdk+foundry.ontologies@2.16.0/node_modules/@osdk/foundry.ontologies/build/esm/public/TimeSeriesValueBankProperty.js
var TimeSeriesValueBankProperty_exports = {};
chunkQ7SFCCGT_cjs.__export(TimeSeriesValueBankProperty_exports, {
  getLatestValue: () => getLatestValue,
  streamValues: () => streamValues
});
var _getLatestValue = [0, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/latestValue", 2];
function getLatestValue($ctx, ...args) {
  return foundryPlatformFetch($ctx, _getLatestValue, ...args);
}
var _streamValues = [1, "/v2/ontologies/{0}/objects/{1}/{2}/timeseries/{3}/streamValues", 3, , "*/*"];
function streamValues($ctx, ...args) {
  return foundryPlatformFetch($ctx, _streamValues, ...args);
}
var addUserAgentAndRequestContextHeaders = (client, withMetadata) => ({
  ...client,
  fetch: shared_net_fetch.createFetchHeaderMutator(client.fetch, (headers) => {
    headers.set("X-OSDK-Request-Context", JSON.stringify(client.requestContext));
    if (withMetadata.osdkMetadata) {
      headers.set("Fetch-User-Agent", withMetadata.osdkMetadata.extraUserAgent);
    }
    return headers;
  })
});

// src/util/objectSetUtils.ts
function resolveBaseObjectSetType(objectType) {
  return objectType.type === "interface" ? {
    type: "interfaceBase",
    interfaceType: objectType["apiName"]
  } : {
    type: "base",
    objectType: objectType["apiName"]
  };
}

// src/object/fetchPage.ts
function augment(type, ...properties) {
  return {
    [type.apiName]: properties
  };
}
function objectSetToSearchJsonV2(objectSet, expectedApiName, existingWhere = undefined) {
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
function resolveInterfaceObjectSet(objectSet, interfaceTypeApiName, args) {
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
    const result2 = await OntologyInterface_exports.search(addUserAgentAndRequestContextHeaders(client, interfaceType), await client.ontologyRid, interfaceType.apiName, applyFetchArgs(args, {
      augmentedProperties: {},
      augmentedSharedPropertyTypes: {},
      otherInterfaceTypes: [],
      selectedObjectTypes: [],
      selectedSharedPropertyTypes: args.$select ?? [],
      where: objectSetToSearchJsonV2(objectSet, interfaceType.apiName)
    }), {
      preview: true
    });
    result2.data = await client.objectFactory(
      client,
      result2.data,
      // drop readonly
      interfaceType.apiName,
      !args.$includeRid
    );
    return result2;
  }
  const result = await OntologyObjectSet_exports.loadMultipleObjectTypes(addUserAgentAndRequestContextHeaders(client, interfaceType), await client.ontologyRid, applyFetchArgs(args, {
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
async function fetchPageInternal(client, objectType, objectSet, args = {}) {
  if (objectType.type === "interface") {
    return await fetchInterfacePage(client, objectType, args, objectSet);
  } else {
    return await fetchObjectPage(client, objectType, args, objectSet);
  }
}
async function fetchPageWithErrorsInternal(client, objectType, objectSet, args = {}) {
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
async function fetchPage(client, objectType, args, objectSet = resolveBaseObjectSetType(objectType)) {
  return fetchPageInternal(client, objectType, objectSet, args);
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
async function fetchObjectPage(client, objectType, args, objectSet) {
  const r = await OntologyObjectSet_exports.load(addUserAgentAndRequestContextHeaders(client, objectType), await client.ontologyRid, applyFetchArgs(args, {
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

// src/Client.ts
var additionalContext = Symbol("additionalContext");

exports.ActionTypeV2_exports = ActionTypeV2_exports;
exports.Action_exports = Action_exports;
exports.Attachment_exports = Attachment_exports;
exports.MediaReferenceProperty_exports = MediaReferenceProperty_exports;
exports.ObjectTypeV2_exports = ObjectTypeV2_exports;
exports.OntologyInterface_exports = OntologyInterface_exports;
exports.OntologyObjectSet_exports = OntologyObjectSet_exports;
exports.QueryType_exports = QueryType_exports;
exports.Query_exports = Query_exports;
exports.TimeSeriesPropertyV2_exports = TimeSeriesPropertyV2_exports;
exports.TimeSeriesValueBankProperty_exports = TimeSeriesValueBankProperty_exports;
exports.addUserAgentAndRequestContextHeaders = addUserAgentAndRequestContextHeaders;
exports.additionalContext = additionalContext;
exports.augment = augment;
exports.fetchPage = fetchPage;
exports.fetchPageInternal = fetchPageInternal;
exports.fetchPageWithErrorsInternal = fetchPageWithErrorsInternal;
exports.resolveBaseObjectSetType = resolveBaseObjectSetType;
exports.symbolClientContext = symbolClientContext;
//# sourceMappingURL=chunk-EY52J5Z4.cjs.map
//# sourceMappingURL=chunk-EY52J5Z4.cjs.map