/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

export interface HttpRequestConfig {
  url: string;
  fetch: typeof globalThis.fetch;
  tokenProvider: () => Promise<string>;
  /** Max retry attempts for a normal (non-unload) flush. */
  maxRetries: number;
  /** Base delay for exponential backoff, in milliseconds. */
  initialBackoffMillis: number;
}

export interface SendOptions {
  /**
   * When true the request is sent with `keepalive: true` and no retries, so it
   * can complete during page unload. `navigator.sendBeacon` is intentionally
   * not used because it cannot set the `Authorization` header.
   */
  unload?: boolean;
}

/**
 * POST a JSON body to `config.url`, authenticating with the OSDK client's token.
 * Normal flushes retry transient failures (network errors, 429, 5xx) with
 * exponential backoff; unload flushes send a single keepalive request.
 */
export async function sendJson(
  config: HttpRequestConfig,
  body: unknown,
  options: SendOptions = {},
): Promise<void> {
  const isUnload = options.unload === true;
  const maxAttempts = isUnload ? 1 : config.maxRetries + 1;
  const payload = JSON.stringify(body);

  let attempt = 0;
  let lastError: unknown;
  while (attempt < maxAttempts) {
    try {
      const token = await config.tokenProvider();
      const response = await config.fetch(config.url, {
        method: "POST",
        keepalive: isUnload,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: payload,
      });
      if (response.ok) {
        return;
      }
      lastError = new Error(`Log.write failed with status ${response.status}`);
      if (!isRetryableStatus(response.status)) {
        break;
      }
    } catch (error) {
      lastError = error;
    }

    attempt++;
    if (attempt < maxAttempts) {
      await delay(backoffMillis(config.initialBackoffMillis, attempt));
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Log.write failed");
}

function isRetryableStatus(status: number): boolean {
  return status === 429 || status >= 500;
}

function backoffMillis(base: number, attempt: number): number {
  const exponential = base * Math.pow(2, attempt - 1);
  const jitter = Math.random() * base;
  return exponential + jitter;
}

function delay(millis: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, millis);
  });
}
