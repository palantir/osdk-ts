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

import type { ObjectSet, Osdk } from "@osdk/api";
import type { AgentDefinition, AgentParam } from "@osdk/api/unstable";
import {
  $Agents,
  Employee,
  noArgumentsAgent,
  objectArgumentsAgent,
  type Office,
  optionalArgumentsAgent,
  structuredArgumentsAgent,
  weatherAgent,
} from "@osdk/client.test.ontology";
import {
  LegacyFauxFoundry,
  type SetupServer,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import {
  afterEach,
  beforeAll,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";

import type { Client } from "../Client.js";
import { createClient, createClientWithTransaction } from "../createClient.js";
import { withScenario } from "../scenarios/withScenario.js";

describe("agents", () => {
  const baseUrl = "https://stack.palantir.com";
  let client: Client;
  let apiServer: SetupServer;
  let fauxFoundry: LegacyFauxFoundry;
  let auth: () => Promise<string>;

  beforeAll(() => {
    fauxFoundry = new LegacyFauxFoundry(baseUrl);
    const testSetup = startNodeApiServer(fauxFoundry, createClient);
    ({ client, apiServer, auth } = testSetup);

    return () => {
      apiServer.close();
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("createSession", () => {
    it("rejects scenario clients before making requests", async () => {
      const fetchFunction = vi.fn<typeof globalThis.fetch>();
      const scenario = withScenario(
        createClient(
          baseUrl,
          fauxFoundry.getDefaultOntology().getOntologyFullMetadata().ontology
            .rid,
          auth,
          {},
          fetchFunction,
        ),
        "ri.actions..scenario.test",
      );
      await expect(
        scenario(noArgumentsAgent).experimental_createSession(),
      ).rejects.toThrow("Agent sessions are not supported in scenarios");
      expect(fetchFunction).not.toHaveBeenCalled();
    });

    it("rejects transaction clients before flushing edits or making requests", async () => {
      const fetchFunction = vi.fn<typeof globalThis.fetch>();
      const flushEdits = vi.fn<() => Promise<void>>();
      const transaction = createClientWithTransaction(
        "ri.transactions..transaction.test",
        flushEdits,
        baseUrl,
        fauxFoundry.getDefaultOntology().getOntologyFullMetadata().ontology.rid,
        auth,
        {},
        fetchFunction,
      );
      await expect(
        transaction(noArgumentsAgent).experimental_createSession(),
      ).rejects.toThrow("Agent sessions are not supported in transactions");
      expect(flushEdits).not.toHaveBeenCalled();
      expect(fetchFunction).not.toHaveBeenCalled();
    });

    it.each(["ri.foundry.main.branch.test", "feature/test branch"])(
      "rejects branch %s before making requests",
      async (branch) => {
        const fetchFunction = vi.fn<typeof globalThis.fetch>();
        const branchClient = createClient(
          baseUrl,
          fauxFoundry.getDefaultOntology().getOntologyFullMetadata().ontology
            .rid,
          auth,
          { UNSTABLE_DO_NOT_USE_BRANCH: branch },
          fetchFunction,
        );
        await expect(
          branchClient(noArgumentsAgent).experimental_createSession(),
        ).rejects.toThrow("Agent sessions are not supported on branches");
        expect(fetchFunction).not.toHaveBeenCalled();
      },
    );

    it("works for generic agents", async () => {
      const generic: AgentDefinition = {
        type: "agent",
        apiName: noArgumentsAgent.apiName,
        version: noArgumentsAgent.version,
      };

      const clientBoundCreateSession =
        client(generic).experimental_createSession;

      expectTypeOf<Parameters<typeof clientBoundCreateSession>>().toEqualTypeOf<
        [args?: Record<string, unknown>]
      >();

      const session = await clientBoundCreateSession();

      expect(session).toEqual({ id: stubData.noArgumentsAgentResponse.id });
    });

    it("works without arguments", async () => {
      const clientBoundCreateSession =
        client(noArgumentsAgent).experimental_createSession;

      expectTypeOf<Parameters<typeof clientBoundCreateSession>>().toEqualTypeOf<
        [args?: Record<string, never>]
      >();
      expectTypeOf<[]>().toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{}]>().toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{ unexpected: string }]>().not.toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();

      for (const args of [undefined, {}]) {
        const session = await clientBoundCreateSession(args);
        expect(session).toEqual({
          id: stubData.noArgumentsAgentResponse.id,
        });
      }
    });

    it("works with optional arguments", async () => {
      const clientBoundCreateSession = client(
        optionalArgumentsAgent,
      ).experimental_createSession;

      expectTypeOf<Parameters<typeof clientBoundCreateSession>>().toEqualTypeOf<
        [args?: optionalArgumentsAgent.CreateSessionArguments]
      >();
      expectTypeOf<[]>().toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{}]>().toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{ city: string }]>().toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{ city: null }]>().not.toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{ city: number }]>().not.toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();

      for (const args of [undefined, {}, { city: "London" }]) {
        const session = await clientBoundCreateSession(args);
        expect(session).toEqual({
          id: stubData.optionalArgumentsAgentResponse.id,
        });
      }
    });

    it("works with object and object-set arguments", async () => {
      const clientBoundCreateSession =
        client(objectArgumentsAgent).experimental_createSession;

      type InferredParamType = Parameters<typeof clientBoundCreateSession>[0];
      type EmployeeType = InferredParamType["employee"];
      type EmployeesType = InferredParamType["employees"];

      expectTypeOf<EmployeeType>().toEqualTypeOf<
        AgentParam.ObjectType<Employee>
      >();
      expectTypeOf<number>().toMatchTypeOf<EmployeeType>();
      expectTypeOf<Osdk.Instance<Employee>>().toMatchTypeOf<EmployeeType>();
      expectTypeOf<{
        $apiName: "Employee";
        $primaryKey: number;
      }>().toMatchTypeOf<EmployeeType>();
      expectTypeOf<string>().not.toMatchTypeOf<EmployeeType>();
      expectTypeOf<Osdk.Instance<Office>>().not.toMatchTypeOf<EmployeeType>();
      expectTypeOf<{
        $apiName: "Office";
        $primaryKey: number;
      }>().not.toMatchTypeOf<EmployeeType>();

      expectTypeOf<EmployeesType>().toEqualTypeOf<
        AgentParam.ObjectSetType<Employee>
      >();
      expectTypeOf<ObjectSet<Employee>>().toMatchTypeOf<EmployeesType>();
      expectTypeOf<{
        type: "base";
        objectType: string;
      }>().not.toMatchTypeOf<EmployeesType>();
      expectTypeOf<string>().not.toMatchTypeOf<EmployeesType>();
      expectTypeOf<ObjectSet<Office>>().not.toMatchTypeOf<EmployeesType>();

      const employee = await client(Employee).fetchOne(50030);
      const employees = client(Employee).where({ employeeId: 50030 });

      const session = await clientBoundCreateSession({ employee, employees });

      expect(session).toEqual({ id: stubData.objectArgumentsAgentResponse.id });
    });

    it("works with structured arguments", async () => {
      const clientBoundCreateSession = client(
        structuredArgumentsAgent,
      ).experimental_createSession;

      type InferredParamType = Parameters<typeof clientBoundCreateSession>[0];

      const employee = await client(Employee).fetchOne(50030);
      const parameters = {
        requiredText: "hello",
        nested: {
          label: null,
          enabled: true,
          count: 1,
          date: "2026-01-01",
          timestamp: "2026-01-01T00:00:00Z",
          float: 1.5,
          long: 123456789,
          short: 12,
          tags: ["tag"],
          scores: { score: 1 },
          empty: {},
        },
        selection: { kind: "employee", employee },
        future: { newShape: true },
        optionalText: "text",
      } as const satisfies InferredParamType;

      expectTypeOf<Parameters<typeof clientBoundCreateSession>>().toEqualTypeOf<
        [args: structuredArgumentsAgent.CreateSessionArguments]
      >();

      const session = await clientBoundCreateSession(parameters);

      expect(session).toEqual({
        id: stubData.structuredArgumentsAgentResponse.id,
      });
    });

    it("works with a pinned version", async () => {
      const session = await client({
        ...noArgumentsAgent,
        version: "2.0.0",
      }).experimental_createSession();

      expect(session).toEqual({
        id: stubData.noArgumentsAgentOtherVersionResponse.id,
      });
    });

    it("works with a detached method", async () => {
      const { experimental_createSession } = client(noArgumentsAgent);

      const session = await experimental_createSession();

      expect(session).toEqual({ id: stubData.noArgumentsAgentResponse.id });
    });
  });

  it("exports agents through $Agents", () => {
    expect(Object.keys($Agents)).toEqual([
      "noArgumentsAgent",
      "objectArgumentsAgent",
      "optionalArgumentsAgent",
      "structuredArgumentsAgent",
      "weatherAgent",
    ]);
    expect($Agents.weatherAgent).toBe(weatherAgent);
  });
});
