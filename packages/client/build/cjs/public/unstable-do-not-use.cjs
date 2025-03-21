'use strict';

var chunkT4NIFYZS_cjs = require('../chunk-T4NIFYZS.cjs');
var chunkEY52J5Z4_cjs = require('../chunk-EY52J5Z4.cjs');
require('../chunk-Q7SFCCGT.cjs');
var rxjs = require('rxjs');
var invariant2 = require('tiny-invariant');
var mnemonist = require('mnemonist');
var trie = require('@wry/trie');
var deepEqual = require('fast-deep-equal');
var groupBy = require('object.groupby');
var shared_net_errors = require('@osdk/shared.net.errors');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var invariant2__default = /*#__PURE__*/_interopDefault(invariant2);
var deepEqual__default = /*#__PURE__*/_interopDefault(deepEqual);
var groupBy__default = /*#__PURE__*/_interopDefault(groupBy);

// src/observable/internal/ObservableClientImpl.ts
var ObservableClientImpl = class {
  #store;
  constructor(store) {
    this.#store = store;
    this.observeObject = store.observeObject.bind(store);
    this.observeList = store.observeList.bind(store);
    this.applyAction = store.applyAction.bind(store);
    this.canonicalizeWhereClause = store.canonicalizeWhereClause.bind(store);
  }
};

// src/observable/DebugFlags.ts
process.env.NODE_ENV !== "production" && false;
var DEBUG_CACHE_KEYS = process.env.NODE_ENV !== "production" && false;

// ../../node_modules/.pnpm/is-node-process@1.2.0/node_modules/is-node-process/lib/index.mjs
function isNodeProcess() {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return true;
  }
  if (typeof process !== "undefined") {
    const type = process.type;
    if (type === "renderer" || type === "worker") {
      return false;
    }
    return !!(process.versions && process.versions.node);
  }
  return false;
}

// ../../node_modules/.pnpm/msw@2.7.3_@types+node@22.13.0_typescript@5.5.4/node_modules/msw/lib/core/delay.mjs
var SET_TIMEOUT_MAX_ALLOWED_INT = 2147483647;
var MIN_SERVER_RESPONSE_TIME = 100;
var MAX_SERVER_RESPONSE_TIME = 400;
var NODE_SERVER_RESPONSE_TIME = 5;
function getRealisticResponseTime() {
  if (isNodeProcess()) {
    return NODE_SERVER_RESPONSE_TIME;
  }
  return Math.floor(Math.random() * (MAX_SERVER_RESPONSE_TIME - MIN_SERVER_RESPONSE_TIME) + MIN_SERVER_RESPONSE_TIME);
}
async function delay(durationOrMode) {
  let delayTime;
  if (typeof durationOrMode === "string") {
    switch (durationOrMode) {
      case "infinite": {
        delayTime = SET_TIMEOUT_MAX_ALLOWED_INT;
        break;
      }
      case "real": {
        delayTime = getRealisticResponseTime();
        break;
      }
      default: {
        throw new Error(`Failed to delay a response: unknown delay mode "${durationOrMode}". Please make sure you provide one of the supported modes ("real", "infinite") or a number.`);
      }
    }
  } else if (typeof durationOrMode === "undefined") {
    delayTime = getRealisticResponseTime();
  } else {
    if (durationOrMode > SET_TIMEOUT_MAX_ALLOWED_INT) {
      throw new Error(`Failed to delay a response: provided delay duration (${durationOrMode}) exceeds the maximum allowed duration for "setTimeout" (${SET_TIMEOUT_MAX_ALLOWED_INT}). This will cause the response to be returned immediately. Please use a number within the allowed range to delay the response by exact duration, or consider the "infinite" delay mode to delay the response indefinitely.`);
    }
    delayTime = durationOrMode;
  }
  return new Promise((resolve) => setTimeout(resolve, delayTime));
}

// src/observable/internal/CacheKey.ts
function DEBUG_ONLY__cacheKeyToString(x) {
  if (process.env.NODE_ENV !== "production") {
    return `${x.type}CacheKey<${x.otherKeys.map((xx) => JSON.stringify(xx)).join(", ")}>`.replaceAll('"', "'");
  } else {
    throw new Error("not implemented");
  }
}
function DEBUG_ONLY__cacheKeysToString(x) {
  if (process.env.NODE_ENV !== "production") {
    return "\n  - " + x.map(DEBUG_ONLY__cacheKeyToString).join("\n  - ");
  } else {
    throw new Error("not implemented");
  }
}

// src/observable/internal/Changes.ts
var Changes = class {
  modifiedObjects = new mnemonist.MultiMap();
  addedObjects = new mnemonist.MultiMap();
  added = /* @__PURE__ */ new Set();
  modified = /* @__PURE__ */ new Set();
  registerObject = (cacheKey, data, isNew) => {
    this[isNew ? "addedObjects" : "modifiedObjects"].set(data.$apiName, data);
    this[isNew ? "added" : "modified"].add(cacheKey);
  };
  registerList = (key) => {
    this.modified.add(key);
  };
  isEmpty() {
    return this.modifiedObjects.size === 0 && this.addedObjects.size === 0 && this.added.size === 0 && this.modified.size === 0;
  }
};
function createChangedObjects() {
  return new Changes();
}
function DEBUG_ONLY__changesToString(changes) {
  if (process.env.NODE_ENV !== "production") {
    return JSON.stringify({
      modifiedObjects: multimapHelper(changes.modifiedObjects),
      addedObjects: multimapHelper(changes.addedObjects),
      added: listHelper(changes.added),
      modified: listHelper(changes.modified)
    }, null, 2);
  } else {
    throw new Error("not implemented");
  }
}
function listHelper(set) {
  return Array.from(set).map(DEBUG_ONLY__cacheKeyToString);
}
function multimapHelper(multimap) {
  return Object.fromEntries(Array.from(multimap.associations()).map(([type, objects]) => {
    return [type, objects.map((o) => o.$primaryKey)];
  }));
}

// src/observable/internal/OptimisticId.ts
function createOptimisticId() {
  if (process.env.NODE_ENV !== "production") {
    if (createOptimisticId.counter === undefined) {
      createOptimisticId.counter = 0;
    }
    return {
      __optimisticId: createOptimisticId.counter++
    };
  }
  return /* @__PURE__ */ Object.create(null);
}

// src/observable/internal/OptimisticJob.ts
var OptimisticJob = class {
  #result;
  constructor(store, optimisticId) {
    const updatedObjects = [];
    const addedObjectPromises = [];
    this.getResult = () => {
      return this.#result ??= (async () => {
        const addedObjects = await Promise.allSettled(addedObjectPromises);
        const {
          batchResult
        } = store.batch({
          optimisticId
        }, (batch) => {
          for (const obj of addedObjects) {
            if (obj.status === "fulfilled") {
              store.getObjectQuery(obj.value.$objectType, obj.value.$primaryKey).writeToStore(obj.value, "loading", batch);
            } else {
              throw obj;
            }
          }
          for (const obj of updatedObjects) {
            store.getObjectQuery(obj.$objectType, obj.$primaryKey).writeToStore(obj, "loading", batch);
          }
        });
        return batchResult.changes;
      })();
    };
    this.context = {
      updateObject(value) {
        updatedObjects.push(value);
        return this;
      },
      createObject(type, pk, properties) {
        const create = store.client[chunkEY52J5Z4_cjs.additionalContext].objectFactory2(store.client[chunkEY52J5Z4_cjs.additionalContext], [{
          $primaryKey: pk,
          $apiName: type.apiName,
          $objectType: type.apiName,
          ...properties
        }], undefined).then((objs) => {
          return objs[0];
        });
        addedObjectPromises.push(create);
        return this;
      }
    };
  }
};
function runOptimisticJob(store, optimisticUpdate) {
  if (!optimisticUpdate) {
    return () => Promise.resolve();
  }
  const optimisticId = createOptimisticId();
  const job = new OptimisticJob(store, optimisticId);
  optimisticUpdate(job.context);
  const optimisticApplicationDone = job.getResult();
  return () => {
    return optimisticApplicationDone.then(
      // we don't want to leak the result
      () => undefined
    ).finally(() => {
      store.removeLayer(optimisticId);
    });
  };
}

