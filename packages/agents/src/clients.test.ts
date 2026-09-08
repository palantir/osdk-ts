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

import type { Client, PlatformClient } from "@osdk/client";
import { describe, expect, it } from "vitest";

import { getClient, getPlatformClient, withClients } from "./clients.js";

const platformClient = {} as PlatformClient;
const client = {} as Client;

describe("clients", () => {
  it("returns the clients from the enclosing withClients", async () => {
    await withClients({ client, platformClient }, async () => {
      await Promise.resolve();
      expect(getClient()).toBe(client);
      expect(getPlatformClient()).toBe(platformClient);
    });
  });

  it("passes the body's result through", async () => {
    const result = await withClients({ client, platformClient }, async () => {
      await Promise.resolve();
      return "done";
    });
    expect(result).toBe("done");
  });

  it("does not leak between concurrent invocations", async () => {
    const otherClient = {} as Client;
    await Promise.all([
      withClients({ client, platformClient }, async () => {
        await Promise.resolve();
        expect(getClient()).toBe(client);
      }),
      withClients({ client: otherClient, platformClient }, async () => {
        await Promise.resolve();
        expect(getClient()).toBe(otherClient);
      }),
    ]);
  });

  it("throws from getClient when no ontology has been imported", async () => {
    await withClients({ platformClient }, async () => {
      await Promise.resolve();
      expect(() => getClient()).toThrow("No Ontology SDK client is available");
      expect(getPlatformClient()).toBe(platformClient);
    });
  });

  it("throws outside of an invocation", () => {
    expect(() => getClient()).toThrow(
      "Clients are only available while a session is running",
    );
    expect(() => getPlatformClient()).toThrow(
      "Clients are only available while a session is running",
    );
  });
});
