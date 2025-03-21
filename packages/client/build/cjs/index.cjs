'use strict';

var chunkMCQVHD2F_cjs = require('./chunk-MCQVHD2F.cjs');
var chunkT4NIFYZS_cjs = require('./chunk-T4NIFYZS.cjs');
var chunkEY52J5Z4_cjs = require('./chunk-EY52J5Z4.cjs');
require('./chunk-Q7SFCCGT.cjs');
var api = require('@osdk/api');
var shared_net_errors = require('@osdk/shared.net.errors');
var unstable = require('@osdk/api/unstable');
var client_unstable = require('@osdk/client.unstable');
var invariant = require('tiny-invariant');
var shared_client_impl = require('@osdk/shared.client.impl');
var generatorConverters = require('@osdk/generator-converters');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// src/actions/ActionValidationError.ts
var ActionValidationError = class extends Error {
  constructor(validation) {
    super("Validation Error: " + JSON.stringify(validation, null, 2));
    this.validation = validation;
  }
};

// src/objectSet/conjureUnionType.ts
function conjureUnionType(type, value) {
  return {
    type,
    [type]: value
  };
}

// src/ontology/makeConjureContext.ts
function makeConjureContext({
  baseUrl,
  fetch: fetchFn,
  tokenProvider
}, servicePath) {
  return {
    baseUrl,
    servicePath,
    fetchFn,
    tokenProvider
  };
}

// src/pageRequestAsAsyncIter.ts
function getResults(x) {
  return x.results;
}
function applyPageToken(payload, {
  pageToken
}) {
  return pageToken ? {
    ...payload,
    pageToken
  } : undefined;
}
async function* pageRequestAsAsyncIter(call, values, nextArgs, initialPayload) {
  let payload = initialPayload;
  while (payload) {
    const r = await call(payload);
    for (const q of values(r)) {
      yield q;
    }
    payload = nextArgs(payload, r);
  }
}

// src/object/SimpleCache.ts
function createSimpleCache(map = /* @__PURE__ */ new Map(), fn) {
  function get(key) {
    let r = map.get(key);
    if (r === undefined && fn !== undefined) {
      return set(key, fn(key));
    } else {
      return r;
    }
  }
  function set(key, value) {
    map.set(key, value);
    return value;
  }
  function remove(key) {
    return map.delete(key);
  }
  return {
    get,
    set,
    remove
  };
}
function createSimpleAsyncCache(type, fn, createCacheLocal = createSimpleCache) {
  const cache = createCacheLocal(type === "weak" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
  const inProgress = createCacheLocal(type === "weak" ? /* @__PURE__ */ new WeakMap() : /* @__PURE__ */ new Map());
  const ret = {
    getOrUndefined: function getOrUndefined(key) {
      return cache.get(key);
    },
    get: async function get(key) {
      return cache.get(key) ?? inProgress.get(key) ?? ret.set(key, fn(key));
    },
    set: async function set(k, v) {
      try {
        const r = await inProgress.set(k, v);
        cache.set(k, r);
        inProgress.remove(k);
        return r;
      } catch (e) {
        inProgress.remove(k);
        throw e;
      }
    }
  };
  return ret;
}

// src/__unstable/ConjureSupport.ts
var cachedAllOntologies;
async function getOntologyVersionForRid(ctx, ontologyRid) {
  cachedAllOntologies ??= await client_unstable.loadAllOntologies(ctx, {});
  !cachedAllOntologies.ontologies[ontologyRid] ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "ontology should be loaded") : invariant__default.default(false) : undefined;
  return cachedAllOntologies.ontologies[ontologyRid].currentOntologyVersion;
}
var strongMemoAsync = (fn) => createSimpleAsyncCache("strong", fn).get;
var weakMemoAsync = (fn) => createSimpleAsyncCache("weak", fn).get;
var MetadataClient = class {
  #client;
  #ctx;
  #logger;
  constructor(client) {
    this.#client = client;
    this.#ctx = makeConjureContext(client, "ontology-metadata/api");
    this.#client.ontologyProvider.getObjectDefinition;
    this.#logger = this.#client.logger?.child({
      mcc: true
    });
  }
  forObjectByRid = strongMemoAsync(async (rid) => {
    return Promise.resolve({
      getPropertyMapping: this.#objectPropertyMapping.bind(this, rid),
      getLinkMapping: this.#objectLinkMapping.bind(this, rid),
      getRid: () => rid,
      getApiName: async () => (await this.#getConjureObjectType(rid)).apiName
    });
  });
  forObjectByApiName = strongMemoAsync(async (objectApiName) => {
    const objectDef = await this.#client.ontologyProvider.getObjectDefinition(objectApiName);
    return this.forObjectByRid(objectDef.rid);
  });
  #objectPropertyMapping = strongMemoAsync(async (objectTypeRid) => {
    const conjureObjectType = await this.#getConjureObjectType(objectTypeRid);
    return createObjectPropertyMapping(conjureObjectType);
  });
  #objectLinkMapping = strongMemoAsync(async (objectTypeRid) => {
    const linkTypes = await client_unstable.getLinkTypesForObjectTypes(this.#ctx, {
      includeObjectTypesWithoutSearchableDatasources: true,
      loadRedacted: false,
      objectTypeBranches: {},
      objectTypeVersions: {
        [objectTypeRid]: await this.ontologyVersion("")
      }
    });
    !linkTypes.linkTypes[objectTypeRid] ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "link type should be loaded") : invariant__default.default(false) : undefined;
    const ret = {};
    for (const l of linkTypes.linkTypes[objectTypeRid]) {
      const helper = ({
        apiName
      }, linkSide, otherObjectType) => {
        if (apiName) {
          ret[apiName] = {
            apiName,
            directedLinkTypeRid: {
              linkTypeRid: l.rid,
              linkSide
            },
            otherObjectType
          };
        }
      };
      if (l.definition.type === "oneToMany") {
        const {
          oneToMany: {
            objectTypeRidManySide,
            manyToOneLinkMetadata,
            objectTypeRidOneSide,
            oneToManyLinkMetadata
          }
        } = l.definition;
        if (objectTypeRidManySide === objectTypeRid) {
          helper(manyToOneLinkMetadata, "TARGET", objectTypeRidOneSide);
        }
        if (objectTypeRidOneSide === objectTypeRid) {
          helper(oneToManyLinkMetadata, "SOURCE", objectTypeRidManySide);
        }
      } else if (l.definition.type === "manyToMany") {
        const {
          manyToMany: {
            objectTypeRidA,
            objectTypeAToBLinkMetadata,
            objectTypeRidB,
            objectTypeBToALinkMetadata
          }
        } = l.definition;
        if (objectTypeRidA === objectTypeRid) {
          helper(objectTypeAToBLinkMetadata, "SOURCE", objectTypeRidB);
        }
        if (objectTypeRidB === objectTypeRid) {
          helper(objectTypeBToALinkMetadata, "TARGET", objectTypeRidA);
        }
      }
    }
    return ret;
  });
  #getConjureObjectType = strongMemoAsync(async (objectTypeRid) => {
    this.#logger?.debug(`getConjureObjectType(${objectTypeRid})`);
    const body = {
      datasourceTypes: [],
      objectTypes: [{
        identifier: {
          type: "objectTypeRid",
          objectTypeRid
        },
        versionReference: {
          type: "ontologyVersion",
          ontologyVersion: await this.ontologyVersion("")
        }
      }],
      linkTypes: [],
      sharedPropertyTypes: [],
      interfaceTypes: [],
      typeGroups: [],
      loadRedacted: false,
      includeObjectTypeCount: undefined,
      includeObjectTypesWithoutSearchableDatasources: true,
      includeEntityMetadata: undefined,
      actionTypes: [],
      includeTypeGroupEntitiesCount: undefined,
      entityMetadata: undefined
    };
    const entities = await client_unstable.bulkLoadOntologyEntities(this.#ctx, undefined, body);
    !entities.objectTypes[0]?.objectType ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "object type should be loaded") : invariant__default.default(false) : undefined;
    return entities.objectTypes[0].objectType;
  });
  ontologyVersion = strongMemoAsync(async (_) => getOntologyVersionForRid(this.#ctx, await this.#client.ontologyRid));
};
var metadataCacheClient = weakMemoAsync((client) => Promise.resolve(new MetadataClient(client)));
function createObjectPropertyMapping(conjureOT) {
  !(conjureOT.primaryKeys.length === 1) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `only one primary key supported, got ${conjureOT.primaryKeys.length}`) : invariant__default.default(false) : undefined;
  const pkRid = conjureOT.primaryKeys[0];
  const pkProperty = Object.values(conjureOT.propertyTypes).find((a) => a.rid === pkRid);
  if (!pkProperty) {
    throw new Error(`Could not find PK property by rid: ${pkRid}`);
  }
  const propertyIdToApiNameMapping = Object.fromEntries(Object.values(conjureOT.propertyTypes).map((property) => {
    return [property.id, property.apiName];
  }));
  const propertyApiNameToIdMapping = Object.fromEntries(Object.values(conjureOT.propertyTypes).map((property) => {
    return [property.apiName, property.id];
  }));
  return {
    apiName: conjureOT.apiName,
    id: conjureOT.id,
    propertyIdToApiNameMapping,
    propertyApiNameToIdMapping,
    pk: {
      rid: pkRid,
      apiName: pkProperty.apiName,
      type: pkProperty.type
    }
  };
}