// src/observable/internal/ActionApplication.ts
var ACTION_DELAY = process.env.NODE_ENV === "production" ? 0 : 1e3;
var ActionApplication = class {
  constructor(store) {
    this.store = store;
  }
  applyAction = (action, args, {
    optimisticUpdate
  } = {}) => {
    const logger = process.env.NODE_ENV !== "production" ? this.store.logger?.child({
      methodName: "applyAction"
    }) : this.store.logger;
    const removeOptimisticResult = runOptimisticJob(this.store, optimisticUpdate);
    return (async () => {
      try {
        const actionResults = await this.store.client(action).applyAction(args, {
          $returnEdits: true
        });
        if (process.env.NODE_ENV !== "production") {
          if (ACTION_DELAY > 0) {
            logger?.debug("action done, pausing");
            await delay(ACTION_DELAY);
            logger?.debug("action done, pausing done");
          }
        }
        await this.#invalidateActionEditResponse(actionResults);
        return actionResults;
      } finally {
        if (process.env.NODE_ENV !== "production") {
          logger?.debug("optimistic action complete; remove the results");
        }
        await removeOptimisticResult();
      }
    })();
  };
  #invalidateActionEditResponse = async (value) => {
    const typesToInvalidate = /* @__PURE__ */ new Set();
    let changes;
    if (value.type === "edits") {
      const promisesToWait = [];
      for (const obj of value.modifiedObjects) {
        promisesToWait.push(this.store.invalidateObject(obj.objectType, obj.primaryKey));
      }
      for (const obj of value.addedObjects) {
        promisesToWait.push(this.store.invalidateObject(obj.objectType, obj.primaryKey));
        typesToInvalidate.add(obj.objectType);
      }
      await Promise.all(promisesToWait);
      const changes2 = createChangedObjects();
      for (const changeType of ["addedObjects", "modifiedObjects"]) {
        for (const {
          objectType,
          primaryKey
        } of value[changeType] ?? []) {
          const cacheKey = this.store.getCacheKey("object", objectType, primaryKey);
          const obj = this.store.getValue(cacheKey);
          if (obj && obj.value) {
            changes2[changeType].set(objectType, obj.value);
            (changeType === "addedObjects" ? changes2.added : changes2.modified).add(cacheKey);
          }
        }
      }
    } else {
      for (const apiName of value.editedObjectTypes) {
        typesToInvalidate.add(apiName.toString());
        await this.store.invalidateObjectType(apiName, changes);
      }
    }
    return value;
  };
};
var CacheKeys = class {
  #cacheKeys = new trie.Trie(false, (keys) => {
    const ret = {
      type: keys[0],
      otherKeys: keys.slice(1)
    };
    this.#onCreate(ret);
    return ret;
  });
  #cacheKeyFactories = /* @__PURE__ */ new Map();
  #onCreate;
  constructor(whereCanonicalizer, orderByCanonicalizer, onCreate) {
    this.#onCreate = onCreate;
    this.#registerCacheKeyFactory("object", (apiName, pk) => {
      if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) ;
      return this.#cacheKeys.lookupArray(["object", apiName, pk]);
    });
    this.#registerCacheKeyFactory("list", (type, apiName, where, orderBy) => {
      if (process.env.NODE_ENV !== "production" && DEBUG_CACHE_KEYS) ;
      return this.#cacheKeys.lookupArray(["list", type, apiName, whereCanonicalizer.canonicalize(where), orderByCanonicalizer.canonicalize(orderBy)]);
    });
  }
  #registerCacheKeyFactory(type, factory) {
    this.#cacheKeyFactories.set(type, factory);
  }
  get(type, ...args) {
    const factory = this.#cacheKeyFactories.get(type);
    !factory ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `no cache key factory for type "${type}"`) : invariant2__default.default(false) : undefined;
    return factory(...args);
  }
  remove(cacheKey) {
    this.#cacheKeys.remove(cacheKey.type, ...cacheKey.otherKeys);
  }
};

// src/observable/internal/WeakMapWithEntries.ts
var WeakMapWithEntries = class {
  #map = /* @__PURE__ */ new WeakMap();
  #list = [];
  #toClean = [];
  #needsCleaning = false;
  #registry = new FinalizationRegistry(() => {
    this.#toClean.push(new WeakRef({}));
    this.#needsCleaning = true;
  });
  constructor() {
    const weakThis = new WeakRef(this);
    const intervalId = setInterval(() => {
      const self = weakThis.deref();
      if (self) {
        if (this.#needsCleaning) {
          this.#clean();
        }
      } else {
        clearInterval(intervalId);
      }
    }, 1e3);
  }
  #clean() {
    this.#list = this.#list.filter((ref) => ref.deref() !== undefined);
  }
  // functions for WeakMap
  delete(key) {
    const ret = this.#map.delete(key);
    this.#toClean.push(new WeakRef(key));
    this.#needsCleaning = true;
    return ret;
  }
  get(key) {
    return this.#map.get(key);
  }
  has(key) {
    return this.#map.has(key);
  }
  /**
   * Adds a new element with a specified key and value.
   * @param key Must be an object or symbol.
   */
  set(key, value) {
    if (!this.#map.has(key)) {
      this.#list.push(new WeakRef(key));
    }
    this.#map.set(key, value);
    return this;
  }
  [Symbol.toStringTag] = "WeakMap";
  // functions for iterables
  /** Returns an iterable of entries in the map. */
  [Symbol.iterator]() {
    return this.entries();
  }
  /**
   * Returns an iterable of key, value pairs for every entry in the map.
   */
  entries() {
    const self = this;
    function* iter() {
      for (const ref of self.#list) {
        const key = ref.deref();
        if (key !== undefined) {
          yield [key, self.#map.get(key)];
        }
      }
    }
    return iter();
  }
  /**
   * Returns an iterable of keys in the map
   */
  keys() {
    const self = this;
    function* iter() {
      for (const ref of self.#list) {
        const key = ref.deref();
        if (key !== undefined) {
          yield key;
        }
      }
    }
    return iter();
  }
  /**
   * Returns an iterable of values in the map
   */
  values() {
    const self = this;
    function* iter() {
      for (const ref of self.#list) {
        const key = ref.deref();
        if (key !== undefined) {
          const value = self.#map.get(key);
          if (value !== undefined) {
            yield value;
          }
        }
      }
    }
    return iter();
  }
};

