/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import type { Osdk } from "@osdk/client.api";
import { Employee } from "@osdk/e2e.generated.catchall";
import { expectType } from "ts-expect";

export async function fetchEmployeePage(client: Client) {
  const result = await client(Employee).fetchPage();

  expectType<string | undefined>(""); // FIXME: this isn't strict enough of a check for below
  expectType<string | undefined>(result.data[0].businessTitle);

  // Rough shape is correct
  expectType<
    {
      data: {
        adUsername: string | undefined;
        businessTitle: string | undefined;
        employeeNumber: number | undefined;
        favPlace: { type: "Point"; coordinates: number[] } | undefined;
        firstFullTimeStartDate: string | undefined;
      }[];
    }
  >(result);

  console.log(result.data[0].favPlace?.coordinates);
  console.log(result.data[0].firstFullTimeStartDate);

  console.log("fetchEmployeePage(): ");
  printEmployees(result.data);

  console.log({
    apiName: result.data[0].$apiName,
  });
  console.log(result.data[0]);

  console.log();
}

function printEmployees(employees: Osdk<Employee>[]) {
  console.table(
    employees.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
}
