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
import { assertThrowsExpectedError } from "./errorCheck.js";

function validateCount<T>(expected: number, actual: T[]) {
  invariant(
    actual.length === expected,
    `Expected ${expected} results, got ${actual.length}`,
  );
}

export async function runNearestNeighborsTest(): Promise<void> {
  const MAX_NEIGHBORS = 500;
  const EMBEDDING_PROPERTY_VECTOR_SIZE = 1536;

  // Fetch 10 orders related to 'coffee'
  const result = await client(MatthewvsDevOrderEmbedding).nearestNeighbors(
    "coffee",
    10,
    "embedding",
  ).fetchPage();
  result.data.forEach(s => console.log(s.orderTitle));
  validateCount(10, result.data);
  //
  const asyncIter = client(MatthewvsDevOrderEmbedding).nearestNeighbors(
    "coffee",
    10,
    "embedding",
  ).asyncIter({$orderBy: "relevance"})
  // .asyncIter({$orderBy: "relevance"})

  for await(const obj of asyncIter) {
    console.log(obj)
  }

  // Fetch page with errors
  const { value: resultWithErrors } = await client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors("coffee", 10, "embedding").fetchPageWithErrors();
  invariant(
    resultWithErrors !== undefined,
    "Expected resultWithErrors to be defined",
  );
  validateCount(10, resultWithErrors.data);

  // Ensure regular ordering still works
  const { data: resultOrdered } = await client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors("coffee", 10, "embedding").fetchPage({
      $orderBy: { "orderTitle": "desc" },
    });
  validateCount(10, resultOrdered);

  // Vector query
  const { data: vectorQuery } = await client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors(
      Array.from({ length: EMBEDDING_PROPERTY_VECTOR_SIZE }, () => 0.3),
      10,
      "embedding",
    ).fetchPage();
  validateCount(10, vectorQuery);

  // nested nearest neighbors
  const nestedResult = client(MatthewvsDevOrderEmbedding)
    .nearestNeighbors("coffee", 10, "embedding")
    .nearestNeighbors("coffee", 5, "embedding")
    .nearestNeighbors("coffee", 2, "embedding")
    .fetchPage();

  const { data: res } = await nestedResult;
  validateCount(2, res);

  // nearestNeighbor query on a property without an embedding (orderTitle)
  await assertThrowsExpectedError(
    "PropertyTypeDoesNotSupportNearestNeighbors",
    () =>
      client(MatthewvsDevOrderEmbedding).nearestNeighbors(
        "coffee",
        10,
        // @ts-expect-error
        "orderTitle",
      ).fetchPage(),
  );

  // Querying too many neighbors
  await assertThrowsExpectedError(
    "TooManyNearestNeighborsRequested",
    () =>
      client(MatthewvsDevOrderEmbedding).nearestNeighbors(
        "coffee",
        MAX_NEIGHBORS + 1,
        "embedding",
      ).fetchPage(),
  );

  // Invalid query vector
  await assertThrowsExpectedError(
    "InvalidVectorDimension",
    () =>
      client(MatthewvsDevOrderEmbedding).nearestNeighbors(
        Array.from({ length: EMBEDDING_PROPERTY_VECTOR_SIZE - 1 }, () => 0.3),
        10,
        "embedding",
      ).fetchPage(),
  );
}

void runNearestNeighborsTest();