// src/__unstable/createBulkLinksAsyncIterFactory.ts
function createBulkLinksAsyncIterFactory(ctx) {
  return async function* (objs, linkTypes) {
    if (objs.length === 0) {
      return;
    }
    ctx.logger?.debug("Preparing to fetch bulk links");
    !objs.every((a) => a.$objectType === objs[0].$objectType) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false) : invariant__default.default(false) : undefined;
    const mcc = await metadataCacheClient(ctx);
    const helper = await mcc.forObjectByApiName(objs[0].$objectType);
    const [objectTypeRid, propertyMapping, fullLinkMapping] = await Promise.all([helper.getRid(), helper.getPropertyMapping(), helper.getLinkMapping()]);
    const linkMapping = Object.fromEntries(Object.entries(fullLinkMapping).filter(([apiName]) => linkTypes.includes(apiName)));
    for (const linkType of linkTypes) {
      if (linkMapping[linkType] == null) {
        throw "Unable to find link type: " + linkType;
      }
    }
    const req = {
      objectSetContext: {
        forkRid: undefined,
        objectSetFilterContext: {
          parameterOverrides: {}
        },
        ontologyBranchRid: undefined,
        owningRid: undefined,
        reportUsage: undefined,
        workstateRid: undefined
      },
      responseOptions: {
        includeObjectSetEntities: true,
        includeUsageCost: false
      },
      pageSize: 1e3,
      pageToken: undefined,
      linksRequests: [{
        directedLinkTypes: Object.values(linkMapping).map(({
          directedLinkTypeRid
        }) => directedLinkTypeRid),
        objects: conjureUnionType("objects", objs.map((o) => conjureUnionType("objectLocatorV2", {
          objectTypeRid,
          objectPrimaryKey: {
            [propertyMapping.pk.rid]: conjureUnionType(propertyMapping.pk.type.type, o.$primaryKey)
          }
        })))
      }]
    };
    const bulkLinksIter = pageRequestAsAsyncIter(client_unstable.getBulkLinksPage.bind(undefined, makeConjureContext(ctx, "object-set-service/api")), getResults, applyPageToken, req);
    for await (const item of bulkLinksIter) {
      const {
        objectIdentifier
      } = item;
      const obj = findObject(objectIdentifier, objs);
      for (const link of item.links) {
        const ref = link.link[link.linkSide === "SOURCE" ? "objectSideB" : "objectSideA"];
        const pk = getPrimaryKeyOrThrow(ref);
        const otherObjectApiName = await (await mcc.forObjectByRid(pk.objectTypeRid)).getApiName();
        const mappedLink = Object.values(linkMapping).find((a) => a.directedLinkTypeRid.linkTypeRid === link.link.linkTypeRid && a.directedLinkTypeRid.linkSide === link.linkSide);
        if (!mappedLink) throw new Error("Could not find link type");
        yield {
          object: obj,
          linkApiName: mappedLink.apiName,
          otherObjectApiName,
          otherObjectPk: pk.pkValue
        };
      }
    }
  };
}
function findObject(objectIdentifier, objs) {
  const {
    pkValue
  } = getPrimaryKeyOrThrow(objectIdentifier);
  const obj = objs.find((o) => o.$primaryKey === pkValue);
  if (obj == null) {
    throw new Error(`Needed to find object with pk ${pkValue}} and could not`);
  }
  return obj;
}
function getPrimaryKeyOrThrow(ref) {
  if ("type" in ref && ref.type !== "objectLocatorV2") {
    throw new Error("We do not support looking up object by rid");
  }
  const pks = Object.entries(ref.objectLocatorV2.objectPrimaryKey);
  if (pks.length !== 1) {
    throw new Error("Unable to support this request due to multiple pks");
  }
  return {
    objectTypeRid: ref.objectLocatorV2.objectTypeRid,
    pkValue: pks[0][1][pks[0][1].type]
  };
}

// src/object/AttachmentUpload.ts
function isAttachmentUpload(o) {
  return typeof o === `object` && "name" in o && "data" in o && o.data instanceof Blob;
}
function isAttachmentFile(o) {
  return typeof o === "object" && o instanceof Blob && "name" in o;
}
function createAttachmentUpload(data, name) {
  return {
    data,
    name
  };
}

// src/object/mediaUpload.ts
function isMediaReference(o) {
  return typeof o === `object` && typeof o.mimeType === "string" && "reference" in o && typeof o.reference === "object" && o.reference.type === "mediaSetViewItem" && "mediaSetViewItem" in o.reference && typeof o.reference.mediaSetViewItem === "object" && typeof o.reference.mediaSetViewItem.mediaSetRid === "string" && typeof o.reference.mediaSetViewItem.mediaSetViewRid === "string" && typeof o.reference.mediaSetViewItem.mediaItemRid === "string";
}

// src/util/interfaceUtils.ts
function isInterfaceActionParam(o) {
  return o != null && typeof o === "object" && "$objectType" in o && "$primaryKey" in o;
}

// src/util/isOntologyObjectV2.ts
function isOntologyObjectV2(o) {
  return o && typeof o === "object" && typeof o.__apiName === "string" && o.__primaryKey != null;
}

// src/util/isOsdkObject.ts
function isOsdkBaseObject(o) {
  return o && typeof o === "object" && typeof o.$apiName === "string" && o.$primaryKey != null;
}

// src/util/toDataValue.ts
async function toDataValue(value, client) {
  if (value == null) {
    return value;
  }
  if (Array.isArray(value) || value instanceof Set) {
    const values = Array.from(value);
    if (values.some((dataValue) => isAttachmentUpload(dataValue) || isAttachmentFile(dataValue))) {
      const converted = [];
      for (const value2 of values) {
        converted.push(await toDataValue(value2, client));
      }
      return converted;
    }
    const promiseArray = Array.from(value, async (innerValue) => await toDataValue(innerValue, client));
    return Promise.all(promiseArray);
  }
  if (isAttachmentUpload(value)) {
    const attachment = await chunkEY52J5Z4_cjs.Attachment_exports.upload(client, value.data, {
      filename: value.name
    });
    return await toDataValue(attachment.rid, client);
  }
  if (isAttachmentFile(value)) {
    const attachment = await chunkEY52J5Z4_cjs.Attachment_exports.upload(client, value, {
      filename: value.name
    });
    return await toDataValue(attachment.rid, client);
  }
  if (isOntologyObjectV2(value)) {
    return await toDataValue(value.__primaryKey, client);
  }
  if (isOsdkBaseObject(value)) {
    return await toDataValue(value.$primaryKey, client);
  }
  if (chunkMCQVHD2F_cjs.isWireObjectSet(value)) {
    return value;
  }
  if (chunkMCQVHD2F_cjs.isObjectSet(value)) {
    return chunkMCQVHD2F_cjs.getWireObjectSet(value);
  }
  if (isMediaReference(value)) {
    return value;
  }
  if (isInterfaceActionParam(value)) {
    return {
      objectTypeApiName: value.$objectType,
      primaryKeyValue: value.$primaryKey
    };
  }
  if (typeof value === "object") {
    return Object.entries(value).reduce(async (promisedAcc, [key, structValue]) => {
      const acc = await promisedAcc;
      acc[key] = await toDataValue(structValue, client);
      return acc;
    }, Promise.resolve({}));
  }
  return value;
}

