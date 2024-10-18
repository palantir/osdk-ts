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
import {
  createOsdkTestObject,
  FooInterface,
  OsdkTestObject,
} from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { client } from "./client.js";

export async function runInterfacesTest() {
  // this has the nice effect of faking a 'race' with the below code
  (async () => {
    const { data } = await client(FooInterface).fetchPage();
    const first = data[0];
    const e = first.$as(OsdkTestObject);
  })();

  const fooLimitedToSpecificObject = await client(FooInterface).fetchPage({
    $__EXPERIMENTAL_selectedObjectTypes: ["OsdkTestObject"],
  });
  invariant(fooLimitedToSpecificObject.data.length > 0);

  const fooLimitedToOther = await client(FooInterface).fetchPage({
    $__EXPERIMENTAL_selectedObjectTypes: ["Other"],
  });
  invariant(fooLimitedToOther.data.length === 0);

  await client(createOsdkTestObject).applyAction({
    "string_property": "InterfaceTest",
    "osdk_object_name": "InterfaceTest",
    "description": "InterfaceTest",
  });

  const r = await client(FooInterface)
    .fetchPage({ $pageSize: 1, $select: ["name"] });

  // const q = client(FooInterface)
  //   .where({ name: { $ne: "Patti" } });
  // expectType<TypeOf<typeof q, InterfaceObjectSet<FooInterface>>>(true);
  for (const int of r.data) {
    console.log("int:", int.name, JSON.stringify(int));
    invariant(int.name);
    invariant(!(int as any).firstName);

    const object1 = int.$as(OsdkTestObject);
    expectType<TypeOf<Osdk<OsdkTestObject, "$all">, typeof object1>>(
      false,
    );
    expectType<
      TypeOf<Osdk<OsdkTestObject, "osdkObjectName">, typeof object1>
    >(true);

    console.log(
      "osdkObject:",
      object1.osdkObjectName,
      JSON.stringify(object1),
    );
    invariant(object1.osdkObjectName);
    invariant(!(object1 as any).name);

    const int2 = object1.$as(FooInterface);
    expectType<TypeOf<Osdk<FooInterface, "$all">, typeof int2>>(false);
    expectType<TypeOf<Osdk<FooInterface, "name">, typeof int2>>(true);

    console.log("int2:", int2.name, int2);
    invariant(int2.name);
    invariant(!(int as any).firstName);

    const object2 = int2.$as(OsdkTestObject);
    console.log("osdkObject2:", object2.osdkObjectName, object2);
    invariant(object2.osdkObjectName);
    invariant(!(object2 as any).name);

    // underlyings are ref equal!
    console.log("osdkObject1 === osdkObject2", object1 === object2);
  }
}
