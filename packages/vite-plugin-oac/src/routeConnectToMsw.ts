/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { FauxFoundry } from "@osdk/faux";
import { msw } from "@osdk/faux";
import type { IncomingMessage, ServerResponse } from "http";
import type { EventEmitter } from "node:events";
import { Readable } from "stream";
import type { Connect } from "vite";

export async function routeConnectToMsw(
  baseUrl: string,
  handlers: FauxFoundry["handlers"],
  emitter: EventEmitter<msw.LifeCycleEventsMap>,
  req: Connect.IncomingMessage,
  res: ServerResponse<IncomingMessage>,
  next: Connect.NextFunction,
): Promise<void> {
  const method = req.method ?? "GET";
  const canRequestHaveBody = method !== "HEAD" && method !== "GET";

  const mockRequest = new Request(new URL(req.url!, baseUrl), {
    method,
    headers: new Headers(req.headers as HeadersInit),
    credentials: "omit",
    // @ts-expect-error Internal Undici property.
    duplex: canRequestHaveBody ? "half" : undefined,
    body: canRequestHaveBody
      ? (Readable.toWeb(req) as ReadableStream)
      : undefined,
  });

  await msw.handleRequest(
    mockRequest,
    crypto.randomUUID(),
    handlers,
    {
      onUnhandledRequest: "bypass",
    },
    emitter as unknown as Parameters<typeof msw["handleRequest"]>[4],
    {
      resolutionContext: {
        baseUrl,
      },
      // eslint-disable-next-line @typescript-eslint/require-await
      async onMockedResponse(mockedResponse) {
        const { status, statusText, headers } = mockedResponse;

        res.statusCode = status;
        res.statusMessage = statusText;

        headers.forEach((value, name) => {
          res.appendHeader(name, value);
        });

        if (mockedResponse.body) {
          // @ts-expect-error Types don't match exactly
          const stream = Readable.fromWeb(mockedResponse.body);
          stream.pipe(res);
        } else {
          res.end();
        }
      },
      onPassthroughResponse() {
        next();
      },
    },
  );
}
