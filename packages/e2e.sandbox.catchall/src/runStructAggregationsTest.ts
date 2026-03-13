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

export async function runStructAggregationsTest(): Promise<void> {
  console.log("=== Testing aggregations with struct groups ===");
  const countWithStructGroup = await dsClient(McAirportStruct)
    .aggregate({
      $select: {
        $count: "unordered",
      },
      $groupBy: {
        airportStruct: { code: "exact" },
      },
    });

  console.log("Count with struct group (airportStruct.code):");
  console.log(countWithStructGroup);

  console.log("=== Testing aggregations with struct group and limit ===");
  const countWithStructGroupLimit = await dsClient(McAirportStruct)
    .aggregate({
      $select: {
        $count: "unordered",
      },
      $groupBy: {
        airportStruct: { geoHash: { $exactWithLimit: 5 } },
      },
    });
  console.log(
    "Count with struct group limited to 5 (airportStruct.geoHash):",
  );
  console.log(countWithStructGroupLimit);

  console.log("=== Testing aggregations with struct property select ===");
  const aggWithStructSelect = await dsClient(McAirportStruct)
    .aggregate({
      $select: {
        $count: "unordered",
        airportStruct: { "code:exactDistinct": "unordered" },
      },
    });
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
  const aggWithStructSelectAndGroup = await dsClient(McAirportStruct)
    .aggregate({
      $select: {
        $count: "unordered",
        airportStruct: { "geoHash:exactDistinct": "desc" },
      },
      $groupBy: {
        airportStruct: { code: "exact" },
      },
    });

  console.log("Aggregation with struct property select and struct group:");
  for (const group of aggWithStructSelectAndGroup) {
    console.log(
      `  code: ${group.$group.airportStruct.code}, count: ${group.$count}, distinctGeoHash: ${group.airportStruct.geoHash.exactDistinct}`,
    );
  }

  console.log("=== Testing mixed groups (struct and non-struct) ===");
  const mixedGroups = await dsClient(McAirportStruct)
    .aggregate({
      $select: {
        $count: "unordered",
      },
      $groupBy: {
        state: "exact",
        airportStruct: { code: { $exactWithLimit: 10 } },
      },
    });
  console.log("Aggregation with mixed groups (state + airportStruct.code):");
  for (const group of mixedGroups.slice(0, 5)) {
    console.log(
      `  state: ${group.$group.state}, code: ${group.$group.airportStruct.code}, count: ${group.$count}`,
    );
  }
  console.log(`  ... and ${mixedGroups.length - 5} more groups`);

  console.log("\n=== All struct aggregation tests completed ===");
}

void runStructAggregationsTest();
