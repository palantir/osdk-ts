'use strict';

var shared_net_errors = require('@osdk/shared.net.errors');
var fetchRetry = require('fetch-retry');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fetchRetry__default = /*#__PURE__*/_interopDefault(fetchRetry);

// src/createFetchHeaderMutator.ts
function createFetchHeaderMutator(fetchFn = fetch, mutator) {
  return async function headerMutatedFetch(url, requestInit) {
    if (!requestInit) {
      return fetchFn(url, {
        headers: await mutator(new Headers())
      });
    }
    return fetchFn(url, {
      ...requestInit,
      headers: await mutator(new Headers(requestInit.headers))
    });
  };
}
function createFetchOrThrow(fetchFn = fetch) {
  return async function fetchOrThrow(url, requestInit) {
    let response;
    try {
      response = await fetchFn(url, requestInit);
    } catch (e) {
      throw convertError(e, "A network error occurred");
    }
    if (!response.ok) {
      const fallbackMessage = `Failed to fetch ${response.status} ${response.statusText}`;
      if (response.headers.get("Content-Type") === "text/plain") {
        throw unknownError(await response.text(), response.status);
      }
      if (response.headers.get("Content-Type") === "text/html") {
        throw unknownError(fallbackMessage, response.status, new Error("Received HTML error page: " + await response.text()));
      }
      let body;
      try {
        body = await response.json();
      } catch (e) {
        throw unknownError(fallbackMessage, response.status, e instanceof Error ? e : undefined);
      }
      throw new shared_net_errors.PalantirApiError(body?.message ?? fallbackMessage, body?.errorName, body?.errorCode, response.status, body?.errorInstanceId, body?.parameters);
    }
    return response;
  };
}
function convertError(e, msgIfNotError = "An unknown error occurred") {
  if (e instanceof Error) {
    return unknownError(e.message, undefined, e);
  }
  return unknownError(msgIfNotError, undefined);
}
function unknownError(message, statusCode, originalError) {
  return new shared_net_errors.UnknownError(message, undefined, originalError, statusCode);
}
var INITIAL_DELAY = 1e3;
var JITTER_FACTOR = 0.5;
var MAX_RETRIES = 3;
function createRetryingFetch(fetch2) {
  return fetchRetry__default.default(fetch2, {
    retryDelay(attempt) {
      const delay = INITIAL_DELAY * 2 ** attempt;
      const jitter = delay * JITTER_FACTOR * (Math.random() * 2 - 1);
      return delay + jitter;
    },
    retryOn(attempt, error, response) {
      const status = response?.status ?? 0;
      return !(status >= 200 && status < 300) && isRetryable(error) && attempt < MAX_RETRIES;
    }
  });
}
function isRetryable(e) {
  if (e instanceof shared_net_errors.PalantirApiError) {
    if (e.statusCode !== SERVICE_UNAVAILABLE && e.statusCode !== TOO_MANY_REQUESTS) {
      return false;
    }
  }
  return true;
}
var SERVICE_UNAVAILABLE = 503;
var TOO_MANY_REQUESTS = 429;

exports.createFetchHeaderMutator = createFetchHeaderMutator;
exports.createFetchOrThrow = createFetchOrThrow;
exports.createRetryingFetch = createRetryingFetch;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map