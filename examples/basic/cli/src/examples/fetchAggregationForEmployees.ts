import invariant from "tiny-invariant";
import { expectType } from "ts-expect";
import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

export async function fetchAggregationForEmployees(
  client: Client<OntologyType>,
) {
  const result = await client.objectSet("Employee").aggregateOrThrow({
    select: {
      locationCity: "approximateDistinct",
      locationName: "approximateDistinct",
      employeeNumber: ["avg", "max", "min"],
    },
    groupBy: undefined,
  });
  console.log("fetchAggregationForEmployees()");
  console.log(JSON.stringify(result, undefined, 2));
  console.log();

  /*
fetchAggregationForEmployees()
{
  "employeeNumber": {
    "max": 10002,
    "avg": 10001.5,
    "min": 10001
  },
  "locationCity": {
    "approximateDistinct": 2
  },
  "locationName": {
    "approximateDistinct": 2
  }
}
  */
  // Compile Time Verification
  expectType<{
    employeeNumber: {
      max: number | undefined;
      avg: number | undefined;
      min: number | undefined;
    };
    locationCity: {
      approximateDistinct: number;
    };
    locationName: {
      approximateDistinct: number;
    };
  }>(result);

  // Runtime Verification
  invariant(
    !Array.isArray(result),
    "no groups means we should not get an array",
  );
  invariant(
    Object.keys(result).length === 3,
    `the result should have 3 keys, got: ${Object.keys(result)}`,
  );
  invariant(
    "employeeNumber" in result &&
      "locationName" in result &&
      "locationCity" in result,
    "The keys should be the expected ones",
  );
  invariant(Object.keys(result.employeeNumber).length === 3);
}
