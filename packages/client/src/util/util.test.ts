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
import { describe, expect, expectTypeOf, it } from "vitest";
import { consolidateOsdkObject } from "./consolidateOsdkObject.js";

describe(consolidateOsdkObject, () => {
  it("combines two objects where new object is scoped to less props", () => {
    const oldObject: Osdk.Instance<Todo, never, "text"> = {
      $apiName: "Todo",
      $objectType: "type",
      $primaryKey: 1,
      $title: "Employee",
      text: "text",
    } as any;

    const upToDateObject: Osdk.Instance<Todo> = {
      $apiName: "Todo",
      $objectType: "type",
      $primaryKey: 1,
      $title: "Employee",
      id: 1,
      text: "hi",
    } as any;

    const result = consolidateOsdkObject(oldObject, upToDateObject);

    expectTypeOf(result).toEqualTypeOf<Osdk.Instance<Todo>>();

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

  it("combines two objects where new object is scoped to more props", () => {
    const oldObject: Osdk.Instance<Todo> = {
      $apiName: "Todo",
      $objectType: "type",
      $primaryKey: 1,
      $title: "Employee",
      id: 3,
      text: "text",
    } as any;

    const upToDateObject: Osdk.Instance<Todo, never, "id"> = {
      $apiName: "Todo",
      $objectType: "type",
      $primaryKey: 1,
      $title: "Employee",
      id: 1,
    } as any;

    const result = consolidateOsdkObject(oldObject, upToDateObject);

    expectTypeOf(result).toEqualTypeOf<Osdk.Instance<Todo, never, "id">>();

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
});
