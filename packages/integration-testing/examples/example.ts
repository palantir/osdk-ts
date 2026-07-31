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

import { randomUUID } from "node:crypto";
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

import { Book, rentedBooks } from "@ontology/sdk";
import om from "@ontology/sdk/EXPERIMENTAL_DO_NOT_USE/ontology-metadata";
import {
  createIntegrationServer,
  type IntegrationClient,
  type IntegrationServer,
} from "@osdk/integration-testing";
import { createSeedWithMetadata } from "@osdk/seed-helpers";
import { describe, expect, test as baseTest } from "vitest";

/**
 * The state every test starts from. Built once, applied per test with
 * `seed.set`, which replaces the ontology's contents — so the same primary keys
 * can be re-applied instead of having to be unique per test.
 */
const {
  output: baseSeed,
  context: { bookRef },
} = createSeedWithMetadata(om, (seed) => ({
  bookRef: seed.create(Book, {
    id: randomUUID(),
    title: "Example Book",
    author: "Example Author",
    isbn: "000-0-00-000000-0",
  }),
}));

const test = baseTest.extend<{
  server: IntegrationServer;
  integration: IntegrationClient;
}>({
  // Worker-scoped: starting a local ontology is expensive, so one is shared by
  // every test in the worker. Each worker gets its own project directory —
  // `stop()` deletes it, and two workers must not share one.
  server: [
    async (_context, use) => {
      const server = await createIntegrationServer({
        metadata: om,
        projectPath: await mkdtemp(join(tmpdir(), "osdk-example-")),
      });
      await server.start();
      await use(server);
      await server.stop();
    },
    { scope: "worker" },
  ],
  integration: [
    async ({ server }, use) => {
      await use(await server.createClient());
    },
    { scope: "worker" },
  ],
});

describe("example", () => {
  test("lists books (mocked query)", async ({ integration }) => {
    await integration.seed.set(baseSeed);
    // The local ontology cannot run functions, so queries are stubbed.
    integration.client.whenQuery(rentedBooks).thenReturn([bookRef]);
    const res = await integration.client(rentedBooks).executeFunction();
    expect(res.length).toBe(1);
    expect(res.at(0)).toBe(bookRef);
  });

  test("adds a book on top of the fixture", async ({ integration }) => {
    const added = await integration.seed.create(Book, {
      id: randomUUID(),
      title: "Title",
      author: "Author",
      isbn: "000-0-00-000000-1",
    });
    await expect(
      integration.client(Book).fetchOne(added.id),
    ).resolves.toMatchObject({ isbn: added.isbn });
    await expect(
      integration.client(Book).fetchOne(bookRef.id),
    ).resolves.toMatchObject({ isbn: bookRef.isbn });
  });
});
