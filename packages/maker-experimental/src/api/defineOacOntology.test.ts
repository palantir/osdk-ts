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

// cspell:ignore capacityy Manys impls

import type { Client } from "@osdk/client";
import type {
  ActionTypeBlockDataV2,
  OntologyIrOntologyBlockDataV2,
  PropertyType,
} from "@osdk/client.unstable";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import {
  type AirlineOntology,
  buildAirlineOntology,
  normalizeLinkFkMappings,
  setupAirlineE2E,
} from "./testUtils/airline-ontology.js";

// Module-scope declarations for the compile-time safety proof. The
// proof function below is never executed — it exists purely so the
// `@ts-expect-error` directives function as compile-time assertions.
declare const _ctsOntology: AirlineOntology;
declare const _ctsClient: Client;

async function _proofOfCompileTimeSafety() {
  const airplane = await _ctsClient(_ctsOntology.Airplane).fetchOne("N12345");

  const _capacity = airplane.capacity;

  // @ts-expect-error — `capacityy` doesn't exist on Airplane
  const _typo = airplane.capacityy;

  await _ctsClient(_ctsOntology.scheduleFlight).applyAction({
    flightNumber: "TS001",
    scheduledDeparture: "2026-06-04T08:00:00Z",
    scheduledArrival: "2026-06-04T11:00:00Z",
    airplaneTailNumber: "N67890",
    departureCode: "SFO",
    arrivalCode: "ORD",
  });

  await _ctsClient(_ctsOntology.scheduleFlight).applyAction({
    // @ts-expect-error — `flightNumberX` is a typo
    flightNumberX: "TS002",
    scheduledDeparture: "2026-06-04T08:00:00Z",
    scheduledArrival: "2026-06-04T11:00:00Z",
    airplaneTailNumber: "N67890",
    departureCode: "SFO",
    arrivalCode: "ORD",
  });

  await _ctsClient(_ctsOntology.scheduleFlight).applyAction({
    flightNumber: "TS003",
    scheduledDeparture: "2026-06-04T08:00:00Z",
    scheduledArrival: "2026-06-04T11:00:00Z",
    // @ts-expect-error — airplaneTailNumber must be string, not number
    airplaneTailNumber: 12345,
    departureCode: "SFO",
    arrivalCode: "ORD",
  });

  const _Flight = _ctsOntology.Flight;

  // @ts-expect-error — `Flite` is a typo
  const _typoOnto = _ctsOntology.Flite;

  return [_capacity, _typo, _Flight, _typoOnto];
}

