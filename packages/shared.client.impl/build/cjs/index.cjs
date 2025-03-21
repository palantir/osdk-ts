'use strict';

var shared_net_errors = require('@osdk/shared.net.errors');
var shared_net_fetch = require('@osdk/shared.net.fetch');

// src/createSharedClientContext.ts
function createSharedClientContext(baseUrl, tokenProvider, userAgent, fetchFn = fetch) {
  if (baseUrl.length === 0) {
    throw new Error("baseUrl cannot be empty");
  }
  const retryingFetchWithAuthOrThrow = shared_net_fetch.createFetchHeaderMutator(shared_net_fetch.createRetryingFetch(shared_net_fetch.createFetchOrThrow(fetchFn)), async (headers) => {
    const token = await tokenProvider();
    headers.set("Authorization", `Bearer ${token}`);
    headers.set("Fetch-User-Agent", [headers.get("Fetch-User-Agent"), userAgent].filter((x) => x && x?.length > 0).join(" "));
    return headers;
  });
  const fetchWrapper = async (input, init) => {
    try {
      return await retryingFetchWithAuthOrThrow(input, init);
    } catch (e) {
      const betterError = e instanceof shared_net_errors.PalantirApiError ? new shared_net_errors.PalantirApiError(e.message, e.errorName, e.errorCode, e.statusCode, e.errorInstanceId, e.parameters) : new Error("Captured stack trace for error: " + (e.message ?? e));
      betterError.cause = e;
      throw betterError;
    }
  };
  return {
    baseUrl,
    fetch: fetchWrapper,
    tokenProvider
  };
}

exports.createSharedClientContext = createSharedClientContext;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map