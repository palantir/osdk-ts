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

import type { ObjectSet, Osdk, OsdkBase } from "@osdk/api";
import type {
  AgentDefinition,
  AgentGetStateOptions,
  AgentParam,
  AgentResult,
  AgentSession,
  AgentSessionState,
} from "@osdk/api/unstable";
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
import type { GetStateResponse, SendEventResponse } from "@osdk/foundry.agents";
import {
  type FauxAgentImpl,
  LegacyFauxFoundry,
  type SetupServer,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import pDefer from "p-defer";
import {
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  expectTypeOf,
  it,
  vi,
} from "vitest";

import type { Client } from "../Client.js";
import { createClient, createClientWithTransaction } from "../createClient.js";
import {
  AgentGetStateTimeoutError,
  AgentSendEventTimeoutError,
} from "../public/experimental.js";
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
    vi.useRealTimers();
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  describe("createSession", () => {
    it("rejects scenario clients before making requests", async () => {
      const fetchFunction = vi.fn<typeof globalThis.fetch>();
      const scenario = withScenario(
        createClient(
          baseUrl,
          fauxFoundry.defaultOntologyRid,
          auth,
          {},
          fetchFunction,
        ),
        "ri.actions..scenario.test",
      );
      const result = scenario(noArgumentsAgent).experimental_createSession();
      await expect(result).rejects.toThrow(
        "Agent sessions are not supported in scenarios",
      );
      expect(fetchFunction).not.toHaveBeenCalled();
    });

    it("rejects transaction clients before flushing edits or making requests", async () => {
      const fetchFunction = vi.fn<typeof globalThis.fetch>();
      const flushEdits = vi.fn<() => Promise<void>>();
      const transaction = createClientWithTransaction(
        "ri.transactions..transaction.test",
        flushEdits,
        baseUrl,
        fauxFoundry.defaultOntologyRid,
        auth,
        {},
        fetchFunction,
      );
      const result = transaction(noArgumentsAgent).experimental_createSession();
      await expect(result).rejects.toThrow(
        "Agent sessions are not supported in transactions",
      );
      expect(flushEdits).not.toHaveBeenCalled();
      expect(fetchFunction).not.toHaveBeenCalled();
    });

    it.each(["ri.foundry.main.branch.test", "feature/test branch"])(
      "rejects branch %s before making requests",
      async (branch) => {
        const fetchFunction = vi.fn<typeof globalThis.fetch>();
        const branchClient = createClient(
          baseUrl,
          fauxFoundry.defaultOntologyRid,
          auth,
          { UNSTABLE_DO_NOT_USE_BRANCH: branch },
          fetchFunction,
        );
        const result =
          branchClient(noArgumentsAgent).experimental_createSession();
        await expect(result).rejects.toThrow(
          "Agent sessions are not supported on branches",
        );
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

      expectTypeOf<
        Awaited<ReturnType<typeof session.experimental_getState>>
      >().toEqualTypeOf<AgentSessionState>();
      expect(session).toMatchObject({
        id: stubData.noArgumentsAgentResponse.id,
      });
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
        expectTypeOf<
          typeof session
        >().toEqualTypeOf<noArgumentsAgent.Session>();
        expectTypeOf<
          Parameters<typeof session.experimental_sendEvent>[0]
        >().toBeNever();
        expect(session).toMatchObject({
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
      expectTypeOf<[{ city: null }]>().toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();
      expectTypeOf<[{ city: number }]>().not.toMatchTypeOf<
        Parameters<typeof clientBoundCreateSession>
      >();

      for (const args of [undefined, {}, { city: "London" }]) {
        const session = await clientBoundCreateSession(args);
        expect(session).toMatchObject({
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

      expect(session).toMatchObject({
        id: stubData.objectArgumentsAgentResponse.id,
      });
    });

    it("works with structured arguments", async () => {
      const clientBoundCreateSession = client(
        structuredArgumentsAgent,
      ).experimental_createSession;

      type InferredParamType = Parameters<typeof clientBoundCreateSession>[0];

      expectTypeOf<InferredParamType["nested"]["label"]>().toEqualTypeOf<
        string | null
      >();
      expectTypeOf<
        Omit<InferredParamType["nested"], "label">
      >().not.toMatchTypeOf<InferredParamType["nested"]>();

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

      expect(session).toMatchObject({
        id: stubData.structuredArgumentsAgentResponse.id,
      });
    });

    it("works with a pinned version", async () => {
      const session = await client({
        ...noArgumentsAgent,
        version: "2.0.0",
      }).experimental_createSession();

      expect(session).toMatchObject({
        id: stubData.noArgumentsAgentOtherVersionResponse.id,
      });
    });

    it("works with a detached method", async () => {
      const { experimental_createSession } = client(noArgumentsAgent);

      const session = await experimental_createSession();

      expect(session).toMatchObject({
        id: stubData.noArgumentsAgentResponse.id,
      });
    });
  });

  it("exports agents through $Agents", () => {
    const agentNames = Object.keys($Agents);
    expect(agentNames).toEqual([
      "noArgumentsAgent",
      "objectArgumentsAgent",
      "optionalArgumentsAgent",
      "structuredArgumentsAgent",
      "weatherAgent",
    ]);
    expect($Agents.weatherAgent).toBe(weatherAgent);
  });

  describe("session lookup", () => {
    it("rejects scenario clients before making requests", async () => {
      const fetchFunction = vi.fn<typeof globalThis.fetch>();
      const scenario = withScenario(
        createClient(
          baseUrl,
          fauxFoundry.defaultOntologyRid,
          auth,
          {},
          fetchFunction,
        ),
        "ri.actions..scenario.test",
      );
      const result =
        scenario(weatherAgent).experimental_getSession("session-id");
      await expect(result).rejects.toThrow(
        "Agent sessions are not supported in scenarios",
      );
      expect(fetchFunction).not.toHaveBeenCalled();
    });

    it("rejects transaction clients before flushing edits or making requests", async () => {
      const fetchFunction = vi.fn<typeof globalThis.fetch>();
      const flushEdits = vi.fn<() => Promise<void>>();
      const transaction = createClientWithTransaction(
        "ri.transactions..transaction.test",
        flushEdits,
        baseUrl,
        fauxFoundry.defaultOntologyRid,
        auth,
        {},
        fetchFunction,
      );
      const result =
        transaction(weatherAgent).experimental_getSession("session-id");
      await expect(result).rejects.toThrow(
        "Agent sessions are not supported in transactions",
      );
      expect(flushEdits).not.toHaveBeenCalled();
      expect(fetchFunction).not.toHaveBeenCalled();
    });

    it.each(["ri.foundry.main.branch.test", "feature/test branch"])(
      "rejects branch %s before making requests",
      async (branch) => {
        const fetchFunction = vi.fn<typeof globalThis.fetch>();
        const branchClient = createClient(
          baseUrl,
          fauxFoundry.defaultOntologyRid,
          auth,
          { UNSTABLE_DO_NOT_USE_BRANCH: branch },
          fetchFunction,
        );
        const result =
          branchClient(weatherAgent).experimental_getSession("session-id");
        await expect(result).rejects.toThrow(
          "Agent sessions are not supported on branches",
        );
        expect(fetchFunction).not.toHaveBeenCalled();
      },
    );

    it("retrieves a session", async () => {
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });

      const experimental_getSession =
        client(weatherAgent).experimental_getSession;
      type InferredParamType = Parameters<typeof experimental_getSession>[0];
      expectTypeOf<InferredParamType>().toEqualTypeOf<string>();

      const session = await client(weatherAgent).experimental_getSession(
        created.id,
      );

      expectTypeOf<typeof session>().toEqualTypeOf<weatherAgent.Session>();
      expect(session).toMatchObject({ id: created.id });
    });

    it("supports a detached experimental_getSession method", async () => {
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });

      const { experimental_getSession } = client(weatherAgent);
      const session = await experimental_getSession(created.id);
      expect(session).toMatchObject({ id: created.id });
    });

    it("works for generic agents", async () => {
      const generic: AgentDefinition = {
        type: "agent",
        apiName: weatherAgent.apiName,
        version: weatherAgent.version,
      };
      const created = await client(generic).experimental_createSession({
        city: "London",
      });
      const session = await client(generic).experimental_getSession(created.id);
      expectTypeOf<typeof session>().toEqualTypeOf<AgentSession>();
      expectTypeOf<
        Awaited<ReturnType<typeof session.experimental_getState>>
      >().toEqualTypeOf<AgentSessionState>();
      expect(session).toMatchObject({ id: created.id });
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
    });

    it("retrieves a session with no declared events", async () => {
      const created =
        await client(noArgumentsAgent).experimental_createSession();
      const session = await client(noArgumentsAgent).experimental_getSession(
        created.id,
      );
      expectTypeOf<typeof session>().toEqualTypeOf<noArgumentsAgent.Session>();
      expectTypeOf<
        Parameters<typeof session.experimental_sendEvent>[0]
      >().toBeNever();
      expectTypeOf<noArgumentsAgent.ContextItem>().toBeNever();
      expect(session.id).toBe(created.id);
    });

    it("returns a fresh handle for each lookup", async () => {
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      const first = await client(weatherAgent).experimental_getSession(
        created.id,
      );
      const second = await client(weatherAgent).experimental_getSession(
        created.id,
      );
      expect(first).toMatchObject({ id: created.id });
      expect(second).toMatchObject({ id: created.id });
      expect(first).not.toBe(created);
      expect(second).not.toBe(first);
    });

    it("retrieves sessions created with an older version", async () => {
      const employee = await client(Employee).fetchOne(50030);
      const employees = client(Employee).where({ employeeId: 50030 });

      const created = await client(
        objectArgumentsAgent,
      ).experimental_createSession({
        employee,
        employees,
      });

      const session = await client({
        ...objectArgumentsAgent,
        version: "2.0.0",
      }).experimental_getSession(created.id);
      expect(session).toMatchObject({
        id: created.id,
      });

      await session.experimental_sendEvent({ SelectEmployees: employees });
    });

    it("retrieves sessions created with a newer version", async () => {
      const employee = await client(Employee).fetchOne(50030);

      const created = await client({
        type: "agent",
        apiName: objectArgumentsAgent.apiName,
        version: "2.0.0",
      }).experimental_createSession();

      const session = await client(
        objectArgumentsAgent,
      ).experimental_getSession(created.id);
      expect(session).toMatchObject({
        id: created.id,
      });

      expectTypeOf<
        typeof session
      >().toEqualTypeOf<objectArgumentsAgent.Session>();
      expectTypeOf<{ SelectEmployees: typeof employee }>().not.toMatchTypeOf<
        Parameters<typeof session.experimental_sendEvent>[0]
      >();
      const genericSession: AgentSession = session;
      await genericSession.experimental_sendEvent({
        SelectEmployees: employee,
      });
    });

    it("rejects sessions belonging to another agent", async () => {
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      const result = client(noArgumentsAgent).experimental_getSession(
        created.id,
      );
      await expect(result).rejects.toThrow(
        "Agent session does not belong to the specified agent and ontology",
      );
    });

    it("rejects sessions belonging to another ontology", async () => {
      const impl = fauxFoundry
        .getOntology(fauxFoundry.defaultOntologyRid)
        .getAgentImpl(weatherAgent.apiName, weatherAgent.version);
      vi.spyOn(impl, "createSession").mockReturnValueOnce({
        ...stubData.weatherAgentResponse,
        agentApiNameIdentifier: {
          ontology: "ri.ontology.main.ontology.other",
          agentApiName: weatherAgent.apiName,
        },
      });
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      const result = client(weatherAgent).experimental_getSession(created.id);
      await expect(result).rejects.toThrow(
        "Agent session does not belong to the specified agent and ontology",
      );
    });

    it("rejects sessions without api names", async () => {
      const impl = fauxFoundry
        .getOntology(fauxFoundry.defaultOntologyRid)
        .getAgentImpl(weatherAgent.apiName, weatherAgent.version);
      vi.spyOn(impl, "createSession").mockReturnValueOnce({
        ...stubData.weatherAgentResponse,
        agentApiNameIdentifier: undefined,
      });
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      const result = client(weatherAgent).experimental_getSession(created.id);
      await expect(result).rejects.toThrow("Cannot validate agent identity");
    });

    it("propagates errors for missing sessions", async () => {
      const result =
        client(weatherAgent).experimental_getSession("missing-session");
      await expect(result).rejects.toMatchObject({
        errorName: "Invalid Agent Session",
      });
    });

    it("rejects lookup when the session version schema cannot be loaded", async () => {
      const impl = fauxFoundry
        .getOntology(fauxFoundry.defaultOntologyRid)
        .getAgentImpl(weatherAgent.apiName, weatherAgent.version);
      const metadata = { ...stubData.weatherAgentResponse };
      vi.spyOn(impl, "createSession").mockReturnValueOnce(metadata);
      const created = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      metadata.agentVersion = "9.9.9";
      const result = client(weatherAgent).experimental_getSession(created.id);
      await expect(result).rejects.toMatchObject({
        errorName: "AgentDefinitionVersionNotFound",
      });
    });
  });

  describe("event sending", () => {
    let session: weatherAgent.Session;
    let agentImpl: FauxAgentImpl;
    const notReady: SendEventResponse = { result: { type: "sessionNotReady" } };

    beforeEach(async () => {
      session = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      agentImpl = fauxFoundry
        .getOntology(fauxFoundry.defaultOntologyRid)
        .getAgentImpl(weatherAgent.apiName, weatherAgent.version);
    });

    it("sends an event and resolves on acceptance", async () => {
      const event: weatherAgent.Events["LookupWeather"] = { city: "Paris" };
      await session.experimental_sendEvent({ LookupWeather: event });
    });

    it("checks event names and payloads", () => {
      type Event = Parameters<typeof session.experimental_sendEvent>[0];
      expectTypeOf<Event>().toEqualTypeOf<weatherAgent.SendEventArguments>();
      expectTypeOf<{
        LookupWeather: { readonly city: string };
      }>().toMatchTypeOf<Event>();
      expectTypeOf<{
        LookupWeather: { city: number };
      }>().not.toMatchTypeOf<Event>();
      expectTypeOf<{ LookupWeather: {} }>().not.toMatchTypeOf<Event>();
      expectTypeOf<{ LookupWeather: null }>().not.toMatchTypeOf<Event>();
      expectTypeOf<{ unknownEvent: string }>().not.toMatchTypeOf<Event>();
      expectTypeOf<{}>().not.toMatchTypeOf<Event>();
      const events = { LookupWeather: { city: "Paris" }, SetTemperature: 20 };
      expectTypeOf<typeof events>().not.toMatchTypeOf<Event>();
    });

    it("supports nullable payloads without making the event optional", async () => {
      expectTypeOf<weatherAgent.Events["SetTemperature"]>().toEqualTypeOf<
        number | null
      >();
      expectTypeOf<{ SetTemperature?: number | null }>().not.toMatchTypeOf<
        Parameters<typeof session.experimental_sendEvent>[0]
      >();
      await session.experimental_sendEvent({ SetTemperature: null });
    });

    it("supports a detached experimental_sendEvent method", async () => {
      const { experimental_sendEvent } = session;
      await experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
    });

    it("forwards unknown event payloads for generic agents", async () => {
      const generic: AgentDefinition = {
        type: "agent",
        apiName: weatherAgent.apiName,
        version: weatherAgent.version,
      };
      const genericSession = await client(generic).experimental_getSession(
        session.id,
      );
      expectTypeOf<
        Parameters<typeof genericSession.experimental_sendEvent>[0]
      >().toEqualTypeOf<Record<string, unknown>>();
      await genericSession.experimental_sendEvent({
        unknownEvent: { raw: [1, null, "value"] },
      });
    });

    it("converts event payloads", async () => {
      const employees = client(Employee).where({ employeeId: 50030 });
      const objectSession = await client(
        objectArgumentsAgent,
      ).experimental_createSession({
        employee: 50030,
        employees,
      });
      expectTypeOf<
        typeof objectSession
      >().toEqualTypeOf<objectArgumentsAgent.Session>();
      expectTypeOf<
        objectArgumentsAgent.Events["SelectEmployees"]
      >().toEqualTypeOf<AgentParam.ObjectSetType<Employee>>();
      expectTypeOf<{ SelectEmployees: string }>().not.toMatchTypeOf<
        Parameters<typeof objectSession.experimental_sendEvent>[0]
      >();
      await objectSession.experimental_sendEvent({
        SelectEmployees: employees,
      });
    });

    it.each([{}, { first: {}, second: {} }])(
      "requires exactly one event: %j",
      async (event) => {
        const genericSession: AgentSession = session;
        const result = genericSession.experimental_sendEvent(event);
        await expect(result).rejects.toThrow("requires exactly one event");
      },
    );

    it("propagates API errors", async () => {
      const result = session.experimental_sendEvent({
        LookupWeather: { city: "invalid" },
      });
      await expect(result).rejects.toMatchObject({
        errorName: "Invalid Agent Event",
      });
    });

    it("retries until the event is accepted", async () => {
      vi.useFakeTimers();
      const send = vi
        .spyOn(agentImpl, "sendEvent")
        .mockReturnValueOnce(notReady);
      const result = session.experimental_sendEvent(
        { LookupWeather: { city: "Paris" } },
        { $timeoutMs: 100, $pollIntervalMs: 10 },
      );
      await vi.waitFor(() => expect(send).toHaveBeenCalledTimes(1), {
        interval: 1,
      });
      await vi.advanceTimersByTimeAsync(5);
      expect(send).toHaveBeenCalledTimes(1);
      await vi.advanceTimersByTimeAsync(5);
      await result;
      expect(send).toHaveBeenCalledTimes(2);
      expect(send.mock.calls[0][0]).toEqual(send.mock.calls[1][0]);
    });

    it("times out when the event is never accepted", async () => {
      vi.useFakeTimers();
      const send = vi.spyOn(agentImpl, "sendEvent").mockReturnValue(notReady);
      const result = session.experimental_sendEvent(
        { LookupWeather: { city: "Paris" } },
        { $timeoutMs: 100, $pollIntervalMs: 10 },
      );
      const rejected = expect(result).rejects.toBeInstanceOf(
        AgentSendEventTimeoutError,
      );
      await vi.waitFor(() => expect(send).toHaveBeenCalledTimes(1), {
        interval: 1,
      });
      await vi.advanceTimersByTimeAsync(100);
      await rejected;
    });

    it("does not retry with a zero timeout", async () => {
      const send = vi.spyOn(agentImpl, "sendEvent").mockReturnValue(notReady);
      const result = session.experimental_sendEvent(
        { LookupWeather: { city: "Paris" } },
        { $timeoutMs: 0 },
      );
      await expect(result).rejects.toBeInstanceOf(AgentSendEventTimeoutError);
      expect(send).toHaveBeenCalledTimes(1);
    });

    it.each([-1, NaN, Infinity])(
      "rejects invalid timeout %s",
      async ($timeoutMs) => {
        const result = session.experimental_sendEvent(
          { LookupWeather: { city: "Paris" } },
          { $timeoutMs },
        );
        await expect(result).rejects.toThrow(
          "$timeoutMs must be a finite non-negative number",
        );
      },
    );

    it.each([0, -1, NaN, Infinity])(
      "rejects invalid polling interval %s",
      async ($pollIntervalMs) => {
        const result = session.experimental_sendEvent(
          { LookupWeather: { city: "Paris" } },
          { $pollIntervalMs },
        );
        await expect(result).rejects.toThrow(
          "$pollIntervalMs must be a finite positive number",
        );
      },
    );
  });

  describe("state reading", () => {
    let session: weatherAgent.Session;
    let agentImpl: FauxAgentImpl;

    beforeEach(async () => {
      session = await client(weatherAgent).experimental_createSession({
        city: "London",
      });
      agentImpl = fauxFoundry
        .getOntology(fauxFoundry.defaultOntologyRid)
        .getAgentImpl(weatherAgent.apiName, weatherAgent.version);
    });

    it.each(["live", "completed", "failed", "canceled"] as const)(
      "reads %s session state and preserves context item order",
      async (type) => {
        vi.spyOn(agentImpl, "getState").mockReturnValue({
          ...stubData.weatherAgentState,
          status: { type },
        });
        const state = await session.experimental_getState();
        expectTypeOf(state).toEqualTypeOf<weatherAgent.SessionState>();
        expectTypeOf(state.arguments).toEqualTypeOf<{ city: string }>();
        expectTypeOf(state.agentState.data).toEqualTypeOf<{
          temperature: number;
        }>();
        expect(state).toEqual({
          arguments: { city: "London" },
          status: type,
          agentState: { data: { temperature: 20 } },
          contextItems: {
            first: { type: "weather-result", data: "Warm" },
            second: { type: "weather-result", data: "Sunny" },
            unknown: {
              type: "future-result",
              data: { value: "Future" },
            },
          },
          contextItemOrder: ["first", "second", "unknown"],
        });
      },
    );

    it("supports a detached experimental_getState method", async () => {
      const { experimental_getState } = session;
      expectTypeOf<Parameters<typeof experimental_getState>>().toEqualTypeOf<
        [$options?: AgentGetStateOptions]
      >();
      const state = await experimental_getState();
      expectTypeOf(state).toEqualTypeOf<weatherAgent.SessionState>();
      expect(state.agentState.data).toEqual({ temperature: 20 });
    });

    it("checks structured state types", () => {
      const getSession = client(
        structuredArgumentsAgent,
      ).experimental_getSession;
      type Session = Awaited<ReturnType<typeof getSession>>;
      type State = Awaited<ReturnType<Session["experimental_getState"]>>;
      expectTypeOf<State>().toEqualTypeOf<structuredArgumentsAgent.SessionState>();
      expectTypeOf<State["arguments"]["optionalText"]>().toEqualTypeOf<
        string | null | undefined
      >();
      expectTypeOf<State["arguments"]["nested"]["label"]>().toEqualTypeOf<
        string | null
      >();
      expectTypeOf<
        Omit<State["arguments"]["nested"], "label">
      >().not.toMatchTypeOf<State["arguments"]["nested"]>();
      expectTypeOf<State["arguments"]["nested"]["tags"]>().toEqualTypeOf<
        string[]
      >();
      expectTypeOf<State["arguments"]["nested"]["scores"]>().toEqualTypeOf<
        Record<string, number>
      >();
      expectTypeOf<State["arguments"]["future"]>().toBeUnknown();
      expectTypeOf<
        Extract<
          State["arguments"]["selection"],
          { kind: "employee" }
        >["employee"]
      >().toEqualTypeOf<OsdkBase<Employee>>();
      expectTypeOf<
        Extract<
          State["arguments"]["selection"],
          { kind: "employees" }
        >["employees"]
      >().toEqualTypeOf<ObjectSet<Employee>>();
    });

    it("narrows context item payloads by type", async () => {
      vi.spyOn(agentImpl, "getState").mockReturnValue({
        ...stubData.weatherAgentState,
        contextItems: {
          message: { contextItemType: "weather-result", data: "Sunny" },
          reading: { contextItemType: "temperature", data: 20 },
          missing: { contextItemType: "temperature", data: null },
        },
        contextItemOrder: ["message", "reading", "missing"],
      });
      const state = await session.experimental_getState();
      const values = state.contextItemOrder.map((id) => {
        const item = state.contextItems[id];
        expectTypeOf(item).toEqualTypeOf<weatherAgent.ContextItem>();
        if (item.type === "weather-result") {
          expectTypeOf(item.data).toEqualTypeOf<string>();
          return item.data.toUpperCase();
        }
        expectTypeOf(item.data).toEqualTypeOf<number | null>();
        return item.data == null ? null : item.data.toFixed(1);
      });
      expect(values).toEqual(["SUNNY", "20.0", null]);
    });

    it.each([
      {
        name: "arguments",
        getData: (state: objectArgumentsAgent.SessionState) => state.arguments,
      },
      {
        name: "state",
        getData: (state: objectArgumentsAgent.SessionState) =>
          state.agentState.data,
      },
      {
        name: "context items",
        getData: (state: objectArgumentsAgent.SessionState) =>
          state.contextItems.selection.data,
      },
    ])("converts objects and sets in $name", async ({ getData }) => {
      const objectSession = await client(
        objectArgumentsAgent,
      ).experimental_createSession({
        employee: 50030,
        employees: client(Employee).where({ employeeId: 50030 }),
      });
      const state = await objectSession.experimental_getState({
        $timeoutMs: 0,
      });
      const converted = getData(state);
      expectTypeOf(converted.employee).toEqualTypeOf<
        AgentResult.ObjectType<Employee>
      >();
      expectTypeOf(converted.employees).toEqualTypeOf<
        AgentResult.ObjectSetType<Employee>
      >();
      expect(converted.employee).toMatchObject({
        $apiName: "Employee",
        $primaryKey: 50030,
        $objectSpecifier: "Employee:50030",
      });
      const page = await converted.employees
        .where({ employeeId: 50030 })
        .fetchPage();
      expect(page.data.map((employee) => employee.$primaryKey)).toEqual([
        50030,
      ]);
    });

    it("converts context items using the older session schema", async () => {
      const created = await client(
        objectArgumentsAgent,
      ).experimental_createSession({
        employee: 50030,
        employees: client(Employee).where({ employeeId: 50030 }),
      });
      const objectSession = await client({
        ...objectArgumentsAgent,
        version: "2.0.0",
      }).experimental_getSession(created.id);
      const state = await objectSession.experimental_getState();
      expect(state.contextItems.selection).toMatchObject({
        type: "selection",
      });
      const converted = state.contextItems.selection.data as {
        employee: unknown;
        employees: ObjectSet<typeof Employee>;
      };
      expect(converted.employee).toMatchObject({
        $apiName: "Employee",
        $primaryKey: 50030,
        $objectSpecifier: "Employee:50030",
      });
      const page = await converted.employees
        .where({ employeeId: 50030 })
        .fetchPage();
      expect(page.data.map((employee) => employee.$primaryKey)).toEqual([
        50030,
      ]);
    });

    it("converts newer session state and preserves context types absent from the session schema", async () => {
      const created = await client({
        type: "agent",
        apiName: objectArgumentsAgent.apiName,
        version: "2.0.0",
      }).experimental_createSession();
      const objectSession = await client(
        objectArgumentsAgent,
      ).experimental_getSession(created.id);
      const state = await objectSession.experimental_getState();
      expect(state.agentState.data).toMatchObject({
        $apiName: "Employee",
        $primaryKey: 50030,
        $objectSpecifier: "Employee:50030",
      });
      expect(state.contextItems.selection).toEqual({
        type: "selection",
        data: { retained: true },
      });
      expect(state.contextItems.newer).toMatchObject({
        type: "new-selection",
        data: {
          $apiName: "Employee",
          $primaryKey: 50030,
          $objectSpecifier: "Employee:50030",
        },
      });
    });

    it("rejects conversion failures without advancing the consistency key", async () => {
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
      const read = vi.spyOn(agentImpl, "getState").mockReturnValueOnce({
        ...stubData.weatherAgentState,
        agentState: { data: [] },
      });
      const result = session.experimental_getState();
      await expect(result).rejects.toThrow(
        'Invalid agent value "agentState.data": expected an object.',
      );
      await session.experimental_getState();
      expect(read.mock.calls[1][0].consistencyKey).toBe("accepted-event");
    });

    it("tracks accepted sends and successful reads", async () => {
      const read = vi.spyOn(agentImpl, "getState");
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
      await session.experimental_getState();
      expect(read.mock.calls[0][0]).toEqual({
        sessionId: session.id,
        consistencyKey: "accepted-event",
      });
      await session.experimental_getState();
      expect(read.mock.calls[1][0].consistencyKey).toBe("weather-state");
    });

    it("does not share consistency keys between handles", async () => {
      const otherSession = await client(
        weatherAgent,
      ).experimental_createSession({
        city: "London",
      });
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
      const read = vi.spyOn(agentImpl, "getState");
      await otherSession.experimental_getState();
      expect(read.mock.calls[0][0].consistencyKey).toBeUndefined();
    });

    it("does not share consistency keys between looked-up handles", async () => {
      const first = await client(weatherAgent).experimental_getSession(
        session.id,
      );
      const second = await client(weatherAgent).experimental_getSession(
        session.id,
      );
      await first.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
      const read = vi.spyOn(agentImpl, "getState");
      await second.experimental_getState();
      expect(read.mock.calls[0][0].consistencyKey).toBeUndefined();
      await first.experimental_getState();
      expect(read.mock.calls[1][0].consistencyKey).toBe("accepted-event");
    });

    it("keeps a read's captured key while another send completes", async () => {
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
      const first = pDefer<GetStateResponse>();
      const read = vi
        .spyOn(agentImpl, "getState")
        .mockReturnValueOnce(first.promise);
      const result = session.experimental_getState({ $pollIntervalMs: 10 });
      await vi.waitFor(() => expect(read).toHaveBeenCalledTimes(1));
      vi.spyOn(agentImpl, "sendEvent").mockReturnValue({
        result: { type: "accepted", consistencyKey: "later-send" },
      });
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
      first.resolve({ type: "behind" });
      await result;
      expect(read.mock.calls[1][0].consistencyKey).toBe("accepted-event");
    });

    it.each(["notReady", "behind"] as const)(
      "retries %s until state is available",
      async (type) => {
        vi.useFakeTimers();
        const read = vi
          .spyOn(agentImpl, "getState")
          .mockReturnValueOnce({ type });
        const result = session.experimental_getState({
          $timeoutMs: 100,
          $pollIntervalMs: 10,
        });
        await vi.waitFor(() => expect(read).toHaveBeenCalledTimes(1), {
          interval: 1,
        });
        await vi.advanceTimersByTimeAsync(5);
        expect(read).toHaveBeenCalledTimes(1);
        await vi.advanceTimersByTimeAsync(5);
        const state = await result;
        expect(state.agentState.data).toEqual({ temperature: 20 });
        expect(read).toHaveBeenCalledTimes(2);
        expect(read.mock.calls[0][0]).toEqual(read.mock.calls[1][0]);
      },
    );

    it("times out when state remains behind", async () => {
      vi.useFakeTimers();
      const read = vi
        .spyOn(agentImpl, "getState")
        .mockReturnValue({ type: "behind" });
      const result = session.experimental_getState({
        $timeoutMs: 100,
        $pollIntervalMs: 10,
      });
      const rejected = expect(result).rejects.toBeInstanceOf(
        AgentGetStateTimeoutError,
      );
      await vi.waitFor(() => expect(read).toHaveBeenCalledTimes(1), {
        interval: 1,
      });
      await vi.advanceTimersByTimeAsync(100);
      await rejected;
    });

    it("does not retry with a zero timeout", async () => {
      const read = vi
        .spyOn(agentImpl, "getState")
        .mockReturnValue({ type: "notReady" });
      const result = session.experimental_getState({ $timeoutMs: 0 });
      await expect(result).rejects.toBeInstanceOf(AgentGetStateTimeoutError);
      expect(read).toHaveBeenCalledTimes(1);
    });

    it.each([-1, NaN, Infinity])(
      "rejects invalid timeout %s",
      async ($timeoutMs) => {
        const result = session.experimental_getState({ $timeoutMs });
        await expect(result).rejects.toThrow(
          "$timeoutMs must be a finite non-negative number",
        );
      },
    );

    it.each([0, -1, NaN, Infinity])(
      "rejects invalid polling interval %s",
      async ($pollIntervalMs) => {
        const result = session.experimental_getState({ $pollIntervalMs });
        await expect(result).rejects.toThrow(
          "$pollIntervalMs must be a finite positive number",
        );
      },
    );

    it("propagates API failures", async () => {
      vi.spyOn(agentImpl, "getState").mockRejectedValueOnce(
        new Error("State read failed"),
      );
      const result = session.experimental_getState();
      await expect(result).rejects.toThrow("State read failed");
    });
  });
});