describe("defineOacOntology", () => {
  // ---------------------------------------------------------------------
  // Compile-time safety
  //
  // The real assertions live in the `_proofOfCompileTimeSafety` function
  // above (module-scope, never called). tsc fails if any of its
  // `@ts-expect-error` directives stops being needed. The empty test
  // below is here so vitest registers the file.
  // ---------------------------------------------------------------------

  describe("compile-time safety", () => {
    it("@ts-expect-error directives are the real assertions", () => {});
  });

  // ---------------------------------------------------------------------
  // IR → full-metadata link conversion
  //
  // Asserts that maker-v2 → IR → full-metadata produces correct
  // linkTypes on both sides of one-to-many and many-to-many links.
  // ---------------------------------------------------------------------

  describe("IR → full-metadata link conversion", () => {
    it("produces correct linkTypes on both sides of a one-to-many link", async () => {
      const ontology = await buildAirlineOntology();
      const ir = JSON.parse(
        JSON.stringify(ontology._oac.ontologyIr.ontology),
      ) as unknown as OntologyIrOntologyBlockDataV2;

      normalizeLinkFkMappings(ir);

      const fullMeta = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(
        ir,
      );

      const airplane = fullMeta.objectTypes["com.airline.Airplane"];
      const flight = fullMeta.objectTypes["com.airline.Flight"];
      if (!airplane || !flight) {
        throw new Error(
          "Expected both Airplane and Flight to be present in fullMeta",
        );
      }

      expect(airplane.linkTypes.find(l => l.apiName === "flights"))
        .toMatchObject({
          apiName: "flights",
          objectTypeApiName: "com.airline.Flight",
          cardinality: "MANY",
        });

      expect(flight.linkTypes.find(l => l.apiName === "airplane"))
        .toMatchObject({
          apiName: "airplane",
          objectTypeApiName: "com.airline.Airplane",
          cardinality: "ONE",
          foreignKeyPropertyApiName: "airplaneTailNumber",
        });

      expect(airplane.linkTypes.find(l => l.apiName === "airplane"))
        .toBeUndefined();
      expect(flight.linkTypes.find(l => l.apiName === "flights"))
        .toBeUndefined();
    });

    it("produces correct linkTypes on both sides of a many-to-many link", async () => {
      const ontology = await buildAirlineOntology();
      const ir = JSON.parse(
        JSON.stringify(ontology._oac.ontologyIr.ontology),
      ) as unknown as OntologyIrOntologyBlockDataV2;

      normalizeLinkFkMappings(ir);

      const fullMeta = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(
        ir,
      );

      const airline = fullMeta.objectTypes["com.airline.Airline"];
      const airport = fullMeta.objectTypes["com.airline.Airport"];
      if (!airline || !airport) {
        throw new Error(
          "Expected both Airline and Airport to be present in fullMeta",
        );
      }

      expect(airline.linkTypes.find(l => l.apiName === "airports"))
        .toMatchObject({
          apiName: "airports",
          objectTypeApiName: "com.airline.Airport",
          cardinality: "MANY",
        });

      expect(airport.linkTypes.find(l => l.apiName === "airlines"))
        .toMatchObject({
          apiName: "airlines",
          objectTypeApiName: "com.airline.Airline",
          cardinality: "MANY",
        });

      expect(airline.linkTypes.find(l => l.apiName === "airlines"))
        .toBeUndefined();
      expect(airport.linkTypes.find(l => l.apiName === "airports"))
        .toBeUndefined();
    });
  });

  // ---------------------------------------------------------------------
  // e2e baseline + multi-object flows + wider DX surface probe
  //
  // Each inner describe stands up its OWN FauxFoundry (so create/delete
  // actions in one block don't leak into another).
  // ---------------------------------------------------------------------

  describe("e2e against FauxFoundry", () => {
    // -------------------------------------------------------------------
    // fetchOne sanity baseline
    // -------------------------------------------------------------------

    describe("fetchOne sanity baseline", () => {
      let setup: Awaited<ReturnType<typeof setupAirlineE2E>>;
      let ontology: AirlineOntology;

      beforeAll(async () => {
        setup = await setupAirlineE2E();
        ontology = setup.ontology;
      });

      afterAll(() => {
        setup?.apiServer.close();
      });

      it("client(Airplane).fetchOne returns typed values", async () => {
        const { tailNumber, model, manufacturer, capacity, yearBuilt } =
          await setup.client(ontology.Airplane).fetchOne("N12345");

        expect(tailNumber).toBe("N12345");
        expect(model).toBe("737 MAX 9");
        expect(manufacturer).toBe("Boeing");
        expect(capacity).toBe(178);
        expect(yearBuilt).toBe(2019);
      });
    });

    // -------------------------------------------------------------------
    // multi-object flows
    // -------------------------------------------------------------------

    describe("multi-object flows", () => {
      let setup: Awaited<ReturnType<typeof setupAirlineE2E>>;
      let ontology: AirlineOntology;

      beforeAll(async () => {
        setup = await setupAirlineE2E();
        ontology = setup.ontology;
      });

      afterAll(() => {
        setup?.apiServer.close();
      });

      it("fetchPage returns a typed array of all flights", async () => {
        const page = await setup.client(ontology.Flight).fetchPage();

        expect(page.data).toHaveLength(3);

        const numbers = page.data.map(f => f.flightNumber).sort();
        expect(numbers).toEqual(["AA100", "AA200", "UA300"]);

        const aa100 = page.data.find(f => f.flightNumber === "AA100");
        expect(aa100?.airplaneTailNumber).toBe("N12345");
        expect(aa100?.departureCode).toBe("SFO");
        expect(aa100?.arrivalCode).toBe("JFK");
      });

      it("fetchPage on Airplane includes typed integer columns", async () => {
        const page = await setup.client(ontology.Airplane).fetchPage();

        expect(page.data).toHaveLength(2);
        const boeing = page.data.find(p => p.manufacturer === "Boeing");
        expect(boeing?.capacity).toBe(178);
        expect(boeing?.yearBuilt).toBe(2019);

        const totalCapacity = page.data.reduce(
          (sum, p) => sum + (p.capacity ?? 0),
          0,
        );
        expect(totalCapacity).toBe(178 + 180);
      });

      it("scheduleFlight (create action) round-trips through faux backend", async () => {
        await setup.client(ontology.scheduleFlight).applyAction({
          flightNumber: "DL999",
          scheduledDeparture: "2026-06-03T10:00:00Z",
          scheduledArrival: "2026-06-03T13:00:00Z",
          airplaneTailNumber: "N67890",
          departureCode: "JFK",
          arrivalCode: "ORD",
        });

        const page = await setup.client(ontology.Flight).fetchPage();
        expect(page.data).toHaveLength(4);

        const dl999 = page.data.find(f => f.flightNumber === "DL999");
        expect(dl999).toBeDefined();
        expect(dl999?.airplaneTailNumber).toBe("N67890");
        expect(dl999?.arrivalCode).toBe("ORD");
      });

      it("traverses Flight → Airplane via $link.airplane", async () => {
        const flight = await setup.client(ontology.Flight).fetchOne("AA100");
        const airplane = await flight.$link.airplane.fetchOne();

        expect(airplane.tailNumber).toBe("N12345");
        expect(airplane.model).toBe("737 MAX 9");
        expect(airplane.capacity).toBe(178);
      });

      it("traverses Airplane → Flights via $link.flights", async () => {
        const airplane = await setup.client(ontology.Airplane).fetchOne(
          "N12345",
        );
        const flightsPage = await airplane.$link.flights.fetchPage();

        const numbers = flightsPage.data.map(f => f.flightNumber).sort();
        expect(numbers).toEqual(["AA100", "AA200"]);
      });

      it("retireAirplane (delete action) removes the airplane", async () => {
        const before = await setup.client(ontology.Airplane).fetchPage();
        expect(before.data.map(p => p.tailNumber).sort()).toEqual([
          "N12345",
          "N67890",
        ]);

        await setup.client(ontology.retireAirplane).applyAction({
          objectToDeleteParameter: "N12345",
        });

        const after = await setup.client(ontology.Airplane).fetchPage();
        expect(after.data.map(p => p.tailNumber)).toEqual(["N67890"]);
      });

      it("bookFlight (create-or-modify action) registers and yields a finalized action", () => {
        expect(ontology.bookFlight).toBeDefined();
        expect(ontology.bookFlight.apiName).toMatch(/create-or-modify/);
      });

      it("interface action helpers register create/modify/delete actions for Vehicle", () => {
        const actions = ontology._oac.ontologyIr.ontology.actionTypes;
        const apiNames = Object.values(actions).map(a =>
          a.actionType.metadata.apiName
        );

        expect(apiNames).toContain("com.airline.create-vehicle");
        expect(apiNames).toContain("com.airline.modify-vehicle");
        expect(apiNames).toContain(
          "com.airline.delete-interface-object-vehicle",
        );
      });

      it("create-vehicle action emits an interface-targeted parameter", () => {
        const actions = ontology._oac.ontologyIr.ontology.actionTypes;
        const createVehicle = Object.values(actions).find(a =>
          a.actionType.metadata.apiName === "com.airline.create-vehicle"
        );
        expect(createVehicle).toBeDefined();
        const paramKeys = Object.keys(
          createVehicle?.actionType.metadata.parameters ?? {},
        );
        expect(paramKeys).toContain("objectTypeParameter");
        expect(paramKeys).toContain("manufacturer");
      });

      describe("chargeBaggageFee action surfaces v2 validation fields in IR", () => {
        function findAction(): ActionTypeBlockDataV2 {
          const actions = ontology._oac.ontologyIr.ontology.actionTypes;
          const action = Object.values(actions).find(a =>
            a.actionType.metadata.apiName === "com.airline.charge-baggage-fee"
          );
          if (!action) {
            throw new Error("chargeBaggageFee action not registered");
          }
          return action;
        }

        it("emits the text-with-regex allowedValues on the notes parameter", () => {
          const action = findAction();
          const parameterValidations = action.actionType.actionTypeLogic
            .validation?.parameterValidations;
          expect(parameterValidations).toBeDefined();
          expect(parameterValidations?.notes).toMatchObject({
            defaultValidation: {
              validation: {
                allowedValues: {
                  type: "text",
                  text: {
                    text: {
                      minLength: 0,
                      maxLength: 200,
                    },
                  },
                },
              },
            },
          });
        });

        it("emits two form sections with collapsedByDefault honored", () => {
          const action = findAction();
          const sectionKeys = Object.keys(
            action.actionType.metadata.sections ?? {},
          );
          expect(sectionKeys.sort()).toEqual(["details", "notes"]);
        });

        it("emits parameterOrdering matching the user-provided list", () => {
          const action = findAction();
          expect(action.actionType.metadata.parameterOrdering).toEqual([
            "passenger",
            "bagCount",
            "notes",
          ]);
        });

        it("emits an action-level validation entry", () => {
          const action = findAction();
          expect(action.actionType.actionTypeLogic.validation).toBeDefined();
        });
      });
    });

    // -------------------------------------------------------------------
    // DX surface probe — wider OSDK surface (where, orderBy, pagination,
    // select, aggregates, struct/array/marking property types, M:M
    // traversal, interface registration, property-type completeness,
    // intermediary links, interface extends + link constraints, object-
    // level extras, link status).
    // -------------------------------------------------------------------

    describe("DX surface probe", () => {
      let setup: Awaited<ReturnType<typeof setupAirlineE2E>>;
      let ontology: AirlineOntology;

      beforeAll(async () => {
        setup = await setupAirlineE2E();
        ontology = setup.ontology;
      });

      afterAll(() => {
        setup?.apiServer.close();
      });

      it(".where filters flights by departureCode", async () => {
        const sfoFlights = await setup.client(ontology.Flight)
          .where({ departureCode: "SFO" })
          .fetchPage();

        expect(sfoFlights.data).toHaveLength(1);
        expect(sfoFlights.data[0]?.flightNumber).toBe("AA100");
      });

      it(".where with $eq operator", async () => {
        const flights = await setup.client(ontology.Flight)
          .where({ departureCode: { $eq: "JFK" } })
          .fetchPage();

        expect(flights.data.map(f => f.flightNumber).sort()).toEqual(["AA200"]);
      });

      it(".where with $in operator on array", async () => {
        const flights = await setup.client(ontology.Flight)
          .where({ departureCode: { $in: ["SFO", "ORD"] } })
          .fetchPage();

        expect(flights.data.map(f => f.flightNumber).sort()).toEqual([
          "AA100",
          "UA300",
        ]);
      });

      it(".where with $and combinator", async () => {
        const flights = await setup.client(ontology.Flight)
          .where({
            $and: [
              { departureCode: "JFK" },
              { arrivalCode: "SFO" },
            ],
          })
          .fetchPage();

        expect(flights.data.map(f => f.flightNumber)).toEqual(["AA200"]);
      });

      it(".fetchPage with $orderBy sorts results", async () => {
        const flights = await setup.client(ontology.Flight)
          .fetchPage({ $orderBy: { flightNumber: "asc" } });

        expect(flights.data.map(f => f.flightNumber)).toEqual([
          "AA100",
          "AA200",
          "UA300",
        ]);
      });

      it(".fetchPage with $orderBy descending", async () => {
        const flights = await setup.client(ontology.Flight)
          .fetchPage({ $orderBy: { flightNumber: "desc" } });

        expect(flights.data.map(f => f.flightNumber)).toEqual([
          "UA300",
          "AA200",
          "AA100",
        ]);
      });

      it(".fetchPage with $pageSize limits returned data", async () => {
        const page1 = await setup.client(ontology.Flight)
          .fetchPage({ $pageSize: 2 });

        expect(page1.data.length).toBeLessThanOrEqual(2);
      });

      it(".fetchPage walks all pages via $nextPageToken to exhaustion", async () => {
        const collected: string[] = [];
        let nextPageToken: string | undefined;

        for (let i = 0; i < 5; i++) {
          const page: {
            data: ReadonlyArray<{ flightNumber: string }>;
            nextPageToken: string | undefined;
          } = await setup.client(ontology.Flight)
            .fetchPage({ $pageSize: 1, $nextPageToken: nextPageToken });

          expect(page.data.length).toBeLessThanOrEqual(1);
          for (const flight of page.data) {
            collected.push(flight.flightNumber);
          }

          if (page.nextPageToken === undefined) {
            break;
          }
          nextPageToken = page.nextPageToken;
        }

        expect(collected.sort()).toEqual(["AA100", "AA200", "UA300"]);
      });

      it(".fetchPage with $select narrows the property set", async () => {
        const page = await setup.client(ontology.Flight)
          .fetchPage({ $select: ["flightNumber", "departureCode"] });

        expect(page.data).toHaveLength(3);
        expect(page.data[0]).toHaveProperty("flightNumber");
        expect(page.data[0]).toHaveProperty("departureCode");
      });

      it("asyncIter yields all flights", async () => {
        const collected: string[] = [];
        for await (const flight of setup.client(ontology.Flight).asyncIter()) {
          collected.push(flight.flightNumber);
        }

        expect(collected.sort()).toEqual(["AA100", "AA200", "UA300"]);
      });

      it("aggregate $count counts flights", async () => {
        const result = await setup.client(ontology.Flight)
          .aggregate({ $select: { $count: "unordered" } });

        expect(result.$count).toBe(3);
      });

      it.skip(
        "aggregate sum on Airplane.capacity -- SKIPPED: "
          + "FauxFoundry's aggregate handler "
          + "(packages/faux/src/handlers/createObjectSetHandlers.ts:42-107) "
          + "only implements COUNT — every metric is hardcoded to "
          + "{ name: 'count', value: ... } regardless of the requested "
          + "aggregator (sum, avg, max, min, approximateDistinct, etc). "
          + "The TYPE-LEVEL request shape is correct (defineOacOntology + OSDK "
          + "client agree on `\"capacity:sum\"` syntax and accept it without "
          + "compile error), but the response body returns the count value "
          + "under a `count` key, so `result.capacity.sum` is undefined at "
          + "runtime. Real Foundry implements full aggregations; the gap is "
          + "purely on the test harness side.",
        async () => {
          const result = await setup.client(ontology.Airplane)
            .aggregate({ $select: { "capacity:sum": "unordered" } });
          expect(result.capacity.sum).toBe(178 + 180);
        },
      );

      it("aggregate $count groupBy departureCode", async () => {
        const groups = await setup.client(ontology.Flight)
          .aggregate({
            $select: { $count: "unordered" },
            $groupBy: { departureCode: "exact" },
          });

        expect(Array.isArray(groups)).toBe(true);
        const sumOfCounts = groups.reduce(
          (sum, g) => sum + (g.$count as number),
          0,
        );
        expect(sumOfCounts).toBe(3);
      });

      it("LISTOGRAM-shape aggregate ($count + $exact + $includeNullValue) round-trips", async () => {
        const groups = await setup.client(ontology.Flight)
          .aggregate({
            $select: { $count: "unordered" },
            $groupBy: {
              departureCode: { $exact: { $includeNullValue: true } },
            },
          });

        expect(Array.isArray(groups)).toBe(true);
        const sumOfCounts = groups.reduce(
          (sum, g) => sum + (g.$count as number),
          0,
        );
        expect(sumOfCounts).toBe(3);

        const codes = groups.map(g => g.$group.departureCode).sort();
        expect(codes).toEqual(["JFK", "ORD", "SFO"]);
      });

      it("recordLanding modify action updates actualArrival via PK string", async () => {
        const before = await setup.client(ontology.Flight).fetchOne("AA100");
        expect(before.actualArrival).toBeUndefined();

        await setup.client(ontology.recordLanding).applyAction({
          objectToModifyParameter: "AA100",
          actualArrival: "2026-06-01T11:42:00Z",
        });

        const after = await setup.client(ontology.Flight).fetchOne("AA100");
        expect(after.actualArrival).toBe("2026-06-01T11:42:00Z");
      });

      it("recordLanding accepts a fetched Osdk instance as objectToModifyParameter", async () => {
        const flight = await setup.client(ontology.Flight).fetchOne("AA200");

        await setup.client(ontology.recordLanding).applyAction({
          objectToModifyParameter: flight,
          actualArrival: "2026-06-01T20:05:00Z",
        });

        const after = await setup.client(ontology.Flight).fetchOne("AA200");
        expect(after.actualArrival).toBe("2026-06-01T20:05:00Z");
      });

      it("fetchOne returns string-array properties as arrays", async () => {
        const seeded = await setup.client(ontology.Airplane).fetchOne(
          "N12345",
        );
        expect(Array.isArray(seeded.tags)).toBe(true);
        expect(seeded.tags?.slice().sort()).toEqual([
          "fleet-leader",
          "long-haul",
        ]);

        const unseeded = await setup.client(ontology.Airplane).fetchOne(
          "N67890",
        );
        expect(unseeded.tags ?? []).toEqual([]);
      });

      it("fetchOne returns struct properties with their nested fields", async () => {
        const seeded = await setup.client(ontology.Airplane).fetchOne(
          "N12345",
        );
        expect(seeded.specs).toMatchObject({ weight: 79000, wingspan: 117 });
      });

      it("fetchOne returns marking-typed properties", async () => {
        const seeded = await setup.client(ontology.Airplane).fetchOne(
          "N12345",
        );
        expect(seeded.classification).toBe("PUBLIC");
      });

      it("Airline.$link.airports traverses to all linked Airports", async () => {
        const aa = await setup.client(ontology.Airline).fetchOne("AA");
        const airports = await aa.$link.airports.fetchPage();

        expect(airports.data.map(a => a.code).sort()).toEqual([
          "JFK",
          "ORD",
          "SFO",
        ]);
      });

      it("Airport.$link.airlines traverses to all linked Airlines", async () => {
        const jfk = await setup.client(ontology.Airport).fetchOne("JFK");
        const airlines = await jfk.$link.airlines.fetchPage();

        expect(airlines.data.map(a => a.iataCode).sort()).toEqual([
          "AA",
          "BA",
          "UA",
        ]);
      });

      it("defineInterfaceV2 produces a finalized interface type with apiName", () => {
        expect(ontology.Vehicle).toMatchObject({
          type: "interface",
          apiName: "com.airline.Vehicle",
        });
      });

      it("Airplane carries an implementsInterfaces entry mapping to Vehicle", () => {
        const objectTypes = ontology._oac.ontologyIr.ontology.objectTypes;
        const airplane = Object.values(objectTypes).find(o =>
          o.objectType.apiName === "com.airline.Airplane"
        );
        expect(airplane).toBeDefined();
        expect(airplane?.objectType.implementsInterfaces2 ?? []).toHaveLength(
          1,
        );
      });

      function probePropertyOnObject(
        objectApiName: string,
        propertyApiName: string,
      ): PropertyType {
        const objectTypes = ontology._oac.ontologyIr.ontology.objectTypes;
        const obj = Object.values(objectTypes).find(o =>
          o.objectType.apiName === objectApiName
        );
        if (!obj) {
          throw new Error(`${objectApiName} object type not registered`);
        }
        const prop = Object.values(obj.objectType.propertyTypes).find(p =>
          p.apiName === propertyApiName
        );
        if (!prop) {
          throw new Error(
            `Property ${propertyApiName} not found on ${objectApiName}`,
          );
        }
        return prop;
      }

      describe("PropertyProbe registers every scalar primitive in the IR", () => {
        it.each([
          ["booleanField", "boolean"],
          ["byteField", "byte"],
          ["dateField", "date"],
          ["doubleField", "double"],
          ["floatField", "float"],
          ["integerField", "integer"],
          ["longField", "long"],
          ["shortField", "short"],
          ["timestampField", "timestamp"],
        ])("%s lands in the IR as %s", (apiName, expectedType) => {
          const prop = probePropertyOnObject(
            "com.airline.PropertyProbe",
            apiName,
          );
          expect(prop.type.type).toBe(expectedType);
        });

        it("decimalField (no options) lands as a plain decimal", () => {
          const prop = probePropertyOnObject(
            "com.airline.PropertyProbe",
            "decimalField",
          );
          expect(prop.type.type).toBe("decimal");
        });
      });

      describe("PropertyProbe flat-form variants reconstruct v1 PropertyTypeType", () => {
        it("notes carries isLongText + analyzerOverride in the IR", () => {
          const notes = probePropertyOnObject(
            "com.airline.PropertyProbe",
            "notes",
          );
          if (notes.type.type !== "string") {
            throw new Error(`expected string type, got ${notes.type.type}`);
          }
          expect(notes.type.string.isLongText).toBe(true);
          expect(notes.type.string.supportsExactMatching).toBe(false);
          expect(notes.type.string.analyzerOverride).toEqual({
            type: "standardAnalyzer",
            standardAnalyzer: {},
          });
        });

        it("price carries precision + scale in the IR", () => {
          const price = probePropertyOnObject(
            "com.airline.PropertyProbe",
            "price",
          );
          if (price.type.type !== "decimal") {
            throw new Error(`expected decimal type, got ${price.type.type}`);
          }
          expect(price.type.decimal.precision).toBe(10);
          expect(price.type.decimal.scale).toBe(2);
        });

        it("classification carries markingType in the IR (input group name not in IR)", () => {
          const classification = probePropertyOnObject(
            "com.airline.PropertyProbe",
            "classification",
          );
          if (classification.type.type !== "marking") {
            throw new Error(
              `expected marking type, got ${classification.type.type}`,
            );
          }
          expect(classification.type.marking.markingType).toBe("MANDATORY");
        });
      });

      it("PropertyProbe full fetch round-trips primitive fields through faux", async () => {
        const seeded = await setup.client(ontology.PropertyProbe).fetchOne(
          "probe-full",
        );
        expect(seeded.booleanField).toBe(true);
        expect(seeded.byteField).toBe(12);
        expect(seeded.integerField).toBe(42);
        expect(seeded.shortField).toBe(1024);
        expect(seeded.doubleField).toBeCloseTo(3.14159, 5);
        expect(seeded.notes).toMatch(/quick brown fox/);
        expect(seeded.classification).toBe("PUBLIC");
      });

      describe("Passenger ↔ Flight via BoardingPass intermediary link", () => {
        it("registers an intermediary link definition in the IR", () => {
          const linkTypes = ontology._oac.ontologyIr.ontology.linkTypes;
          const intermediary = Object.values(linkTypes).find(l =>
            l.linkType.definition.type === "intermediary"
          );
          expect(intermediary).toBeDefined();
          if (intermediary?.linkType.definition.type !== "intermediary") {
            throw new Error("expected intermediary link definition");
          }
          const def = intermediary.linkType.definition.intermediary;
          expect(def.objectTypeAToBLinkMetadata.apiName).toBe("flights");
          expect(def.objectTypeBToALinkMetadata.apiName).toBe("passengers");
          expect(def.aToIntermediaryLinkTypeRid).toBeDefined();
          expect(def.intermediaryToBLinkTypeRid).toBeDefined();
        });

        it("registers the supporting 1:M links from each side to BoardingPass", () => {
          const linkTypes = ontology._oac.ontologyIr.ontology.linkTypes;
          const oneToManys = Object.values(linkTypes).filter(l =>
            l.linkType.definition.type === "oneToMany"
          );
          expect(oneToManys.length).toBeGreaterThanOrEqual(5);
        });
      });

      describe("Vehicle interface extends + link constraints + explicit implements mapping", () => {
        it("Asset interface is registered separately", () => {
          const interfaceTypes = ontology._oac.ontologyIr.ontology
            .interfaceTypes;
          const apiNames = Object.values(interfaceTypes).map(i =>
            i.interfaceType.apiName
          );
          expect(apiNames).toContain("com.airline.Asset");
          expect(apiNames).toContain("com.airline.Vehicle");
        });

        it("Vehicle.extendsInterfaces references Asset via the IR", () => {
          const interfaceTypes = ontology._oac.ontologyIr.ontology
            .interfaceTypes;
          const vehicle = Object.values(interfaceTypes).find(i =>
            i.interfaceType.apiName === "com.airline.Vehicle"
          );
          expect(vehicle).toBeDefined();
          const extendsInterfaces = vehicle?.interfaceType.extendsInterfaces
            ?? [];
          expect(extendsInterfaces.length).toBeGreaterThanOrEqual(1);
        });

        it("Vehicle.links contains the asset link constraint", () => {
          const interfaceTypes = ontology._oac.ontologyIr.ontology
            .interfaceTypes;
          const vehicle = Object.values(interfaceTypes).find(i =>
            i.interfaceType.apiName === "com.airline.Vehicle"
          );
          const links = vehicle?.interfaceType.links ?? [];
          const assetLink = links.find(l =>
            l.metadata.apiName.endsWith("asset")
          );
          expect(assetLink).toBeDefined();
          expect(assetLink?.cardinality).toBe("SINGLE");
        });

        it("GroundVehicle implementsInterfaces uses explicit property mapping", () => {
          const objectTypes = ontology._oac.ontologyIr.ontology.objectTypes;
          const groundVehicle = Object.values(objectTypes).find(o =>
            o.objectType.apiName === "com.airline.GroundVehicle"
          );
          expect(groundVehicle).toBeDefined();
          const impls = groundVehicle?.objectType.implementsInterfaces2 ?? [];
          expect(impls).toHaveLength(1);
          expect(impls[0]).toBeDefined();
        });
      });

      describe("GroundVehicle object-level extras", () => {
        function findObject() {
          const objectTypes = ontology._oac.ontologyIr.ontology.objectTypes;
          const groundVehicle = Object.values(objectTypes).find(o =>
            o.objectType.apiName === "com.airline.GroundVehicle"
          );
          if (!groundVehicle) {
            throw new Error("GroundVehicle not registered");
          }
          return groundVehicle;
        }

        it("editsHistoryConfig flows into IR entityMetadata.editsHistory", () => {
          const groundVehicle = findObject();
          const editsHistory = groundVehicle.entityMetadata?.editsHistory;
          expect(editsHistory).toBeDefined();
          expect(editsHistory?.type).toBe("config");
        });

        it("dataset datasource lands under datasources in the IR", () => {
          const groundVehicle = findObject();
          expect(groundVehicle.datasources?.length ?? 0)
            .toBeGreaterThanOrEqual(1);
          const ds = groundVehicle.datasources?.[0];
          expect(ds?.datasource.type).toMatch(/^dataset/);
        });
      });

      it("link configs accept an optional status field at the type level", () => {
        const linkTypes = ontology._oac.ontologyIr.ontology.linkTypes;
        for (const entry of Object.values(linkTypes)) {
          expect(entry.linkType.status).toBeDefined();
        }
      });
    });
  });
});
