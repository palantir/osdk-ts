'use strict';

var chunkEY52J5Z4_cjs = require('./chunk-EY52J5Z4.cjs');
var shared_net_errors = require('@osdk/shared.net.errors');
var invariant5 = require('tiny-invariant');
var api = require('@osdk/api');
var WebSocket = require('isomorphic-ws');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant5__default = /*#__PURE__*/_interopDefault(invariant5);
var WebSocket__default = /*#__PURE__*/_interopDefault(WebSocket);

// src/public-utils/hydrateAttachmentFromRid.ts
function hydrateAttachmentFromRid(client, rid) {
  return hydrateAttachmentFromRidInternal(client[chunkEY52J5Z4_cjs.additionalContext], rid);
}
function hydrateAttachmentFromRidInternal(client, rid) {
  return {
    rid,
    async fetchContents() {
      return chunkEY52J5Z4_cjs.Attachment_exports.read(client, rid);
    },
    async fetchMetadata() {
      const r = await chunkEY52J5Z4_cjs.Attachment_exports.get(client, rid);
      return {
        ...r,
        sizeBytes: Number(r.sizeBytes)
      };
    }
  };
}
async function fetchSingle(client, objectType, args, objectSet) {
  const result = await chunkEY52J5Z4_cjs.fetchPage(client, objectType, {
    ...args,
    $pageSize: 1
  }, objectSet);
  if (result.data.length !== 1 || result.nextPageToken != null) {
    throw new shared_net_errors.PalantirApiError(`Expected a single result but got ${result.data.length} instead${result.nextPageToken != null ? " with nextPageToken set" : ""}`);
  }
  return result.data[0];
}
async function fetchSingleWithErrors(client, objectType, args, objectSet) {
  try {
    const result = await fetchSingle(client, objectType, args, objectSet);
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
function extractNamespace(fqApiName) {
  const last = fqApiName.lastIndexOf(".");
  if (last === -1) return [undefined, fqApiName];
  return [fqApiName.slice(0, last), fqApiName.slice(last + 1)];
}
function modernToLegacyWhereClause(whereClause, objectOrInterface) {
  if ("$and" in whereClause) {
    return {
      type: "and",
      value: whereClause.$and.map((clause) => modernToLegacyWhereClause(clause, objectOrInterface))
    };
  } else if ("$or" in whereClause) {
    return {
      type: "or",
      value: whereClause.$or.map((clause) => modernToLegacyWhereClause(clause, objectOrInterface))
    };
  } else if ("$not" in whereClause) {
    return {
      type: "not",
      value: modernToLegacyWhereClause(whereClause.$not, objectOrInterface)
    };
  }
  const parts = Object.entries(whereClause);
  if (parts.length === 1) {
    return handleWherePair(parts[0], objectOrInterface);
  }
  return {
    type: "and",
    value: parts.map((v) => handleWherePair(v, objectOrInterface))
  };
}
function makeGeoFilterBbox(bbox, filterType, propertyIdentifier, field) {
  return {
    type: filterType === "$within" ? "withinBoundingBox" : "intersectsBoundingBox",
    /**
     * This is a bit ugly, but did this so that propertyIdentifier only shows up in the return object if its defined,
     * this makes it so we don't need to go update our entire test bed either to include a field which may change in near future.
     * Once we solidify that this is the way forward, I can remove field and clean this up
     */
    ...propertyIdentifier != null && {
      propertyIdentifier
    },
    field,
    value: {
      topLeft: {
        type: "Point",
        coordinates: [bbox[0], bbox[3]]
      },
      bottomRight: {
        type: "Point",
        coordinates: [bbox[2], bbox[1]]
      }
    }
  };
}
function makeGeoFilterPolygon(coordinates, filterType, propertyIdentifier, field) {
  return {
    type: filterType,
    ...propertyIdentifier != null && {
      propertyIdentifier
    },
    field,
    value: {
      type: "Polygon",
      coordinates
    }
  };
}
function handleWherePair([fieldName, filter], objectOrInterface, structFieldSelector) {
  !(filter != null) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "Defined key values are only allowed when they are not undefined.") : invariant5__default.default(false) : undefined;
  const propertyIdentifier = structFieldSelector != null ? {
    type: "structField",
    ...structFieldSelector,
    propertyApiName: fullyQualifyPropName(structFieldSelector.propertyApiName, objectOrInterface)
  } : undefined;
  const field = structFieldSelector == null ? fullyQualifyPropName(fieldName, objectOrInterface) : undefined;
  if (typeof filter === "string" || typeof filter === "number" || typeof filter === "boolean") {
    return {
      type: "eq",
      ...propertyIdentifier != null && {
        propertyIdentifier
      },
      field,
      value: filter
    };
  }
  const keysOfFilter = Object.keys(filter);
  const hasDollarSign = keysOfFilter.some((key) => key.startsWith("$"));
  !(!hasDollarSign || keysOfFilter.length === 1) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "A WhereClause Filter with multiple clauses/fields is not allowed. Instead, use an 'or'/'and' clause to combine multiple filters.") : invariant5__default.default(false) : undefined;
  if (!hasDollarSign) {
    const structFilter = Object.entries(filter);
    !(structFilter.length === 1) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "Cannot filter on more than one struct field in the same clause, need to use an and clause") : invariant5__default.default(false) : undefined;
    const structFieldApiName = keysOfFilter[0];
    return handleWherePair(Object.entries(filter)[0], objectOrInterface, {
      propertyApiName: fieldName,
      structFieldApiName
    });
  }
  const firstKey = keysOfFilter[0];
  !(filter[firstKey] != null) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false) : invariant5__default.default(false) : undefined;
  if (firstKey === "$ne") {
    return {
      type: "not",
      value: {
        type: "eq",
        ...propertyIdentifier != null && {
          propertyIdentifier
        },
        field,
        value: filter[firstKey]
      }
    };
  }
  if (firstKey === "$within") {
    const withinBody = filter[firstKey];
    if (Array.isArray(withinBody)) {
      return makeGeoFilterBbox(withinBody, firstKey, propertyIdentifier, field);
    } else if ("$bbox" in withinBody && withinBody.$bbox != null) {
      return makeGeoFilterBbox(withinBody.$bbox, firstKey, propertyIdentifier, field);
    } else if ("$distance" in withinBody && "$of" in withinBody && withinBody.$distance != null && withinBody.$of != null) {
      return {
        type: "withinDistanceOf",
        ...propertyIdentifier != null && {
          propertyIdentifier
        },
        field,
        value: {
          center: Array.isArray(withinBody.$of) ? {
            type: "Point",
            coordinates: withinBody.$of
          } : withinBody.$of,
          distance: {
            value: withinBody.$distance[0],
            unit: api.DistanceUnitMapping[withinBody.$distance[1]]
          }
        }
      };
    } else {
      const coordinates = "$polygon" in withinBody ? withinBody.$polygon : withinBody.coordinates;
      return makeGeoFilterPolygon(coordinates, "withinPolygon", propertyIdentifier, fieldName);
    }
  }
  if (firstKey === "$intersects") {
    const intersectsBody = filter[firstKey];
    if (Array.isArray(intersectsBody)) {
      return makeGeoFilterBbox(intersectsBody, firstKey, propertyIdentifier, field);
    } else if ("$bbox" in intersectsBody && intersectsBody.$bbox != null) {
      return makeGeoFilterBbox(intersectsBody.$bbox, firstKey, propertyIdentifier, field);
    } else {
      const coordinates = "$polygon" in intersectsBody ? intersectsBody.$polygon : intersectsBody.coordinates;
      return makeGeoFilterPolygon(coordinates, "intersectsPolygon", propertyIdentifier, field);
    }
  }
  if (firstKey === "$containsAllTerms" || firstKey === "$containsAnyTerm") {
    return {
      type: firstKey.substring(1),
      ...propertyIdentifier != null && {
        propertyIdentifier
      },
      field,
      value: typeof filter[firstKey] === "string" ? filter[firstKey] : filter[firstKey]["term"],
      fuzzy: typeof filter[firstKey] === "string" ? false : filter[firstKey]["fuzzySearch"] ?? false
    };
  }
  return {
    type: firstKey.substring(1),
    ...propertyIdentifier != null && {
      propertyIdentifier
    },
    field,
    value: filter[firstKey]
  };
}
function fullyQualifyPropName(fieldName, objectOrInterface) {
  if (objectOrInterface.type === "interface") {
    const [objApiNamespace] = extractNamespace(objectOrInterface.apiName);
    const [fieldApiNamespace, fieldShortName] = extractNamespace(fieldName);
    return fieldApiNamespace == null && objApiNamespace != null ? `${objApiNamespace}.${fieldShortName}` : fieldName;
  }
  return fieldName;
}

