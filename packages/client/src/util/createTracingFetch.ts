/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

/**
 * Optional hooks for observing every network request the client makes, useful
 * for debugging, logging, and performance instrumentation (e.g. wiring up
 * Datadog or OpenTelemetry).
 *
 * Hooks fire once per network attempt, so retried requests fire once per
 * retry. The `requestId` is unique per attempt and correlates an `onRequest`
 * call with its matching `onResponse`/`onError` call when multiple requests
 * are in flight concurrently.
 *
 * Hooks are best-effort observers: exceptions thrown by a hook are swallowed
 * and never affect the request. To inspect or modify full request/response
 * bodies, supply a custom `fetchFn` to `createClient` instead.
 */
export interface ClientTracingHooks {
  onRequest?: (info: {
    requestId: number;
    url: string;
    method: string;
  }) => void;
  onResponse?: (info: {
    requestId: number;
    url: string;
    method: string;
    status: number;
    durationMs: number;
  }) => void;
  onError?: (info: {
    requestId: number;
    url: string;
    method: string;
    durationMs: number;
    error: unknown;
  }) => void;
}

/** Invokes a hook, ignoring any error it throws so tracing never breaks a request. */
function invokeSafely<T>(hook: ((info: T) => void) | undefined, info: T): void {
  try {
    hook?.(info);
  } catch {
    // Tracing hooks are best-effort observers; their failures must not
    // interfere with the request.
  }
}

/**
 * Wraps a fetch implementation so that {@link ClientTracingHooks} fire around
 * every call. The wrapped fetch always returns the original response and
 * rethrows the original error.
 *
 * @internal
 */
export function createTracingFetch(
  fetchFn: typeof globalThis.fetch,
  hooks: ClientTracingHooks,
): typeof globalThis.fetch {
  let nextRequestId = 0;

  return async function tracingFetch(input, init) {
    const requestId = ++nextRequestId;
    const url = input instanceof Request ? input.url : String(input);
    const method =
      init?.method ?? (input instanceof Request ? input.method : "GET");

    invokeSafely(hooks.onRequest, { requestId, url, method });
    const start = performance.now();
    try {
      const response = await fetchFn(input, init);
      invokeSafely(hooks.onResponse, {
        requestId,
        url,
        method,
        status: response.status,
        durationMs: performance.now() - start,
      });
      return response;
    } catch (error) {
      invokeSafely(hooks.onError, {
        requestId,
        url,
        method,
        durationMs: performance.now() - start,
        error,
      });
      throw error;
    }
  };
}
