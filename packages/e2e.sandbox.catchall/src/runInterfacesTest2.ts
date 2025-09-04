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
import {
  Athlete,
  CollateralConcernCandidate,
  EsongInterfaceA,
  NbaPlayer,
} from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { dsClient } from "./client.js";

export async function runInterfacesTest2(): Promise<void> {
  console.log("here");
  const athletes = await dsClient(Athlete).where({
    name22: { $eq: "Michael Jordan" },
  }).fetchPage({ $includeAllBaseObjectProperties: true });
  console.log("here2");

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

  // interface to interface
  const concernCandidates2 = await dsClient(CollateralConcernCandidate)
    .fetchPage();
  const concernList2 = await dsClient(CollateralConcernCandidate).pivotTo(
    "com.palantir.pcl.civpro.collateral-concern-core.collateralConcernEntityToList",
  ).fetchPage();
  const singleLink = await concernCandidates2.data[0]
    .$link[
      "com.palantir.pcl.civpro.collateral-concern-core.collateralConcernEntityToList"
    ].fetchPage();
  console.log("concern candidates", concernCandidates2.data);
  console.log("linked list entities", concernList2.data);
  console.log("tried link instance impl", singleLink);

  // interface to object
  const pds = await dsClient(EsongInterfaceA).pivotTo("esongPds").fetchPage();

  console.log("linkedPds ticket: ", pds.data);

  const interfaceA = await dsClient(EsongInterfaceA).fetchPage();
  console.log("interfaceA instances: ", interfaceA);

  const huh3 = await interfaceA.data[0].$link.esongPds.fetchPage();

  console.log(
    "lets try $link",
    await interfaceA.data[0].$link.esongPds.fetchPage(),
  );
}

void runInterfacesTest2();
