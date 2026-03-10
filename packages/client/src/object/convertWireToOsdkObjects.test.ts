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

import type { Attachment, Media, Osdk, PropertyKeys } from "@osdk/api";
import {
  $ontologyRid,
  Employee,
  FooInterface,
  objectTypeWithAllPropertyTypes,
} from "@osdk/client.test.ontology";
import type {
  InterfacePropertyTypeImplementation,
  OntologyObjectV2,
} from "@osdk/foundry.ontologies";
import { createSharedClientContext } from "@osdk/shared.client.impl";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it } from "vitest";
import { additionalContext, type Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import {
  convertWireToOsdkObjects,
  convertWireToOsdkObjects2,
} from "./convertWireToOsdkObjects.js";

describe("convertWireToOsdkObjects", () => {
  let client: Client;
  const interfaceToObjectTypeMappings = {
    FooInterface: { Employee: { fooSpt: "fullName" } },
  };
  const interfaceToObjectTypeMappingsV2 = {
    FooInterface: {
      Employee: {
        fooSpt: {
          type: "localPropertyImplementation",
          propertyApiName: "fullName",
        } as InterfacePropertyTypeImplementation,
        fooIdp: {
          type: "localPropertyImplementation",
          propertyApiName: "office",
        } as InterfacePropertyTypeImplementation,
      },
    },
  };

  beforeAll(() => {
    const testSetup = startNodeApiServer(new LegacyFauxFoundry(), createClient);
    ({ client } = testSetup);
    return () => {
      testSetup.apiServer.close();
    };
  });

  it("configures properties correctly", async () => {
    const { data: [employee] } = await client(Employee).fetchPage();

    expect(Object.keys(employee).sort()).toEqual([
      "employeeId",
      "$title",
      "fullName",
      "office",
      "class",
      "startDate",
      "employeeSensor",
      "employeeStatus",
      "$apiName",
      "$objectType",
      "$primaryKey",
      "$propertySecurities",
      "$objectSpecifier",
      "employeeLocation",
    ].sort());

    expect(Object.keys(employee.$as)).toEqual([]);
    expect(Object.keys(employee.$link)).toEqual([
      "lead",
      "officeLink",
      "peeps",
      "visitedOffices",
    ]);

    const asFoo = employee.$as(FooInterface);
    expect(Object.keys(asFoo.$link)).toEqual([
      "toBar",
    ]);
  });

  it("stringifies properties on objects and interfaces correctly", async () => {
    const { data: [employee] } = await client(Employee).fetchPage();
    const { data: [employee2] } = await client(Employee).where({
      $and: [{ employeeId: { $gt: 50030 } }, { employeeId: { $lt: 50032 } }],
    }).fetchPage();

    // Should not have $title
    expect(JSON.stringify(employee)).toMatchInlineSnapshot(
      `"{"employeeId":50030,"fullName":"John Doe","office":"NYC","class":"Red","startDate":"2019-01-01","employeeStatus":{},"employeeSensor":{},"employeeLocation":{},"$apiName":"Employee","$objectType":"Employee","$primaryKey":50030,"$objectSpecifier":"Employee:50030"}"`,
    );

    expect(JSON.stringify(employee.$as(FooInterface))).toMatchInlineSnapshot(
      `"{"$apiName":"FooInterface","$objectType":"Employee","$primaryKey":50030,"$objectSpecifier":"Employee:50030","fooSpt":"John Doe","fooIdp":"NYC"}"`,
    );

    // Should have $title
    expect(JSON.stringify(employee2)).toMatchInlineSnapshot(
      `"{"employeeId":50031,"fullName":"Jane Doe","office":"SEA","class":"Blue","startDate":"2012-02-12","employeeStatus":{},"employeeSensor":{},"employeeLocation":{},"$apiName":"Employee","$objectType":"Employee","$primaryKey":50031,"$title":"Jane Doe","$objectSpecifier":"Employee:50031"}"`,
    );

    expect(JSON.stringify(employee2.$as(FooInterface))).toMatchInlineSnapshot(
      `"{"$apiName":"FooInterface","$objectType":"Employee","$primaryKey":50031,"$objectSpecifier":"Employee:50031","$title":"Jane Doe","fooSpt":"Jane Doe","fooIdp":"SEA"}"`,
    );
  });

  it("reuses the object prototype across objects", async () => {
    const employees = await client(Employee).fetchPage();
    expect(employees.data.length).toBeGreaterThanOrEqual(2);
    const [a, b] = employees.data;

    expect(Object.getPrototypeOf(Object.getPrototypeOf(a))).toBe(
      Object.getPrototypeOf(Object.getPrototypeOf(b)),
    );
  });

  it("converts attachments as expected", async () => {
    const withValues = await client(
      objectTypeWithAllPropertyTypes,
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
      objectTypeWithAllPropertyTypes,
    ).where({ id: 2 }).fetchPage();

    const {
      attachment: emptyAttachment,
      attachmentArray: emptyAttachmentArray,
    } = withoutValues.data[0];
    expect(emptyAttachment).toBeUndefined();
    expect(emptyAttachmentArray).toBeUndefined();
  });

  it("converts media as expected", async () => {
    const withValues = await client(
      objectTypeWithAllPropertyTypes,
    )
      .where({ id: 1 })
      .fetchPage();
    expect(withValues.data.length).toBeGreaterThanOrEqual(1);

    const { mediaReference } = withValues.data[0];

    expectTypeOf(mediaReference).toMatchTypeOf<
      Media | undefined
    >;
    expect(mediaReference).toBeDefined();

    const withoutValues = await client(
      objectTypeWithAllPropertyTypes,
    ).where({ id: 2 }).fetchPage();

    const {
      mediaReference: emptyMedia,
    } = withoutValues.data[0];
    expect(emptyMedia).toBeUndefined();
  });

  it("creates immutable objects", async () => {
    const employees = await client(Employee).fetchPage();
    expect(employees.data.length).toBeGreaterThanOrEqual(2);
    const [a, b] = employees.data;

    expect(a).toBeDefined();
    expect(() => {
      (a as any).somePropertyThatShouldNotExist = 5;
    }).toThrow();

    const objAsFoo = a.$as(FooInterface);
    expect(objAsFoo).toBeDefined();
    expect(() => {
      (objAsFoo as any).somePropertyThatShouldNotExist = 5;
    }).toThrow();
  });

  it("works even with unknown apiNames - old", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );
    createSharedClientContext(
      "https://stack.palantir.com",
      async () => "myAccessToken",
      "userAgent",
    );

    const object = {
      __apiName: Employee.apiName,
      __primaryKey: 0,
    } as const;
    const prototypeBefore = Object.getPrototypeOf(object);
    const object2 = await convertWireToOsdkObjects(
      clientCtx,
      [object],
      undefined,
      undefined,
      {},
      undefined,
      undefined,
      false,
    );
    const prototypeAfter = Object.getPrototypeOf(object2);

    expect(prototypeBefore).not.toBe(prototypeAfter);
  });

  it("works even with unknown apiNames - new", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );
    createSharedClientContext(
      "https://stack.palantir.com",
      async () => "myAccessToken",
      "userAgent",
    );

    const object = {
      __apiName: Employee.apiName,
      __primaryKey: 0,
    } as const;
    const prototypeBefore = Object.getPrototypeOf(object);
    const object2 = await convertWireToOsdkObjects2(
      clientCtx,
      [object],
      undefined,
      {},
      undefined,
      undefined,
      undefined,
      false,
    );
    const prototypeAfter = Object.getPrototypeOf(object2);

    expect(prototypeBefore).not.toBe(prototypeAfter);
  });

  it("reconstitutes interfaces properly without rid - old", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    const objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      fooSpt: "Steve",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
      undefined,
      {},
      undefined,
    )) as unknown as Osdk<FooInterface>[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$title": "Steve",
        "fooSpt": "Steve",
      }
    `);

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$title": "Steve",
        "employeeId": 0,
        "fullName": "Steve",
      }
    `);
  });

  it("reconstitutes interfaces properly without rid - new", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    const objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      fullName: "Steve",
      office: "SEA",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects2(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
      {},
      undefined,
      false,
      undefined,
      false,
      interfaceToObjectTypeMappings,
    )) as unknown as Osdk<FooInterface>[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$title": "Steve",
        "fooIdp": "SEA",
        "fooSpt": "Steve",
      }
    `);

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$title": "Steve",
        "fullName": "Steve",
        "office": "SEA",
      }
    `);
  });

  it("reconstitutes interfaces properly without rid - new with IDP", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    const objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      fullName: "Steve",
      office: "SEA",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects2(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
      {},
      undefined,
      false,
      undefined,
      false,
      interfaceToObjectTypeMappings,
      interfaceToObjectTypeMappingsV2,
    )) as unknown as Osdk<FooInterface>[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$title": "Steve",
        "fooIdp": "SEA",
        "fooSpt": "Steve",
      }
    `);

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$title": "Steve",
        "fullName": "Steve",
        "office": "SEA",
      }
    `);
  });

  it("reconstitutes interfaces properly with rid", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    const objectFromWire = {
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
      undefined,
      {},
      undefined,
    )) as unknown as Osdk<FooInterface, "$rid" | "$all">[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
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
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$rid": "hiMom",
        "$title": "Steve",
        "employeeId": 0,
        "fullName": "Steve",
      }
    `);
    expect(obj.$rid).toEqual("hiMom");
  });

  it("reconstitutes interfaces properly with rid - new", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    const objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      __rid: "hiMom",
      fullName: "Steve",
      employeeId: 0,
      office: "SEA",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects2(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
      {},
      undefined,
      false,
      undefined,
      false,
      interfaceToObjectTypeMappings,
    )) as unknown as Osdk<FooInterface, "$rid" | "$all">[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$rid": "hiMom",
        "$title": "Steve",
        "fooIdp": "SEA",
        "fooSpt": "Steve",
      }
    `);
    expect(objAsFoo.$rid).toEqual("hiMom");

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$rid": "hiMom",
        "$title": "Steve",
        "employeeId": 0,
        "fullName": "Steve",
        "office": "SEA",
      }
    `);
    expect(obj.$rid).toEqual("hiMom");
  });

  it("reconstitutes interfaces properly with rid - new with IDP", async () => {
    const clientCtx = createMinimalClient(
      { ontologyRid: $ontologyRid },
      "https://stack.palantir.com",
      async () => "myAccessToken",
    );

    const objectFromWire = {
      __apiName: "Employee" as const,
      __primaryKey: 0,
      __title: "Steve",
      __rid: "hiMom",
      fullName: "Steve",
      employeeId: 0,
      office: "SEA",
    } satisfies OntologyObjectV2;

    const [objAsFoo] = (await convertWireToOsdkObjects2(
      clientCtx,
      [objectFromWire],
      FooInterface.apiName,
      {},
      undefined,
      false,
      undefined,
      false,
      interfaceToObjectTypeMappings,
      interfaceToObjectTypeMappingsV2,
    )) as unknown as Osdk<FooInterface, "$rid" | "$all">[];

    expect(objAsFoo).toMatchInlineSnapshot(`
      {
        "$apiName": "FooInterface",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$rid": "hiMom",
        "$title": "Steve",
        "fooIdp": "SEA",
        "fooSpt": "Steve",
      }
    `);
    expect(objAsFoo.$rid).toEqual("hiMom");

    const obj = objAsFoo.$as(Employee);
    expect(obj.fullName).toEqual("Steve");

    expect(obj).toMatchInlineSnapshot(`
      {
        "$apiName": "Employee",
        "$objectSpecifier": "Employee:0",
        "$objectType": "Employee",
        "$primaryKey": 0,
        "$propertySecurities": undefined,
        "$rid": "hiMom",
        "$title": "Steve",
        "employeeId": 0,
        "fullName": "Steve",
        "office": "SEA",
      }
    `);
    expect(obj.$rid).toEqual("hiMom");
  });

  describe("selection keys", () => {
    it("throws when required is missing", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(() =>
        convertWireToOsdkObjects(
          client[additionalContext],
          [object],
          undefined,
          undefined,
          {},
          undefined,
          ["employeeId"],
          "throw",
        )
      ).rejects.toThrowErrorMatchingInlineSnapshot(
        `[Error: Unable to safely convert objects as some non nullable properties are null]`,
      );
    });

    it("does not throw when optional is missing", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(
        convertWireToOsdkObjects(
          client[additionalContext],
          [object],
          undefined,
          undefined,
          {},
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
        client[additionalContext],
        [object],
        undefined,
        undefined,
        {},
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
        client[additionalContext],
        [object],
        undefined,
        undefined,
        {},
        undefined,
        ["fullName"],
        "drop",
      );

      expect(result.length).toBe(1);
    });
  });

  describe("selection keys - new", () => {
    it("throws when required is missing", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(() =>
        convertWireToOsdkObjects2(
          client[additionalContext],
          [object],
          undefined,
          {},
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
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(
        convertWireToOsdkObjects2(
          client[additionalContext],
          [object],
          undefined,
          {},
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

      const result = await convertWireToOsdkObjects2(
        client[additionalContext],
        [object],
        undefined,
        {},
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

      const result = await convertWireToOsdkObjects2(
        client[additionalContext],
        [object],
        undefined,
        {},
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
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(() =>
        convertWireToOsdkObjects2(
          client[additionalContext],
          [object],
          undefined,
          {},
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
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
        "employeeId": 0,
      } as const;

      await expect(
        convertWireToOsdkObjects2(
          client[additionalContext],
          [object],
          undefined,
          {},
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

      const result = await convertWireToOsdkObjects2(
        client[additionalContext],
        [object],
        undefined,
        {},
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

      const result = await convertWireToOsdkObjects2(
        client[additionalContext],
        [object],
        undefined,
        {},
        undefined,
        undefined,
        undefined,
        "drop",
      );

      expect(result.length).toBe(1);
    });
  });

  describe("without selection keys - new", () => {
    it("throws when required is missing", async () => {
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
      } as const;

      await expect(() =>
        convertWireToOsdkObjects2(
          client[additionalContext],
          [object],
          undefined,
          {},
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
      const object = {
        __apiName: "Employee",
        __primaryKey: 0,
        "employeeId": 0,
      } as const;

      await expect(
        convertWireToOsdkObjects2(
          client[additionalContext],
          [object],
          undefined,
          {},
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

      const result = await convertWireToOsdkObjects2(
        client[additionalContext],
        [object],
        undefined,
        {},
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

      const result = await convertWireToOsdkObjects2(
        client[additionalContext],
        [object],
        undefined,
        {},
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

    const result = await convertWireToOsdkObjects2(
      client[additionalContext],
      [object],
      "FooInterface",
      {},
      undefined,
      undefined,
      ["fooSpt"],
      "drop",
      interfaceToObjectTypeMappings,
    );

    expect(result.length).toBe(1);
  });

  it("behaves correctly when converting with IDP", async () => {
    const object = {
      __apiName: "Employee",
      __primaryKey: 0,
      fooSpt: "hi",
      fooDip: "howdy",
    } as const;

    const result = await convertWireToOsdkObjects2(
      client[additionalContext],
      [object],
      "FooInterface",
      {},
      undefined,
      undefined,
      ["fooSpt", "fooIdp"],
      "drop",
      interfaceToObjectTypeMappings,
      interfaceToObjectTypeMappingsV2,
    );

    expect(result.length).toBe(1);
  });

  describe("$metadata", () => {
    describe("object", () => {
      it("has an accessible object on $__experimental-metadata", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        expect(employee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata)
          .toBeDefined();
        expect(
          employee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata.ObjectMetadata,
        )
          .toMatchInlineSnapshot(
            `
            {
              "apiName": "Employee",
              "description": "A full-time or part-time 

             employee of our firm",
              "displayName": "Employee",
              "icon": {
                "color": "blue",
                "name": "person",
                "type": "blueprint",
              },
              "implements": [
                "FooInterface",
              ],
              "interfaceMap": {
                "FooInterface": {
                  "fooIdp": "office",
                  "fooSpt": "fullName",
                },
              },
              "inverseInterfaceMap": {
                "FooInterface": {
                  "fullName": "fooSpt",
                  "office": "fooIdp",
                },
              },
              "links": {
                "lead": {
                  "multiplicity": false,
                  "targetType": "Employee",
                },
                "officeLink": {
                  "multiplicity": false,
                  "targetType": "Office",
                },
                "peeps": {
                  "multiplicity": true,
                  "targetType": "Employee",
                },
                "visitedOffices": {
                  "multiplicity": true,
                  "targetType": "Office",
                },
              },
              "pluralDisplayName": "Employees",
              "primaryKeyApiName": "employeeId",
              "primaryKeyType": "integer",
              "properties": {
                "class": {
                  "description": "",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "employeeId": {
                  "description": undefined,
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": false,
                  "type": "integer",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "employeeLocation": {
                  "description": "Geotime series reference of the location of the employee",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "geotimeSeriesReference",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "employeeSensor": {
                  "description": "TimeSeries sensor of the status of the employee",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "stringTimeseries",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "employeeStatus": {
                  "description": "TimeSeries of the status of the employee",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "stringTimeseries",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "favoriteRestaurants": {
                  "description": undefined,
                  "displayName": undefined,
                  "multiplicity": true,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "fullName": {
                  "description": undefined,
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "office": {
                  "description": "The unique "ID" of the employee's \\"primary\\" assigned office.
             This is some more text.",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "skillSet": {
                  "description": "The skills of the employee",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "skillSetEmbedding": {
                  "description": "Vectorized skill set",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "vector",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "startDate": {
                  "description": "The date the employee was hired (most recently, if they were re-hired)",
                  "displayName": undefined,
                  "multiplicity": false,
                  "nullable": true,
                  "type": "datetime",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
              },
              "rid": "ri.ontology.main.object-type.401ac022-89eb-4591-8b7e-0a912b9efb44",
              "status": "ACTIVE",
              "titleProperty": "fullName",
              "type": "object",
              "visibility": "NORMAL",
              Symbol(InterfaceDefinitions): {
                "FooInterface": {
                  "def": {
                    "apiName": "FooInterface",
                    "description": "Interface for Foo",
                    "displayName": "Foo Interface",
                    "implementedBy": [
                      "Employee",
                      "Person",
                    ],
                    "implements": [],
                    "links": {
                      "toBar": {
                        "multiplicity": true,
                        "targetType": "interface",
                        "targetTypeApiName": "BarInterface",
                      },
                    },
                    "properties": {
                      "fooIdp": {
                        "description": "A Foo IDP",
                        "displayName": "Foo IDP",
                        "multiplicity": false,
                        "nullable": true,
                        "type": "string",
                        "valueFormatting": undefined,
                        "valueTypeApiName": undefined,
                      },
                      "fooSpt": {
                        "description": "A foo",
                        "displayName": "Foo",
                        "multiplicity": false,
                        "nullable": true,
                        "type": "string",
                        "valueFormatting": undefined,
                        "valueTypeApiName": undefined,
                      },
                    },
                    "rid": "ri.interface.main.interface.1",
                    "type": "interface",
                  },
                  "handler": undefined,
                },
              },
            }
          `,
          );
      });

      it("$experimental_metadata is not enumerable", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();

        expect(
          employee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
            .propertyIsEnumerable(
              "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata",
            ),
        ).toEqual(
          false,
        );
      });

      it("returns frozen metadata", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        expect(employee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata)
          .toBeDefined();
        expect(
          Object.isFrozen(
            employee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
              .ObjectMetadata,
          ),
        ).toBe(true);
      });

      it("returns the same reference", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        const { data: [employee2] } = await client(Employee).fetchPage();
        expect(
          employee.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata.ObjectMetadata,
        )
          .toBe(
            employee2.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
              .ObjectMetadata,
          );
      });
    });

    describe("interface", () => {
      it("has an accessible interface on $__experimental-metadata", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        const objAsFoo = employee.$as(FooInterface);
        expect(objAsFoo.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata)
          .toBeDefined();
        expect(
          objAsFoo.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
            .InterfaceMetadata,
        )
          .toMatchInlineSnapshot(
            `
            {
              "apiName": "FooInterface",
              "description": "Interface for Foo",
              "displayName": "Foo Interface",
              "implementedBy": [
                "Employee",
                "Person",
              ],
              "implements": [],
              "links": {
                "toBar": {
                  "multiplicity": true,
                  "targetType": "interface",
                  "targetTypeApiName": "BarInterface",
                },
              },
              "properties": {
                "fooIdp": {
                  "description": "A Foo IDP",
                  "displayName": "Foo IDP",
                  "multiplicity": false,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
                "fooSpt": {
                  "description": "A foo",
                  "displayName": "Foo",
                  "multiplicity": false,
                  "nullable": true,
                  "type": "string",
                  "valueFormatting": undefined,
                  "valueTypeApiName": undefined,
                },
              },
              "rid": "ri.interface.main.interface.1",
              "type": "interface",
            }
          `,
          );
      });
      it("$experimental_metadata is not enumerable", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        const objAsFoo = employee.$as(FooInterface);
        expect(
          objAsFoo.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
            .propertyIsEnumerable(
              "$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata",
            ),
        ).toEqual(
          false,
        );
      });
      it("returns frozen metadata", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        const objAsFoo = employee.$as(FooInterface);
        expect(objAsFoo.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata)
          .toBeDefined();
        expect(
          Object.isFrozen(
            objAsFoo.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
              .InterfaceMetadata,
          ),
        ).toBe(true);
      });
      it("returns the same reference", async () => {
        const { data: [employee] } = await client(Employee).fetchPage();
        const objAsFoo = employee.$as(FooInterface);
        const { data: [employee2] } = await client(Employee).fetchPage();
        const objAsFoo2 = employee2.$as(FooInterface);
        expect(
          objAsFoo.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
            .InterfaceMetadata,
        )
          .toBe(
            objAsFoo2.$__EXPERIMENTAL__NOT_SUPPORTED_YET__metadata
              .InterfaceMetadata,
          );
      });
    });
  });
});

describe("Osdk.Instance", () => {
  it("is assignable to Osdk<>", () => {
    const instance: Osdk.Instance<Employee> = {} as any;
    const osdk: Osdk<Employee> = instance;
  });

  it("is assignable from Osdk<>", () => {
    const osdk: Osdk<Employee> = {} as any;
    const instance: Osdk.Instance<Employee> = osdk;
  });

  it("is assignable to Osdk<> with $notStrict", () => {
    const instance: Osdk.Instance<Employee> = {} as any;
    const osdk: Osdk<Employee, "$notStrict"> = instance;
    const osdk2: Osdk<Employee, "$notStrict" | "$all"> = instance;
  });

  it("is assignable from Osdk<> with $notStrict", () => {
    const osdk: Osdk<Employee, "$notStrict"> = {} as any;
    const osdk2: Osdk<Employee, "$notStrict" | "$all"> = osdk;
    const instance: Osdk.Instance<Employee> = osdk;
    const instance2: Osdk.Instance<Employee> = osdk2;
  });

  it("object with any for props is assignable to its normal self", () => {
    const foo: readonly Osdk.Instance<Employee, never, any>[] = {} as any;

    const bar: readonly Osdk.Instance<
      Employee,
      never,
      PropertyKeys<Employee>
    >[] = foo;
  });
});
