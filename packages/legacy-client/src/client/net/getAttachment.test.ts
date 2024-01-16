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

import type { ClientContext } from "@osdk/shared.net";
import { createClientContext } from "@osdk/shared.net";
import {
  MOCK_ORIGIN,
  mockFetchResponse,
  MockOntology,
} from "@osdk/shared.test";
import type { MockedFunction } from "vitest";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { expectFetchToBeCalledWithGet } from "../../util/test/expectUtils";
import { unwrapResultOrThrow } from "../../util/test/resultUtils";
import { getAttachment } from "./getAttachment";

describe(getAttachment, () => {
  let client: ClientContext<typeof MockOntology>;
  let fetch: MockedFunction<typeof globalThis.fetch>;
  beforeEach(() => {
    fetch = vi.fn();
    client = createClientContext(
      MockOntology,
      MOCK_ORIGIN,
      () => "Token",
      undefined,
      fetch,
    );
  });
  it("gets attachment", async () => {
    const obj = { name: "James Doe" };
    const blob = new Blob([JSON.stringify(obj, null, 2)], {
      type: "application/json",
    });

    mockFetchResponse(fetch, blob);
    const attachmentResult = await getAttachment(client, "ri.a.b.c.d");
    const attachment = unwrapResultOrThrow(attachmentResult);
    expectFetchToBeCalledWithGet(
      fetch,
      `attachments/ri.a.b.c.d/content`,
      `${MOCK_ORIGIN}/api/v1/`,
    );
    expect(attachment).toEqual(blob);
  });
});
