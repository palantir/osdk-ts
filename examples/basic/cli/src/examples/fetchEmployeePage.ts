import { expectType } from "ts-expect";
import type { Client } from "@osdk/api";
import type { OntologyType } from "../OntologyType";

export async function fetchEmployeePage(client: Client<OntologyType>) {
  const result = await client.objectSet("Employee").fetchPageOrThrow();
  expectType<string | undefined>(result.data[0].businessTitle);

  console.log("fetchEmployeePage(): ");
  console.table(
    result.data.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
  console.log();
}
