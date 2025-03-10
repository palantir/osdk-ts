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
  createFooInterface,
  FooInterface,
  OsdkTestObject,
} from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import type { TypeOf } from "ts-expect";
import { expectType } from "ts-expect";
import { client } from "./client.js";

export async function runInterfacesTest(): Promise<void> {
  // this has the nice effect of faking a 'race' with the below code
  void (async () => {
    const { data } = await client(FooInterface).fetchPage();
    const first = data[0];
    const e = first.$as(OsdkTestObject);
  })();

  console.log("hello");
  const qqq = client(FooInterface).where({ name: { $ne: "Patti" } });

  const fooLimitedToEmployees = await client(FooInterface).fetchPage();
  invariant(fooLimitedToEmployees.data.length > 0);

  // const fooLimitedToOther = await client(FooInterface).fetchPage({
  //   $__UNSTABLE_useOldInterfaceApis: true,
  // });
  // invariant(fooLimitedToOther.data.length === 0);
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
    .fetchPage({
      $pageSize: 1,
      $select: ["name"],
    });

  for (const int of r.data) {
    console.log("int:", int.name, int);
    invariant(int.name);
    invariant(!(int as any).firstName);

    const testObject = int.$as(OsdkTestObject);
    expectType<TypeOf<Osdk.Instance<OsdkTestObject>, typeof testObject>>(false);
    expectType<
      TypeOf<
        Osdk.Instance<OsdkTestObject, never, "osdkObjectName">,
        typeof testObject
      >
    >(true);

    console.log("employee:", testObject.osdkObjectName, testObject);
    invariant(testObject.osdkObjectName);
    invariant(!(testObject as any).name);

    const int2 = testObject.$as(FooInterface);
    expectType<TypeOf<Osdk.Instance<FooInterface>, typeof int2>>(false);
    expectType<TypeOf<Osdk.Instance<FooInterface, never, "name">, typeof int2>>(
      true,
    );

    console.log("int2:", int2.name, int2);
    invariant(int2.name);
    invariant(!(int as any).stringProperty);

    const testObject2 = int2.$as(OsdkTestObject);
    console.log("employee2:", testObject2.osdkObjectName, testObject2);
    invariant(testObject2.osdkObjectName);
    invariant(!(testObject2 as any).name);

    // underlyings are ref equal!
    console.log("employee === employee2", testObject === testObject2);
  }

  const result = await client(createFooInterface).applyAction({
    createdInterface: "testObject",
  });
}

void runInterfacesTest();

// /** exposed for a test */
// export type UnionIfTrue<
//   S extends string,
//   UNION_IF_TRUE extends boolean,
//   E extends string,
// > = IsNever<S> extends true ? never
//   : UNION_IF_TRUE extends true ? S | E
//   : S;

// export type IsNever<T> = [T] extends [never] ? true : false;

// export type MapPropNamesToObjectType<
//   FROM extends ObjectOrInterfaceDefinition,
//   TO extends ObjectTypeDefinition,
//   P extends ValidOsdkPropParams<FROM>,
//   OPTIONS extends never | "$rid" | "$allBaseProperties" = never,
// > = OPTIONS extends "$allBaseProperties"
//   ? PropertyKeys<FROM> extends P ? PropertyKeys<TO>
//   : PropMapToObject<
//     FROM,
//     TO
//   >[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>]
//   : PropMapToObject<
//     FROM,
//     TO
//   >[JustProps<FROM, P> & keyof PropMapToObject<FROM, TO>];

// export type PropMapToObject<
//   FROM extends ObjectOrInterfaceDefinition,
//   TO extends ObjectTypeDefinition,
// > = NonNullable<CompileTimeMetadata<TO>["interfaceMap"]>[ApiNameAsString<FROM>];

// export type ApiNameAsString<
//   T extends ObjectOrInterfaceDefinition,
// > = CompileTimeMetadata<T>["apiName"];

// export type JustProps<
//   T extends ObjectOrInterfaceDefinition,
//   P extends ValidOsdkPropParams<T>,
// > = P extends "$all" ? PropertyKeys<T>
//   : Exclude<P, SpecialOsdkPropParams>;

// type ValidOsdkPropParams<Q extends ObjectOrInterfaceDefinition> =
//   | SpecialOsdkPropParams
//   | PropertyKeys<Q>;

// type SpecialOsdkPropParams =
//   | "$all"
//   | "$rid"
//   | "$strict"
//   | "$notStrict";

// type huh = ConvertProps<
//   FooInterface,
//   OsdkTestObject,
//   PropertyKeys<FooInterface>
// >;

// type huh1 = UnionIfTrue<
//   MapPropNamesToObjectType<
//     FooInterface,
//     OsdkTestObject,
//     PropertyKeys<FooInterface>
//   >,
//   PropertyKeys<FooInterface> extends "$rid" ? true : false,
//   "$rid"
// >;

// type huh2 = MapPropNamesToObjectType<
//   FooInterface,
//   OsdkTestObject,
//   PropertyKeys<FooInterface>
// >;

// type huh3 = PropMapToObject<
//   FooInterface,
//   OsdkTestObject
// >[
//   JustProps<
//     FooInterface,
//     & PropertyKeys<FooInterface>
//     & keyof PropMapToObject<FooInterface, OsdkTestObject>
//   >
// ];

// type huh4 = PropertyKeys<OsdkTestObject>;

// type huh5<
//   FROM extends ObjectOrInterfaceDefinition,
//   TO extends ObjectTypeDefinition,
//   P extends ValidOsdkPropParams<FROM>,
//   OPTIONS extends "$allBaseProperties" | "rid" = never,
// > = "$allBaseProperties" extends OPTIONS
//   ? PropertyKeys<FROM> extends P ? PropertyKeys<TO> : false
//   : true;

// type huh6 = huh5<
//   FooInterface,
//   OsdkTestObject,
//   "inheritedDescription" | "description" | "name",
//   "$allBaseProperties" | "rid"
// >;

// type huh9 = never extends " " ? true : false;
// type huh7 = PropertyKeys<FooInterface>;
// type huh8 = PropertyKeys<OsdkTestObject>;
