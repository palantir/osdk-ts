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

import type { getCurrent } from "@osdk/foundry.admin/User";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import { createMockClient } from "../../mock/createMockClient.js";
import { requireAdminUser } from "./platformApiWithMsw.js";

type User = Awaited<ReturnType<typeof getCurrent>>;

const server = setupServer();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("platformApiWithMsw", () => {
  it("resolves the current user when MSW handles the platform call", async () => {
    server.use(
      http.get(
        "https://mock.invalid/api/v2/admin/users/getCurrent",
        () =>
          HttpResponse.json(
            {
              id: "user-1",
              username: "alice@admin",
              givenName: "Alice",
              familyName: "Admin",
              realm: "default",
              status: "ACTIVE",
              attributes: {},
            } satisfies User,
          ),
      ),
    );

    const mockClient = createMockClient();
    const username = await requireAdminUser(mockClient);

    expect(username).toBe("alice@admin");
  });

  it("rejects when the user is not an admin", async () => {
    server.use(
      http.get(
        "https://mock.invalid/api/v2/admin/users/getCurrent",
        () =>
          HttpResponse.json(
            {
              id: "user-2",
              username: "bob@example.com",
              givenName: "Bob",
              familyName: "Example",
              realm: "default",
              status: "ACTIVE",
              attributes: {},
            } satisfies User,
          ),
      ),
    );

    const mockClient = createMockClient();

    await expect(requireAdminUser(mockClient)).rejects.toThrow(
      "User bob@example.com is not an admin",
    );
  });
});
