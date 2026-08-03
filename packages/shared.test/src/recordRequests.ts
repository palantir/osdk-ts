/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

import type { SetupServerApi } from "msw/node";

export interface RecordedRequest {
  method: string;
  /** Path and query only; the origin is stripped so traces survive a port change. */
  path: string;
  body: unknown;
}

export interface RequestRecorder {
  /** Requests in the order the server saw them. */
  readonly requests: readonly RecordedRequest[];
  clear(): void;
  stop(): void;
}

/**
 * Records every request an msw server observes so two runs can be diffed.
 *
 * This is the differential-testing oracle for the alias-aware OSDK work: the same
 * test run against a packaged alias file and against an identity override must
 * produce identical traces, and against a remapped file must differ only in the
 * names that were remapped.
 */
export function recordRequests(apiServer: SetupServerApi): RequestRecorder {
  const requests: RecordedRequest[] = [];

  const onRequestStart = async ({
    request,
  }: {
    request: Request;
  }): Promise<void> => {
    const url = new URL(request.url);
    requests.push({
      method: request.method,
      path: url.pathname + url.search,
      body: await readBody(request.clone()),
    });
  };

  apiServer.events.on("request:start", onRequestStart);

  return {
    requests,
    clear: () => {
      requests.length = 0;
    },
    stop: () => {
      apiServer.events.removeListener("request:start", onRequestStart);
    },
  };
}

async function readBody(request: Request): Promise<unknown> {
  const text = await request.text();
  if (text === "") return undefined;
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}
