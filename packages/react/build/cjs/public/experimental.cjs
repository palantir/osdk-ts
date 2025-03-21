'use strict';

var chunk2N32USW5_cjs = require('../chunk-2N32USW5.cjs');
var unstableDoNotUse = require('@osdk/client/unstable-do-not-use');
var React3 = require('react');
var client = require('@osdk/client');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React3__default = /*#__PURE__*/_interopDefault(React3);

function fakeClientFn(..._args) {
  throw new Error("This is not a real client. Did you forget to <OsdkContext.Provider>?");
}
var fakeClient = Object.assign(fakeClientFn, {
  fetchMetadata: fakeClientFn
});
var OsdkContext2 = /* @__PURE__ */ React3__default.default.createContext({
  client: fakeClient,
  observableClient: undefined
});

// src/new/OsdkProvider2.tsx
function OsdkProvider2({
  children,
  client,
  observableClient
}) {
  observableClient = React3.useMemo(() => observableClient ?? unstableDoNotUse.createObservableClient(client), [client, observableClient]);
  return /* @__PURE__ */ React3__default.default.createElement(OsdkContext2.Provider, {
    value: {
      client,
      observableClient
    }
  }, children);
}
function useOsdkAction(actionDef) {
  const {
    observableClient
  } = React3__default.default.useContext(OsdkContext2);
  const [error, setError] = React3__default.default.useState();
  const [data, setData] = React3__default.default.useState();
  const [isPending, setPending] = React3__default.default.useState(false);
  const applyAction = React3__default.default.useCallback(async function applyAction2(hookArgs) {
    const {
      $optimisticUpdate,
      ...args
    } = hookArgs;
    try {
      setPending(true);
      setError(void 0);
      const r = await observableClient.applyAction(actionDef, args, {
        optimisticUpdate: $optimisticUpdate
      });
      setData(r);
      return r;
    } catch (e) {
      if (e instanceof client.ActionValidationError) {
        setError({
          actionValidation: e
        });
      } else {
        setError({
          unknown: e
        });
      }
    } finally {
      setPending(false);
    }
  }, [observableClient, setError]);
  return {
    applyAction,
    error,
    data,
    isPending
  };
}

// src/new/makeExternalStore.ts
function makeExternalStore(createObservation, name) {
  let lastResult;
  function getSnapShot() {
    return lastResult;
  }
  function subscribe(notifyUpdate) {
    const obs = createObservation({
      next: (payload) => {
        lastResult = payload;
        notifyUpdate();
      },
      error: (error) => {
        lastResult = {
          ...lastResult ?? {},
          error: error instanceof Error ? error : new Error(String(error))
        };
        notifyUpdate();
      },
      complete: () => {
      }
    });
    return () => {
      obs.unsubscribe();
    };
  }
  return {
    subscribe,
    getSnapShot
  };
}

// src/new/useOsdkObject.ts
function useOsdkObject(...args) {
  const {
    observableClient
  } = React3__default.default.useContext(OsdkContext2);
  const mode = args.length === 1 ? "offline" : undefined;
  const objectType = args.length === 1 ? args[0].$objectType : args[0].apiName;
  const primaryKey = args.length === 1 ? args[0].$primaryKey : args[1];
  const {
    subscribe,
    getSnapShot
  } = React3__default.default.useMemo(() => makeExternalStore((observer) => observableClient.observeObject(objectType, primaryKey, {
    mode
  }, observer)), [observableClient, objectType, primaryKey, mode]);
  const payload = React3__default.default.useSyncExternalStore(subscribe, getSnapShot);
  return {
    object: payload?.object,
    isLoading: payload?.status === "loading",
    isOptimistic: !!payload?.isOptimistic,
    error: payload && "error" in payload ? payload.error : undefined,
    forceUpdate: () => {
      throw "not implemented";
    }
  };
}
function useOsdkObjects(type, {
  pageSize,
  orderBy,
  dedupeIntervalMs,
  where = {},
  streamUpdates
} = {}) {
  const {
    observableClient
  } = React3__default.default.useContext(OsdkContext2);
  const canonWhere = observableClient.canonicalizeWhereClause(where ?? {});
  const {
    subscribe,
    getSnapShot
  } = React3__default.default.useMemo(() => makeExternalStore((observer) => observableClient.observeList({
    type,
    where: canonWhere,
    dedupeInterval: dedupeIntervalMs ?? 2e3,
    pageSize,
    orderBy,
    streamUpdates
  }, observer), process.env.NODE_ENV !== "production" ? `list ${type.apiName} ${JSON.stringify(canonWhere)}` : undefined), [observableClient, type, canonWhere, dedupeIntervalMs]);
  const listPayload = React3__default.default.useSyncExternalStore(subscribe, getSnapShot);
  return {
    fetchMore: listPayload?.fetchMore,
    error: listPayload && "error" in listPayload ? listPayload?.error : undefined,
    data: listPayload?.resolvedList,
    isLoading: listPayload?.status === "loading",
    isOptimistic: listPayload?.isOptimistic ?? false
  };
}

Object.defineProperty(exports, "useOsdkClient", {
  enumerable: true,
  get: function () { return chunk2N32USW5_cjs.useOsdkClient; }
});
exports.OsdkProvider2 = OsdkProvider2;
exports.useOsdkAction = useOsdkAction;
exports.useOsdkObject = useOsdkObject;
exports.useOsdkObjects = useOsdkObjects;
//# sourceMappingURL=experimental.cjs.map
//# sourceMappingURL=experimental.cjs.map