// src/derivedProperties/createWithPropertiesObjectSet.ts
function createWithPropertiesObjectSet(objectType, objectSet, definitionMap) {
  const base = {
    pivotTo: (link) => {
      return createWithPropertiesObjectSet(objectType, {
        type: "searchAround",
        objectSet,
        link
      }, definitionMap);
    },
    where: (clause) => {
      return createWithPropertiesObjectSet(objectType, {
        type: "filter",
        objectSet,
        where: modernToLegacyWhereClause(clause, objectType)
      }, definitionMap);
    },
    aggregate: (aggregation, opt) => {
      const splitAggregation = aggregation.split(":");
      !(splitAggregation.length === 2 || splitAggregation[0] === "$count") ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "Invalid aggregation format") : invariant5__default.default(false) : undefined;
      const [aggregationPropertyName, aggregationOperation] = splitAggregation;
      let aggregationOperationDefinition;
      switch (aggregationOperation) {
        case "sum":
        case "avg":
        case "min":
        case "max":
        case "exactDistinct":
        case "approximateDistinct":
          aggregationOperationDefinition = {
            type: aggregationOperation,
            selectedPropertyApiName: aggregationPropertyName
          };
          break;
        case "approximatePercentile":
          aggregationOperationDefinition = {
            type: "approximatePercentile",
            selectedPropertyApiName: aggregationPropertyName,
            approximatePercentile: opt?.percentile ?? 0.5
          };
          break;
        case "collectSet":
        case "collectList":
          aggregationOperationDefinition = {
            type: aggregationOperation,
            selectedPropertyApiName: aggregationPropertyName,
            limit: opt?.limit ?? 100
          };
          break;
        case undefined:
          if (aggregationPropertyName === "$count") {
            aggregationOperationDefinition = {
              type: "count"
            };
            break;
          }
        default:
          process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "Invalid aggregation operation " + aggregationOperation) : invariant5__default.default(false) ;
      }
      const selectorResult = {
        type: {}
      };
      definitionMap.set(selectorResult, {
        type: "selection",
        objectSet,
        operation: aggregationOperationDefinition
      });
      return selectorResult;
    },
    selectProperty: (name) => {
      const selectorResult = {
        type: {}
      };
      definitionMap.set(selectorResult, {
        type: "selection",
        objectSet,
        operation: {
          type: "get",
          selectedPropertyApiName: name
        }
      });
      return selectorResult;
    }
  };
  return base;
}
function legacyToModernSingleAggregationResult(entry) {
  return entry.metrics.reduce((accumulator, curValue) => {
    const parts = curValue.name.split(".");
    if (parts[0] === "count") {
      return accumulator;
    }
    !(parts.length === 2) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "assumed we were getting a `${key}.${type}`") : invariant5__default.default(false) : undefined;
    const property = parts[0];
    const metricType = parts[1];
    if (!(property in accumulator)) {
      accumulator[property] = {};
    }
    accumulator[property][metricType] = curValue.value;
    return accumulator;
  }, {});
}

