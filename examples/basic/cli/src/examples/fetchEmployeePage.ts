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
import type { Ontology } from "@osdk/examples.basic.sdk";
import { expectType } from "ts-expect";
import type { Employee } from "../OntologyType.js";

export async function fetchEmployeePage(client: Client<Ontology>) {
  const result = await client.objectSet("Employee").fetchPageOrThrow();

  expectType<string | undefined>(""); // FIXME: this isn't strict enough of a check for below
  expectType<string | undefined>(result.data[0].businessTitle);

  // Rough shape is correct
  expectType<
    {
      data: {
        adUsername: string;
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
    apiname: result.data[0].__apiName,
  });
  console.log(result.data[0]);

  console.log();
}

function printEmployees(employees: Employee[]) {
  console.table(
    employees.map(({ adUsername, businessTitle, employeeNumber }) => ({
      adUsername,
      businessTitle,
      employeeNumber,
    })),
  );
}