// src/actions/applyAction.ts
async function applyAction(client, action, parameters, options = {}) {
  const clientWithHeaders = chunkEY52J5Z4_cjs.addUserAgentAndRequestContextHeaders(chunkMCQVHD2F_cjs.augmentRequestContext(client, (_) => ({
    finalMethodCall: "applyAction"
  })), action);
  if (Array.isArray(parameters)) {
    const response = await chunkEY52J5Z4_cjs.Action_exports.applyBatch(clientWithHeaders, await client.ontologyRid, action.apiName, {
      requests: parameters ? await remapBatchActionParams(parameters, client) : [],
      options: {
        returnEdits: options?.$returnEdits ? "ALL" : "NONE"
      }
    });
    const edits = response.edits;
    return options?.$returnEdits ? edits?.type === "edits" ? remapActionResponse(response) : edits : undefined;
  } else {
    const response = await chunkEY52J5Z4_cjs.Action_exports.apply(clientWithHeaders, await client.ontologyRid, action.apiName, {
      parameters: await remapActionParams(parameters, client),
      options: {
        mode: options?.$validateOnly ? "VALIDATE_ONLY" : "VALIDATE_AND_EXECUTE",
        returnEdits: options?.$returnEdits ? "ALL_V2_WITH_DELETIONS" : "NONE"
      }
    });
    if (options?.$validateOnly) {
      return response.validation;
    }
    if (response.validation?.result === "INVALID") {
      throw new ActionValidationError(response.validation);
    }
    const edits = response.edits;
    return options?.$returnEdits ? edits?.type === "edits" ? remapActionResponse(response) : edits : undefined;
  }
}
async function remapActionParams(params, client) {
  if (params == null) {
    return {};
  }
  const parameterMap = {};
  for (const [key, value] of Object.entries(params)) {
    parameterMap[key] = await toDataValue(value, client);
  }
  return parameterMap;
}
async function remapBatchActionParams(params, client) {
  const remappedParams = await Promise.all(params.map(async (param) => {
    return {
      parameters: await remapActionParams(param, client)
    };
  }));
  return remappedParams;
}
function remapActionResponse(response) {
  const editResponses = response?.edits;
  if (editResponses?.type === "edits") {
    const remappedActionResponse = {
      type: editResponses.type,
      deletedLinksCount: editResponses.deletedLinksCount,
      deletedObjectsCount: editResponses.deletedObjectsCount,
      addedLinks: [],
      deletedLinks: [],
      addedObjects: [],
      deletedObjects: [],
      modifiedObjects: [],
      editedObjectTypes: []
    };
    const editedObjectTypesSet = /* @__PURE__ */ new Set();
    for (const edit of editResponses.edits) {
      if (edit.type === "addLink" || edit.type === "deleteLink") {
        const osdkEdit = {
          linkTypeApiNameAtoB: edit.linkTypeApiNameAtoB,
          linkTypeApiNameBtoA: edit.linkTypeApiNameBtoA,
          aSideObject: edit.aSideObject,
          bSideObject: edit.bSideObject
        };
        edit.type === "addLink" ? remappedActionResponse.addedLinks.push(osdkEdit) : remappedActionResponse.deletedLinks?.push(osdkEdit);
        editedObjectTypesSet.add(edit.aSideObject.objectType);
        editedObjectTypesSet.add(edit.bSideObject.objectType);
      } else if (edit.type === "addObject" || edit.type === "deleteObject" || edit.type === "modifyObject") {
        const osdkEdit = {
          objectType: edit.objectType,
          primaryKey: edit.primaryKey
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
          console.warn(`Unexpected edit type: ${JSON.stringify(edit)}`);
        }
      }
    }
    remappedActionResponse.editedObjectTypes = [...editedObjectTypesSet];
    return remappedActionResponse;
  }
}

// src/util/streamutils.ts
var START_TOKEN = new Uint8Array([123, 34, 100, 97, 116, 97, 34, 58, 91]);
var OBJECT_OPEN_CHAR_CODE = 123;
var OBJECT_CLOSE_CHAR_CODE = 125;
async function* parseStreamedResponse(asyncIterable) {
  const utf8decoder = new TextDecoder("utf-8");
  let parsedStart = false;
  let prevChunks = [];
  let openBracesCount = 0;
  for await (let chunk of asyncIterable) {
    let i = 0;
    if (!parsedStart) {
      parsedStart = true;
      if (startsWith(chunk, START_TOKEN)) {
        i = START_TOKEN.length;
      }
    }
    for (; i < chunk.length; i++) {
      while (openBracesCount === 0 && chunk[i] !== OBJECT_OPEN_CHAR_CODE && i < chunk.length) {
        i++;
      }
      let j = i;
      for (; j < chunk.length; j++) {
        const c = chunk[j];
        if (c === OBJECT_OPEN_CHAR_CODE) {
          openBracesCount++;
        } else if (c === OBJECT_CLOSE_CHAR_CODE) {
          openBracesCount--;
          if (0 === openBracesCount) {
            yield combineAndParse(utf8decoder, prevChunks, chunk.subarray(i, j + 1));
            prevChunks = [];
            i = j;
            break;
          }
        }
      }
      if (j === chunk.length) {
        prevChunks.push(chunk.subarray(i));
        break;
      }
    }
  }
}
function startsWith(a, b) {
  if (a.length < b.length) {
    return false;
  }
  for (let i = 0; i < b.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}
function combineAndParse(utf8decoder, prev, curr) {
  let str = "";
  for (const chunk of prev) {
    str += utf8decoder.decode(chunk, {
      stream: true
    });
  }
  str += utf8decoder.decode(curr);
  return JSON.parse(str);
}
async function* iterateReadableStream(readableStream) {
  let res = await readableStream.read();
  while (!res.done) {
    yield res.value;
    res = await readableStream.read();
  }
}

// src/util/timeseriesUtils.ts
function getTimeRange(body) {
  if ("$startTime" in body || "$endTime" in body) {
    return {
      type: "absolute",
      startTime: body.$startTime,
      endTime: body.$endTime
    };
  }
  return body.$before ? {
    type: "relative",
    startTime: {
      when: "BEFORE",
      value: body.$before,
      unit: api.TimeseriesDurationMapping[body.$unit]
    }
  } : {
    type: "relative",
    endTime: {
      when: "AFTER",
      value: body.$after,
      unit: api.TimeseriesDurationMapping[body.$unit]
    }
  };
}
async function* asyncIterPointsHelper(iterator) {
  const reader = iterator.body?.getReader();
  for await (const point of parseStreamedResponse(iterateReadableStream(reader))) {
    yield {
      time: point.time,
      value: point.value
    };
  }
}

// src/createGeotimeSeriesProperty.ts
var GeotimeSeriesPropertyImpl = class {
  #triplet;
  #client;
  constructor(client, objectApiName, primaryKey, propertyName, initialValue) {
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
    if (initialValue != null) {
      this.lastFetchedValue = initialValue;
    }
  }
  async getLatestValue() {
    const latestPointPromise = chunkEY52J5Z4_cjs.TimeSeriesValueBankProperty_exports.getLatestValue(this.#client, await this.#client.ontologyRid, ...this.#triplet);
    latestPointPromise.then(
      (latestPoint) => this.lastFetchedValue = latestPoint,
      // eslint-disable-next-line no-console
      (err) => void console.error(err)
    );
    return latestPointPromise;
  }
  async getAllValues(query) {
    const allPoints = [];
    for await (const point of this.asyncIterValues(query)) {
      allPoints.push(point);
    }
    return allPoints;
  }
  async *asyncIterValues(query) {
    const streamPointsIterator = await chunkEY52J5Z4_cjs.TimeSeriesValueBankProperty_exports.streamValues(this.#client, await this.#client.ontologyRid, ...this.#triplet, query ? {
      range: getTimeRange(query)
    } : {});
    for await (const timeseriesPoint of asyncIterPointsHelper(streamPointsIterator)) {
      yield timeseriesPoint;
    }
  }
};

// src/createMediaReferenceProperty.ts
var MediaReferencePropertyImpl = class {
  #triplet;
  #client;
  constructor(args) {
    const {
      client,
      objectApiName,
      primaryKey,
      propertyName
    } = args;
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }
  async fetchContents() {
    return chunkEY52J5Z4_cjs.MediaReferenceProperty_exports.getMediaContent(this.#client, await this.#client.ontologyRid, ...this.#triplet, {
      preview: true
      // TODO: Can turn this back off when backend is no longer in beta.
    });
  }
  async fetchMetadata() {
    const r = await chunkEY52J5Z4_cjs.MediaReferenceProperty_exports.getMediaMetadata(this.#client, await this.#client.ontologyRid, ...this.#triplet, {
      preview: true
      // TODO: Can turn this back off when backend is no longer in beta.
    });
    return {
      path: r.path,
      sizeBytes: Number(r.sizeBytes),
      mediaType: r.mediaType
    };
  }
};

