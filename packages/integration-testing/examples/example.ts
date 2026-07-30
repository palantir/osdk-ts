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

import { Book, rentedBooks } from "@ontology/sdk";
import om from "@ontology/sdk/EXPERIMENTAL_DO_NOT_USE/ontology-metadata";
import { createSeedWithMetadata } from "@osdk/seed-helpers";
import { test as baseTest, expect } from "vitest";

const baseSeed = createSeedWithMetadata(om, (seed) => {
  const bookRef = seed.create(Book, {
    id: randomUUID(),
    title: "Example Book",
    author: "Example Author",
    isbn: "000-0-00-000000-0",
  });
  return { bookRef };
});

const test = baseTest
  .extend("server", { scope: "worker" }, async ({}, { onCleanup }) => {
    const server = await createIntegrationServer({
      metadata,
    });
    await server.start();
    onCleanup(async () => await server.stop());
    return server;
  })
  .extend(
    "integration",
    { scope: "worker" },
    async ({ server }) => await server.createClient()
  );

test.describe("example", () => {
  test.beforeEach(async ({ integration }) => {
    await integration.seed(baseSeed[0]);
  });
  test("List books (mocked query)", async ({ integration }) => {
    const bookRef = baseSeed[1];
    integration.client.whenQuery(rentedBooks).thenReturn([bookRef]);
    const res = await integration.client(rentedBooks).executeFunction();
    expect(res.length).toBe(1);
    expect(res.at(0)).toBe(bookRef);
  });
  test("List books (re-seed)", async ({ integration }) => {
    const bookRef = await integration.seed((seed) => {
      return seed.create(Book, {
        id: randomUUID(),
        title: "Title",
        author: "Author",
        isbn: "000-0-00-000000-1",
      });
    });
    const res = await integration.client(Book).fetchOne(bookRef.id);
    expect(res.isbn).toBe(bookRef.isbn);
  });
});