// src/observable/internal/Layer.ts
var Layer = class _Layer {
  #parent;
  #cache = new WeakMapWithEntries();
  #layerId;
  constructor(parent, layerId) {
    this.#parent = parent;
    this.#layerId = layerId;
  }
  get parentLayer() {
    return this.#parent;
  }
  get layerId() {
    return this.#layerId;
  }
  addLayer(layerId) {
    return new _Layer(this, layerId);
  }
  removeLayer(layerId) {
    if (layerId == null || this.#parent == null) {
      return this;
    }
    if (this.#layerId !== layerId) {
      this.#parent = this.#parent.removeLayer(layerId);
      return this;
    }
    return this.#parent.removeLayer(layerId);
  }
  entries() {
    return this.#cache.entries();
  }
  keys() {
    return this.#cache.keys();
  }
  get(cacheKey) {
    return this.#cache.get(cacheKey) ?? this.#parent?.get(cacheKey);
  }
  set(cacheKey, value) {
    this.#cache.set(cacheKey, value);
  }
};
var Entry = class {
  constructor(cacheKey, value, lastUpdated, status = "init") {
    this.cacheKey = cacheKey;
    this.value = value;
    this.lastUpdated = lastUpdated;
    this.status = status;
  }
};
function is$and(whereClause) {
  if (process.env.NODE_ENV !== "production") {
    if ("$and" in whereClause) {
      !Array.isArray(whereClause.$and) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected $and to be an array") : invariant2__default.default(false) : undefined;
      !(Object.keys(whereClause).length === 1) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected only $and to be present") : invariant2__default.default(false) : undefined;
    }
  }
  return "$and" in whereClause;
}
function is$or(whereClause) {
  if (process.env.NODE_ENV !== "production") {
    if ("$or" in whereClause) {
      !Array.isArray(whereClause.$or) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected $or to be an array") : invariant2__default.default(false) : undefined;
      !(Object.keys(whereClause).length === 1) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected only $or to be present") : invariant2__default.default(false) : undefined;
    }
  }
  return "$or" in whereClause;
}
function is$not(whereClause) {
  if (process.env.NODE_ENV !== "production") {
    if ("$not" in whereClause) {
      !(Object.keys(whereClause).length === 1) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected only $not to be present") : invariant2__default.default(false) : undefined;
    }
  }
  return "$not" in whereClause;
}
function objectSortaMatchesWhereClause(o, whereClause, strict) {
  if (deepEqual__default.default({}, whereClause)) {
    return true;
  }
  if (is$and(whereClause)) {
    return whereClause.$and.every((w) => objectSortaMatchesWhereClause(o, w, strict));
  }
  if (is$or(whereClause)) {
    return whereClause.$or.some((w) => objectSortaMatchesWhereClause(o, w, strict));
  }
  if (is$not(whereClause)) {
    return !objectSortaMatchesWhereClause(o, whereClause.$not, strict);
  }
  return Object.entries(whereClause).every(([key, filter]) => {
    if (typeof filter === "object") {
      const realValue = o[key];
      const [f] = Object.keys(filter);
      const expected = filter[f];
      switch (f) {
        case "$eq":
          return realValue === expected;
        case "$gt":
          return realValue > expected;
        case "$lt":
          return realValue < expected;
        case "$gte":
          return realValue >= expected;
        case "$lte":
          return realValue <= expected;
        case "$ne":
          return realValue !== expected;
        case "$in":
          return expected.$in.includes(realValue);
        case "$isNull":
          return realValue == null;
        case "$startsWith":
          return realValue.startsWith(expected);
        case "$contains":
        case "$containsAllTerms":
        case "$containsAllTermsInOrder":
        case "$containsAnyTerm":
        case "$intersects":
        case "$within":
          return !strict;
        default:
          if (process.env.NODE_ENV !== "production") {
            process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Unknown where filter ${f}`) : invariant2__default.default(false) ;
          }
          return !strict;
      }
    }
    if (key in o) {
      if (o[key] === filter) {
        return true;
      }
    }
    return false;
  });
}

// ../../node_modules/.pnpm/p-defer@4.0.1/node_modules/p-defer/index.js
function pDefer() {
  const deferred = {};
  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve;
    deferred.reject = reject;
  });
  return deferred;
}

// src/observable/internal/BulkObjectLoader.ts
var weakCache = new mnemonist.DefaultWeakMap((c) => new BulkObjectLoader(c));
function getBulkObjectLoader(client) {
  return weakCache.get(client);
}
var BulkObjectLoader = class {
  #client;
  #m = new mnemonist.DefaultMap(() => ({
    data: [],
    timer: undefined
  }));
  #logger;
  #maxWait;
  #maxEntries;
  constructor(client, maxWait = 25, maxEntries = 100) {
    this.#client = client;
    this.#logger = client[chunkEY52J5Z4_cjs.additionalContext].logger;
    this.#maxWait = maxWait;
    this.#maxEntries = maxEntries;
  }
  fetch(apiName, primaryKey) {
    const deferred = pDefer();
    const entry = this.#m.get(apiName);
    entry.data.push({
      primaryKey,
      deferred
    });
    if (!entry.timer) {
      entry.timer = setTimeout(() => {
        this.#loadObjects(apiName, entry.data);
      }, this.#maxWait);
    }
    if (entry.data.length >= this.#maxEntries) {
      clearTimeout(entry.timer);
      this.#loadObjects(apiName, entry.data);
    }
    return deferred.promise;
  }
  #loadObjects(apiName, arr) {
    this.#m.delete(apiName);
    this.#reallyLoadObjects(apiName, arr).catch((e) => {
      this.#logger?.error("Unhandled exception", e);
    });
  }
  async #reallyLoadObjects(apiName, arr) {
    const miniDef = {
      type: "object",
      apiName
    };
    const objMetadata = await this.#client.fetchMetadata(miniDef);
    const pks = arr.map((x) => x.primaryKey);
    const {
      data
    } = await this.#client(miniDef).where({
      [objMetadata.primaryKeyApiName]: {
        $in: pks
      }
    }).fetchPage({
      $pageSize: pks.length
    });
    for (const {
      primaryKey,
      deferred
    } of arr) {
      const object = data.find((x) => x.$primaryKey === primaryKey);
      if (object) {
        deferred.resolve(object);
      } else {
        deferred.reject(new shared_net_errors.PalantirApiError("Object not found"));
      }
    }
  }
};

// src/observable/internal/Query.ts
var Query = class {
  retainCount = 0;
  #connectable;
  #subscription;
  #subject;
  /** @internal */
  constructor(store, observable, opts, cacheKey, logger) {
    this.options = opts;
    this.cacheKey = cacheKey;
    this.store = store;
    this.#subject = observable;
    this.logger = logger ?? (process.env.NODE_ENV === "production" ? store.client[chunkEY52J5Z4_cjs.additionalContext].logger : store.client[chunkEY52J5Z4_cjs.additionalContext].logger?.child({}, {
      msgPrefix: process.env.NODE_ENV !== "production" ? `Query<${cacheKey.type}, ${cacheKey.otherKeys.map((x) => JSON.stringify(x)).join(", ")}>` : "Query"
    }));
  }
  subscribe(observer) {
    this.#connectable ??= this._createConnectable(this.#subject);
    this.#subscription = this.#connectable.connect();
    return this.#connectable.subscribe(observer);
  }
  /**
   * Causes the query to revalidate. This will cause the query to fetch
   * the latest data from the server and update the store if it is deemed
   * "stale" or if `force` is true.
   *
   * @param force
   * @returns
   */
  async revalidate(force) {
    const logger = process.env.NODE_ENV !== "production" ? this.logger?.child({
      methodName: "revalidate"
    }) : this.logger;
    if (force) {
      this.abortController?.abort();
    }
    if (this.pendingFetch) {
      if (process.env.NODE_ENV !== "production") {
        logger?.info("Fetch is already pending, using it");
      }
      await this.pendingFetch;
      return;
    }
    if ((this.options.dedupeInterval ?? 0) > 0 && this.lastFetchStarted != null && Date.now() - this.lastFetchStarted < (this.options.dedupeInterval ?? 0)) {
      if (process.env.NODE_ENV !== "production") {
        logger?.debug("Within dupeInterval, aborting revalidate");
      }
      return Promise.resolve();
    }
    if (process.env.NODE_ENV !== "production") {
      logger?.debug("Starting actual revalidate");
    }
    this.store.batch({}, (batch) => {
      this.setStatus("loading", batch);
    });
    this._preFetch();
    this.lastFetchStarted = Date.now();
    if (process.env.NODE_ENV !== "production") {
      logger?.debug("calling _fetchAndStore()");
    }
    this.pendingFetch = this._fetchAndStore().finally(() => {
      logger?.info("finally _fetchAndStore()");
      this.pendingFetch = undefined;
    });
    await this.pendingFetch;
    return;
  }
  _preFetch() {
  }
  /**
   * Sets the status of the query in the store (but does not store that in `changes`).
   *
   * @param status
   * @param batch
   * @returns
   */
  setStatus(status, batch) {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "setStatus"
      }).debug(status);
    }
    const existing = batch.read(this.cacheKey);
    if (existing?.status === status) return;
    batch.write(this.cacheKey, existing?.value, status);
  }
  dispose() {
    if (this.abortController) {
      this.abortController.abort();
    }
    this.#subscription?.unsubscribe();
    this._dispose();
  }
  /**
   * Per query type dispose functionality
   */
  _dispose() {
  }
  /**
   * The purpose of this method is to provide a way for others to write
   * directly into the store for this query.
   *
   * @param data
   * @param status
   * @param batch
   */
  /**
   * @param changes
   * @param optimisticId
   * @returns If revalidation is needed, a promise that resolves after the
   *          revalidation is complete. Otherwise, undefined.
   */
};

// src/observable/internal/ObjectQuery.ts
var ObjectQuery = class extends Query {
  #apiName;
  #pk;
  constructor(store, subject, type, pk, cacheKey, opts) {
    super(store, subject, opts, cacheKey, process.env.NODE_ENV !== "production" ? store.client[chunkEY52J5Z4_cjs.additionalContext].logger?.child({}, {
      msgPrefix: `ObjectQuery<${cacheKey.otherKeys.map((x) => JSON.stringify(x)).join(", ")}>`
    }) : undefined);
    this.#apiName = type;
    this.#pk = pk;
  }
  _createConnectable(subject) {
    return rxjs.connectable(subject.pipe(rxjs.map((x) => {
      return {
        status: x.status,
        object: x.value,
        lastUpdated: x.lastUpdated,
        isOptimistic: x.isOptimistic
      };
    })), {
      connector: () => new rxjs.BehaviorSubject({
        status: "init",
        object: undefined,
        lastUpdated: 0,
        isOptimistic: false
      })
    });
  }
  async _fetchAndStore() {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "_fetchAndStore"
      }).info("calling fetchOne");
    }
    const obj = await getBulkObjectLoader(this.store.client).fetch(this.#apiName, this.#pk);
    this.store.batch({}, (batch) => {
      this.writeToStore(obj, "loaded", batch);
    });
  }
  writeToStore(data, status, batch) {
    const entry = batch.read(this.cacheKey);
    if (entry && deepEqual__default.default(data, entry.value)) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({
          methodName: "writeToStore"
        }).debug(`Object was deep equal, just setting status`);
      }
      return batch.write(this.cacheKey, entry.value, status);
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "writeToStore"
      }).debug(JSON.stringify({
        status
      }), data);
    }
    const ret = batch.write(this.cacheKey, data, status);
    batch.changes.registerObject(
      this.cacheKey,
      data,
      /* isNew */
      !entry
    );
    return ret;
  }
};
function storeOsdkInstances(store, values, batch) {
  return values.map((v) => {
    return store.getObjectQuery(v.$apiName, v.$primaryKey).writeToStore(v, "loaded", batch).cacheKey;
  });
}

// src/observable/internal/ListQuery.ts
var API_NAME_IDX = 1;
var BaseListQuery = class extends Query {
  //
  // Per list type implementations
  //
  //
  // Shared Implementations
  //
  /**
   * Only intended to be "protected" and used by subclasses but exposed for
   * testing.
   *
   * @param objectCacheKeys
   * @param append
   * @param status
   * @param batch
   * @returns
   */
  _updateList(objectCacheKeys, append, status, batch) {
    if (process.env.NODE_ENV !== "production") {
      const logger = process.env.NODE_ENV !== "production" ? this.logger?.child({
        methodName: "updateList"
      }) : this.logger;
      logger?.debug(`{status: ${status}}`, JSON.stringify(objectCacheKeys, null, 2));
    }
    objectCacheKeys = this.#retainReleaseAppend(batch, append, objectCacheKeys);
    objectCacheKeys = this._sortCacheKeys(objectCacheKeys, batch);
    objectCacheKeys = removeDuplicates(objectCacheKeys, batch);
    return this.writeToStore({
      data: objectCacheKeys
    }, status, batch);
  }
  writeToStore(data, status, batch) {
    const entry = batch.read(this.cacheKey);
    if (entry && deepEqual__default.default(data, entry.value)) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({
          methodName: "writeToStore"
        }).debug(`Object was deep equal, just setting status`);
      }
      return batch.write(this.cacheKey, entry.value, status);
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "writeToStore"
      }).debug(`{status: ${status}},`, DEBUG_ONLY__cacheKeysToString(data.data));
    }
    const ret = batch.write(this.cacheKey, data, status);
    batch.changes.registerList(this.cacheKey);
    return ret;
  }
  #retainReleaseAppend(batch, append, objectCacheKeys) {
    const existingList = batch.read(this.cacheKey);
    if (!batch.optimisticWrite) {
      if (!append) {
        for (const objectCacheKey of existingList?.value?.data ?? []) {
          this.store.release(objectCacheKey);
        }
      }
      for (const objectCacheKey of objectCacheKeys) {
        this.store.retain(objectCacheKey);
      }
    }
    if (append) {
      objectCacheKeys = [...existingList?.value?.data ?? [], ...objectCacheKeys];
    }
    return objectCacheKeys;
  }
  _dispose() {
    console.log("DISPOSE LIST QUERY");
    this.store.batch({}, (batch) => {
      const entry = batch.read(this.cacheKey);
      if (entry) {
        for (const objectCacheKey of entry.value?.data ?? []) {
          this.store.release(objectCacheKey);
        }
      }
    });
  }
};
var ListQuery = class extends BaseListQuery {
  // pageSize?: number; // this is the internal page size. we need to track this properly
  #type;
  #apiName;
  #whereClause;
  // this represents the minimum number of results we need to load if we revalidate
  #minNumResults = 0;
  #nextPageToken;
  #pendingPageFetch;
  #orderBy;
  #objectSet;
  #sortFns;
  constructor(store, subject, apiType, apiName, whereClause, orderBy, cacheKey, opts) {
    super(store, subject, opts, cacheKey, process.env.NODE_ENV !== "production" ? store.client[chunkEY52J5Z4_cjs.additionalContext].logger?.child({}, {
      msgPrefix: `ListQuery<${cacheKey.otherKeys.map((x) => JSON.stringify(x)).join(", ")}>`
    }) : undefined);
    this.#type = apiType;
    this.#apiName = apiName;
    this.#whereClause = whereClause;
    this.#orderBy = orderBy;
    this.#objectSet = store.client({
      type: this.#type,
      apiName: this.#apiName
    }).where(this.#whereClause);
    this.#sortFns = createOrderBySortFns(this.#orderBy);
  }
  get canonicalWhere() {
    return this.#whereClause;
  }
  _createConnectable(subject) {
    return rxjs.connectable(subject.pipe(
      rxjs.switchMap((listEntry) => {
        return rxjs.combineLatest({
          resolvedList: listEntry?.value?.data == null ? rxjs.of([]) : rxjs.combineLatest(listEntry.value.data.map((cacheKey) => this.store.getSubject(cacheKey).pipe(rxjs.map((objectEntry) => objectEntry?.value)))),
          isOptimistic: rxjs.of(listEntry.isOptimistic),
          fetchMore: rxjs.of(this.fetchMore),
          hasMore: rxjs.of(this.#nextPageToken != null),
          status: rxjs.of(listEntry.status),
          lastUpdated: rxjs.of(listEntry.lastUpdated)
        });
      }),
      // like throttle but returns the tail
      rxjs.auditTime(0)
    ), {
      resetOnDisconnect: false,
      connector: () => new rxjs.ReplaySubject(1)
    });
  }
  _preFetch() {
    this.#nextPageToken = undefined;
  }
  async _fetchAndStore() {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "_fetchAndStore"
      }).info("fetching pages");
    }
    while (true) {
      const entry = await this.#fetchPageAndUpdate(this.#objectSet, "loading", this.abortController?.signal);
      if (!entry) {
        return;
      }
      !entry.value?.data ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false) : invariant2__default.default(false) : undefined;
      const count = entry.value.data.length;
      if (count > this.#minNumResults || this.#nextPageToken == null) {
        break;
      }
    }
    this.store.batch({}, (batch) => {
      this.setStatus("loaded", batch);
    });
    return Promise.resolve();
  }
  fetchMore = () => {
    if (this.#pendingPageFetch) {
      return this.#pendingPageFetch;
    }
    if (this.pendingFetch) {
      this.#pendingPageFetch = new Promise(async (res) => {
        await this.pendingFetch;
        res(this.fetchMore());
      });
      return this.#pendingPageFetch;
    }
    if (this.#nextPageToken == null) {
      return Promise.resolve();
    }
    this.store.batch({}, (batch) => {
      this.setStatus("loading", batch);
    });
    this.pendingFetch = this.#fetchPageAndUpdate(this.#objectSet, "loaded", this.abortController?.signal).finally(() => {
      this.#pendingPageFetch = undefined;
    });
    return this.pendingFetch;
  };
  async #fetchPageAndUpdate(objectSet, status, signal) {
    const append = this.#nextPageToken != null;
    try {
      let {
        data,
        nextPageToken
      } = await objectSet.fetchPage({
        $nextPageToken: this.#nextPageToken,
        $pageSize: this.options.pageSize,
        // For now this keeps the shared test code from falling apart
        // but shouldn't be needed ideally
        ...Object.keys(this.#orderBy).length > 0 ? {
          $orderBy: this.#orderBy
        } : {}
      });
      if (signal?.aborted) {
        return;
      }
      this.#nextPageToken = nextPageToken;
      if (this.#type === "interface") {
        data = await reloadDataAsFullObjects(this.store.client, data);
      }
      const {
        retVal
      } = this.store.batch({}, (batch) => {
        return this._updateList(storeOsdkInstances(this.store, data, batch), append, nextPageToken ? status : "loaded", batch);
      });
      return retVal;
    } catch (e) {
      this.logger?.error("error", e);
      this.store.getSubject(this.cacheKey).error(e);
    }
  }
  /**
   * Will revalidate the list if its query is affected by invalidating the
   * apiName of the object type passed in.
   *
   * @param apiName to invalidate
   * @returns
   */
  revalidateObjectType = async (apiName) => {
    if (this.#type === "object") {
      if (this.#apiName === apiName) {
        await this.revalidate(
          /* force */
          true
        );
        return;
      } else {
        return;
      }
    }
    const objectMetadata = await this.store.client.fetchMetadata({
      type: "object",
      apiName
    });
    if (this.#apiName in objectMetadata.interfaceMap) {
      await this.revalidate(
        /* force */
        true
      );
      return;
    }
  };
  /**
   * Note: This method is not async because I want it to return right after it
   *       finishes the synchronous updates. The promise that is returned
   *       will resolve after the revalidation is complete.
   * @param changes
   * @param optimisticId
   * @returns If revalidation is needed, a promise that resolves after the
   *          revalidation is complete. Otherwise, undefined.
   */
  maybeUpdateAndRevalidate = (changes, optimisticId) => {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "maybeUpdateAndRevalidate"
      }).debug(DEBUG_ONLY__changesToString(changes));
    }
    if (changes.modified.has(this.cacheKey)) return;
    changes.modified.add(this.cacheKey);
    try {
      const relevantObjects = this._extractRelevantObjects(changes);
      if (relevantObjects.added.all.length === 0 && relevantObjects.modified.all.length === 0) {
        return;
      }
      const status = optimisticId || relevantObjects.added.sortaMatches.size > 0 || relevantObjects.modified.sortaMatches.size > 0 ? "loading" : "loaded";
      const newList = [];
      let needsRevalidation = false;
      this.store.batch({
        optimisticId,
        changes
      }, (batch) => {
        const existingList = new Set(batch.read(this.cacheKey)?.value?.data);
        const toAdd = new Set(
          // easy case. objects are new to the cache and they match this filter
          relevantObjects.added.strictMatches
        );
        const toRemove = /* @__PURE__ */ new Set();
        for (const obj of relevantObjects.modified.all) {
          if (relevantObjects.modified.strictMatches.has(obj)) {
            const objectCacheKey = this.store.getCacheKey("object", obj.$objectType, obj.$primaryKey);
            if (!existingList.has(objectCacheKey)) {
              toAdd.add(obj);
            }
            continue;
          } else if (batch.optimisticWrite) {
            continue;
          } else {
            const existingObjectCacheKey = this.store.getCacheKey("object", obj.$objectType, obj.$primaryKey);
            toRemove.add(existingObjectCacheKey);
            if (relevantObjects.modified.sortaMatches.has(obj)) {
              needsRevalidation = true;
            }
          }
        }
        for (const key of existingList) {
          if (toRemove.has(key)) continue;
          newList.push(key);
        }
        for (const obj of toAdd) {
          newList.push(this.store.getCacheKey("object", obj.$objectType, obj.$primaryKey));
        }
        this._updateList(
          newList,
          /* append */
          false,
          status,
          batch
        );
      });
      if (needsRevalidation) {
        return this.revalidate(true);
      }
      return void 0;
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({
          methodName: "maybeUpdateAndRevalidate"
        }).debug("in finally");
      }
    }
  };
  _extractRelevantObjects(changes) {
    const relevantObjects = this.#type === "object" ? this.#extractRelevantObjectsForTypeObject(changes) : this.#extractRelevantObjectsForTypeInterface(changes);
    for (const group of Object.values(relevantObjects)) {
      for (const obj of group.all ?? []) {
        const strictMatch = objectSortaMatchesWhereClause(obj, this.#whereClause, true);
        if (strictMatch) {
          group.strictMatches.add(obj);
        } else {
          const sortaMatch = objectSortaMatchesWhereClause(obj, this.#whereClause, false);
          if (sortaMatch) {
            group.sortaMatches.add(obj);
          }
        }
      }
    }
    return relevantObjects;
  }
  #extractRelevantObjectsForTypeInterface(changes) {
    const added = Array.from(changes.addedObjects).filter(([, object]) => {
      return this.#apiName in object[chunkT4NIFYZS_cjs.ObjectDefRef].interfaceMap;
    }).map(([, object]) => object.$as(this.#apiName));
    const modified = Array.from(changes.modifiedObjects).filter(([, object]) => {
      return this.#apiName in object[chunkT4NIFYZS_cjs.ObjectDefRef].interfaceMap;
    }).map(([, object]) => object.$as(this.#apiName));
    return {
      added: {
        all: added,
        strictMatches: /* @__PURE__ */ new Set(),
        sortaMatches: /* @__PURE__ */ new Set()
      },
      modified: {
        all: modified,
        strictMatches: /* @__PURE__ */ new Set(),
        sortaMatches: /* @__PURE__ */ new Set()
      }
    };
  }
  #extractRelevantObjectsForTypeObject(changes) {
    return {
      added: {
        all: changes.addedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX]) ?? [],
        strictMatches: /* @__PURE__ */ new Set(),
        sortaMatches: /* @__PURE__ */ new Set()
      },
      modified: {
        all: changes.modifiedObjects.get(this.cacheKey.otherKeys[API_NAME_IDX]) ?? [],
        strictMatches: /* @__PURE__ */ new Set(),
        sortaMatches: /* @__PURE__ */ new Set()
      }
    };
  }
  _sortCacheKeys(objectCacheKeys, batch) {
    if (Object.keys(this.#orderBy).length > 0) {
      objectCacheKeys = objectCacheKeys.sort((a, b) => {
        for (const sortFn of this.#sortFns) {
          const ret = sortFn(batch.read(a)?.value?.$as(this.#apiName), batch.read(b)?.value?.$as(this.#apiName));
          if (ret !== 0) {
            return ret;
          }
        }
        return 0;
      });
    }
    return objectCacheKeys;
  }
  registerStreamUpdates(sub) {
    const logger = process.env.NODE_ENV !== "production" ? this.logger?.child({
      methodName: "registerStreamUpdates"
    }) : this.logger;
    if (process.env.NODE_ENV !== "production") {
      logger?.child({
        methodName: "observeList"
      }).info("Subscribing from websocket");
    }
    const websocketSubscription = this.#objectSet.subscribe({
      onChange: this.#onOswChange.bind(this),
      onError: this.#onOswError.bind(this),
      onOutOfDate: this.#onOswOutOfDate.bind(this),
      onSuccessfulSubscription: this.#onOswSuccessfulSubscription.bind(this)
    });
    sub.add(() => {
      if (process.env.NODE_ENV !== "production") {
        logger?.child({
          methodName: "observeList"
        }).info("Unsubscribing from websocket");
      }
      websocketSubscription.unsubscribe();
    });
  }
  #onOswSuccessfulSubscription() {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "onSuccessfulSubscription"
      }).debug("");
    }
  }
  #onOswOutOfDate() {
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "onOutOfDate"
      }).info("");
    }
  }
  #onOswError(errors) {
    if (this.logger) {
      this.logger?.child({
        methodName: "onError"
      }).error("subscription errors", errors);
    }
  }
  #onOswChange({
    object: objOrIface,
    state
  }) {
    const logger = process.env.NODE_ENV !== "production" ? this.logger?.child({
      methodName: "registerStreamUpdates"
    }) : this.logger;
    if (process.env.NODE_ENV !== "production") {
      logger?.child({
        methodName: "onChange"
      }).debug(`Got an update of type: ${state}`, objOrIface);
    }
    if (state === "ADDED_OR_UPDATED") {
      const object = objOrIface.$apiName !== objOrIface.$objectType ? objOrIface.$as(objOrIface.$objectType) : objOrIface;
      this.store.batch({}, (batch) => {
        storeOsdkInstances(this.store, [object], batch);
      });
    } else if (state === "REMOVED") {
      this.#onOswRemoved(objOrIface, logger);
    }
  }
  #onOswRemoved(objOrIface, logger) {
    this.store.batch({}, (batch) => {
      const existing = batch.read(this.cacheKey);
      !existing ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "the truth value for our list should exist as we already subscribed") : invariant2__default.default(false) : undefined;
      if (existing.status === "loaded") {
        const objectCacheKey = this.store.getCacheKey("object", objOrIface.$objectType, objOrIface.$primaryKey);
        const newObjects = existing.value?.data.filter((o) => o !== objectCacheKey);
        if (newObjects?.length !== existing.value?.data.length) {
          batch.changes.registerList(this.cacheKey);
          batch.write(this.cacheKey, {
            data: newObjects ?? []
          }, "loaded");
        }
        return;
      }
      if (process.env.NODE_ENV !== "production") {
        logger?.info("Removing an object from an object list that is in the middle of being loaded.", existing);
      }
      this.revalidate(
        /* force */
        true
      ).catch((e) => {
        if (logger) {
          logger?.error("Uncaught error while revalidating list", e);
        } else {
          console.error("Uncaught error while revalidating list", e);
        }
      });
    });
  }
};
function removeDuplicates(objectCacheKeys, batch) {
  const visited = /* @__PURE__ */ new Set();
  objectCacheKeys = objectCacheKeys.filter((key) => {
    batch.read(key);
    if (visited.has(key)) {
      return false;
    }
    visited.add(key);
    return true;
  });
  return objectCacheKeys;
}
function createOrderBySortFns(orderBy) {
  return Object.entries(orderBy).map(([key, order]) => {
    return (a, b) => {
      const aValue = a?.[key];
      const bValue = b?.[key];
      if (aValue == null && bValue == null) {
        return 0;
      }
      if (aValue == null) {
        return 1;
      }
      if (bValue == null) {
        return -1;
      }
      const m = order === "asc" ? -1 : 1;
      return aValue < bValue ? m : aValue > bValue ? -m : 0;
    };
  });
}
async function reloadDataAsFullObjects(client, data) {
  const groups = groupBy__default.default(data, (x) => x.$objectType);
  const objectTypeToPrimaryKeyToObject = Object.fromEntries(await Promise.all(Object.entries(groups).map(async ([apiName, objects]) => {
    const objectDef = objects[0][chunkT4NIFYZS_cjs.UnderlyingOsdkObject][chunkT4NIFYZS_cjs.ObjectDefRef];
    const where = {
      [objectDef.primaryKeyApiName]: {
        $in: objects.map((x) => x.$primaryKey)
      }
    };
    const result = await client(objectDef).where(where).fetchPage();
    return [apiName, Object.fromEntries(result.data.map((x) => [x.$primaryKey, x]))];
  })));
  data = data.map((obj) => {
    !objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey] ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, `Could not find object ${obj.$objectType} ${obj.$primaryKey}`) : invariant2__default.default(false) : undefined;
    return objectTypeToPrimaryKeyToObject[obj.$objectType][obj.$primaryKey];
  });
  return data;
}
function isListCacheKey(cacheKey) {
  return cacheKey.type === "list";
}
var defaultMakeData = () => /* @__PURE__ */ Object.create(null);
var WeakRefTrie = class {
  #finalizer = new FinalizationRegistry((orderBy) => {
    this.#trie.removeArray(Object.entries(orderBy).flat());
  });
  #trie;
  constructor(makeData = defaultMakeData) {
    this.#trie = new trie.Trie(false, (array) => {
      const data = makeData(array);
      this.#finalizer.register(data, array);
      return new WeakRef(data);
    });
  }
  lookupArray(array) {
    const maybe = this.#trie.lookupArray(array);
    let ret = maybe.deref();
    if (maybe && !ret) {
      this.#trie.removeArray(array);
      ret = this.#trie.lookupArray(array).deref();
    }
    return ret;
  }
  peekArray(array) {
    const maybe = this.#trie.peekArray(array);
    const ret = maybe?.deref();
    if (maybe && !ret) {
      this.#trie.removeArray(array);
    }
    return ret;
  }
  removeArray(array) {
    return this.#trie.removeArray(array)?.deref();
  }
};
var OrderByCanonicalizer = class {
  #trie = new WeakRefTrie((array) => {
    const pairs = array.reduce(function(result, _, index, array2) {
      if (index % 2 === 0 && array2[index] != null) {
        result.push(array2.slice(index, index + 2));
      }
      return result;
    }, []);
    let data = Object.fromEntries(pairs);
    if (process.env.NODE_ENV !== "production") {
      data = Object.freeze(data);
    }
    return data;
  });
  canonicalize = (orderBy) => {
    const strings = Object.entries(orderBy).flat();
    return this.#trie.lookupArray(strings);
  };
};

// src/observable/internal/RefCounts.ts
var RefCounts = class {
  refCounts = /* @__PURE__ */ new Map();
  // keeps our objects around for some extended duration after they are no longer
  // needed which is good for quick clicks across tabs.
  gcMap = /* @__PURE__ */ new Map();
  constructor(keepAlive, cleanup) {
    this.keepAlive = keepAlive;
    this.cleanup = cleanup;
  }
  register(key) {
    if (!this.refCounts.has(key)) {
      this.gcMap.set(key, Date.now() + this.keepAlive);
    }
    return key;
  }
  retain(key) {
    const count = this.refCounts.get(key) ?? 0;
    this.refCounts.set(key, count + 1);
    if (this.gcMap.has(key)) {
      this.gcMap.delete(key);
    }
  }
  release(key) {
    const count = this.refCounts.get(key);
    if (count === undefined) ; else if (count === 1) {
      this.refCounts.delete(key);
      this.gcMap.set(key, Date.now() + this.keepAlive);
    } else {
      this.refCounts.set(key, count - 1);
    }
  }
  has(key) {
    return this.refCounts.has(key);
  }
  gc() {
    const now = Date.now();
    for (const [key, deathTime] of this.gcMap) {
      if (deathTime < now) {
        this.gcMap.delete(key);
        this.cleanup(key);
      }
    }
  }
};
var WhereClauseCanonicalizer = class {
  /**
   * This is a shortcut cache for any WhereClause's that we have
   * seen and already canonicalized. The theory behind this
   * is that well behaving React applications will either `useMemo`
   * their where clause, or store it in state or pass it through as
   * props such that we are likely to get the same WhereClause
   * object multiple times and we can skip unnecessary work.
   */
  #cache = /* @__PURE__ */ new WeakMap();
  /**
   * This is a trie that stores the sorted collapsed keys of a where clause to
   * the cache key for canonicalized options. In theory this keeps the number of
   * deepEqual comparisons down to a minimum but its probably overkill.
   */
  #trie = new trie.Trie();
  /**
   * This is a cache from the cacheKey provided by `this.#trie` to the potential
   * canonicalized options.
   */
  #existingOptions = /* @__PURE__ */ new Map();
  canonicalize(where) {
    if (this.#cache.has(where)) {
      return this.#cache.get(where);
    }
    const keysSet = /* @__PURE__ */ new Set();
    const calculatedCanon = this.#toCanon(where, keysSet);
    const cacheKey = this.#trie.lookupArray(Array.from(keysSet).sort());
    const lookupEntry = this.#existingOptions.get(cacheKey) ?? {
      options: []
    };
    this.#existingOptions.set(cacheKey, lookupEntry);
    const canon = lookupEntry.options.find((ref) => deepEqual__default.default(ref.deref(), calculatedCanon))?.deref() ?? calculatedCanon;
    if (canon === calculatedCanon) {
      lookupEntry.options.push(new WeakRef(canon));
    }
    this.#cache.set(where, canon);
    return canon;
  }
  #toCanon = (where, set = /* @__PURE__ */ new Set()) => {
    if ("$and" in where) {
      if (process.env.NODE_ENV !== "production") {
        !Array.isArray(where.$and) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected $and to be an array") : invariant2__default.default(false) : undefined;
        !(Object.keys(where).length === 1) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "expected only $and to be present") : invariant2__default.default(false) : undefined;
      }
      if (where.$and.length === 0) {
        return {};
      }
      if (where.$and.length === 1) {
        return this.#toCanon(where.$and[0], set);
      }
    }
    return Object.fromEntries(Object.entries(where).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => {
      set.add(k);
      if (k === "$and" || k === "$or") {
        return [k, v.map((x) => this.#toCanon(x, set))];
      }
      if (k !== "$not" && typeof v === "object" && "$eq" in v) {
        return [k, v["$eq"]];
      }
      return [k, v];
    }));
  };
};

// src/observable/internal/Store.ts
function createInitEntry(cacheKey) {
  return {
    cacheKey,
    status: "init",
    value: undefined,
    lastUpdated: 0
  };
}
var Store = class {
  whereCanonicalizer = new WhereClauseCanonicalizer();
  orderByCanonicalizer = new OrderByCanonicalizer();
  #truthLayer = new Layer(undefined, undefined);
  #topLayer;
  /** @internal */
  // we can use a regular Map here because the refCounting will
  // handle cleanup.
  #queries = /* @__PURE__ */ new Map();
  #cacheKeyToSubject = /* @__PURE__ */ new WeakMap();
  #cacheKeys;
  #refCounts = new RefCounts(6e4, (k) => this.#cleanupCacheKey(k));
  // we are currently only using this for debug logging and should just remove it in the future if that
  // continues to be true
  #finalizationRegistry;
  constructor(client) {
    this.client = client;
    this.logger = client[chunkEY52J5Z4_cjs.additionalContext].logger?.child({}, {
      msgPrefix: "Store"
    });
    this.#topLayer = this.#truthLayer;
    this.#cacheKeys = new CacheKeys(this.whereCanonicalizer, this.orderByCanonicalizer, (k) => {
      this.#refCounts.register(k);
    });
    setInterval(() => {
      this.#refCounts.gc();
    }, 1e3);
    this.#finalizationRegistry = new FinalizationRegistry((cleanupCallback) => {
      try {
        cleanupCallback();
      } catch (e) {
        console.error("Caught an error while running a finalization callback", e);
      }
    });
  }
  /**
   * Called after a key is no longer retained and the timeout has elapsed
   * @param key
   */
  #cleanupCacheKey = (key) => {
    const subject = this.peekSubject(key);
    this.#cacheKeys.remove(key);
    if (process.env.NODE_ENV !== "production") {
      !subject ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false) : invariant2__default.default(false) : undefined;
    }
    if (subject) {
      subject.complete();
      this.#cacheKeyToSubject.delete(key);
    }
    this.#queries.get(key)?.dispose();
    this.#queries.delete(key);
  };
  applyAction = (action, args, opts) => {
    return new ActionApplication(this).applyAction(action, args, opts);
  };
  removeLayer(layerId) {
    !(layerId != null) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "undefined is the reserved layerId for the truth layer") : invariant2__default.default(false) : undefined;
    let currentLayer = this.#topLayer;
    const cacheKeys = /* @__PURE__ */ new Map();
    while (currentLayer != null && currentLayer.parentLayer != null) {
      if (currentLayer.layerId === layerId) {
        for (const [k, v] of currentLayer.entries()) {
          if (cacheKeys.has(k)) continue;
          cacheKeys.set(k, v);
        }
      }
      currentLayer = currentLayer.parentLayer;
    }
    this.#topLayer = this.#topLayer.removeLayer(layerId);
    for (const [k, oldEntry] of cacheKeys) {
      const currentEntry = this.#topLayer.get(k);
      if (oldEntry !== currentEntry) {
        this.peekSubject(k)?.next({
          // eslint-disable-next-line @typescript-eslint/no-misused-spread
          ...currentEntry ?? createInitEntry(k),
          isOptimistic: currentEntry?.value !== this.#truthLayer.get(k)?.value
        });
      }
    }
  }
  getCacheKey(type, ...args) {
    return this.#refCounts.register(this.#cacheKeys.get(type, ...args));
  }
  peekSubject = (cacheKey) => {
    return this.#cacheKeyToSubject.get(cacheKey);
  };
  getSubject = (cacheKey) => {
    let subject = this.#cacheKeyToSubject.get(cacheKey);
    if (!subject) {
      const initialValue = this.#topLayer.get(cacheKey) ?? createInitEntry(cacheKey);
      subject = new rxjs.BehaviorSubject({
        // eslint-disable-next-line @typescript-eslint/no-misused-spread
        ...initialValue,
        isOptimistic: initialValue.value !== this.#truthLayer.get(cacheKey)?.value
      });
      this.#cacheKeyToSubject.set(cacheKey, subject);
    }
    return subject;
  };
  canonicalizeWhereClause(where) {
    return this.whereCanonicalizer.canonicalize(where);
  }
  observeObject(apiName, pk, options, subFn) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    const query = this.getObjectQuery(apiName, pk);
    this.retain(query.cacheKey);
    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch((e) => {
        subFn.error(e);
        if (this.logger) {
          this.logger.error("Unhandled error in observeObject", e);
        } else {
          throw e;
        }
      });
    }
    const sub = query.subscribe(subFn);
    return {
      unsubscribe: () => {
        sub.unsubscribe();
        this.release(query.cacheKey);
      }
    };
  }
  observeList(options, subFn) {
    const query = this.getListQuery(options.type, options.where ?? {}, options.orderBy ?? {}, options);
    this.retain(query.cacheKey);
    if (options.mode !== "offline") {
      query.revalidate(options.mode === "force").catch((x) => {
        subFn.error(x);
      });
    }
    const sub = query.subscribe(subFn);
    if (options.streamUpdates) {
      query.registerStreamUpdates(sub);
    }
    return {
      unsubscribe: () => {
        sub.unsubscribe();
        this.release(query.cacheKey);
      }
    };
  }
  peekQuery(cacheKey) {
    return this.#queries.get(cacheKey);
  }
  #getQuery(cacheKey, createQuery) {
    let query = this.peekQuery(cacheKey);
    if (!query) {
      query = createQuery();
      this.#queries.set(cacheKey, query);
    }
    return query;
  }
  getListQuery(def, where, orderBy, opts) {
    const {
      apiName,
      type
    } = def;
    const canonWhere = this.whereCanonicalizer.canonicalize(where);
    const canonOrderBy = this.orderByCanonicalizer.canonicalize(orderBy);
    const listCacheKey = this.getCacheKey("list", type, apiName, canonWhere, canonOrderBy);
    return this.#getQuery(listCacheKey, () => {
      return new ListQuery(this, this.getSubject(listCacheKey), type, apiName, canonWhere, canonOrderBy, listCacheKey, opts);
    });
  }
  getObjectQuery(apiName, pk) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    const objectCacheKey = this.getCacheKey("object", apiName, pk);
    return this.#getQuery(objectCacheKey, () => new ObjectQuery(this, this.getSubject(objectCacheKey), apiName, pk, objectCacheKey, {
      dedupeInterval: 0
    }));
  }
  getValue(cacheKey) {
    return this.#topLayer.get(cacheKey);
  }
  batch = ({
    optimisticId,
    changes = createChangedObjects()
  }, batchFn) => {
    !(optimisticId === undefined || !!optimisticId) ? process.env.NODE_ENV !== "production" ? invariant2__default.default(false, "optimistic must be undefined or not falsy") : invariant2__default.default(false) : undefined;
    let needsLayer = optimisticId !== undefined;
    const batchContext = {
      changes,
      createLayerIfNeeded: () => {
        if (needsLayer) {
          this.#topLayer = this.#topLayer.addLayer(optimisticId);
          needsLayer = false;
        }
      },
      optimisticWrite: !!optimisticId,
      write: (cacheKey, value, status) => {
        const oldTopValue = this.#topLayer.get(cacheKey);
        if (optimisticId) batchContext.createLayerIfNeeded();
        const writeLayer = optimisticId ? this.#topLayer : this.#truthLayer;
        const newValue = new Entry(cacheKey, value, Date.now(), status);
        writeLayer.set(cacheKey, newValue);
        const newTopValue = this.#topLayer.get(cacheKey);
        if (oldTopValue !== newTopValue) {
          this.#cacheKeyToSubject.get(cacheKey)?.next({
            // eslint-disable-next-line @typescript-eslint/no-misused-spread
            ...newValue,
            isOptimistic: newTopValue?.value !== this.#truthLayer.get(cacheKey)?.value
          });
        }
        return newValue;
      },
      read: (cacheKey) => {
        return optimisticId ? this.#topLayer.get(cacheKey) : this.#truthLayer.get(cacheKey);
      }
    };
    const retVal = batchFn(batchContext);
    this.maybeRevalidateQueries(changes, optimisticId).catch((e) => {
      if (this.logger) {
        this.logger.error("Unhandled error in batch", e);
      } else {
        console.error("Unhandled error in batch", e);
        throw e;
      }
    });
    return {
      batchResult: batchContext,
      retVal,
      changes: batchContext.changes
    };
  };
  invalidateObject(apiName, pk) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    return this.getObjectQuery(apiName, pk).revalidate(
      /* force */
      true
    );
  }
  async maybeRevalidateQueries(changes, optimisticId) {
    if (changes.isEmpty()) {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({
          methodName: "maybeRevalidateQueries"
        }).debug("No changes, aborting");
      }
      return;
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "maybeRevalidateQueries"
      }).debug(DEBUG_ONLY__changesToString(changes), {
        optimisticId
      });
    }
    try {
      const promises = [];
      for (const cacheKey of this.#queries.keys()) {
        const promise = this.peekQuery(cacheKey)?.maybeUpdateAndRevalidate?.(changes, optimisticId);
        if (promise) promises.push(promise);
      }
      await Promise.all(promises);
    } finally {
      if (process.env.NODE_ENV !== "production") {
        this.logger?.child({
          methodName: "maybeRevalidateQueries"
        }).debug("in finally", DEBUG_ONLY__changesToString(changes));
      }
    }
  }
  /**
   * @param apiName
   * @param changes The changes we know about / to update
   * @returns
   */
  invalidateObjectType(apiName, changes) {
    if (typeof apiName !== "string") {
      apiName = apiName.apiName;
    }
    if (process.env.NODE_ENV !== "production") {
      this.logger?.child({
        methodName: "invalidateObjectType"
      }).info(changes ? DEBUG_ONLY__changesToString(changes) : undefined);
    }
    const promises = [];
    for (const cacheKey of this.#truthLayer.keys()) {
      if (isListCacheKey(cacheKey)) {
        if (!changes || !changes.modified.has(cacheKey)) {
          const promise = this.peekQuery(cacheKey)?.revalidate(true);
          if (promise) {
            promises.push(promise);
            changes?.modified.add(cacheKey);
          }
        }
      }
    }
    return Promise.all(promises).then(() => undefined);
  }
  retain(cacheKey) {
    this.#refCounts.retain(cacheKey);
  }
  release(cacheKey) {
    this.#refCounts.release(cacheKey);
  }
};

// src/observable/ObservableClient.ts
function createObservableClient(client) {
  return new ObservableClientImpl(new Store(client));
}

Object.defineProperty(exports, "augment", {
  enumerable: true,
  get: function () { return chunkEY52J5Z4_cjs.augment; }
});
exports.createObservableClient = createObservableClient;
//# sourceMappingURL=unstable-do-not-use.cjs.map
//# sourceMappingURL=unstable-do-not-use.cjs.map