// src/createTimeseriesProperty.ts
var TimeSeriesPropertyImpl = class {
  #triplet;
  #client;
  constructor(client, objectApiName, primaryKey, propertyName) {
    this.#client = client;
    this.#triplet = [objectApiName, primaryKey, propertyName];
  }
  async getFirstPoint() {
    return chunkEY52J5Z4_cjs.TimeSeriesPropertyV2_exports.getFirstPoint(this.#client, await this.#client.ontologyRid, ...this.#triplet);
  }
  async getLastPoint() {
    return chunkEY52J5Z4_cjs.TimeSeriesPropertyV2_exports.getLastPoint(this.#client, await this.#client.ontologyRid, ...this.#triplet);
  }
  async getAllPoints(query) {
    const allPoints = [];
    for await (const point of this.asyncIterPoints(query)) {
      allPoints.push(point);
    }
    return allPoints;
  }
  async *asyncIterPoints(query) {
    const streamPointsIterator = await chunkEY52J5Z4_cjs.TimeSeriesPropertyV2_exports.streamPoints(this.#client, await this.#client.ontologyRid, ...this.#triplet, query ? {
      range: getTimeRange(query)
    } : {});
    for await (const timeseriesPoint of asyncIterPointsHelper(streamPointsIterator)) {
      yield timeseriesPoint;
    }
  }
};

// src/ontology/OntologyProvider.ts
var InterfaceDefinitions = Symbol("InterfaceDefinitions" );

// src/object/convertWireToOsdkObjects/createOsdkInterface.ts
function createOsdkInterface(underlying, interfaceDef) {
  const [objApiNamespace] = chunkMCQVHD2F_cjs.extractNamespace(interfaceDef.apiName);
  return Object.freeze(Object.defineProperties({}, {
    // first to minimize hidden classes
    [chunkT4NIFYZS_cjs.UnderlyingOsdkObject]: {
      value: underlying
    },
    "$apiName": {
      value: interfaceDef.apiName,
      enumerable: true
    },
    "$as": {
      value: underlying.$as,
      enumerable: false
    },
    "$objectType": {
      value: underlying.$objectType,
      enumerable: "$objectType" in underlying
    },
    "$primaryKey": {
      value: underlying.$primaryKey,
      enumerable: "$primaryKey" in underlying
    },
    "$title": {
      value: underlying.$title,
      enumerable: "$title" in underlying
    },
    "$rid": {
      value: underlying.$rid,
      enumerable: "$rid" in underlying
    },
    "$clone": {
      value: clone,
      enumerable: false
    },
    [chunkT4NIFYZS_cjs.InterfaceDefRef]: {
      value: interfaceDef
    },
    ...Object.fromEntries(Object.keys(interfaceDef.properties).map((p) => {
      const objDef = underlying[chunkT4NIFYZS_cjs.ObjectDefRef];
      const [apiNamespace, apiName] = chunkMCQVHD2F_cjs.extractNamespace(p);
      const targetPropName = objDef.interfaceMap[interfaceDef.apiName][p];
      return [apiNamespace === objApiNamespace ? apiName : p, {
        enumerable: targetPropName in underlying,
        value: underlying[targetPropName]
      }];
    }))
  }));
  function clone(update) {
    if (update == null) {
      return underlying.$clone().$as(interfaceDef);
    }
    for (const key of Object.keys(update)) {
      if (!(key in interfaceDef.properties)) {
        throw new Error(`Invalid property ${key} for interface ${interfaceDef.apiName}`);
      }
    }
    const remappedProps = Object.fromEntries(Object.keys(update).map((p) => mapProperty(p, update[p])).filter((x) => x != null));
    return underlying.$clone(remappedProps).$as(interfaceDef);
  }
  function mapProperty(propertyName, value) {
    const objDef = underlying[chunkT4NIFYZS_cjs.ObjectDefRef];
    const targetPropName = objDef.interfaceMap[interfaceDef.apiName][propertyName];
    if (targetPropName == null) {
      throw new Error(`Cannot clone interface with ${propertyName} as property is not implemented by the underlying object type ${objDef.apiName}`);
    }
    return [targetPropName, value];
  }
}

// src/object/convertWireToOsdkObjects/getDollarAs.ts
var get$as = createSimpleCache(/* @__PURE__ */ new WeakMap(), $asFactory).get;
var osdkObjectToInterfaceView = createSimpleCache(/* @__PURE__ */ new WeakMap(), () => /* @__PURE__ */ new Map());
function $asFactory(objDef) {
  return function $as(targetMinDef) {
    let targetInterfaceApiName;
    if (typeof targetMinDef === "string") {
      if (targetMinDef === objDef.apiName) {
        return this[chunkT4NIFYZS_cjs.UnderlyingOsdkObject];
      }
      if (objDef.interfaceMap?.[targetMinDef] == null) {
        throw new Error(`Object does not implement interface '${targetMinDef}'.`);
      }
      targetInterfaceApiName = targetMinDef;
    } else if (targetMinDef.apiName === objDef.apiName) {
      return this[chunkT4NIFYZS_cjs.UnderlyingOsdkObject];
    } else {
      if (targetMinDef.type === "object") {
        throw new Error(`'${targetMinDef.apiName}' is not an interface nor is it '${objDef.apiName}', which is the object type.`);
      }
      targetInterfaceApiName = targetMinDef.apiName;
    }
    const def = objDef[InterfaceDefinitions][targetInterfaceApiName];
    if (!def) {
      throw new Error(`Object does not implement interface '${targetInterfaceApiName}'.`);
    }
    const underlying = this[chunkT4NIFYZS_cjs.UnderlyingOsdkObject];
    const existing = osdkObjectToInterfaceView.get(underlying).get(targetInterfaceApiName)?.deref();
    if (existing) return existing;
    const osdkInterface = createOsdkInterface(underlying, def.def);
    osdkObjectToInterfaceView.get(underlying).set(targetInterfaceApiName, new WeakRef(osdkInterface));
    return osdkInterface;
  };
}

// src/object/convertWireToOsdkObjects/getDollarLink.ts
function get$link(holder) {
  const client = holder[chunkT4NIFYZS_cjs.ClientRef];
  const objDef = holder[chunkT4NIFYZS_cjs.ObjectDefRef];
  const rawObj = holder[chunkT4NIFYZS_cjs.UnderlyingOsdkObject];
  return Object.freeze(Object.fromEntries(Object.keys(objDef.links).map((linkName) => {
    const linkDef = objDef.links[linkName];
    const objectSet = client.objectSetFactory(objDef, client).where({
      [objDef.primaryKeyApiName]: rawObj.$primaryKey
    }).pivotTo(linkName);
    const value = !linkDef.multiplicity ? {
      fetchOne: (options) => chunkMCQVHD2F_cjs.fetchSingle(client, objDef, options ?? {}, chunkMCQVHD2F_cjs.getWireObjectSet(objectSet)),
      fetchOneWithErrors: (options) => chunkMCQVHD2F_cjs.fetchSingleWithErrors(client, objDef, options ?? {}, chunkMCQVHD2F_cjs.getWireObjectSet(objectSet))
    } : objectSet;
    return [linkName, value];
  })));
}

// src/object/convertWireToOsdkObjects/createOsdkObject.ts
var specialPropertyTypes = /* @__PURE__ */ new Set(["attachment", "geotimeSeriesReference", "mediaReference", "numericTimeseries", "stringTimeseries", "sensorTimeseries"]);
var basePropDefs = {
  "$as": {
    get: function() {
      return get$as(this[chunkT4NIFYZS_cjs.ObjectDefRef]);
    }
  },
  "$link": {
    get: function() {
      return get$link(this);
    }
  },
  "$clone": {
    value: function(update) {
      const rawObj = this[chunkT4NIFYZS_cjs.UnderlyingOsdkObject];
      const def = this[chunkT4NIFYZS_cjs.ObjectDefRef];
      if (update == null) {
        return createOsdkObject(this[chunkT4NIFYZS_cjs.ClientRef], def, {
          ...rawObj
        });
      }
      if (def.primaryKeyApiName in update && rawObj[def.primaryKeyApiName] !== update[def.primaryKeyApiName]) {
        throw new Error(`Cannot update ${def.apiName} object with differing primary key values `);
      }
      if (def.titleProperty in update && !("$title" in update)) {
        update.$title = update[def.titleProperty];
      }
      const newObject = {
        ...this[chunkT4NIFYZS_cjs.UnderlyingOsdkObject],
        ...update
      };
      return createOsdkObject(this[chunkT4NIFYZS_cjs.ClientRef], this[chunkT4NIFYZS_cjs.ObjectDefRef], newObject);
    }
  }
};
function createOsdkObject(client, objectDef, simpleOsdkProperties) {
  const rawObj = simpleOsdkProperties;
  Object.defineProperties(rawObj, {
    [chunkT4NIFYZS_cjs.UnderlyingOsdkObject]: {
      enumerable: false,
      value: simpleOsdkProperties
    },
    [chunkT4NIFYZS_cjs.ObjectDefRef]: {
      value: objectDef,
      enumerable: false
    },
    [chunkT4NIFYZS_cjs.ClientRef]: {
      value: client,
      enumerable: false
    },
    ...basePropDefs
  });
  for (const propKey of Object.keys(rawObj)) {
    if (propKey in objectDef.properties && typeof objectDef.properties[propKey].type === "string" && specialPropertyTypes.has(objectDef.properties[propKey].type)) {
      rawObj[propKey] = createSpecialProperty(client, objectDef, rawObj, propKey);
    }
  }
  return Object.freeze(rawObj);
}
function createSpecialProperty(client, objectDef, rawObject, p) {
  const rawValue = rawObject[p];
  const propDef = objectDef.properties[p];
  if (process.env.NODE_ENV !== "production") {
    !(propDef != null && typeof propDef.type === "string" && specialPropertyTypes.has(propDef.type)) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false) : invariant__default.default(false) : undefined;
  }
  {
    {
      {
        {
          if (propDef.type === "attachment") {
            if (Array.isArray(rawValue)) {
              return rawValue.map((a) => chunkMCQVHD2F_cjs.hydrateAttachmentFromRidInternal(client, a.rid));
            }
            return chunkMCQVHD2F_cjs.hydrateAttachmentFromRidInternal(client, rawValue.rid);
          }
          if (propDef.type === "numericTimeseries" || propDef.type === "stringTimeseries" || propDef.type === "sensorTimeseries") {
            return new TimeSeriesPropertyImpl(client, objectDef.apiName, rawObject[objectDef.primaryKeyApiName], p);
          }
          if (propDef.type === "geotimeSeriesReference") {
            return new GeotimeSeriesPropertyImpl(client, objectDef.apiName, rawObject[objectDef.primaryKeyApiName], p, rawValue.type === "geotimeSeriesValue" ? {
              time: rawValue.timestamp,
              value: {
                type: "Point",
                coordinates: rawValue.position
              }
            } : undefined);
          }
          if (propDef.type === "mediaReference") {
            return new MediaReferencePropertyImpl({
              client,
              objectApiName: objectDef.apiName,
              primaryKey: rawObject[objectDef.primaryKeyApiName],
              propertyName: p
            });
          }
        }
      }
    }
  }
}

