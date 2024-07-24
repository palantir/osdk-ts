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

import type { Attachment, Osdk } from "@osdk/client.api";
import {
  Employee,
  FooInterface,
  Ontology as MockOntology,
} from "@osdk/client.test.ontology";
import type { OntologyObjectV2 } from "@osdk/internal.foundry";
import { symbolClientContext } from "@osdk/shared.client";
import { createSharedClientContext } from "@osdk/shared.client.impl";
import { apiServer } from "@osdk/shared.test";
import {
  afterAll,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
} from "vitest";
import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import { convertWireToOsdkObjects } from "./convertWireToOsdkObjects.js";

describe("convertWireToOsdkObjects", () => {
  let client: Client;

  beforeAll(async () => {
    apiServer.listen();
    client = createClient(
      "https://stack.palantir.com",
      MockOntology.metadata.ontologyRid,
      async () => "myAccessToken",
    );
  });

  afterAll(() => {
    apiServer.close();
  });

  it("configures properties correctly", async () => {
    const { data: [employee] } = await client(Employee).fetchPage();

    expect(Object.keys(employee).sort()).toEqual([
      "employeeId",
      "fullName",
      "office",
      "class",
      "startDate",
      "employeeStatus",
      "$apiName",
      "$objectType",
      "$primaryKey",
      "$title",
    ].sort());

    expect(Object.keys(employee.$as)).toEqual([]);
    expect(Object.keys(employee.$link)).toEqual([
      "peeps",
      "lead",
      "officeLink",
    ]);
  });

  it("reuses the object prototype across objects", async () => {
    const employees = await client(MockOntology.objects.Employee).fetchPage();
    expect(employees.data.length).toBeGreaterThanOrEqual(2);
    const [a, b] = employees.data;

    expect(Object.getPrototypeOf(Object.getPrototypeOf(a))).toBe(
      Object.getPrototypeOf(Object.getPrototypeOf(b)),
    );
  });

  it("converts attachments as expected", async () => {
    const withValues = await client(
      MockOntology.objects.objectTypeWithAllPropertyTypes,
    )
      .where({ id: 1 })
      .fetchPage();
    expect(withValues.data.length).toBeGreaterThanOrEqual(1);

    const { attachment, attachmentArray } = withValues.data[0];

    expectTypeOf(attachment).toMatchTypeOf<
      Attachment | undefined
    >;
    expect(attachment?.rid).toEqual(
      "ri.attachments.main.attachment.86016861-707f-4292-b258-6a7108915a75",
    );
    expect(Array.isArray(attachmentArray)).toBeTruthy();
    expectTypeOf(attachmentArray![0]).toMatchTypeOf<Attachment>;

    const withoutValues = await client(
      MockOntology.objects.objectTypeWithAllPropertyTypes,
    ).where({ id: 2 }).fetchPage();

    const {
      attachment: emptyAttachment,
      attachmentArray: emptyAttachmentArray,
    } = withoutValues.data[0];
    expect(emptyAttachment).toBeUndefined();
    expect(emptyAttachmentArray).toBeUndefined();
  });

  it("works even with unknown apiNames", async () => {
    const clientCtx = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );
    createSharedClientContext(
      "https://stack.palantir.com",
      async () => "myAccessToken",
      "userAgent",
    );

    let object = {
      __apiName: Employee.apiName,
      __primaryKey: 0,
    } as const;
    const prototypeBefore = Object.getPrototypeOf(object);
    let object2 = await convertWireToOsdkObjects(
      clientCtx,
      [object],
      undefined,
      undefined,
      undefined,
      false,
    );
    const prototypeAfter = Object.getPrototypeOf(object2);

    expect(prototypeBefore).not.toBe(prototypeAfter);
  });

  it("updates interface when underlying changes", async () => {
    const clientCtx = createMinimalClient(
      MockOntology.metadata,
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

    const [obj] = (await convertWireToOsdkObjects(
      clientCtx,
      [objectFromWire],
      undefined,
    )) as unknown as Osdk<Employee>[];

    expect(obj.fullName).toEqual("Steve");
    expect(Object.keys(obj).sort()).toEqual([
      "$apiName",
      "$objectType",
      "$primaryKey",
      "$title",
      "employeeId",
      "fullName",
    ].sort());

    const objAsFoo = obj.$as(FooInterface);
    expect(objAsFoo).toMatchObject({
      fooSpt: obj.fullName,
      $apiName: FooInterface.apiName,
      $primaryKey: obj.$primaryKey,
      $objectType: obj.$objectType,
      $title: obj.$title,
    });

    console.log(obj);
    console.log(objAsFoo);

    (obj as any).$updateInternalValues({
      fullName: "Bob",
    });
    expect(obj.fullName).toEqual("Bob");
    expect(objAsFoo.fooSpt).toEqual(obj.fullName);

    expect(Object.keys(objAsFoo).sort()).toEqual([
      "$apiName",
      "$objectType",
      "$primaryKey",
      "$title",
      "fooSpt",
    ].sort());

    expect(obj).toBe(objAsFoo.$as(Employee));
    expect(objAsFoo).toBe(obj.$as(FooInterface));
  });

  it("reconstitutes interfaces properly without rid", async () => {
    const clientCtx = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    let objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      fooSpt: "Steve",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
    )) as unknown as Osdk<FooInterface>[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$title": "Steve",
        "fooSpt": "Steve",
      }
    `);

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$title": "Steve",
        "employeeId": 0,
        "fullName": "Steve",
      }
    `);
  });

  it("reconstitutes interfaces properly with rid", async () => {
    const clientCtx = createMinimalClient(
      MockOntology.metadata,
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    let objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      __rid: "hiMom",
      fooSpt: "Steve",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
    )) as unknown as Osdk<FooInterface, "$rid" | "$all">[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$rid": "hiMom",
        "$title": "Steve",
        "fooSpt": "Steve",
      }
    `);
    expect(objAsFoo.$rid).toEqual("hiMom");

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$rid": "hiMom",
        "$title": "Steve",
        "employeeId": 0,
        "fullName": "Steve",
      }
    `);
    expect(obj.$rid).toEqual("hiMom");
  });

  describe("selection keys", () => {
    it("throws when required is missing", async () => {
      let object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(() =>
        convertWireToOsdkObjects(
          client[symbolClientContext],
          [object],
          undefined,
          undefined,
          ["employeeId"],
          "throw",
        )
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Unable to safely convert objects as some non nullable properties are null]`,
      );
    });

    it("does not throw when optional is missing", async () => {
      let object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(
        convertWireToOsdkObjects(
          client[symbolClientContext],
          [object],
          undefined,
          undefined,
          ["fullName"],
          "throw",
        ),
      ).resolves.to.not.toBeUndefined();
    });

    it("filters when it should", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      const result = await convertWireToOsdkObjects(
        client[symbolClientContext],
        [object],
        undefined,
        undefined,
        ["employeeId"],
        "drop",
      );

      expect(result.length).toBe(0);
    });

    it("does not filter when it shouldn't", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      const result = await convertWireToOsdkObjects(
        client[symbolClientContext],
        [object],
        undefined,
        undefined,
        ["fullName"],
        "drop",
      );

      expect(result.length).toBe(1);
    });
  });

  describe("without selection keys", () => {
    it("throws when required is missing", async () => {
      let object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(() =>
        convertWireToOsdkObjects(
          client[symbolClientContext],
          [object],
          undefined,
          undefined,
          undefined,
          "throw",
        )
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Unable to safely convert objects as some non nullable properties are null]`,
      );
    });

    it("does not throw when required is present", async () => {
      let object = {
        __apiName: "Employee",
        __primaryKey: 0,
        "employeeId": 0,
      } as const;

      await expect(
        convertWireToOsdkObjects(
          client[symbolClientContext],
          [object],
          undefined,
          undefined,
          undefined,
          "throw",
        ),
      ).resolves.to.not.toBeUndefined();
    });

    it("filters when it should", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      const result = await convertWireToOsdkObjects(
        client[symbolClientContext],
        [object],
        undefined,
        undefined,
        undefined,
        "drop",
      );

      expect(result.length).toBe(0);
    });

    it("does not filter when it shouldn't", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
        "employeeId": 0,
      } as const;

      const result = await convertWireToOsdkObjects(
        client[symbolClientContext],
        [object],
        undefined,
        undefined,
        undefined,
        "drop",
      );

      expect(result.length).toBe(1);
    });
  });

  it("behaves correctly when converting", async () => {
    const object = {
      __apiName: "Employee",
      __primaryKey: 0,
      fooSpt: "hi",
    } as const;

    const result = await convertWireToOsdkObjects(
      client[symbolClientContext],
      [object],
      "FooInterface",
      undefined,
      ["fooSpt"],
      "drop",
    );

    expect(result.length).toBe(1);
  });
});
