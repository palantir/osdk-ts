'use strict';

var shared_net_errors = require('@osdk/shared.net.errors');
var shared_net_fetch = require('@osdk/shared.net.fetch');
var shared_client_impl = require('@osdk/shared.client.impl');

// src/index.ts
function createClientContext(baseUrl, tokenProvider, userAgent, fetchFn = fetch) {
  return shared_client_impl.createSharedClientContext(baseUrl, async () => await tokenProvider(), [userAgent].filter((x) => x && x?.length > 0).join(" "), fetchFn);
}

// src/ResultOrError.ts
function isOk(result) {
  return result.type === "ok";
}

// src/util/replaceHttpIfNotLocalhost.ts
function replaceHttpIfNotLocalhost(url) {
  const parsed = new URL(url);
  if (parsed.protocol === "http:" && parsed.hostname === "localhost") {
    return url;
  }
  parsed.protocol = "https:";
  return parsed.toString();
}

Object.defineProperty(exports, "PalantirApiError", {
  enumerable: true,
  get: function () { return shared_net_errors.PalantirApiError; }
});
Object.defineProperty(exports, "UnknownError", {
  enumerable: true,
  get: function () { return shared_net_errors.UnknownError; }
});
Object.defineProperty(exports, "createFetchHeaderMutator", {
  enumerable: true,
  get: function () { return shared_net_fetch.createFetchHeaderMutator; }
});
Object.defineProperty(exports, "createFetchOrThrow", {
  enumerable: true,
  get: function () { return shared_net_fetch.createFetchOrThrow; }
});
exports.createClientContext = createClientContext;
exports.isOk = isOk;
exports.replaceHttpIfNotLocalhost = replaceHttpIfNotLocalhost;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map