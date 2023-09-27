import * as OsdkApi from "@osdk/api";
import { Objects } from "@osdk/api";
import { fetchPageOrThrow } from "@osdk/api/objects";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import type { OntologyType } from "../OntologyType";

export async function fetchEmployeePageThin(
  thinClient: OsdkApi.ThinClient<OntologyType>,
) {
  let result = await fetchPageOrThrow(thinClient, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  expectType<string>(result.data[0].adUsername);

  // locationCity was not selected!
  expectType<
    TypeOf<
      {
        locationCity: string | undefined;
      },
      (typeof result.data)[0]
    >
  >(false);

  // OR
  let result2 = await Objects.fetchPageOrThrow(thinClient, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  // or
  let result3 = await OsdkApi.Objects.fetchPageOrThrow(thinClient, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  // Quick check to make sure we get everything
  let result4 = await fetchPageOrThrow(thinClient, "Employee", {});

  console.log("fetchEmployeePageThin(): ");
  console.table(
    result.data.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
  console.log();
}