// src/internal/conversions/modernToLegacyAggregationClause.ts
var directionFieldMap = (dir) => dir === "asc" ? "ASC" : dir === "desc" ? "DESC" : undefined;
function modernToLegacyAggregationClause(select) {
  return Object.entries(select).flatMap(([propAndMetric, aggregationType]) => {
    if (propAndMetric === "$count") {
      return {
        type: "count",
        name: "count",
        direction: directionFieldMap(aggregationType)
      };
    }
    const colonPos = propAndMetric.lastIndexOf(":");
    const property = propAndMetric.slice(0, colonPos);
    const metric = propAndMetric.slice(colonPos + 1);
    return [{
      type: metric,
      name: `${property}.${metric}`,
      direction: directionFieldMap(aggregationType),
      field: property
    }];
  });
}
function modernToLegacyGroupByClause(groupByClause) {
  if (!groupByClause) return [];
  return Object.entries(groupByClause).flatMap(([field, type]) => {
    if (type === "exact") {
      return [{
        type,
        field
      }];
    } else if ("$exactWithLimit" in type) {
      {
        return [{
          type: "exact",
          field,
          maxGroupCount: type.$exactWithLimit
        }];
      }
    } else if ("$exact" in type) {
      return [{
        type: "exact",
        field,
        maxGroupCount: type.$exact?.$limit ?? undefined,
        defaultValue: type.$exact.$defaultValue ?? undefined
      }];
    } else if ("$fixedWidth" in type) {
      return [{
        type: "fixedWidth",
        field,
        fixedWidth: type.$fixedWidth
      }];
    } else if ("$ranges" in type) {
      return [{
        type: "ranges",
        field,
        ranges: type.$ranges.map((range) => convertRange(range))
      }];
    } else if ("$duration" in type) {
      return [{
        type: "duration",
        field,
        value: type.$duration[0],
        unit: api.DurationMapping[type.$duration[1]]
      }];
    } else return [];
  });
}
function convertRange(range) {
  return {
    startValue: range[0],
    endValue: range[1]
  };
}

