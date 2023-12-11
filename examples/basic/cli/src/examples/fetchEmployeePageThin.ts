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

import * as OsdkApi from "@osdk/client";
import type { ClientContext } from "@osdk/client";
import { Objects } from "@osdk/client";
import { fetchPageOrThrow } from "@osdk/client/objects";
import type { Ontology } from "@osdk/examples.basic.sdk";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";

export async function fetchEmployeePageThin(
  clientCtx: ClientContext<Ontology>,
) {
  let result = await fetchPageOrThrow(clientCtx, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  expectType<string>(result.data[0].adUsername);

  // locationCity was not selected. Should not be present
  expectType<
    TypeOf<
      {
        locationCity: any;
      },
      (typeof result.data)[0]
    >
  >(false);

  // OR
  let result2 = await Objects.fetchPageOrThrow(clientCtx, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  // or
  let result3 = await OsdkApi.Objects.fetchPageOrThrow(clientCtx, "Employee", {
    select: ["adUsername", "businessTitle", "employeeNumber"],
  });

  // Quick check to make sure we get everything
  let result4 = await fetchPageOrThrow(clientCtx, "Employee", {});

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
