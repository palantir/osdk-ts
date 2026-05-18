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

import type { Client } from "@osdk/client";
import { createClient } from "@osdk/client";
import type { OntologyIrOntologyBlockDataV2 } from "@osdk/client.unstable";
import type { FauxActionImpl } from "@osdk/faux";
import { FauxFoundry } from "@osdk/faux";
import { OntologyIrToFullMetadataConverter } from "@osdk/generator-converters.ontologyir";
import {
  defineActionV2,
  defineCreateInterfaceObjectActionV2,
  defineCreateObjectActionV2,
  defineCreateOrModifyObjectActionV2,
  defineDeleteInterfaceObjectActionV2,
  defineDeleteObjectActionV2,
  defineInterfaceLinkConstraintV2,
  defineInterfaceV2,
  defineLinkV2,
  defineModifyInterfaceObjectActionV2,
  defineModifyObjectActionV2,
  defineObjectV2,
} from "@osdk/maker";
import { startNodeApiServer } from "@osdk/shared.test";
import { defineOacOntology } from "../defineOacOntology.js";

/**
 * Build the Airline ontology used by the OAC e2e tests.
 *
 * Implementation is unexported so its full generic return type is inferred;
 * `AirlineOntology` is derived from that inference for the exported
 * `buildAirlineOntology` wrapper. The exported wrapper carries an explicit
 * return type only to satisfy `--isolatedDeclarations`.
 */