// src/object/aggregate.ts
async function aggregate(clientCtx, objectType, objectSet = chunkEY52J5Z4_cjs.resolveBaseObjectSetType(objectType), req) {
  chunkEY52J5Z4_cjs.resolveBaseObjectSetType(objectType);
  const body = {
    aggregation: modernToLegacyAggregationClause(req.$select),
    groupBy: [],
    where: undefined
  };
  if (req.$groupBy) {
    body.groupBy = modernToLegacyGroupByClause(req.$groupBy);
  }
  const result = await chunkEY52J5Z4_cjs.OntologyObjectSet_exports.aggregate(chunkEY52J5Z4_cjs.addUserAgentAndRequestContextHeaders(clientCtx, objectType), await clientCtx.ontologyRid, {
    objectSet,
    groupBy: body.groupBy,
    aggregation: body.aggregation
  });
  if (!req.$groupBy) {
    !(result.data.length === 1) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "no group by clause should mean only one data result") : invariant5__default.default(false) : undefined;
    return {
      ...aggregationToCountResult(result.data[0]),
      ...legacyToModernSingleAggregationResult(result.data[0])
    };
  }
  const ret = result.data.map((entry) => {
    return {
      $group: entry.group,
      ...aggregationToCountResult(entry),
      ...legacyToModernSingleAggregationResult(entry)
    };
  });
  return ret;
}
function aggregationToCountResult(entry) {
  for (const aggregateResult of entry.metrics) {
    if (aggregateResult.name === "count") {
      return {
        $count: aggregateResult.value
      };
    }
  }
}

// src/util/augmentRequestContext.ts
var augmentRequestContext = (client, augment) => ({
  ...client,
  requestContext: {
    ...client.requestContext,
    ...augment(client.requestContext)
  }
});

