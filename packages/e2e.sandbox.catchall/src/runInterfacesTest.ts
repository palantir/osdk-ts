/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Osdk } from "@osdk/api";
import { Employee, FooInterface } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { client } from "./client.js";

export async function runInterfacesTest() {
  // this has the nice effect of faking a 'race' with the below code
  // (async () => {
  //   const { data } = await client(FooInterface).fetchPage({
  //     $__UNSTABLE_useOldInterfaceApis: true,
  //   });
  //   const first = data[0];
  //   const e = first.$as(Employee);
  // })();

  console.log("hello");
  const qqq = await client(FooInterface).where({ name: { $ne: "Patti" } });

  const fooLimitedToEmployees = await client(FooInterface).fetchPage();
  invariant(fooLimitedToEmployees.data.length > 0);

  const fooLimitedToOther = await client(FooInterface).fetchPage({
    $__UNSTABLE_useOldInterfaceApis: true,
  });
  invariant(fooLimitedToOther.data.length === 0);
  // const fooLimitedToEmployees = await client(FooInterface).fetchPage({
  //   $__EXPERIMENTAL_selectedObjectTypes: ["Employee"],
  // });
  // invariant(fooLimitedToEmployees.data.length > 0);

  // const fooLimitedToOther = await client(FooInterface).fetchPage({
  //   $__EXPERIMENTAL_selectedObjectTypes: ["Other"],
  // });
  // invariant(fooLimitedToOther.data.length === 0);

  const r = await client(FooInterface)
    .where({ name: { $ne: "Patti" } })
    .where({ name: { $ne: "Roth" } })
    .fetchPage({ $pageSize: 1, $select: ["name"] });

  // const q = client(FooInterface)
  //   .where({ name: { $ne: "Patti" } });
  // expectType<TypeOf<typeof q, InterfaceObjectSet<FooInterface>>>(true);
  for (const int of r.data) {
    console.log("int:", int.name, int);
    invariant(int.name);
    invariant(!(int as any).firstName);

    const employee = int.$as(Employee);
    expectType<TypeOf<Osdk<Employee, "$all">, typeof employee>>(false);
    expectType<TypeOf<Osdk<Employee, "firstName">, typeof employee>>(true);

    console.log("employee:", employee.firstName, employee);
    invariant(employee.firstName);
    invariant(!(employee as any).name);

    const int2 = employee.$as(FooInterface);
    expectType<TypeOf<Osdk<FooInterface, "$all">, typeof int2>>(false);
    expectType<TypeOf<Osdk<FooInterface, "name">, typeof int2>>(true);

    console.log("int2:", int2.name, int2);
    invariant(int2.name);
    invariant(!(int as any).firstName);

    const employee2 = int2.$as(Employee);
    console.log("employee2:", employee2.firstName, employee2);
    invariant(employee2.firstName);
    invariant(!(employee2 as any).name);

    // underlyings are ref equal!
    console.log("employee === employee2", employee === employee2);
  }
}