async function buildAirlineOntologyImpl() {
  return await defineOacOntology({
    namespace: "com.airline.",
    build: () => {
      // Asset is the parent interface that Vehicle extends. Used to
      // probe the interface `extends` chain.
      const Asset = defineInterfaceV2({
        apiName: "Asset",
        displayName: "Asset",
        pluralDisplayName: "Assets",
        properties: {
          assetTag: "string",
        },
      });

      const Vehicle = defineInterfaceV2({
        apiName: "Vehicle",
        displayName: "Vehicle",
        pluralDisplayName: "Vehicles",
        properties: {
          manufacturer: "string",
        },
        extends: [Asset],
      });

      // Interface link constraint: Vehicle → Asset (single). Mutates
      // the Vehicle interface's underlying link list.
      defineInterfaceLinkConstraintV2({
        apiName: "asset",
        from: Vehicle,
        toOne: Asset,
      });

      const Airport = defineObjectV2({
        apiName: "Airport",
        primaryKeyPropertyApiName: "code",
        displayName: "Airport",
        pluralDisplayName: "Airports",
        titlePropertyApiName: "name",
        properties: {
          code: "string",
          name: "string",
          city: "string",
        },
      });

      const Airplane = defineObjectV2({
        apiName: "Airplane",
        primaryKeyPropertyApiName: "tailNumber",
        displayName: "Airplane",
        pluralDisplayName: "Airplanes",
        titlePropertyApiName: "tailNumber",
        properties: {
          tailNumber: "string",
          model: "string",
          manufacturer: "string",
          assetTag: { type: "string", nullable: true },
          capacity: "integer",
          yearBuilt: "integer",
          tags: { type: "string", array: true, nullable: true },
          specs: {
            type: {
              type: "struct",
              structDefinition: {
                weight: "integer",
                wingspan: "integer",
              },
            },
            nullable: true,
          },
          classification: {
            type: {
              type: "marking",
              markingType: "MANDATORY",
              markingInputGroupName: "DefaultMarkings",
            },
            nullable: true,
          },
        },
        implements: [Vehicle],
      });

      const Flight = defineObjectV2({
        apiName: "Flight",
        primaryKeyPropertyApiName: "flightNumber",
        displayName: "Flight",
        pluralDisplayName: "Flights",
        titlePropertyApiName: "flightNumber",
        properties: {
          flightNumber: "string",
          scheduledDeparture: "timestamp",
          scheduledArrival: "timestamp",
          actualArrival: { type: "timestamp", nullable: true },
          airplaneTailNumber: "string",
          departureCode: "string",
          arrivalCode: "string",
        },
      });

      const Airline = defineObjectV2({
        apiName: "Airline",
        primaryKeyPropertyApiName: "iataCode",
        displayName: "Airline",
        pluralDisplayName: "Airlines",
        titlePropertyApiName: "name",
        properties: {
          iataCode: "string",
          name: "string",
          foundedYear: "integer",
        },
      });

      // GroundVehicle implements Vehicle via EXPLICIT property mapping:
      // Vehicle.manufacturer → GroundVehicle.brand, and the inherited
      // Asset.assetTag → GroundVehicle.fleetTag. Exercises the
      // `{ interface, propertyMapping }` form of the implements entry,
      // plus the new editsHistoryConfig + dataset datasource fields.
      const GroundVehicle = defineObjectV2({
        apiName: "GroundVehicle",
        primaryKeyPropertyApiName: "vin",
        displayName: "Ground Vehicle",
        pluralDisplayName: "Ground Vehicles",
        titlePropertyApiName: "vin",
        properties: {
          vin: "string",
          brand: "string",
          fleetTag: { type: "string", nullable: true },
        },
        implements: [
          {
            interface: Vehicle,
            propertyMapping: {
              manufacturer: "brand",
              assetTag: "fleetTag",
            },
          },
        ],
        editsHistoryConfig: {
          enabled: true,
          storeAllPreviousProperties: false,
        },
        datasource: { type: "dataset" },
      });

      // Passenger ↔ Flight via BoardingPass — the canonical intermediary
      // (junction) link shape. BoardingPass holds the foreign keys for
      // both sides; we register 1:M links from each side to BoardingPass
      // first, then a 3-way intermediary link.
      const Passenger = defineObjectV2({
        apiName: "Passenger",
        primaryKeyPropertyApiName: "passengerId",
        displayName: "Passenger",
        pluralDisplayName: "Passengers",
        titlePropertyApiName: "fullName",
        properties: {
          passengerId: "string",
          fullName: "string",
          frequentFlyerStatus: { type: "string", nullable: true },
        },
      });

      const BoardingPass = defineObjectV2({
        apiName: "BoardingPass",
        primaryKeyPropertyApiName: "boardingPassId",
        displayName: "Boarding Pass",
        pluralDisplayName: "Boarding Passes",
        titlePropertyApiName: "boardingPassId",
        properties: {
          boardingPassId: "string",
          seat: "string",
          passengerId: "string",
          flightNumber: "string",
        },
      });

      // Probe object exercising every scalar primitive plus the flat-form
      // variants for string-with-analyzer, decimal-with-precision and
      // marking-with-MANDATORY. Not part of the airline domain — purely a
      // surface probe for the type-completeness coverage stage.
      const PropertyProbe = defineObjectV2({
        apiName: "PropertyProbe",
        primaryKeyPropertyApiName: "id",
        displayName: "Property Probe",
        pluralDisplayName: "Property Probes",
        titlePropertyApiName: "id",
        properties: {
          id: "string",
          // Scalar primitives
          booleanField: "boolean",
          byteField: "byte",
          dateField: "date",
          decimalField: "decimal",
          doubleField: "double",
          floatField: "float",
          integerField: "integer",
          longField: "long",
          shortField: "short",
          timestampField: "timestamp",
          // Flat-form string with isLongText + analyzer
          notes: {
            type: "string",
            isLongText: true,
            supportsExactMatching: false,
            analyzerOverride: {
              type: "standardAnalyzer",
              standardAnalyzer: {},
            },
          },
          // Flat-form decimal with precision/scale
          price: {
            type: "decimal",
            precision: 10,
            scale: 2,
            nullable: true,
          },
          // Flat-form marking with MANDATORY subtype
          classification: {
            type: "marking",
            markingType: "MANDATORY",
            markingInputGroupName: "DefaultMarkings",
            nullable: true,
          },
        },
      });

      const flightToAirplane = defineLinkV2({
        apiName: "airplane",
        reverseApiName: "flights",
        one: Airplane,
        toMany: Flight,
        manyForeignKeyProperty: "airplaneTailNumber",
      });

      const flightToDepartureAirport = defineLinkV2({
        apiName: "departureAirport",
        reverseApiName: "departingFlights",
        one: Airport,
        toMany: Flight,
        manyForeignKeyProperty: "departureCode",
      });

      const flightToArrivalAirport = defineLinkV2({
        apiName: "arrivalAirport",
        reverseApiName: "arrivingFlights",
        one: Airport,
        toMany: Flight,
        manyForeignKeyProperty: "arrivalCode",
      });

      const airlineToAirport = defineLinkV2({
        apiName: "airports",
        reverseApiName: "airlines",
        many: Airline,
        toMany: Airport,
      });

      const passengerToBoardingPass = defineLinkV2({
        apiName: "boardingPasses",
        reverseApiName: "passenger",
        one: Passenger,
        toMany: BoardingPass,
        manyForeignKeyProperty: "passengerId",
      });

      const flightToBoardingPass = defineLinkV2({
        apiName: "boardingPasses",
        reverseApiName: "flight",
        one: Flight,
        toMany: BoardingPass,
        manyForeignKeyProperty: "flightNumber",
      });

      const passengerToFlight = defineLinkV2({
        apiName: "flights",
        reverseApiName: "passengers",
        many: Passenger,
        toMany: Flight,
        intermediaryObjectType: BoardingPass,
        manyToIntermediaryLink: passengerToBoardingPass,
        toManyToIntermediaryLink: flightToBoardingPass,
      });

      const scheduleFlight = defineCreateObjectActionV2(Flight);
      const retireAirplane = defineDeleteObjectActionV2(Airplane);
      const recordLanding = defineModifyObjectActionV2(Flight);
      const bookFlight = defineCreateOrModifyObjectActionV2(Flight);

      const createVehicle = defineCreateInterfaceObjectActionV2(Vehicle);
      const modifyVehicle = defineModifyInterfaceObjectActionV2(Vehicle);
      const deleteVehicle = defineDeleteInterfaceObjectActionV2(Vehicle);

      // Custom action exercising the v2 validation surface: per-parameter
      // allowedValues (text-with-regex), action-level validation rule,
      // two form sections (one box / one minimal), and explicit
      // parameterOrdering.
      const chargeBaggageFee = defineActionV2({
        apiName: "charge-baggage-fee",
        displayName: "Charge baggage fee",
        parameters: {
          passenger: {
            type: "object",
            objectType: Passenger,
            nullable: false,
          },
          bagCount: {
            type: "integer",
            validation: {
              required: true,
            },
          },
          notes: {
            type: "string",
            validation: {
              required: false,
              defaultVisibility: "editable",
              allowedValues: {
                type: "text",
                minLength: 0,
                maxLength: 200,
                regex: "^[A-Za-z0-9 ]*$",
              },
            },
          },
        },
        validation: [
          {
            condition: { type: "and", conditions: [] },
            displayMetadata: {
              failureMessage: "Bag count exceeded plan",
              typeClasses: [],
            },
          },
        ],
        sections: [
          {
            id: "details",
            displayName: "Trip details",
            parameters: ["passenger", "bagCount"],
            collapsedByDefault: false,
            style: "box",
          },
          {
            id: "notes",
            displayName: "Notes",
            parameters: ["notes"],
            collapsedByDefault: true,
            style: "minimal",
          },
        ],
        parameterOrdering: ["passenger", "bagCount", "notes"],
        modifiedEntities: {
          Passenger: { created: false, modified: true },
        },
      });

      return {
        objects: {
          Airport,
          Airplane,
          Flight,
          Airline,
          PropertyProbe,
          Passenger,
          BoardingPass,
          GroundVehicle,
        },
        links: [
          flightToAirplane,
          flightToDepartureAirport,
          flightToArrivalAirport,
          airlineToAirport,
          passengerToBoardingPass,
          flightToBoardingPass,
          passengerToFlight,
        ] as const,
        actions: {
          scheduleFlight,
          retireAirplane,
          recordLanding,
          bookFlight,
          createVehicle,
          modifyVehicle,
          deleteVehicle,
          chargeBaggageFee,
        },
        interfaces: { Vehicle, Asset },
      };
    },
  });
}

