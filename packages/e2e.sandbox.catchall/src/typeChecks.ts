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

import type { ObjectSet, Osdk, PageResult } from "@osdk/api";
import type { Client } from "@osdk/client";
// import type { ObjectSet$Employee } from "@osdk/e2e.generated.catchall";
import {
  Employee,
  ObjectTypeWithAllPropertyTypes,
} from "@osdk/e2e.generated.catchall";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

/**
 * As a consumer of OSDK, you will not need to use this file ever. It is simply here
 * as a mechanism for us building the OSDK to be sure that we have not broken types
 * across changes.
 * @param client
 */
export async function typeChecks(client: Client) {
  // single link pivot types are correct
  {
    const objectSet = client(Employee).pivotTo("lead");
    expectType<TypeOf<typeof objectSet, Employee.ObjectSet>>(
      true,
    );
  }

  // multi link pivot types are correct
  {
    const objectSet = client(Employee).pivotTo("peeps");
    expectType<TypeOf<typeof objectSet, Employee.ObjectSet>>(
      true,
    );
  }

  // just a demo of aggregations
  {
    const q = await client(ObjectTypeWithAllPropertyTypes)
      .aggregate({
        $select: {
          "integer:sum": "unordered",
          "float:sum": "unordered",
          "decimal:sum": "unordered",
          "short:max": "unordered",
          "string:approximateDistinct": "unordered",
        },
        $groupBy: {
          string: "exact",
          stringArray: "exact",
        },
        $orderBy: {
          group: "string",
        },
      });
  }

  // object $link examples
  {
    const page = await client(Employee).where({
      adUsername: "adUsername",
    }).fetchPage();
    const employee = page.data[0];

    // lead is an employee
    const lead = await employee.$link.lead.fetchOne();
    expectType<TypeOf<typeof lead, Osdk<Employee>>>(true);

    // lead is an employee but we downselect to just their adUsername

    const leadName = await employee.$link.lead.fetchOne({
      $select: ["adUsername"],
    });
    expectType<TypeOf<typeof leadName.adUsername, string>>(true);

    // jobProfile is not available on the select-ed Person
    expectType<TypeOf<{ jobProfile: any[] }, typeof leadName>>(false);

    // peeps is a page of employees, but only get the adUsername and employeeNumber
    const peeps = await employee.$link.peeps.fetchPage({
      $select: ["adUsername", "employeeNumber"],
    });

    expectType<
      TypeOf<
        typeof peeps,
        PageResult<
          Osdk<Employee, "adUsername" | "employeeNumber">
        >
      >
    >(true);

    // jobProfile is not available on the select-ed peeps
    expectType<TypeOf<{ jobProfile: any }[], typeof peeps>>(false);

    // peepById is just a singular employee again, and only grab the adUsername

    const peepById = await employee.$link.peeps.fetchOne("peepPK", {
      $select: ["adUsername"],
    });
    expectType<
      TypeOf<typeof peepById, Osdk<Employee, "adUsername">>
    >(true);

    // employeeNumber is not part of the selected peep
    expectType<TypeOf<{ employeeNumber: any }, typeof peepById>>(false);
  }
}
