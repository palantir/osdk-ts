import { __commonJS, init_esm_shims, __toESM } from './chunk-VHOQB2JW.js';

// ../../node_modules/.pnpm/fetch-retry@6.0.0/node_modules/fetch-retry/index.js
var require_fetch_retry = __commonJS({
  "../../node_modules/.pnpm/fetch-retry@6.0.0/node_modules/fetch-retry/index.js"(exports, module) {
    init_esm_shims();
    module.exports = function(fetch2, defaults) {
      defaults = defaults || {};
      if (typeof fetch2 !== "function") {
        throw new ArgumentError("fetch must be a function");
      }
      if (typeof defaults !== "object") {
        throw new ArgumentError("defaults must be an object");
      }
      if (defaults.retries !== undefined && !isPositiveInteger(defaults.retries)) {
        throw new ArgumentError("retries must be a positive integer");
      }
      if (defaults.retryDelay !== undefined && !isPositiveInteger(defaults.retryDelay) && typeof defaults.retryDelay !== "function") {
        throw new ArgumentError("retryDelay must be a positive integer or a function returning a positive integer");
      }
      if (defaults.retryOn !== undefined && !Array.isArray(defaults.retryOn) && typeof defaults.retryOn !== "function") {
        throw new ArgumentError("retryOn property expects an array or function");
      }
      var baseDefaults = {
        retries: 3,
        retryDelay: 1e3,
        retryOn: []
      };
      defaults = Object.assign(baseDefaults, defaults);
      return function fetchRetry2(input, init) {
        var retries = defaults.retries;
        var retryDelay = defaults.retryDelay;
        var retryOn = defaults.retryOn;
        if (init && init.retries !== undefined) {
          if (isPositiveInteger(init.retries)) {
            retries = init.retries;
          } else {
            throw new ArgumentError("retries must be a positive integer");
          }
        }
        if (init && init.retryDelay !== undefined) {
          if (isPositiveInteger(init.retryDelay) || typeof init.retryDelay === "function") {
            retryDelay = init.retryDelay;
          } else {
            throw new ArgumentError("retryDelay must be a positive integer or a function returning a positive integer");
          }
        }
        if (init && init.retryOn) {
          if (Array.isArray(init.retryOn) || typeof init.retryOn === "function") {
            retryOn = init.retryOn;
          } else {
            throw new ArgumentError("retryOn property expects an array or function");
          }
        }
        return new Promise(function(resolve, reject) {
          var wrappedFetch = function(attempt) {
            var _input = typeof Request !== "undefined" && input instanceof Request ? input.clone() : input;
            fetch2(_input, init).then(function(response) {
              if (Array.isArray(retryOn) && retryOn.indexOf(response.status) === -1) {
                resolve(response);
              } else if (typeof retryOn === "function") {
                try {
                  return Promise.resolve(retryOn(attempt, null, response)).then(function(retryOnResponse) {
                    if (retryOnResponse) {
                      retry(attempt, null, response);
                    } else {
                      resolve(response);
                    }
                  }).catch(reject);
                } catch (error) {
                  reject(error);
                }
              } else {
                if (attempt < retries) {
                  retry(attempt, null, response);
                } else {
                  resolve(response);
                }
              }
            }).catch(function(error) {
              if (typeof retryOn === "function") {
                try {
                  Promise.resolve(retryOn(attempt, error, null)).then(function(retryOnResponse) {
                    if (retryOnResponse) {
                      retry(attempt, error, null);
                    } else {
                      reject(error);
                    }
                  }).catch(function(error2) {
                    reject(error2);
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else if (attempt < retries) {
                retry(attempt, error, null);
              } else {
                reject(error);
              }
            });
          };
          function retry(attempt, error, response) {
            var delay = typeof retryDelay === "function" ? retryDelay(attempt, error, response) : retryDelay;
            setTimeout(function() {
              wrappedFetch(++attempt);
            }, delay);
          }
          wrappedFetch(0);
        });
      };
    };
    function isPositiveInteger(value) {
      return Number.isInteger(value) && value >= 0;
    }
    function ArgumentError(message) {
      this.name = "ArgumentError";
      this.message = message;
    }
  }
});

// ../shared.net.errors/build/esm/PalantirApiError.js
init_esm_shims();
var PalantirApiError = class extends Error {
  constructor(message, errorName, errorCode, statusCode, errorInstanceId, parameters) {
    super(message);
    this.message = message;
    this.errorName = errorName;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.errorInstanceId = errorInstanceId;
    this.parameters = parameters;
  }
};

// ../shared.net.errors/build/esm/index.js
init_esm_shims();

// ../shared.net.errors/build/esm/UnknownError.js
init_esm_shims();
var UnknownError = class extends PalantirApiError {
  constructor(message, errorName, originalError, statusCode) {
    super(message, errorName, undefined, statusCode);
    this.originalError = originalError;
  }
};

// ../shared.net.fetch/build/esm/createFetchHeaderMutator.js
init_esm_shims();
function createFetchHeaderMutator(fetchFn = fetch, mutator) {
  return async function(url, requestInit) {
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

// ../shared.net.fetch/build/esm/createFetchOrThrow.js
init_esm_shims();
function createFetchOrThrow(fetchFn = fetch) {
  return async function(url, requestInit) {
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
      throw new PalantirApiError(body?.message ?? fallbackMessage, body?.errorName, body?.errorCode, response.status, body?.errorInstanceId, body?.parameters);
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
  return new UnknownError(message, undefined, originalError, statusCode);
}

// ../shared.net.fetch/build/esm/createRetryingFetch.js
init_esm_shims();
var import_fetch_retry = __toESM(require_fetch_retry(), 1);
var INITIAL_DELAY = 1e3;
var JITTER_FACTOR = 0.5;
var MAX_RETRIES = 3;
function createRetryingFetch(fetch2) {
  return (0, import_fetch_retry.default)(fetch2, {
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
  if (e instanceof PalantirApiError) {
    if (e.statusCode !== SERVICE_UNAVAILABLE && e.statusCode !== TOO_MANY_REQUESTS) {
      return false;
    }
  }
  return true;
}
var SERVICE_UNAVAILABLE = 503;
var TOO_MANY_REQUESTS = 429;

// ../shared.net.fetch/build/esm/index.js
init_esm_shims();

export { PalantirApiError, UnknownError, createFetchHeaderMutator, createFetchOrThrow, createRetryingFetch };
//# sourceMappingURL=chunk-P5HXJTVE.js.map
//# sourceMappingURL=chunk-P5HXJTVE.js.map