// src/object/createObjectSpecifierFromPrimaryKey.ts
function createObjectSpecifierFromPrimaryKey(def, primaryKey) {
  return `${def.apiName}:${primaryKey}`;
}

// src/object/convertWireToOsdkObjects.ts
async function convertWireToOsdkObjects(client, objects, interfaceApiName, forceRemoveRid = false, selectedProps, strictNonNull = false) {
  client.logger?.debug(`START convertWireToOsdkObjects()`);
  fixObjectPropertiesInPlace(objects, forceRemoveRid);
  const ifaceDef = interfaceApiName ? await client.ontologyProvider.getInterfaceDefinition(interfaceApiName) : undefined;
  const ifaceSelected = ifaceDef ? selectedProps ?? Object.keys(ifaceDef.properties) : undefined;
  const ret = [];
  for (const rawObj of objects) {
    const objectDef = await client.ontologyProvider.getObjectDefinition(rawObj.$apiName);
    !objectDef ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `Missing definition for '${rawObj.$apiName}'`) : invariant__default.default(false) : undefined;
    let objProps;
    let conforming = true;
    if (ifaceDef && ifaceSelected) {
      invariantInterfacesAsViews(objectDef, ifaceDef.apiName, client);
      conforming &&= isConforming(client, ifaceDef, rawObj, ifaceSelected);
      reframeAsObjectInPlace(objectDef, ifaceDef.apiName, rawObj);
      objProps = convertInterfacePropNamesToObjectPropNames(objectDef, ifaceDef.apiName, ifaceSelected);
    } else {
      objProps = selectedProps ?? Object.keys(objectDef.properties);
    }
    conforming &&= isConforming(client, objectDef, rawObj, objProps);
    if (strictNonNull === "throw" && !conforming) {
      throw new Error("Unable to safely convert objects as some non nullable properties are null");
    } else if (strictNonNull === "drop" && !conforming) {
      continue;
    }
    let osdkObject = createOsdkObject(client, objectDef, rawObj);
    if (interfaceApiName) osdkObject = osdkObject.$as(interfaceApiName);
    ret.push(osdkObject);
  }
  client.logger?.debug(`END convertWireToOsdkObjects()`);
  return ret;
}
async function convertWireToOsdkObjects2(client, objects, interfaceApiName, forceRemoveRid = false, selectedProps, strictNonNull = false, interfaceToObjectTypeMappings = {}) {
  client.logger?.debug(`START convertWireToOsdkObjects2()`);
  fixObjectPropertiesInPlace(objects, forceRemoveRid);
  const ret = [];
  for (const rawObj of objects) {
    const objectDef = await client.ontologyProvider.getObjectDefinition(rawObj.$apiName);
    !objectDef ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `Missing definition for '${rawObj.$apiName}'`) : invariant__default.default(false) : undefined;
    const interfaceToObjMapping = interfaceApiName ? interfaceToObjectTypeMappings[interfaceApiName][rawObj.$apiName] : undefined;
    const ifaceSelected = interfaceApiName && interfaceToObjMapping ? selectedProps ? Object.keys(interfaceToObjMapping).filter((val) => {
      selectedProps?.includes(interfaceToObjMapping[val]);
    }) : [...Object.values(interfaceToObjMapping), objectDef.primaryKeyApiName] : undefined;
    let objProps;
    let conforming = true;
    if (interfaceApiName && ifaceSelected) {
      invariantInterfacesAsViews(objectDef, interfaceApiName, client);
      objProps = ifaceSelected;
    } else {
      objProps = selectedProps ?? Object.keys(objectDef.properties);
    }
    conforming &&= isConforming(client, objectDef, rawObj, objProps);
    if (strictNonNull === "throw" && !conforming) {
      throw new Error("Unable to safely convert objects as some non nullable properties are null");
    } else if (strictNonNull === "drop" && !conforming) {
      continue;
    }
    let osdkObject = createOsdkObject(client, objectDef, rawObj);
    if (interfaceApiName) osdkObject = osdkObject.$as(interfaceApiName);
    ret.push(osdkObject);
  }
  client.logger?.debug(`END convertWireToOsdkObjects2()`);
  return ret;
}
function convertInterfacePropNamesToObjectPropNames(objectDef, interfaceApiName, ifacePropsToMap) {
  return ifacePropsToMap.map((ifaceProp) => objectDef.interfaceMap[interfaceApiName][ifaceProp]);
}
function reframeAsObjectInPlace(objectDef, interfaceApiName, rawObj) {
  const newProps = {};
  for (const [sptProp, regularProp] of Object.entries(objectDef.interfaceMap[interfaceApiName])) {
    if (sptProp in rawObj) {
      const value = rawObj[sptProp];
      delete rawObj[sptProp];
      if (value !== undefined) {
        newProps[regularProp] = value;
      }
    }
  }
  Object.assign(rawObj, newProps);
  if (!(objectDef.primaryKeyApiName in rawObj)) {
    rawObj[objectDef.primaryKeyApiName] = rawObj.$primaryKey;
  }
}
function isConforming(client, def, obj, propsToCheck) {
  for (const propName of propsToCheck) {
    if (propName in def.properties && def.properties[propName].nullable === false && obj[propName] == null) {
      if (process.env.NODE_ENV !== "production") {
        client.logger?.debug({
          obj: {
            $apiName: obj["$apiName"],
            $objectType: obj["$objectType"],
            $primaryKey: obj["$primaryKey"]
          }
        }, `Found object that does not conform to its definition. Expected ${def.apiName}'s ${propName} to not be null.`);
      }
      return false;
    }
  }
  return true;
}
function invariantInterfacesAsViews(objectDef, interfaceApiName, client) {
  if (objectDef.interfaceMap?.[interfaceApiName] == null) {
    const warning = "Interfaces are only supported 'as views' but your metadata object is missing the correct information. This suggests your interfaces have not been migrated to the newer version yet and you cannot use this version of the SDK.";
    if (client.logger) {
      client.logger.warn(warning);
    } else {
      console.error(`WARNING! ${warning}`);
    }
    throw new Error(warning);
  }
}
function fixObjectPropertiesInPlace(objs, forceRemoveRid) {
  for (const obj of objs) {
    if (forceRemoveRid) {
      delete obj.__rid;
    }
    if (obj.__rid) {
      obj.$rid = obj.__rid;
      delete obj.__rid;
    }
    obj.$apiName ??= obj.__apiName;
    obj.$objectType = obj.$apiName;
    obj.$primaryKey ??= obj.__primaryKey;
    obj.$title ??= obj.__title;
    obj.$objectSpecifier = createObjectSpecifierFromPrimaryKey({
      apiName: obj.$apiName,
      type: "object"
    }, obj.$primaryKey);
    delete obj.__apiName;
    delete obj.__primaryKey;
    delete obj.__title;
  }
}

