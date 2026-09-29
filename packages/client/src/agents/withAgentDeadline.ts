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

import type { AgentSessionOptions } from "@osdk/api";

import type { MinimalClient } from "../MinimalClientContext.js";

export interface AgentDeadline {
  client: MinimalClient;
  check(): void;
  wait(): Promise<void>;
}

export async function withAgentDeadline<T>(
  client: MinimalClient,
  options: AgentSessionOptions | undefined,
  operation: (scope: AgentDeadline) => Promise<T>,
): Promise<T> {
  const timeoutMs = options?.$timeoutMs ?? 30_000;
  if (!Number.isFinite(timeoutMs) || timeoutMs < 0) {
    throw new Error("$timeoutMs must be a finite non-negative number");
  }
  const deadline = Date.now() + timeoutMs;
  const controller = new AbortController();
  const error = new Error("Agent session operation timed out");
  error.name = "TimeoutError";
  const check = () => {
    if (controller.signal.aborted || Date.now() >= deadline) throw error;
  };
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      controller.abort();
      reject(error);
    }, timeoutMs);
  });
  const scopedClient: MinimalClient = {
    ...client,
    fetch: (input, init) => {
      check();
      return client.fetch(input, { ...init, signal: controller.signal });
    },
  };
  try {
    check();
    return await Promise.race([
      operation({
        client: scopedClient,
        check,
        wait: () =>
          new Promise<void>((resolve, reject) => {
            check();
            const pollTimer = setTimeout(
              () => {
                controller.signal.removeEventListener("abort", abort);
                resolve();
              },
              Math.min(1000, Math.max(0, deadline - Date.now())),
            );
            const abort = () => {
              clearTimeout(pollTimer);
              reject(error);
            };
            controller.signal.addEventListener("abort", abort, { once: true });
          }),
      }),
      timeout,
    ]);
  } finally {
    clearTimeout(timer);
    controller.abort();
  }
}