export type AirlineOntology = Awaited<
  ReturnType<typeof buildAirlineOntologyImpl>
>;

export async function buildAirlineOntology(): Promise<AirlineOntology> {
  return buildAirlineOntologyImpl();
}

/**
 * Bridge the wire-format ontology produced by `defineOacOntology` into the
 * IR shape consumed by `OntologyIrToFullMetadataConverter`. Performs a
 * structural `unknown` cast for the parts where the types diverge cosmetically,
 * then calls `normalizeLinkFkMappings` to convert one-to-many FK mappings
 * from the wire `Record<onePkRid, manyFkRid>` to the IR `Array<{from,to}>`
 * shape. Exported so tests and the faux-register helper share one bridge.
 */
export function ontologyToConverterIr(
  ontology: AirlineOntology,
): OntologyIrOntologyBlockDataV2 {
  const ir = JSON.parse(
    JSON.stringify(ontology._oac.ontologyIr.ontology),
  ) as unknown as OntologyIrOntologyBlockDataV2;
  normalizeLinkFkMappings(ir);
  return ir;
}

/**
 * Convert the maker-v2 IR to OSDK full metadata and register the result
 * with FauxFoundry.
 */
export function registerAirlineWithFaux(
  faux: FauxFoundry,
  ontology: AirlineOntology,
): void {
  const ir = ontologyToConverterIr(ontology);

  const fullMeta = OntologyIrToFullMetadataConverter.getFullMetadataFromIr(ir);

  const fauxOntology = faux.getDefaultOntology();

  const kebabToApiName: Record<string, string> = {};
  const pkByApiName: Record<string, string> = {};
  for (const objectType of Object.values(fullMeta.objectTypes)) {
    const apiName = objectType.objectType.apiName;
    fauxOntology.registerObjectType(objectType);
    kebabToApiName[toKebabId(apiName)] = apiName;
    pkByApiName[apiName] = objectType.objectType.primaryKey;
  }

  for (const actionType of Object.values(fullMeta.actionTypes)) {
    fauxOntology.registerActionType(
      actionType,
      buildActionImpl(actionType, kebabToApiName, pkByApiName),
    );
  }
}

