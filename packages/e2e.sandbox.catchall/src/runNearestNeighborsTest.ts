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

import { MatthewvsDevOrderEmbedding } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import { client } from "./client.js";
import { assertThrowsExpectedError } from "./errorChecks.js";

export async function runNearestNeighborsTest(): Promise<void> {
  // Fetch 10 orders related to 'coffee'
  const result = await client(MatthewvsDevOrderEmbedding).nearestNeighbors(
    "coffee",
    10,
    "embedding",
  ).fetchPage();
  console.log("(fetchPage) 10 nearest neighbors to \"coffee\":");
  result.data.map(s => console.log(s.orderTitle));

  // Fetch page with errors
  console.log("(fetchPageWithErrors) 10 nearest neighbors to \"coffee\":");
  const resultWithErrors = await client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors("coffee", 10, "embedding").fetchPageWithErrors();
  invariant(resultWithErrors.value !== undefined);
  resultWithErrors.value.data.map(s => console.log(s.orderTitle));

  // Sort by relevance (and show score)
  const resultOrderedByRelevance = await client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors("coffee", 10, "embedding").fetchPage({
      $orderBy: "relevance",
    });
  resultOrderedByRelevance.data.map(s => {
    invariant(s.$score !== undefined);
    console.log(s.orderTitle, s.$score);
  });

  // Ensure regular ordering still works
  const resultOrdered = await client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors("coffee", 10, "embedding").fetchPage({
      $orderBy: { "orderTitle": "desc" },
    });
  resultOrdered.data.map(s => {
    invariant(s.$score === undefined);
    console.log(s.orderTitle);
  });

  // Test nearestNeighbor query on a property without an embedding (orderTitle)
  await assertThrowsExpectedError(
    "PropertyTypeDoesNotSupportNearestNeighbors",
    // @ts-ignore
    () =>
      client(MatthewvsDevOrderEmbedding).nearestNeighbors(
        "coffee",
        10,
        "orderTitle",
      ).fetchPage(),
  );

  // Test querying too many neighbors
  const MAX_NEIGHBORS = 500;
  await assertThrowsExpectedError(
    "TooManyNearestNeighborsRequested",
    () =>
      client(MatthewvsDevOrderEmbedding).nearestNeighbors(
        "coffee",
        MAX_NEIGHBORS + 1,
        "embedding",
      ).fetchPage(),
  );
}

void runNearestNeighborsTest();