// src/object/Cache.ts
function createClientCache(fn) {
  const cache = /* @__PURE__ */ new WeakMap();
  function get(client, key) {
    if (cache.get(client.clientCacheKey) == null) {
      cache.set(client.clientCacheKey, /* @__PURE__ */ new Map());
    }
    let r = cache.get(client.clientCacheKey).get(key);
    if (r === undefined && fn !== undefined) {
      return set(client, key, fn(client, key));
    } else {
      return r;
    }
  }
  function set(client, key, value) {
    if (cache.get(client.clientCacheKey) == null) {
      cache.set(client.clientCacheKey, /* @__PURE__ */ new Map());
    }
    cache.get(client.clientCacheKey).set(key, value);
    return value;
  }
  function remove(client, key) {
    if (cache.get(client.clientCacheKey) == null) return false;
    return cache.get(client.clientCacheKey).delete(key);
  }
  return {
    get,
    set,
    remove
  };
}
function createAsyncClientCache(fn, createCacheLocal = createClientCache) {
  const cache = createCacheLocal();
  const inProgress = createCacheLocal();
  const ret = {
    getOrUndefined: function getOrUndefined(client, key) {
      return cache.get(client, key);
    },
    get: async function get(client, key) {
      return cache.get(client, key) ?? inProgress.get(client, key) ?? ret.set(client, key, fn(client, key));
    },
    set: async function set(client, k, v) {
      try {
        const r = await inProgress.set(client, k, v);
        cache.set(client, k, r);
        inProgress.remove(client, k);
        return r;
      } catch (e) {
        inProgress.remove(client, k);
        throw e;
      }
    }
  };
  return ret;
}
async function loadActionMetadata(client, actionType) {
  const r = await chunkEY52J5Z4_cjs.ActionTypeV2_exports.get(client, await client.ontologyRid, actionType);
  return generatorConverters.wireActionTypeV2ToSdkActionMetadata(r);
}
async function loadFullObjectMetadata(client, objectType) {
  const full = await chunkEY52J5Z4_cjs.ObjectTypeV2_exports.getFullMetadata(client, await client.ontologyRid, objectType, {
    preview: true
  });
  const ret = generatorConverters.wireObjectTypeFullMetadataToSdkObjectMetadata(full, true);
  client.logger?.debug(`END loadFullObjectMetadata(${objectType})`);
  return {
    ...ret
  };
}
async function loadInterfaceMetadata(client, objectType) {
  const r = await chunkEY52J5Z4_cjs.OntologyInterface_exports.get(client, await client.ontologyRid, objectType, {
    preview: true
  });
  return generatorConverters.__UNSTABLE_wireInterfaceTypeV2ToSdkObjectDefinition(r, true);
}
async function loadQueryMetadata(client, queryType) {
  const r = await chunkEY52J5Z4_cjs.QueryType_exports.get(client, await client.ontologyRid, queryType);
  return generatorConverters.wireQueryTypeV2ToSdkQueryMetadata(r);
}

// src/ontology/StandardOntologyProvider.ts
var createStandardOntologyProviderFactory = (client) => {
  return (client2) => {
    async function loadObject(client3, key) {
      let objectDef = await loadFullObjectMetadata(client3, key);
      const interfaceDefs = Object.fromEntries((await Promise.all(objectDef.implements?.map((i) => ret.getInterfaceDefinition(i)) ?? [])).map((i) => [i.apiName, {
        def: i,
        handler: undefined
      }]));
      const fullObjectDef = {
        ...objectDef,
        [InterfaceDefinitions]: interfaceDefs
      };
      return fullObjectDef;
    }
    async function loadInterface(client3, key) {
      return loadInterfaceMetadata(client3, key);
    }
    async function loadQuery(client3, key) {
      const r = await loadQueryMetadata(client3, key);
      return r;
    }
    async function loadAction(client3, key) {
      const r = await loadActionMetadata(client3, key);
      return r;
    }
    function makeGetter(fn) {
      const cache = createAsyncClientCache((client3, key) => fn(client3, key, false));
      return async (apiName) => {
        return await cache.get(client2, apiName);
      };
    }
    const ret = {
      getObjectDefinition: makeGetter(loadObject),
      getInterfaceDefinition: makeGetter(loadInterface),
      getQueryDefinition: makeGetter(loadQuery),
      getActionDefinition: makeGetter(loadAction)
    };
    return ret;
  };
};