function toKebabId(apiName: string): string {
  return apiName.toLowerCase().replace(/\./g, "-");
}

function asStringPk(value: unknown, paramName: string): string {
  if (typeof value !== "string") {
    throw new Error(
      `expected string primary key on action parameter \`${paramName}\`, got ${typeof value}`,
    );
  }
  return value;
}

// Mirrors the action impl from vite-plugin-oac's `registerOntologyFullMetadata`,
// inlined because that helper is not exported. The IR converter emits
// `objectTypeApiName` in kebab form (`com-airline-flight`); the lookup
// resolves back to the registered apiName.
function buildActionImpl(
  actionType: {
    apiName: string;
    operations: ReadonlyArray<{ type: string; objectTypeApiName?: string }>;
  },
  kebabToApiName: Record<string, string>,
  pkByApiName: Record<string, string>,
): FauxActionImpl {
  return (batch, payload: { parameters: Record<string, unknown> }) => {
    const params = { ...payload.parameters };
    for (const op of actionType.operations) {
      const kebab = op.objectTypeApiName;
      const apiName = kebab ? kebabToApiName[kebab] ?? kebab : "";
      switch (op.type) {
        case "createObject": {
          const pkProp = pkByApiName[apiName];
          const pk = asStringPk(params[pkProp], pkProp);
          delete params[pkProp];
          batch.addObject(apiName, pk, params);
          break;
        }
        case "modifyObject": {
          const pk = asStringPk(
            params.objectToModifyParameter,
            "objectToModifyParameter",
          );
          delete params.objectToModifyParameter;
          batch.modifyObject(apiName, pk, params);
          break;
        }
        case "deleteObject": {
          const pk = asStringPk(
            params.objectToDeleteParameter,
            "objectToDeleteParameter",
          );
          batch.deleteObject(apiName, pk);
          break;
        }
        default:
          throw new Error(`Unsupported operation type: ${op.type}`);
      }
    }
  };
}

/**
 * Walk the IR's link types and convert each oneToMany link's FK mapping
 * from the wire-format `Record<onePkRid, manyFkRid>` to the IR-format
 * `Array<{from: {apiName, object}, to: {apiName, object}}>` that the
 * converter expects.
 */
