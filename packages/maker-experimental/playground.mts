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

/**
 * defineOacOntology playground — local-first OSDK app dev demo.
 *
 * Run from packages/maker-experimental:
 *   pnpm exec tsx playground.mts
 *
 * This file is a runnable narrative: define an airline ontology, stand
 * up a local FauxFoundry, and exercise the OSDK client end-to-end —
 * list, create via action, list again, delete via action, list once more.
 * Everything in one TS file. No codegen step.
 */

/* eslint-disable no-console */

import { setupAirlineE2E } from "./src/api/testUtils/airline-ontology.js";

const { ontology, client, apiServer } = await setupAirlineE2E();

try {
  console.log("\n=== Initial fleet ===");
  const fleet0 = await client(ontology.Airplane).fetchPage();
  for (const plane of fleet0.data) {
    console.log(
      `  ${plane.tailNumber}  ${plane.manufacturer} ${plane.model}  cap=${plane.capacity}  built=${plane.yearBuilt}`,
    );
  }

  console.log("\n=== Today's flights ===");
  const flights0 = await client(ontology.Flight).fetchPage();
  for (const f of flights0.data) {
    console.log(
      `  ${f.flightNumber}  ${f.departureCode} → ${f.arrivalCode}  on ${f.airplaneTailNumber}`,
    );
  }

  console.log("\n=== Filtering: flights departing JFK ===");
  const jfkDepartures = await client(ontology.Flight)
    .where({ departureCode: "JFK" })
    .fetchPage();
  for (const f of jfkDepartures.data) {
    console.log(`  ${f.flightNumber}  → ${f.arrivalCode}`);
  }

  console.log("\n=== Ordering: flights ordered by flightNumber asc ===");
  const ordered = await client(ontology.Flight)
    .fetchPage({ $orderBy: { flightNumber: "asc" } });
  for (const f of ordered.data) {
    console.log(`  ${f.flightNumber}`);
  }

  console.log("\n=== Aggregation: flight count by departure airport ===");
  const groups = await client(ontology.Flight).aggregate({
    $select: { $count: "unordered" },
    $groupBy: { departureCode: "exact" },
  });
  for (const g of groups) {
    console.log(`  ${g.$group.departureCode}: ${g.$count} flights`);
  }

  console.log("\n=== Link traversal: flights for N12345 ===");
  const planeN12345 = await client(ontology.Airplane).fetchOne("N12345");
  const planeFlights = await planeN12345.$link.flights.fetchPage();
  for (const f of planeFlights.data) {
    console.log(`  ${f.flightNumber}  ${f.departureCode} → ${f.arrivalCode}`);
  }

  console.log("\n=== Link traversal: airplane for AA100 ===");
  const aa100 = await client(ontology.Flight).fetchOne("AA100");
  const aa100Plane = await aa100.$link.airplane.fetchOne();
  console.log(
    `  AA100 is on ${aa100Plane.tailNumber}: ${aa100Plane.manufacturer} ${aa100Plane.model}`,
  );

  console.log("\n=== Scheduling new flight DL999 (JFK→ORD) ===");
  await client(ontology.scheduleFlight).applyAction({
    flightNumber: "DL999",
    scheduledDeparture: "2026-06-03T10:00:00Z",
    scheduledArrival: "2026-06-03T13:00:00Z",
    airplaneTailNumber: "N67890",
    departureCode: "JFK",
    arrivalCode: "ORD",
  });

  const flights1 = await client(ontology.Flight).fetchPage();
  console.log(`  schedule now has ${flights1.data.length} flights`);
  const dl999 = flights1.data.find(f => f.flightNumber === "DL999");
  if (dl999) {
    console.log(
      `  DL999  ${dl999.departureCode} → ${dl999.arrivalCode}  on ${dl999.airplaneTailNumber}`,
    );
  }

  console.log("\n=== Modify action: recordLanding for AA100 ===");
  await client(ontology.recordLanding).applyAction({
    objectToModifyParameter: "AA100",
    actualArrival: "2026-06-01T11:42:00Z",
  });
  const aa100After = await client(ontology.Flight).fetchOne("AA100");
  console.log(`  AA100 actualArrival: ${aa100After.actualArrival}`);

  console.log(
    "\n=== Many-to-many: airports served by American Airlines ===",
  );
  const american = await client(ontology.Airline).fetchOne("AA");
  const americanAirports = await american.$link.airports.fetchPage();
  console.log(
    `  AA serves: ${americanAirports.data.map(a => a.code).sort().join(", ")}`,
  );

  console.log("\n=== Many-to-many: airlines flying through JFK ===");
  const jfk = await client(ontology.Airport).fetchOne("JFK");
  const jfkAirlines = await jfk.$link.airlines.fetchPage();
  console.log(
    `  JFK hosts: ${jfkAirlines.data.map(a => a.iataCode).sort().join(", ")}`,
  );

  console.log("\n=== Property kinds (array / struct / marking) on N12345 ===");
  const n12345 = await client(ontology.Airplane).fetchOne("N12345");
  console.log(`  tags (array):           ${JSON.stringify(n12345.tags)}`);
  console.log(`  specs (struct):         ${JSON.stringify(n12345.specs)}`);
  console.log(`  classification (mark):  ${n12345.classification}`);

  console.log("\n=== Interface: Vehicle metadata via finalizeTypes ===");
  console.log(`  ontology.Vehicle.type:    ${ontology.Vehicle.type}`);
  console.log(`  ontology.Vehicle.apiName: ${ontology.Vehicle.apiName}`);

  console.log("\n=== Retiring airplane N12345 ===");
  await client(ontology.retireAirplane).applyAction({
    objectToDeleteParameter: "N12345",
  });

  const fleet1 = await client(ontology.Airplane).fetchPage();
  console.log(`  fleet now: ${fleet1.data.map(p => p.tailNumber).join(", ")}`);

  console.log("\n=== Type inference proof ===");
  const sample = await client(ontology.Airplane).fetchOne("N67890");
  const { tailNumber, model, capacity } = sample;
  console.log(`  typeof capacity: ${typeof capacity} (expect: number)`);
  console.log(`  ${tailNumber} is a ${model} with ${capacity} seats`);
} finally {
  apiServer.close();
}