// src/util/WireObjectSet.ts
var WIRE_OBJECT_SET_TYPES = /* @__PURE__ */ new Set(["base", "filter", "intersect", "reference", "searchAround", "static", "subtract", "union"]);
function isWireObjectSet(o) {
  return o != null && typeof o === "object" && WIRE_OBJECT_SET_TYPES.has(o.type);
}
var MINIMUM_RECONNECT_DELAY_MS = 5 * 1e3;
function doNothing() {
}
function fillOutListener({
  onChange = doNothing,
  onError = doNothing,
  onOutOfDate = doNothing,
  onSuccessfulSubscription = doNothing
}) {
  return {
    onChange,
    onError,
    onOutOfDate,
    onSuccessfulSubscription
  };
}
function isReady(sub) {
  return sub.isReady != null;
}
function subscriptionIsDone(sub) {
  return sub.status === "done" || sub.status === "error";
}
var ObjectSetListenerWebsocket = class _ObjectSetListenerWebsocket {
  static #instances = /* @__PURE__ */ new WeakMap();
  // FIXME
  static getInstance(client) {
    let instance = _ObjectSetListenerWebsocket.#instances.get(client.clientCacheKey);
    if (instance == null) {
      instance = new _ObjectSetListenerWebsocket(client);
      _ObjectSetListenerWebsocket.#instances.set(client.clientCacheKey, instance);
    }
    return instance;
  }
  #ws;
  #lastWsConnect = 0;
  #client;
  #logger;
  /**
   * map of requestId to all active subscriptions at the time of the request
   */
  #pendingSubscriptions = /* @__PURE__ */ new Map();
  /**
   * Map of subscriptionId to Subscription. Note: the subscriptionId may be
   * temporary and not the actual subscriptionId from the server.
   */
  #subscriptions = /* @__PURE__ */ new Map();
  #endedSubscriptions = /* @__PURE__ */ new Set();
  #maybeDisconnectTimeout;
  // DO NOT CONSTRUCT DIRECTLY. ONLY EXPOSED AS A TESTING SEAM
  constructor(client, {
    minimumReconnectDelayMs = MINIMUM_RECONNECT_DELAY_MS
  } = {}) {
    this.MINIMUM_RECONNECT_DELAY_MS = minimumReconnectDelayMs;
    this.#client = client;
    this.#logger = client.logger?.child({}, {
      msgPrefix: "<OSW> "
    });
    !(client.baseUrl.startsWith("https://") || client.baseUrl.startsWith("http://")) ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "Stack must be a URL") : invariant5__default.default(false) : undefined;
  }
  async subscribe(objectType, objectSet, listener, properties = []) {
    const objOrInterfaceDef = objectType.type === "object" ? await this.#client.ontologyProvider.getObjectDefinition(objectType.apiName) : await this.#client.ontologyProvider.getInterfaceDefinition(objectType.apiName);
    let objectProperties = [];
    let referenceProperties = [];
    if (properties.length === 0) {
      properties = Object.keys(objOrInterfaceDef.properties);
    }
    objectProperties = properties.filter((p) => objOrInterfaceDef.properties[p].type !== "geotimeSeriesReference");
    referenceProperties = properties.filter((p) => objOrInterfaceDef.properties[p].type === "geotimeSeriesReference");
    const sub = {
      listener: fillOutListener(listener),
      objectSet,
      primaryKeyPropertyName: objOrInterfaceDef.type === "interface" ? undefined : objOrInterfaceDef.primaryKeyApiName,
      requestedProperties: objectProperties,
      requestedReferenceProperties: referenceProperties,
      status: "preparing",
      // Since we don't have a real subscription id yet but we need to keep
      // track of this reference, we can just use a random uuid.
      subscriptionId: `TMP-${nextUuid()}}`,
      interfaceApiName: objOrInterfaceDef.type === "object" ? undefined : objOrInterfaceDef.apiName
    };
    this.#subscriptions.set(sub.subscriptionId, sub);
    void this.#initiateSubscribe(sub);
    return () => {
      this.#unsubscribe(sub);
    };
  }
  /**
   * Called at least once for every subscription.
   *
   * - Resets pending expiry
   * - Recreates temporary object set
   * - Triggers a full subscribe message
   *
   * @returns
   */
  async #initiateSubscribe(sub) {
    if (process.env.NODE_ENV !== "production") {
      this.#logger?.debug("#initiateSubscribe()");
    }
    try {
      await this.#ensureWebsocket();
      if (subscriptionIsDone(sub)) {
        return;
      }
      sub.isReady = true;
      if (this.#ws?.readyState === WebSocket__default.default.OPEN) {
        this.#sendSubscribeMessage();
      }
    } catch (error) {
      this.#logger?.error(error, "Error in #initiateSubscribe");
      this.#tryCatchOnError(sub, true, error);
    }
  }
  #sendSubscribeMessage() {
    if (process.env.NODE_ENV !== "production") {
      this.#logger?.debug("#sendSubscribeMessage()");
    }
    const readySubs = [...this.#subscriptions.values()].filter(isReady);
    const id = nextUuid();
    this.#pendingSubscriptions.set(id, readySubs);
    const subscribe = {
      id,
      requests: readySubs.map(({
        objectSet,
        requestedProperties,
        requestedReferenceProperties,
        interfaceApiName
      }) => {
        return {
          objectSet,
          propertySet: requestedProperties,
          referenceSet: requestedReferenceProperties
        };
      })
    };
    if (process.env.NODE_ENV !== "production") {
      this.#logger?.debug({
        payload: subscribe
      }, "sending subscribe message");
    }
    this.#ws?.send(JSON.stringify(subscribe));
  }
  #unsubscribe(sub, newStatus = "done") {
    if (subscriptionIsDone(sub)) {
      return;
    }
    sub.status = newStatus;
    sub.listener = fillOutListener({});
    this.#subscriptions.delete(sub.subscriptionId);
    this.#endedSubscriptions.add(sub.subscriptionId);
    this.#sendSubscribeMessage();
    if (this.#maybeDisconnectTimeout) {
      clearTimeout(this.#maybeDisconnectTimeout);
    }
    this.#maybeDisconnectTimeout = setTimeout(
      () => {
        this.#maybeDisconnectTimeout = undefined;
        if (this.#subscriptions.size === 0) {
          this.#cycleWebsocket();
        }
      },
      15e3
      /* ms */
    );
  }
  async #ensureWebsocket() {
    if (this.#ws == null) {
      const {
        baseUrl,
        tokenProvider
      } = this.#client;
      const url = constructWebsocketUrl(baseUrl, await this.#client.ontologyRid);
      const token = await tokenProvider();
      if (this.#ws == null) {
        const nextConnectTime = (this.#lastWsConnect ?? 0) + this.MINIMUM_RECONNECT_DELAY_MS;
        if (nextConnectTime > Date.now()) {
          await new Promise((resolve) => {
            setTimeout(resolve, nextConnectTime - Date.now());
          });
        }
        this.#lastWsConnect = Date.now();
        if (this.#ws == null) {
          if (process.env.NODE_ENV !== "production") {
            this.#logger?.debug("Creating websocket");
          }
          this.#ws = new WebSocket__default.default(url, [`Bearer-${token}`]);
          this.#ws.addEventListener("close", this.#onClose);
          this.#ws.addEventListener("message", this.#onMessage);
          this.#ws.addEventListener("open", this.#onOpen);
        }
      }
      if (this.#ws.readyState === WebSocket__default.default.CONNECTING) {
        const ws = this.#ws;
        return new Promise((resolve, reject) => {
          function cleanup() {
            ws.removeEventListener("open", open);
            ws.removeEventListener("error", error);
            ws.removeEventListener("close", cleanup);
          }
          function open() {
            cleanup();
            resolve();
          }
          function error(evt) {
            cleanup();
            reject(evt);
          }
          ws.addEventListener("open", open);
          ws.addEventListener("error", error);
          ws.addEventListener("close", cleanup);
        });
      }
    }
  }
  #onOpen = () => {
    this.#sendSubscribeMessage();
  };
  #onMessage = async (message) => {
    const data = JSON.parse(message.data.toString());
    if (process.env.NODE_ENV !== "production") {
      this.#logger?.debug({
        payload: data
      }, "received message from ws");
    }
    switch (data.type) {
      case "objectSetChanged":
        await this.#handleMessage_objectSetChanged(data);
        return;
      case "refreshObjectSet":
        this.#handleMessage_refreshObjectSet(data);
        return;
      case "subscribeResponses":
        this.#handleMessage_subscribeResponses(data);
        return;
      case "subscriptionClosed": {
        this.#handleMessage_subscriptionClosed(data);
        return;
      }
      default:
        process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "Unexpected message type") : invariant5__default.default(false) ;
    }
  };
  #handleMessage_objectSetChanged = async (payload) => {
    const sub = this.#subscriptions.get(payload.id);
    if (sub == null) return;
    const objectUpdates = payload.updates.filter((update) => update.type === "object");
    const referenceUpdates = payload.updates.filter((update) => update.type === "reference");
    const osdkObjectsWithReferenceUpdates = await Promise.all(referenceUpdates.map(async (o) => {
      const osdkObjectArray = await this.#client.objectFactory2(this.#client, [{
        __apiName: o.objectType,
        __primaryKey: sub.primaryKeyPropertyName != null ? o.primaryKey[sub.primaryKeyPropertyName] : undefined,
        ...o.primaryKey,
        [o.property]: o.value
      }], sub.interfaceApiName, false, undefined, false, await this.#fetchInterfaceMapping(o.objectType, sub.interfaceApiName));
      const singleOsdkObject = osdkObjectArray[0] ?? undefined;
      return singleOsdkObject != null ? {
        object: singleOsdkObject,
        state: "ADDED_OR_UPDATED"
      } : undefined;
    }));
    for (const update of osdkObjectsWithReferenceUpdates) {
      if (update != null) {
        try {
          sub.listener.onChange?.(update);
        } catch (error) {
          this.#logger?.error(error, "Error in onChange callback");
          this.#tryCatchOnError(sub, false, error);
        }
      }
    }
    const osdkObjects = await Promise.all(objectUpdates.map(async (o) => {
      const keysToDelete = Object.keys(o.object).filter((key) => sub.requestedReferenceProperties.includes(key));
      for (const key of keysToDelete) {
        delete o.object[key];
      }
      const osdkObjectArray = await this.#client.objectFactory2(this.#client, [o.object], sub.interfaceApiName, false, undefined, false, await this.#fetchInterfaceMapping(o.object.__apiName, sub.interfaceApiName));
      const singleOsdkObject = osdkObjectArray[0] ?? undefined;
      return singleOsdkObject != null ? {
        object: singleOsdkObject,
        state: o.state
      } : undefined;
    }));
    for (const osdkObject of osdkObjects) {
      if (osdkObject != null) {
        try {
          sub.listener.onChange?.(osdkObject);
        } catch (error) {
          this.#logger?.error(error, "Error in onChange callback");
          this.#tryCatchOnError(sub, false, error);
        }
      }
    }
  };
  async #fetchInterfaceMapping(objectTypeApiName, interfaceApiName) {
    if (interfaceApiName == null) return {};
    const interfaceMap = (await this.#client.ontologyProvider.getObjectDefinition(objectTypeApiName)).interfaceMap;
    return {
      [interfaceApiName]: {
        [objectTypeApiName]: interfaceMap[interfaceApiName]
      }
    };
  }
  #handleMessage_refreshObjectSet = (payload) => {
    const sub = this.#subscriptions.get(payload.id);
    !sub ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, `Expected subscription id ${payload.id}`) : invariant5__default.default(false) : undefined;
    try {
      sub.listener.onOutOfDate();
    } catch (error) {
      this.#logger?.error(error, "Error in onOutOfDate callback");
      this.#tryCatchOnError(sub, false, error);
    }
  };
  #handleMessage_subscribeResponses = (payload) => {
    const {
      id,
      responses
    } = payload;
    const subs = this.#pendingSubscriptions.get(id);
    !subs ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, `should have a pending subscription for ${id}`) : invariant5__default.default(false) : undefined;
    this.#pendingSubscriptions.delete(id);
    for (let i = 0; i < responses.length; i++) {
      const sub = subs[i];
      const response = responses[i];
      switch (response.type) {
        case "error":
          this.#tryCatchOnError(sub, true, response.errors);
          this.#unsubscribe(sub, "error");
          break;
        case "qos":
          this.#cycleWebsocket();
          break;
        case "success":
          const shouldFireOutOfDate = sub.status === "expired" || sub.status === "reconnecting";
          if (process.env.NODE_ENV !== "production") {
            this.#logger?.debug({
              shouldFireOutOfDate
            }, "success");
          }
          sub.status = "subscribed";
          if (sub.subscriptionId !== response.id) {
            this.#subscriptions.delete(sub.subscriptionId);
            sub.subscriptionId = response.id;
            this.#subscriptions.set(sub.subscriptionId, sub);
          }
          try {
            if (shouldFireOutOfDate) sub.listener.onOutOfDate();
            else sub.listener.onSuccessfulSubscription();
          } catch (error) {
            this.#logger?.error(error, "Error in onOutOfDate or onSuccessfulSubscription callback");
            this.#tryCatchOnError(sub, false, error);
          }
          break;
        default:
          this.#tryCatchOnError(sub, true, response);
      }
    }
  };
  #handleMessage_subscriptionClosed(payload) {
    const sub = this.#subscriptions.get(payload.id);
    if (sub == null && this.#endedSubscriptions.has(payload.id)) return;
    !sub ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, `Expected subscription id ${payload.id}`) : invariant5__default.default(false) : undefined;
    this.#tryCatchOnError(sub, true, payload.cause);
    this.#unsubscribe(sub, "error");
  }
  #onClose = (event) => {
    if (process.env.NODE_ENV !== "production") {
      this.#logger?.debug({
        event
      }, "Received close event from ws", event);
    }
    this.#cycleWebsocket();
  };
  #cycleWebsocket = () => {
    if (this.#ws) {
      this.#ws.removeEventListener("open", this.#onOpen);
      this.#ws.removeEventListener("message", this.#onMessage);
      this.#ws.removeEventListener("close", this.#onClose);
      if (this.#ws.readyState !== WebSocket__default.default.CLOSING && this.#ws.readyState !== WebSocket__default.default.CLOSED) {
        this.#ws.close();
      }
      this.#ws = undefined;
    }
    if (this.#subscriptions.size > 0) {
      if (process.env.NODE_ENV !== "production") {
        for (const s of this.#subscriptions.values()) {
          !(s.status !== "done" && s.status !== "error") ? process.env.NODE_ENV !== "production" ? invariant5__default.default(false, "should not have done/error subscriptions still") : invariant5__default.default(false) : undefined;
        }
      }
      for (const s of this.#subscriptions.values()) {
        if (s.status === "subscribed") s.status = "reconnecting";
      }
      void this.#ensureWebsocket();
    }
  };
  #tryCatchOnError = (sub, subscriptionClosed, error) => {
    try {
      sub.listener.onError({
        subscriptionClosed,
        error
      });
    } catch (onErrorError) {
      console.error(`Error encountered in an onError callback for an OSDK subscription`, onErrorError);
      console.error(`This onError call was triggered by an error in another callback`, error);
      console.error(`The subscription has been closed.`, error);
      if (!subscriptionClosed) {
        this.#logger?.error(error, "Error in onError callback");
        this.#unsubscribe(sub, "error");
        this.#tryCatchOnError(sub, true, onErrorError);
      }
    }
  };
};
function constructWebsocketUrl(baseUrl, ontologyRid) {
  const base = new URL(baseUrl);
  const url = new URL(`api/v2/ontologySubscriptions/ontologies/${ontologyRid}/streamSubscriptions`, base);
  url.protocol = url.protocol.replace("https", "wss");
  return url;
}
var uuidCounter = 0;
function nextUuid() {
  return `00000000-0000-0000-0000-${(uuidCounter++).toString().padStart(12, "0")}`;
}