function normalizeLinkFkMappings(
  ir: OntologyIrOntologyBlockDataV2,
): void {
  const objectTypes = ir.objectTypes as unknown as Record<
    string,
    {
      objectType: {
        apiName: string;
        propertyTypes: Record<string, { apiName: string }>;
      };
    }
  >;

  const objRidToApiName = new Map<string, string>();
  const propRidToInfo = new Map<string, { apiName: string; object: string }>();
  for (const [objRid, entry] of Object.entries(objectTypes)) {
    objRidToApiName.set(objRid, entry.objectType.apiName);
    for (
      const [propRid, prop] of Object.entries(entry.objectType.propertyTypes)
    ) {
      propRidToInfo.set(propRid, {
        apiName: prop.apiName,
        object: entry.objectType.apiName,
      });
    }
  }

  const linkTypes = ir.linkTypes as unknown as Record<
    string,
    {
      linkType: {
        definition: {
          oneToMany?: {
            objectTypeRidOneSide: string;
            objectTypeRidManySide: string;
            oneSidePrimaryKeyToManySidePropertyMapping:
              | Record<string, string>
              | unknown[];
          };
          manyToMany?: {
            objectTypeRidA: string;
            objectTypeRidB: string;
          };
        };
      };
    }
  >;

  for (const entry of Object.values(linkTypes)) {
    const oneToMany = entry.linkType.definition.oneToMany;
    if (oneToMany) {
      const oneSideApiName = objRidToApiName.get(oneToMany.objectTypeRidOneSide)
        ?? oneToMany.objectTypeRidOneSide;
      const manySideApiName =
        objRidToApiName.get(oneToMany.objectTypeRidManySide)
          ?? oneToMany.objectTypeRidManySide;

      const mapping = oneToMany.oneSidePrimaryKeyToManySidePropertyMapping;
      if (!Array.isArray(mapping)) {
        const entries = Object.entries(mapping);
        oneToMany.oneSidePrimaryKeyToManySidePropertyMapping = entries.map(
          ([onePkRid, manyFkRid]) => {
            const onePk = propRidToInfo.get(onePkRid);
            const manyFk = propRidToInfo.get(manyFkRid);
            return {
              from: {
                apiName: onePk?.apiName ?? onePkRid,
                object: oneSideApiName,
              },
              to: {
                apiName: manyFk?.apiName ?? manyFkRid,
                object: manySideApiName,
              },
            };
          },
        );
      }

      oneToMany.objectTypeRidOneSide = oneSideApiName;
      oneToMany.objectTypeRidManySide = manySideApiName;
    }

    const manyToMany = entry.linkType.definition.manyToMany;
    if (manyToMany) {
      manyToMany.objectTypeRidA = objRidToApiName.get(manyToMany.objectTypeRidA)
        ?? manyToMany.objectTypeRidA;
      manyToMany.objectTypeRidB = objRidToApiName.get(manyToMany.objectTypeRidB)
        ?? manyToMany.objectTypeRidB;
    }
  }
}

const SFO = {
  __apiName: "com.airline.Airport",
  __primaryKey: "SFO",
  code: "SFO",
  name: "San Francisco International",
  city: "San Francisco",
};
const JFK = {
  __apiName: "com.airline.Airport",
  __primaryKey: "JFK",
  code: "JFK",
  name: "John F. Kennedy International",
  city: "New York",
};
const ORD = {
  __apiName: "com.airline.Airport",
  __primaryKey: "ORD",
  code: "ORD",
  name: "O'Hare International",
  city: "Chicago",
};

const N12345 = {
  __apiName: "com.airline.Airplane",
  __primaryKey: "N12345",
  tailNumber: "N12345",
  model: "737 MAX 9",
  manufacturer: "Boeing",
  capacity: 178,
  yearBuilt: 2019,
  tags: ["fleet-leader", "long-haul"],
  specs: { weight: 79000, wingspan: 117 },
  classification: "PUBLIC",
};
const N67890 = {
  __apiName: "com.airline.Airplane",
  __primaryKey: "N67890",
  tailNumber: "N67890",
  model: "A320neo",
  manufacturer: "Airbus",
  capacity: 180,
  yearBuilt: 2021,
};

