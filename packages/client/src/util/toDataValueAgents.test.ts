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

import { Employee, Office } from "@osdk/client.test.ontology";
import type { DataType } from "@osdk/foundry.agents";
import { LegacyFauxFoundry, startNodeApiServer } from "@osdk/shared.test";
import { afterEach, assert, beforeAll, describe, expect, it, vi } from "vitest";

import type { Client } from "../Client.js";
import { createClient } from "../createClient.js";
import { createMinimalClient } from "../createMinimalClient.js";
import type { MinimalClient } from "../MinimalClientContext.js";
import { deepFreeze } from "./deepFreeze.js";
import { toDataValueAgents } from "./toDataValueAgents.js";

const employeeType: DataType = {
  type: "object",
  ontologyApiName: "default-ontology",
  objectTypeApiName: Employee.apiName,
};
const employeeSetType: DataType = { ...employeeType, type: "objectSet" };

describe(toDataValueAgents, () => {
  let fauxFoundry: LegacyFauxFoundry;
  let client: Client;
  let clientCtx: MinimalClient;
  let ontologyRid: string;

  beforeAll(() => {
    fauxFoundry = new LegacyFauxFoundry();
    const testSetup = startNodeApiServer(fauxFoundry, createClient);
    ({ client } = testSetup);
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

  afterEach(() => {
    vi.restoreAllMocks();
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
      value: () => 0,
      primaryKey: { employeeId: 0 },
    },
    {
      name: "a numeric primary key",
      objectTypeApiName: Employee.apiName,
      value: () => 50030,
      primaryKey: { employeeId: 50030 },
    },
    {
      name: "a string primary key",
      objectTypeApiName: Office.apiName,
      value: () => "NYC",
      primaryKey: { officeId: "NYC" },
    },
    {
      name: "an object identifier",
      objectTypeApiName: Employee.apiName,
      value: () => ({ $apiName: "Employee", $primaryKey: 50030 }),
      primaryKey: { employeeId: 50030 },
    },
    {
      name: "an OSDK instance",
      objectTypeApiName: Employee.apiName,
      value: () => client(Employee).fetchOne(50030),
      primaryKey: { employeeId: 50030 },
    },
  ])(
    "converts an object argument from $name",
    async ({ objectTypeApiName, value, primaryKey }) => {
      const converted = await toDataValueAgents(await value(), clientCtx, {
        ...employeeType,
        objectTypeApiName,
      });

      expect(converted).toEqual({
        ontologyRid,
        objectTypeApiName,
        primaryKey,
      });
    },
  );

  it.each([
    {
      name: "an unfiltered object set",
      value: () => client(Employee),
      objectSet: { type: "base", objectType: "Employee" },
    },
    {
      name: "a filtered object set",
      value: () => client(Employee).where({ employeeId: 50030 }),
      objectSet: {
        type: "filter",
        objectSet: { type: "base", objectType: "Employee" },
        where: { type: "eq", field: "employeeId", value: 50030 },
      },
    },
  ])(
    "converts an object-set argument from $name",
    async ({ value, objectSet }) => {
      const converted = await toDataValueAgents(
        value(),
        clientCtx,
        employeeSetType,
      );

      assert(typeof converted === "string");
      expect(
        fauxFoundry.getDefaultDataStore().getObjectSetOrThrow(converted),
      ).toEqual(objectSet);
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
            value: {
              $apiName: "Employee",
              $primaryKey: 50030,
            },
          },
          { kind: "text", value: "hello" },
          null,
        ],
      },
    });

    const converted = await toDataValueAgents(input, clientCtx, type);

    expect(converted).toEqual({
      groups: {
        team: [
          { kind: "employee", value: employeeReference(50030) },
          { kind: "text", value: "hello" },
          null,
        ],
      },
    });
    expect(input.groups.team[0]?.value).toEqual({
      $apiName: "Employee",
      $primaryKey: 50030,
    });
  });

  it("preserves null", async () => {
    const converted = await toDataValueAgents(null, clientCtx, {
      type: "nullable",
      wrappedType: employeeType,
    });

    expect(converted).toBeNull();
  });

  it("preserves undefined", async () => {
    const converted = await toDataValueAgents(
      undefined,
      clientCtx,
      employeeType,
    );

    expect(converted).toBeUndefined();
  });

  it("preserves undefined record entries", async () => {
    const converted = await toDataValueAgents(
      { employee: 50030, missing: undefined },
      clientCtx,
      { type: "record", valueType: employeeType },
    );

    expect(converted).toStrictEqual({
      employee: employeeReference(50030),
      missing: undefined,
    });
  });

  it("preserves undefined struct fields", async () => {
    const converted = await toDataValueAgents(
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
    const converted = await toDataValueAgents(
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

    const converted = await toDataValueAgents(input, clientCtx, {
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

  it.each(["object", "objectSet"] as const)(
    "rejects %s metadata for another ontology",
    async (type) => {
      const getObject = vi.spyOn(
        clientCtx.ontologyProvider,
        "getObjectDefinition",
      );

      await expect(
        toDataValueAgents(
          type === "object" ? 50030 : client(Employee),
          clientCtx,
          {
            type,
            ontologyApiName: "another-ontology",
            objectTypeApiName: Employee.apiName,
          },
        ),
      ).rejects.toThrow("must reference the client's ontology");
      expect(getObject).not.toHaveBeenCalled();
    },
  );
});
