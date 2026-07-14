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

import type { LoadObjectSetRequestV2 } from "@osdk/foundry.ontologies";
import { type MockedFunction, vi } from "vitest";

import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClientParams } from "../MinimalClientContext.js";

/**
 * @internal
 * Builds a minimal client whose `fetch` is a vitest mock, so tests can inspect
 * the request bodies the client sends. The mock resolves every request with an
 * empty (`{ data: [] }`), 200 OK response, so callers only care about what was
 * sent, not what comes back.
 * @returns the `client` to drive under test and the `fetchFn` mock to assert against
 *   (typically via {@link getLastObjectSetRequest}).
 */
export function createMockCaptureClient(
  metadata: MinimalClientParams["metadata"] = { ontologyRid: "unset" }
) {
  const fetchFn = vi.fn() as MockedFunction<typeof globalThis.fetch>;
  fetchFn.mockResolvedValue({
    json: () => Promise.resolve({ data: [] }),
    status: 200,
    ok: true,
  } as Response);
  const client = createMinimalClient(
    metadata,
    "https://foo",
    // oxlint-disable-next-line require-await -- intentionally async: returns a Promise to satisfy its declared/contract type; no await needed
    async () => "",
    {},
    fetchFn
  );
  return { client, fetchFn };
}

/**
 * @internal
 * Finds the most recent request the mock `fetchFn` received whose JSON body
 * mentions an `objectSet` (i.e. the object-set load call fetchPage issues),
 * and returns it parsed. Walks the recorded calls newest-first so the latest
 * matching request wins.
 *
 * @param fetchFn the mock returned by {@link createMockCapturingClient}
 * @returns the parsed request body, or `undefined` if no object-set request was sent
 */
export function getLastObjectSetRequest(
  fetchFn: MockedFunction<typeof globalThis.fetch>
): LoadObjectSetRequestV2 | undefined {
  const requestBody = fetchFn.mock.calls.reduceRight<string | undefined>(
    (acc, cur) => {
      if (acc) return acc;
      const body = cur?.[1]?.body;
      if (typeof body === "string" && body.includes("objectSet")) {
        return body;
      }
    },
    undefined
  );
  if (!requestBody) return undefined;
  return JSON.parse(requestBody);
}