const AA100 = {
  __apiName: "com.airline.Flight",
  __primaryKey: "AA100",
  flightNumber: "AA100",
  scheduledDeparture: "2026-06-01T08:00:00Z",
  scheduledArrival: "2026-06-01T11:30:00Z",
  airplaneTailNumber: "N12345",
  departureCode: "SFO",
  arrivalCode: "JFK",
};
const AA200 = {
  __apiName: "com.airline.Flight",
  __primaryKey: "AA200",
  flightNumber: "AA200",
  scheduledDeparture: "2026-06-01T14:00:00Z",
  scheduledArrival: "2026-06-01T20:00:00Z",
  airplaneTailNumber: "N12345",
  departureCode: "JFK",
  arrivalCode: "SFO",
};
const UA300 = {
  __apiName: "com.airline.Flight",
  __primaryKey: "UA300",
  flightNumber: "UA300",
  scheduledDeparture: "2026-06-02T09:00:00Z",
  scheduledArrival: "2026-06-02T11:00:00Z",
  airplaneTailNumber: "N67890",
  departureCode: "ORD",
  arrivalCode: "JFK",
};

const PROBE_FULL = {
  __apiName: "com.airline.PropertyProbe",
  __primaryKey: "probe-full",
  id: "probe-full",
  booleanField: true,
  byteField: 12,
  dateField: "2026-05-15",
  decimalField: "123.45",
  doubleField: 3.14159,
  floatField: 2.71,
  integerField: 42,
  longField: 9007199254740992,
  shortField: 1024,
  timestampField: "2026-05-15T10:00:00Z",
  notes: "the quick brown fox jumps over the lazy dog",
  price: "999.99",
  classification: "PUBLIC",
};

const AA = {
  __apiName: "com.airline.Airline",
  __primaryKey: "AA",
  iataCode: "AA",
  name: "American Airlines",
  foundedYear: 1930,
};
const UA = {
  __apiName: "com.airline.Airline",
  __primaryKey: "UA",
  iataCode: "UA",
  name: "United Airlines",
  foundedYear: 1926,
};
const BA = {
  __apiName: "com.airline.Airline",
  __primaryKey: "BA",
  iataCode: "BA",
  name: "British Airways",
  foundedYear: 1974,
};

export function seedAirlineData(faux: FauxFoundry): void {
  const ds = faux.getDefaultDataStore();
  const airports = { SFO, JFK, ORD } as const;
  const airplanes = { N12345, N67890 } as const;
  const flights: Array<typeof AA100> = [AA100, AA200, UA300];

  const airlines = { AA, UA, BA } as const;
  for (
    const obj of [
      ...Object.values(airports),
      ...Object.values(airplanes),
      ...flights,
      ...Object.values(airlines),
      PROBE_FULL,
    ]
  ) {
    ds.registerObject(obj);
  }

  for (const flight of flights) {
    const airplane = airplanes[
      flight.airplaneTailNumber as keyof typeof airplanes
    ];
    ds.registerLink(flight, "airplane", airplane, "flights");

    const dep = airports[flight.departureCode as keyof typeof airports];
    ds.registerLink(flight, "departureAirport", dep, "departingFlights");

    const arr = airports[flight.arrivalCode as keyof typeof airports];
    ds.registerLink(flight, "arrivalAirport", arr, "arrivingFlights");
  }

  // Many-to-many: Airline ↔ Airport. American flies SFO/JFK/ORD, United flies
  // JFK/ORD, British flies JFK only.
  ds.registerLink(AA, "airports", SFO, "airlines");
  ds.registerLink(AA, "airports", JFK, "airlines");
  ds.registerLink(AA, "airports", ORD, "airlines");
  ds.registerLink(UA, "airports", JFK, "airlines");
  ds.registerLink(UA, "airports", ORD, "airlines");
  ds.registerLink(BA, "airports", JFK, "airlines");
}

/**
 * One-call setup: build ontology, stand up FauxFoundry, register types,
 * seed data, wire MSW. Returns everything the test/playground needs.
 */
export async function setupAirlineE2E(): Promise<{
  ontology: AirlineOntology;
  client: Client;
  apiServer: ReturnType<typeof startNodeApiServer<typeof createClient>>[
    "apiServer"
  ];
}> {
  const ontology = await buildAirlineOntology();

  const faux = new FauxFoundry(
    "https://stack.example.test/",
    {
      apiName: "test-ontology",
      displayName: "Test Ontology",
      description: "",
      rid: "ri.ontology.main.ontology.airline-fixture",
    },
    { strict: true },
  );

  registerAirlineWithFaux(faux, ontology);
  seedAirlineData(faux);

  const setup = startNodeApiServer(faux, createClient);
  return {
    ontology,
    client: setup.client,
    apiServer: setup.apiServer,
  };
}
