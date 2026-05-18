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
import { defineOacOntology } from "@osdk/maker-experimental";

export const ontology = await defineOacOntology({
  namespace: "com.airline.",
  build: () => {
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
    });

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