// src/objectSet/createObjectSet.ts
function isObjectTypeDefinition(def) {
  return def.type === "object";
}
function isObjectSet(o) {
  return o != null && typeof o === "object" && isWireObjectSet(objectSetDefinitions.get(o));
}
function getWireObjectSet(objectSet) {
  return objectSetDefinitions.get(objectSet);
}
var objectSetDefinitions = /* @__PURE__ */ new WeakMap();
function createObjectSet(objectType, clientCtx, objectSet = chunkEY52J5Z4_cjs.resolveBaseObjectSetType(objectType)) {
  const base = {
    aggregate: aggregate.bind(globalThis, augmentRequestContext(clientCtx, (_) => ({
      finalMethodCall: "aggregate"
    })), objectType, objectSet),
    fetchPage: chunkEY52J5Z4_cjs.fetchPageInternal.bind(globalThis, augmentRequestContext(clientCtx, (_) => ({
      finalMethodCall: "fetchPage"
    })), objectType, objectSet),
    fetchPageWithErrors: chunkEY52J5Z4_cjs.fetchPageWithErrorsInternal.bind(globalThis, augmentRequestContext(clientCtx, (_) => ({
      finalMethodCall: "fetchPageWithErrors"
    })), objectType, objectSet),
    where: (clause) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "filter",
        objectSet,
        where: modernToLegacyWhereClause(clause, objectType)
      });
    },
    pivotTo: function(type) {
      return createSearchAround(type)();
    },
    union: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "union",
        objectSets: [objectSet, ...objectSets.map((os) => objectSetDefinitions.get(os))]
      });
    },
    intersect: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "intersect",
        objectSets: [objectSet, ...objectSets.map((os) => objectSetDefinitions.get(os))]
      });
    },
    subtract: (...objectSets) => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "subtract",
        objectSets: [objectSet, ...objectSets.map((os) => objectSetDefinitions.get(os))]
      });
    },
    asyncIter: async function* (args) {
      let $nextPageToken = undefined;
      do {
        const result = await chunkEY52J5Z4_cjs.fetchPageInternal(augmentRequestContext(clientCtx, (_) => ({
          finalMethodCall: "asyncIter"
        })), objectType, objectSet, {
          ...args,
          $nextPageToken
        });
        $nextPageToken = result.nextPageToken;
        for (const obj of result.data) {
          yield obj;
        }
      } while ($nextPageToken != null);
    },
    fetchOne: isObjectTypeDefinition(objectType) ? async (primaryKey, options) => {
      return await fetchSingle(augmentRequestContext(clientCtx, (_) => ({
        finalMethodCall: "fetchOne"
      })), objectType, options, await createWithPk(clientCtx, objectType, objectSet, primaryKey));
    } : undefined,
    fetchOneWithErrors: isObjectTypeDefinition(objectType) ? async (primaryKey, options) => {
      return await fetchSingleWithErrors(augmentRequestContext(clientCtx, (_) => ({
        finalMethodCall: "fetchOneWithErrors"
      })), objectType, options, await createWithPk(clientCtx, objectType, objectSet, primaryKey));
    } : undefined,
    subscribe: (listener, opts) => {
      const pendingSubscribe = ObjectSetListenerWebsocket.getInstance(clientCtx).subscribe(objectType, objectSet, listener, opts?.properties);
      return {
        unsubscribe: async () => (await pendingSubscribe)()
      };
    },
    withProperties: (clause) => {
      const definitionMap = /* @__PURE__ */ new Map();
      const derivedProperties = {};
      for (const key of Object.keys(clause)) {
        const derivedPropertyDefinition = clause[key](createWithPropertiesObjectSet(objectType, {
          type: "methodInput"
        }, definitionMap));
        derivedProperties[key] = definitionMap.get(derivedPropertyDefinition);
      }
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "withProperties",
        derivedProperties,
        objectSet
      });
    },
    $objectSetInternals: {
      def: objectType
    }
  };
  function createSearchAround(link) {
    return () => {
      return clientCtx.objectSetFactory(objectType, clientCtx, {
        type: "searchAround",
        objectSet,
        link
      });
    };
  }
  objectSetDefinitions.set(base, objectSet);
  return base;
}
async function createWithPk(clientCtx, objectType, objectSet, primaryKey) {
  const objDef = await clientCtx.ontologyProvider.getObjectDefinition(objectType.apiName);
  const withPk = {
    type: "filter",
    objectSet,
    where: {
      type: "eq",
      field: objDef.primaryKeyApiName,
      value: primaryKey
    }
  };
  return withPk;
}

exports.augmentRequestContext = augmentRequestContext;
exports.createObjectSet = createObjectSet;
exports.extractNamespace = extractNamespace;
exports.fetchSingle = fetchSingle;
exports.fetchSingleWithErrors = fetchSingleWithErrors;
exports.getWireObjectSet = getWireObjectSet;
exports.hydrateAttachmentFromRid = hydrateAttachmentFromRid;
exports.hydrateAttachmentFromRidInternal = hydrateAttachmentFromRidInternal;
exports.isObjectSet = isObjectSet;
exports.isWireObjectSet = isWireObjectSet;
//# sourceMappingURL=chunk-MCQVHD2F.cjs.map
//# sourceMappingURL=chunk-MCQVHD2F.cjs.map