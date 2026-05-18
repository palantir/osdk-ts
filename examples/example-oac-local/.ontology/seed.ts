import type { FauxFoundry } from "@osdk/faux";

const NS = "com.airline.";

const SFO = {
  __apiName: `${NS}Airport`,
  __primaryKey: "SFO",
  code: "SFO",
  name: "San Francisco International",
  city: "San Francisco",
};
const JFK = {
  __apiName: `${NS}Airport`,
  __primaryKey: "JFK",
  code: "JFK",
  name: "John F. Kennedy International",
  city: "New York",
};
const ORD = {
  __apiName: `${NS}Airport`,
  __primaryKey: "ORD",
  code: "ORD",
  name: "O'Hare International",
  city: "Chicago",
};

const N12345 = {
  __apiName: `${NS}Airplane`,
  __primaryKey: "N12345",
  tailNumber: "N12345",
  model: "737 MAX 9",
  manufacturer: "Boeing",
  capacity: 178,
  yearBuilt: 2019,
};
const N67890 = {
  __apiName: `${NS}Airplane`,
  __primaryKey: "N67890",
  tailNumber: "N67890",
  model: "A320neo",
  manufacturer: "Airbus",
  capacity: 180,
  yearBuilt: 2021,
};

const AA100 = {
  __apiName: `${NS}Flight`,
  __primaryKey: "AA100",
  flightNumber: "AA100",
  scheduledDeparture: "2026-06-01T08:00:00Z",
  scheduledArrival: "2026-06-01T11:30:00Z",
  airplaneTailNumber: "N12345",
  departureCode: "SFO",
  arrivalCode: "JFK",
};
const AA200 = {
  __apiName: `${NS}Flight`,
  __primaryKey: "AA200",
  flightNumber: "AA200",
  scheduledDeparture: "2026-06-01T14:00:00Z",
  scheduledArrival: "2026-06-01T20:00:00Z",
  airplaneTailNumber: "N12345",
  departureCode: "JFK",
  arrivalCode: "SFO",
};
const UA300 = {
  __apiName: `${NS}Flight`,
  __primaryKey: "UA300",
  flightNumber: "UA300",
  scheduledDeparture: "2026-06-02T09:00:00Z",
  scheduledArrival: "2026-06-02T11:00:00Z",
  airplaneTailNumber: "N67890",
  departureCode: "ORD",
  arrivalCode: "JFK",
};

const AA = {
  __apiName: `${NS}Airline`,
  __primaryKey: "AA",
  iataCode: "AA",
  name: "American Airlines",
  foundedYear: 1930,
};
const UA = {
  __apiName: `${NS}Airline`,
  __primaryKey: "UA",
  iataCode: "UA",
  name: "United Airlines",
  foundedYear: 1926,
};
const BA = {
  __apiName: `${NS}Airline`,
  __primaryKey: "BA",
  iataCode: "BA",
  name: "British Airways",
  foundedYear: 1974,
};

const PAX_001 = {
  __apiName: `${NS}Passenger`,
  __primaryKey: "PAX-001",
  passengerId: "PAX-001",
  fullName: "Ada Lovelace",
  frequentFlyerStatus: "GOLD",
};
const PAX_002 = {
  __apiName: `${NS}Passenger`,
  __primaryKey: "PAX-002",
  passengerId: "PAX-002",
  fullName: "Alan Turing",
  frequentFlyerStatus: null,
};

const GV001 = {
  __apiName: `${NS}GroundVehicle`,
  __primaryKey: "VIN-FORD-001",
  vin: "VIN-FORD-001",
  brand: "Ford",
  fleetTag: "GRD-001",
};
const GV002 = {
  __apiName: `${NS}GroundVehicle`,
  __primaryKey: "VIN-TOYOTA-002",
  vin: "VIN-TOYOTA-002",
  brand: "Toyota",
  fleetTag: "GRD-002",
};

export default function seed(faux: FauxFoundry): void {
  const ds = faux.getDefaultDataStore();

  const airports = { SFO, JFK, ORD } as const;
  const airplanes = { N12345, N67890 } as const;
  const flights = [AA100, AA200, UA300];
  const airlines = { AA, UA, BA } as const;
  const passengers = [PAX_001, PAX_002];
  const groundVehicles = [GV001, GV002];

  for (
    const obj of [
      ...Object.values(airports),
      ...Object.values(airplanes),
      ...flights,
      ...Object.values(airlines),
      ...passengers,
      ...groundVehicles,
    ]
  ) {
    ds.registerObject(obj);
  }

  for (const flight of flights) {
    const airplane =
      airplanes[flight.airplaneTailNumber as keyof typeof airplanes];
    ds.registerLink(flight, "airplane", airplane, "flights");

    const dep = airports[flight.departureCode as keyof typeof airports];
    ds.registerLink(flight, "departureAirport", dep, "departingFlights");

    const arr = airports[flight.arrivalCode as keyof typeof airports];
    ds.registerLink(flight, "arrivalAirport", arr, "arrivingFlights");
  }

  ds.registerLink(AA, "airports", SFO, "airlines");
  ds.registerLink(AA, "airports", JFK, "airlines");
  ds.registerLink(AA, "airports", ORD, "airlines");
  ds.registerLink(UA, "airports", JFK, "airlines");
  ds.registerLink(UA, "airports", ORD, "airlines");
  ds.registerLink(BA, "airports", JFK, "airlines");
}
