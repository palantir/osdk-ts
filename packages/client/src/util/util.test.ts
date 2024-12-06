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
import type { Employee, Todo } from "@osdk/client.test.ontology";
import type { OntologyObjectV2 } from "@osdk/internal.foundry.core";
import { describe, expect, expectTypeOf, it } from "vitest";
import { createMinimalClient } from "../createMinimalClient.js";
import { convertWireToOsdkObjects } from "../object/convertWireToOsdkObjects.js";
import { consolidateOsdkObject } from "./consolidateOsdkObject.js";

describe(consolidateOsdkObject, () => {
  it("combines two objects where new object is scoped to less props", async () => {
    const clientCtx = createMinimalClient(
      {
        ontologyRid:
          "ri.ontology.main.ontology.698267cc-6b48-4d98-beff-29beb24e9361",
      },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    let objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      fullName: "Steve",
      employeeId: "5",
    } satisfies OntologyObjectV2;

    const [oldObject] = (await convertWireToOsdkObjects(
      clientCtx,
      [objectFromWire],
      undefined,
    )) as unknown as Osdk.Instance<Employee>[];

    const [newObject] = (await convertWireToOsdkObjects(
      clientCtx,
      [objectFromWire],
      undefined,
    )) as unknown as Osdk.Instance<Employee>[];

    console.log(
      oldObject,
      "A",
      oldObject.$cloneAndUpdate,
    );
    const result = oldObject.$cloneAndUpdate(newObject);

    expectTypeOf(result).toEqualTypeOf<Osdk.Instance<Employee>>();

    expect(result).toMatchInlineSnapshot(`
      {
        "$apiName": "Todo",
        "$objectType": "type",
        "$primaryKey": 1,
        "$title": "Employee",
        "id": 1,
        "text": "hi",
      }
    `);
  });

  // it("combines two objects where new object is scoped to more props", () => {
  //   const oldObject: Osdk.Instance<Todo> = {
  //     $apiName: "Todo",
  //     $objectType: "type",
  //     $primaryKey: 1,
  //     $title: "Employee",
  //     id: 3,
  //     text: "text",
  //   } as any;

  //   const upToDateObject: Osdk.Instance<Todo, never, "id"> = {
  //     $apiName: "Todo",
  //     $objectType: "type",
  //     $primaryKey: 1,
  //     $title: "Employee",
  //     id: 1,
  //   } as any;

  //   const result = oldObject.$cloneAndUpdate(upToDateObject);

  //   expectTypeOf(result).toEqualTypeOf<Osdk.Instance<Todo>>();

  //   expect(result).toMatchInlineSnapshot(`
  //     {
  //       "$apiName": "Todo",
  //       "$objectType": "type",
  //       "$primaryKey": 1,
  //       "$title": "Employee",
  //       "id": 1,
  //       "text": "hi",
  //     }
  //   `);
  // });
});
