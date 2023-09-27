import invariant from "tiny-invariant";
import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

export async function fetchAggregationForEmployeesGrouped(
  client: Client<OntologyType>,
) {
  const result = await client.objectSet("Employee").aggregateOrThrow({
    select: {
      locationCity: "approximateDistinct",
      locationName: "approximateDistinct",
      employeeNumber: ["avg", "max", "min"],
    },
    groupBy: {
      locationType: "exact",
    },
  });

  console.log("fetchAggregationForEmployeesGrouped()");
  console.log(JSON.stringify(result, undefined, 2));
  console.log();
  /*
fetchAggregationForEmployeesGrouped()
[
  {
    "group": {
      "locationType": "Office"
    },
    "values": {
      "employeeNumber": {
        "max": 10001,
        "avg": 10001,
        "min": 10001
      },
      "locationCity": {
        "approximateDistinct": 1
      },
      "locationName": {
        "approximateDistinct": 1
      }
    }
  },
  {
    "group": {
      "locationType": "Remote"
    },
    "values": {
      "employeeNumber": {
        "max": 10002,
        "avg": 10002,
        "min": 10002
      },
      "locationCity": {
        "approximateDistinct": 1
      },
      "locationName": {
        "approximateDistinct": 1
      }
    }
  }
  */

  invariant(Array.isArray(result), "groups means we should get an array");
  invariant(Object.keys(result).length >= 1, "there should be one group");
  invariant(
    "employeeNumber" in result[0].values &&
      "locationName" in result[0].values &&
      "locationCity" in result[0].values,
    "The keys should be the expected ones",
  );
  invariant(Object.keys(result[0].values.employeeNumber).length === 3);
}