// src/util/UserAgent.ts
var USER_AGENT = `osdk-client/${"2.2.0-beta.9"}`;

// src/createMinimalClient.ts
function createMinimalClient(metadata, baseUrl, tokenProvider, options = {}, fetchFn = global.fetch, objectSetFactory = chunkMCQVHD2F_cjs.createObjectSet, createOntologyProviderFactory = createStandardOntologyProviderFactory) {
  if (process.env.NODE_ENV !== "production") {
    try {
      new URL(baseUrl);
    } catch (e) {
      const hint = !baseUrl.startsWith("http://") || !baseUrl.startsWith("https://") ? ". Did you forget to add 'http://' or 'https://'?" : "";
      throw new Error(`Invalid stack URL: ${baseUrl}${hint}`);
    }
  }
  const processedBaseUrl = new URL(baseUrl);
  processedBaseUrl.pathname += processedBaseUrl.pathname.endsWith("/") ? "" : "/";
  const minimalClient = {
    ...shared_client_impl.createSharedClientContext(processedBaseUrl.toString(), tokenProvider, USER_AGENT, fetchFn),
    objectSetFactory,
    objectFactory: convertWireToOsdkObjects,
    objectFactory2: convertWireToOsdkObjects2,
    ontologyRid: metadata.ontologyRid,
    logger: options.logger,
    clientCacheKey: {},
    requestContext: {}
  };
  return Object.freeze(Object.assign(minimalClient, {
    ontologyProvider: createOntologyProviderFactory(options)(minimalClient)
  }));
}

// src/fetchMetadata.ts
var fetchMetadataInternal = async (client, definition) => {
  if (definition.type === "object") {
    const {
      [InterfaceDefinitions]: interfaceDefs,
      ...objectTypeDef
    } = await client.ontologyProvider.getObjectDefinition(definition.apiName);
    return objectTypeDef;
  } else if (definition.type === "interface") {
    return client.ontologyProvider.getInterfaceDefinition(definition.apiName);
  } else if (definition.type === "action") {
    return client.ontologyProvider.getActionDefinition(definition.apiName);
  } else if (definition.type === "query") {
    return client.ontologyProvider.getQueryDefinition(definition.apiName);
  } else {
    throw new Error("Not implemented for given definition");
  }
};

// src/logger/BaseLogger.ts
function noop() {
}
var levels = {
  trace: 10,
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  fatal: 60
};
var BaseLogger = class {
  #factory;
  constructor(bindings, options = {}, factory) {
    this.bindings = bindings;
    this.options = options;
    this.#factory = factory;
  }
  trace = noop;
  debug = noop;
  warn = noop;
  info = noop;
  error = noop;
  fatal = noop;
  child(bindings, options) {
    return new this.#factory({
      ...this.bindings,
      ...bindings
    }, {
      level: (options ?? this.options)?.level,
      msgPrefix: [this.options?.msgPrefix, options?.msgPrefix].filter((x) => x).join(" ")
    });
  }
  isLevelEnabled(level) {
    const ourLevel = this.options?.level ?? "info";
    return level in levels && ourLevel in levels && levels[level] >= levels[ourLevel];
  }
};

// src/logger/MinimalLogger.ts
function createLogMethod(name, bindings, options) {
  const msgs = [name];
  if (options?.msgPrefix) {
    msgs.push(options.msgPrefix);
  }
  if (typeof bindings === "object" && "methodName" in bindings) {
    msgs.push(`.${bindings.methodName}()`);
  }
  return console[name === "fatal" ? "error" : name].bind(console, msgs.join(" "));
}
var MinimalLogger = class _MinimalLogger extends BaseLogger {
  constructor(bindings = {}, options = {}) {
    super(bindings, {
      ...options,
      level: options.level ?? "error"
    }, _MinimalLogger);
    for (const k of ["trace", "debug", "info", "warn", "error", "fatal"]) {
      this[k] = createLogMethod(k, bindings, options);
    }
  }
};

// src/util/isOsdkBaseObject.ts
function isOsdkBaseObject2(o) {
  return o && typeof o === "object" && typeof o.$apiName === "string" && o.$primaryKey != null;
}

// src/util/toDataValueQueries.ts
async function toDataValueQueries(value, client, desiredType) {
  if (value == null) {
    return value;
  }
  if (Array.isArray(value) && desiredType.multiplicity) {
    const values = Array.from(value);
    if (values.some((dataValue) => isAttachmentUpload(dataValue) || isAttachmentFile(dataValue))) {
      const converted = [];
      for (const value2 of values) {
        converted.push(await toDataValueQueries(value2, client, desiredType));
      }
      return converted;
    }
    const promiseArray = Array.from(value, async (innerValue) => await toDataValueQueries(innerValue, client, desiredType));
    return Promise.all(promiseArray);
  }
  switch (desiredType.type) {
    case "attachment": {
      if (isAttachmentUpload(value)) {
        const attachment = await chunkEY52J5Z4_cjs.Attachment_exports.upload(client, value.data, {
          filename: value.name
        });
        return attachment.rid;
      }
      if (isAttachmentFile(value)) {
        const attachment = await chunkEY52J5Z4_cjs.Attachment_exports.upload(client, value, {
          filename: value.name
        });
        return attachment.rid;
      }
      return value;
    }
    case "twoDimensionalAggregation": {
      return {
        groups: value
      };
    }
    case "threeDimensionalAggregation": {
      return {
        groups: value
      };
    }
    case "set": {
      if (value instanceof Set) {
        const promiseArray = Array.from(value, async (innerValue) => await toDataValueQueries(innerValue, client, desiredType["set"]));
        return Promise.all(promiseArray);
      }
      break;
    }
    case "object": {
      if (isOsdkBaseObject2(value)) {
        return value.$primaryKey;
      }
      break;
    }
    case "objectSet": {
      if (chunkMCQVHD2F_cjs.isWireObjectSet(value)) {
        return value;
      }
      if (chunkMCQVHD2F_cjs.isObjectSet(value)) {
        return chunkMCQVHD2F_cjs.getWireObjectSet(value);
      }
      break;
    }
    case "map": {
      if (typeof value === "object") {
        const entrySet = [];
        for (const [key, mapValue] of Object.entries(value)) {
          entrySet.push({
            key: desiredType.keyType.type === "object" ? extractPrimaryKeyFromObjectIdentifier(key) : await toDataValueQueries(key, client, desiredType.keyType),
            value: await toDataValueQueries(mapValue, client, desiredType.valueType)
          });
        }
        return entrySet;
      }
      break;
    }
    case "struct": {
      if (typeof value === "object") {
        const structMap = {};
        for (const [key, structValue] of Object.entries(value)) {
          structMap[key] = await toDataValueQueries(structValue, client, desiredType["struct"][key]);
        }
        return structMap;
      }
    }
    case "boolean":
    case "date":
    case "double":
    case "float":
    case "integer":
    case "long":
    case "string":
    case "timestamp":
      return value;
  }
  return value;
}
function extractPrimaryKeyFromObjectIdentifier(a) {
  return a.substring(a.indexOf(":") + 1);
}

