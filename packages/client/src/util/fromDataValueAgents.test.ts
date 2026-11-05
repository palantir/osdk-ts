/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import type { ObjectSet } from "@osdk/api";
import { Employee, Office } from "@osdk/client.test.ontology";
import type { DataType } from "@osdk/foundry.agents";
import type { ObjectSet as WireObjectSet } from "@osdk/foundry.ontologies";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { beforeAll, describe, expect, it } from "vitest";

import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { deepFreeze } from "./deepFreeze.js";
import { fromDataValueAgents } from "./fromDataValueAgents.js";

const employeeType: DataType = {
  type: "object",
  ontologyApiName: "default-ontology",
  objectTypeApiName: Employee.apiName,
};
const employeeSetType: DataType = { ...employeeType, type: "objectSet" };

describe(fromDataValueAgents, () => {
  let fauxFoundry: LegacyFauxFoundry;
  let clientCtx: MinimalClient;
  let ontologyRid: string;

  beforeAll(() => {
    fauxFoundry = new LegacyFauxFoundry();
    const testSetup = startNodeApiServer(fauxFoundry, createClient);
    ontologyRid = testSetup.fauxFoundry.defaultOntologyRid;
    clientCtx = createMinimalClient(
      { ontologyRid },
      testSetup.fauxFoundry.baseUrl,
      testSetup.auth,
      {},
    );
    return () => {
      testSetup.apiServer.close();
    };
  });

  function employeeReference(primaryKey: number) {
    return {
      ontologyRid,
      objectTypeApiName: Employee.apiName,
      primaryKey: { employeeId: primaryKey },
    };
  }

  it.each([
    {
      name: "a zero primary key",
      objectTypeApiName: Employee.apiName,
      primaryKey: { employeeId: 0 },
      expected: 0,
    },
    {
      name: "a numeric primary key",
      objectTypeApiName: Employee.apiName,
      primaryKey: { employeeId: 50030 },
      expected: 50030,
    },
    {
      name: "a string primary key",
      objectTypeApiName: Office.apiName,
      primaryKey: { officeId: "NYC" },
      expected: "NYC",
    },
  ])(
    "converts an object reference with $name",
    async ({ objectTypeApiName, primaryKey, expected }) => {
      const converted = await fromDataValueAgents(
        { ontologyRid, objectTypeApiName, primaryKey },
        clientCtx,
        { ...employeeType, objectTypeApiName },
      );

      expect(converted).toEqual({
        $apiName: objectTypeApiName,
        $objectType: objectTypeApiName,
        $primaryKey: expected,
        $objectSpecifier: `${objectTypeApiName}:${expected}`,
        $title: undefined,
      });
    },
  );

  it.each([
    {
      name: "an unfiltered object set",
      objectSet: { type: "base", objectType: "Employee" },
      expected: [50031],
    },
    {
      name: "a filtered object set",
      objectSet: {
        type: "filter",
        objectSet: { type: "base", objectType: "Employee" },
        where: { type: "eq", field: "employeeId", value: 50030 },
      },
      expected: [],
    },
  ] satisfies Array<{
    name: string;
    objectSet: WireObjectSet;
    expected: number[];
  }>)(
    "converts a RID for $name into a usable object set",
    async ({ objectSet, expected }) => {
      const rid = "ri.object-set.main.object-set.agent-value";
      fauxFoundry.getDefaultDataStore().registerObjectSet(rid, objectSet);

      const converted = (await fromDataValueAgents(
        rid,
        clientCtx,
        employeeSetType,
      )) as ObjectSet<typeof Employee>;

      const included = await converted.where({ employeeId: 50030 }).fetchPage();
      expect(included.data.map((employee) => employee.$primaryKey)).toEqual([
        50030,
      ]);
      const page = await converted.where({ employeeId: 50031 }).fetchPage();
      expect(page.data.map((employee) => employee.$primaryKey)).toEqual(
        expected,
      );
    },
  );

  it("recursively converts lists, records, structs, nullable values, and union members", async () => {
    const type: DataType = {
      type: "struct",
      fields: [
        {
          name: "groups",
          dataType: {
            type: "record",
            valueType: {
              type: "list",
              elementType: {
                type: "nullable",
                wrappedType: {
                  type: "discriminatedUnion",
                  discriminatorKey: "kind",
                  members: [
                    {
                      discriminatorValue: "employee",
                      fields: [{ name: "value", dataType: employeeType }],
                    },
                    {
                      discriminatorValue: "text",
                      fields: [{ name: "value", dataType: { type: "string" } }],
                    },
                  ],
                },
              },
            },
          },
        },
      ],
    };
    const input = deepFreeze({
      groups: {
        team: [
          {
            kind: "employee",
            value: employeeReference(50030),
          },
          { kind: "text", value: "hello" },
          null,
        ],
      },
    });

    const converted = await fromDataValueAgents(input, clientCtx, type);

    expect(converted).toEqual({
      groups: {
        team: [
          {
            kind: "employee",
            value: {
              $apiName: "Employee",
              $objectType: "Employee",
              $primaryKey: 50030,
              $objectSpecifier: "Employee:50030",
              $title: undefined,
            },
          },
          { kind: "text", value: "hello" },
          null,
        ],
      },
    });
    expect(input.groups.team[0]?.value).toEqual(employeeReference(50030));
  });

  it("preserves null", async () => {
    const converted = await fromDataValueAgents(null, clientCtx, {
      type: "nullable",
      wrappedType: employeeType,
    });

    expect(converted).toBeNull();
  });

  it("preserves undefined", async () => {
    const converted = await fromDataValueAgents(
      undefined,
      clientCtx,
      employeeType,
    );

    expect(converted).toBeUndefined();
  });

  it("preserves undefined record entries", async () => {
    const converted = await fromDataValueAgents(
      { employee: employeeReference(50030), missing: undefined },
      clientCtx,
      { type: "record", valueType: employeeType },
    );

    expect(converted).toStrictEqual({
      employee: {
        $apiName: "Employee",
        $objectType: "Employee",
        $primaryKey: 50030,
        $objectSpecifier: "Employee:50030",
        $title: undefined,
      },
      missing: undefined,
    });
  });

  it("preserves undefined struct fields", async () => {
    const converted = await fromDataValueAgents(
      { employee: undefined },
      clientCtx,
      {
        type: "struct",
        fields: [
          { name: "employee", dataType: employeeType },
          { name: "omitted", dataType: employeeType },
        ],
      },
    );

    expect(converted).toStrictEqual({ employee: undefined });
  });

  it("passes through unknown struct fields", async () => {
    const converted = await fromDataValueAgents(
      { name: "Alice", extra: 42 },
      clientCtx,
      {
        type: "struct",
        fields: [{ name: "name", dataType: { type: "string" } }],
      },
    );

    expect(converted).toStrictEqual({ name: "Alice", extra: 42 });
  });

  it("passes through unknown union members", async () => {
    const input = {
      kind: "unknown",
      value: 42,
    };

    const converted = await fromDataValueAgents(input, clientCtx, {
      type: "discriminatedUnion",
      discriminatorKey: "kind",
      members: [
        {
          discriminatorValue: "text",
          fields: [{ name: "value", dataType: { type: "string" } }],
        },
      ],
    });

    expect(converted).toStrictEqual(input);
  });

  it.each([
    {
      name: "object",
      dataType: employeeType,
      value: true,
      expected: "an object",
    },
    {
      name: "object set",
      dataType: employeeSetType,
      value: 42,
      expected: "an object set RID",
    },
    {
      name: "list",
      dataType: { type: "list", elementType: employeeType },
      value: {},
      expected: "an array",
    },
    {
      name: "record",
      dataType: { type: "record", valueType: employeeType },
      value: [],
      expected: "an object",
    },
    {
      name: "struct",
      dataType: { type: "struct", fields: [] },
      value: false,
      expected: "an object",
    },
    {
      name: "union",
      dataType: {
        type: "discriminatedUnion",
        discriminatorKey: "kind",
        members: [],
      },
      value: "invalid",
      expected: "an object",
    },
  ] satisfies Array<{
    name: string;
    dataType: DataType;
    value: unknown;
    expected: string;
  }>)(
    "reports the field path and expected input for an invalid $name",
    async ({ dataType, value, expected }) => {
      await expect(
        fromDataValueAgents({ input: value }, clientCtx, {
          type: "struct",
          fields: [{ name: "input", dataType }],
        }),
      ).rejects.toThrow(`Invalid agent value "input": expected ${expected}.`);
    },
  );

  it("reports invalid root values without a path", async () => {
    await expect(
      fromDataValueAgents([], clientCtx, { type: "struct", fields: [] }),
    ).rejects.toThrow("Invalid agent value: expected an object.");
  });

  it.each([
    { key: "engineering", path: "groups.engineering[1].value" },
    { key: "engineering.eu", path: 'groups["engineering.eu"][1].value' },
  ])(
    "reports the nested field path for record key $key",
    async ({ key, path }) => {
      const dataType: DataType = {
        type: "record",
        valueType: {
          type: "list",
          elementType: {
            type: "nullable",
            wrappedType: {
              type: "discriminatedUnion",
              discriminatorKey: "kind",
              members: [
                {
                  discriminatorValue: "employee",
                  fields: [{ name: "value", dataType: employeeType }],
                },
              ],
            },
          },
        },
      };
      await expect(
        fromDataValueAgents(
          { groups: { [key]: [null, { kind: "employee", value: false }] } },
          clientCtx,
          { type: "struct", fields: [{ name: "groups", dataType }] },
        ),
      ).rejects.toThrow(`Invalid agent value "${path}": expected an object.`);
    },
  );

  it.each([
    {
      name: "object",
      dataType: employeeType,
      value: (): ReturnType<typeof employeeReference> =>
        employeeReference(50030),
    },
    {
      name: "object set",
      dataType: employeeSetType,
      value: (): string => "set-rid",
    },
  ])(
    "rejects $name metadata for another ontology",
    async ({ dataType, value }) => {
      await expect(
        fromDataValueAgents({ input: value() }, clientCtx, {
          type: "struct",
          fields: [
            {
              name: "input",
              dataType: { ...dataType, ontologyApiName: "another-ontology" },
            },
          ],
        }),
      ).rejects.toMatchObject({
        message: expect.stringContaining(
          'Failed to convert agent value "input"',
        ),
        cause: expect.objectContaining({
          message:
            'Agent value "input" references ontology "another-ontology", but the client uses ontology "default-ontology".',
        }),
      });
    },
  );

  it.each([
    {
      primaryKey: { employeeId: false },
      message: "Expected a string or number primary key",
    },
    {
      primaryKey: {},
      message:
        "Object reference primaryKey must contain exactly one entry, but received 0",
    },
    {
      primaryKey: { employeeId: 50030, otherId: 50031 },
      message:
        "Object reference primaryKey must contain exactly one entry, but received 2",
    },
  ])(
    "reports invalid primary key $primaryKey with the field path and cause",
    async ({ primaryKey, message }) => {
      const result = fromDataValueAgents(
        {
          employees: [{ ...employeeReference(50030), primaryKey }],
        },
        clientCtx,
        {
          type: "struct",
          fields: [
            {
              name: "employees",
              dataType: { type: "list", elementType: employeeType },
            },
          ],
        },
      );

      await expect(result).rejects.toMatchObject({
        message:
          'Failed to convert agent value "employees[0]" to an object identifier',
        cause: expect.objectContaining({ name: "TypeError", message }),
      });
    },
  );

  it.each([
    {
      ontologyRid: "another-ontology",
      objectTypeApiName: "Employee",
      primaryKey: { employeeId: 50030 },
    },
    { objectTypeApiName: "Office", primaryKey: { officeId: "NYC" } },
  ])("rejects invalid reference %j", async (reference) => {
    const result = fromDataValueAgents(
      { ontologyRid, ...reference },
      clientCtx,
      employeeType,
      "input",
    );
    await expect(result).rejects.toThrow(
      'Failed to convert agent value "input"',
    );
  });
});
