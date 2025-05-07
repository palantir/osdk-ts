/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Osdk } from "@osdk/api";
import { Athlete, NbaPlayer } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { dsClient } from "./client.js";

export async function runInterfacesTest2(): Promise<void> {
  const athletes = await dsClient(Athlete).where({
    name22: { $eq: "Michael Jordan" },
  }).fetchPage({ $includeAllBaseObjectProperties: true });

  invariant(athletes.data.length > 0);

  const athlete1 = athletes.data[0];
  console.log("interface scoped: ", athlete1);

  const nbaPlayer = athlete1.$as(NbaPlayer);
  console.log("object scoped should have all properties: ", nbaPlayer);

  expectType<
    TypeOf<
      Osdk.Instance<NbaPlayer>,
      typeof nbaPlayer
    >
  >(true);

  const athletesSelected = await dsClient(Athlete).where({
    name22: { $eq: "Michael Jordan" },
  }).fetchPage({
    $select: ["athleteId", "jerseyNumber", "name22"],
    $includeAllBaseObjectProperties: true,
  });

  invariant(athletesSelected.data.length > 0);
  const athleteSelected1 = athletesSelected.data[0];
  console.log("again interface scoped: ", athleteSelected1);

  const nbaPlayer1 = athleteSelected1.$as(NbaPlayer);
  console.log("object scoped should have only selected: ", nbaPlayer1);

  expectType<
    TypeOf<
      Osdk.Instance<NbaPlayer, never, "id">,
      typeof nbaPlayer1
    >
  >(true);

  // You cannot specify both $select and $includeAllBaseObjectProperties
  const athletesNotAllSelected = await dsClient(Athlete).where({
    name22: { $eq: "Michael Jordan" },
  }).fetchPage({
    $select: ["athleteId", "name22"],
    // @ts-expect-error
    $includeAllBaseObjectProperties: true,
  });
}

void runInterfacesTest2();