// src/queries/applyQuery.ts
async function applyQuery(client, query, params) {
  const qd = await client.ontologyProvider.getQueryDefinition(query.apiName);
  const response = await chunkEY52J5Z4_cjs.Query_exports.execute(chunkEY52J5Z4_cjs.addUserAgentAndRequestContextHeaders(chunkMCQVHD2F_cjs.augmentRequestContext(client, (_) => ({
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
    case "union": {
      throw new Error("Union return types are not yet supported");
    }
    case "set": {
      for (let i = 0; i < responseValue.length; i++) {
        responseValue[i] = await remapQueryResponse(client, responseDataType.set, responseValue[i], definitions);
      }
      return responseValue;
    }
    case "attachment": {
      return chunkMCQVHD2F_cjs.hydrateAttachmentFromRidInternal(client, responseValue);
    }
    case "object": {
      const def = definitions.get(responseDataType.object);
      if (!def) {
        throw new Error(`Missing definition for ${responseDataType.object}`);
      }
      return createQueryObjectResponse(responseValue, def);
    }
    case "objectSet": {
      const def = definitions.get(responseDataType.objectSet);
      if (!def) {
        throw new Error(`Missing definition for ${responseDataType.objectSet}`);
      }
      if (typeof responseValue === "string") {
        return chunkMCQVHD2F_cjs.createObjectSet(def, client, {
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
      return chunkMCQVHD2F_cjs.createObjectSet(def, client, responseValue);
    }
    case "struct": {
      for (const [key, subtype] of Object.entries(responseDataType.struct)) {
        if (requiresConversion(subtype)) {
          responseValue[key] = await remapQueryResponse(client, subtype, responseValue[key], definitions);
        }
      }
      return responseValue;
    }
    case "map": {
      const map = {};
      !Array.isArray(responseValue) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "Expected array entry") : invariant__default.default(false) : undefined;
      for (const entry of responseValue) {
        !entry.key ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "Expected key") : invariant__default.default(false) : undefined;
        !entry.value ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "Expected value") : invariant__default.default(false) : undefined;
        const key = responseDataType.keyType.type === "object" ? getObjectSpecifier(entry.key, responseDataType.keyType.object, definitions) : entry.key;
        const value = await remapQueryResponse(client, responseDataType.valueType, entry.value, definitions);
        map[key] = value;
      }
      return map;
    }
    case "twoDimensionalAggregation": {
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
    case "threeDimensionalAggregation": {
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
  const result = /* @__PURE__ */ new Map();
  switch (dataType.type) {
    case "objectSet": {
      const objectDef = await client.ontologyProvider.getObjectDefinition(dataType.objectSet);
      result.set(dataType.objectSet, objectDef);
      break;
    }
    case "object": {
      const objectDef = await client.ontologyProvider.getObjectDefinition(dataType.object);
      result.set(dataType.object, objectDef);
      break;
    }
    case "set": {
      return getRequiredDefinitions(dataType.set, client);
    }
    case "map": {
      for (const value of [dataType.keyType, dataType.valueType]) {
        for (const [type, objectDef] of await getRequiredDefinitions(value, client)) {
          result.set(type, objectDef);
        }
      }
      break;
    }
    case "struct": {
      for (const value of Object.values(dataType.struct)) {
        for (const [type, objectDef] of await getRequiredDefinitions(value, client)) {
          result.set(type, objectDef);
        }
      }
      break;
    }
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
function createQueryObjectResponse(primaryKey, objectDef) {
  return {
    $apiName: objectDef.apiName,
    $title: undefined,
    $objectType: objectDef.apiName,
    $primaryKey: primaryKey,
    $objectSpecifier: createObjectSpecifierFromPrimaryKey(objectDef, primaryKey)
  };
}

// src/createClient.ts
var ActionInvoker = class {
  constructor(clientCtx, actionDef) {
    this.applyAction = applyAction.bind(undefined, clientCtx, actionDef);
    this.batchApplyAction = applyAction.bind(undefined, clientCtx, actionDef);
  }
};
var QueryInvoker = class {
  constructor(clientCtx, queryDef) {
    this.executeFunction = applyQuery.bind(undefined, clientCtx, queryDef);
  }
};
function createClientInternal(objectSetFactory, baseUrl, ontologyRid, tokenProvider, options = undefined, fetchFn = fetch) {
  if (typeof ontologyRid === "string") {
    if (!ontologyRid.startsWith("ri.")) {
      throw new Error("Invalid ontology RID");
    }
  } else {
    ontologyRid.then((ontologyRid2) => {
      if (!ontologyRid2.startsWith("ri.")) {
        throw new Error("Invalid ontology RID");
      }
    });
  }
  const clientCtx = createMinimalClient({
    ontologyRid
  }, baseUrl, tokenProvider, {
    ...options,
    logger: options?.logger ?? new MinimalLogger()
  }, fetchFn, objectSetFactory);
  function clientFn(o) {
    if (o.type === "object" || o.type === "interface") {
      return objectSetFactory(o, clientCtx);
    } else if (o.type === "action") {
      return new ActionInvoker(clientCtx, o);
    } else if (o.type === "query") {
      return new QueryInvoker(clientCtx, o);
    } else if (o.type === "experiment") {
      switch (o.name) {
        case unstable.__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks.name:
          return {
            getBulkLinks: createBulkLinksAsyncIterFactory(clientCtx)
          };
        case unstable.__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid.name:
          return {
            fetchOneByRid: async (objectType, rid, options2) => {
              return await chunkMCQVHD2F_cjs.fetchSingle(clientCtx, objectType, options2, createWithRid([rid]));
            }
          };
        case unstable.__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference.name:
          return {
            createMediaReference: async (args) => {
              const {
                data,
                fileName,
                objectType,
                propertyType
              } = args;
              return await chunkEY52J5Z4_cjs.MediaReferenceProperty_exports.upload(clientCtx, await clientCtx.ontologyRid, objectType.apiName, propertyType, data, {
                mediaItemPath: fileName,
                preview: true
              });
            }
          };
        case unstable.__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid.name:
          return {
            fetchPageByRid: async (objectOrInterfaceType, rids, options2 = {}) => {
              return await chunkEY52J5Z4_cjs.fetchPage(clientCtx, objectOrInterfaceType, options2, createWithRid(rids));
            }
          };
      }
      throw new Error("not implemented");
    } else {
      throw new Error("not implemented");
    }
  }
  const fetchMetadata = fetchMetadataInternal.bind(undefined, clientCtx);
  const symbolClientContext2 = "__osdkClientContext";
  const client = Object.defineProperties(clientFn, {
    [chunkEY52J5Z4_cjs.symbolClientContext]: {
      value: clientCtx
    },
    [symbolClientContext2]: {
      value: clientCtx
    },
    [chunkEY52J5Z4_cjs.additionalContext]: {
      value: clientCtx
    },
    fetchMetadata: {
      value: fetchMetadata
    }
  });
  return client;
}
var createClient = createClientInternal.bind(undefined, chunkMCQVHD2F_cjs.createObjectSet);
function createWithRid(rids) {
  const withRid = {
    type: "static",
    "objects": rids
  };
  return withRid;
}
function createPlatformClient(baseUrl, tokenProvider, options = undefined, fetchFn = fetch) {
  return shared_client_impl.createSharedClientContext(baseUrl, tokenProvider, USER_AGENT, fetchFn);
}
var isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
var extractDate = (dateTime) => {
  !(dateTime.length < 33) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, "Invalid date format. Provided input is too long.") : invariant__default.default(false) : undefined;
  !isoRegex.test(dateTime) ? process.env.NODE_ENV !== "production" ? invariant__default.default(false, `Invalid date format. Expected ISO 8601 format, but received ${dateTime}`) : invariant__default.default(false) : undefined;
  return extractDateFromIsoString(dateTime);
};
var extractDateInUTC = (date) => {
  return extractDateFromIsoString(date.toISOString());
};
var extractDateInLocalTime = (date) => {
  return extractDateFromIsoString(generateOffsetUtcString(date));
};
var generateOffsetUtcString = (date) => {
  const offsetMs = date.getTimezoneOffset() * 60 * 1e3;
  return new Date(date.getTime() - offsetMs).toISOString();
};
var extractDateFromIsoString = (dateTime) => {
  return dateTime.split("T")[0];
};

Object.defineProperty(exports, "isOk", {
  enumerable: true,
  get: function () { return api.isOk; }
});
Object.defineProperty(exports, "PalantirApiError", {
  enumerable: true,
  get: function () { return shared_net_errors.PalantirApiError; }
});
exports.ActionValidationError = ActionValidationError;
exports.createAttachmentUpload = createAttachmentUpload;
exports.createClient = createClient;
exports.createObjectSpecifierFromPrimaryKey = createObjectSpecifierFromPrimaryKey;
exports.createPlatformClient = createPlatformClient;
exports.extractDate = extractDate;
exports.extractDateInLocalTime = extractDateInLocalTime;
exports.extractDateInUTC = extractDateInUTC;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map