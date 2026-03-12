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

import { McAirportStruct } from "@osdk/e2e.generated.catchall";
import { dsClient } from "./client.js";

async function tryStructTest<T>(
  name: string,
  fn: () => Promise<T>,
): Promise<T | undefined> {
  try {
    return await fn();
  } catch (e) {
    const error = e as { parameters?: { unknownField?: string } };
    if (error.parameters?.unknownField === "propertyIdentifier") {
      console.log(
        `  [SKIPPED] ${name} - Backend does not yet support propertyIdentifier for struct fields`,
      );
      return undefined;
    }
    throw e;
  }
}

export async function runStructAggregationsTest(): Promise<void> {
  console.log("\n=== Testing aggregations with struct groups ===");
  const countWithStructGroup = await tryStructTest(
    "struct groupBy",
    async () =>
      dsClient(McAirportStruct)
        .aggregate({
          $select: {
            $count: "unordered",
          },
          $groupBy: {
            airportStruct: { code: "exact" },
          },
        }),
  );
  if (countWithStructGroup) {
    console.log("Count with struct group (airportStruct.code):");
    console.log(countWithStructGroup);
  }

  console.log("\n=== Testing aggregations with struct group and limit ===");
  const countWithStructGroupLimit = await tryStructTest(
    "struct groupBy with limit",
    async () =>
      dsClient(McAirportStruct)
        .aggregate({
          $select: {
            $count: "unordered",
          },
          $groupBy: {
            airportStruct: { geoHash: { $exactWithLimit: 5 } },
          },
        }),
  );
  if (countWithStructGroupLimit) {
    console.log(
      "Count with struct group limited to 5 (airportStruct.geoHash):",
    );
    console.log(countWithStructGroupLimit);
  }

  console.log("\n=== Testing aggregations with struct property select ===");
  const aggWithStructSelect = await tryStructTest(
    "struct property select",
    async () =>
      dsClient(McAirportStruct)
        .aggregate({
          $select: {
            $count: "unordered",
            airportStruct: { "code:exactDistinct": "unordered" },
          },
        }),
  );
  if (aggWithStructSelect) {
    console.log("Aggregation with struct property select:");
    console.log(`  Count: ${aggWithStructSelect.$count}`);
    console.log(
      `  Approximate distinct airportStruct.code: ${aggWithStructSelect.airportStruct.code.exactDistinct}`,
    );
  }

  console.log(
    "\n=== Testing aggregations with struct property select and struct group ===",
  );
  const aggWithStructSelectAndGroup = await tryStructTest(
    "struct select and groupBy",
    async () =>
      dsClient(McAirportStruct)
        .aggregate({
          $select: {
            $count: "unordered",
            airportStruct: { "geoHash:exactDistinct": "desc" },
          },
          $groupBy: {
            airportStruct: { code: "exact" },
          },
        }),
  );
  if (aggWithStructSelectAndGroup) {
    console.log("Aggregation with struct property select and struct group:");
    for (const group of aggWithStructSelectAndGroup) {
      console.log(
        `  code: ${group.$group.airportStruct.code}, count: ${group.$count}, distinctGeoHash: ${group.airportStruct.geoHash.exactDistinct}`,
      );
    }
  }

  console.log("\n=== Testing mixed groups (struct and non-struct) ===");
  const mixedGroups = await tryStructTest(
    "mixed groups",
    async () =>
      dsClient(McAirportStruct)
        .aggregate({
          $select: {
            $count: "unordered",
          },
          $groupBy: {
            state: "exact",
            airportStruct: { code: { $exactWithLimit: 10 } },
          },
        }),
  );
  if (mixedGroups) {
    console.log("Aggregation with mixed groups (state + airportStruct.code):");
    for (const group of mixedGroups.slice(0, 5)) {
      console.log(
        `  state: ${group.$group.state}, code: ${group.$group.airportStruct.code}, count: ${group.$count}`,
      );
    }
    if (mixedGroups.length > 5) {
      console.log(`  ... and ${mixedGroups.length - 5} more groups`);
    }
  }

  console.log("\n=== All struct aggregation tests completed ===");
}

void runStructAggregationsTest();
