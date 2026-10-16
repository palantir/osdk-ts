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

import type { AgentSession } from "@osdk/api/unstable";
import {
  $Agents,
  Employee,
  noArgsAgent,
  objectArgumentsAgent,
  weatherAgent,
} from "@osdk/client.test.ontology";
import type { SendEventResponse } from "@osdk/foundry.agents";
import {
  type FauxAgentImpl,
  LegacyFauxFoundry,
  type SetupServer,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
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
import { AgentSendEventTimeoutError } from "../public/experimental.js";
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

  describe("session creation", () => {
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
      const result = scenario(weatherAgent).experimental_createSession({
        city: "London",
      });
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
      const result = transaction(weatherAgent).experimental_createSession({
        city: "London",
      });
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
        const result = branchClient(weatherAgent).experimental_createSession({
          city: "London",
        });
        await expect(result).rejects.toThrow(
          "Agent sessions are not supported on branches",
        );
        expect(fetchFunction).not.toHaveBeenCalled();
      },
    );

    it("creates a session", async () => {
      const experimental_createSession =
        client(weatherAgent).experimental_createSession;
      type InferredParamType = Parameters<typeof experimental_createSession>[0];
      expectTypeOf<InferredParamType>().toEqualTypeOf<
        Record<string, unknown> | undefined
      >();

      const session = await client(weatherAgent).experimental_createSession({
        city: "London",
      });

      expectTypeOf<typeof session>().toEqualTypeOf<AgentSession>();
      expect(session).toMatchObject({ id: stubData.weatherAgentResponse.id });
    });

    it("creates sessions with the pinned version", async () => {
      const session = await client({
        ...weatherAgent,
        version: "2.0.0",
      }).experimental_createSession({ city: "London" });
      expect(session).toMatchObject({
        id: stubData.weatherAgentOtherVersionResponse.id,
      });
    });

    it("supports a detached experimental_createSession method", async () => {
      const { experimental_createSession } = client(weatherAgent);
      const session = await experimental_createSession({ city: "London" });
      expect(session).toMatchObject({ id: stubData.weatherAgentResponse.id });
    });

    it("exports agents through $Agents", () => {
      const agentNames = Object.keys($Agents);
      expect(agentNames).toEqual([
        "noArgsAgent",
        "objectArgumentsAgent",
        "weatherAgent",
      ]);
      expect($Agents.weatherAgent).toBe(weatherAgent);
    });

    it("creates a session without arguments", async () => {
      const session = await client(noArgsAgent).experimental_createSession();
      expect(session).toMatchObject({ id: stubData.noArgsAgentResponse.id });
    });

    it("creates a session with object and object-set arguments", async () => {
      const employee = await client(Employee).fetchOne(50030);
      const employees = client(Employee).where({ employeeId: 50030 });

      const session = await client(
        objectArgumentsAgent,
      ).experimental_createSession({
        employee,
        employees,
      });

      expect(session).toMatchObject({
        id: stubData.objectArgumentsAgentResponse.id,
      });
    });
  });

  describe("event sending", () => {
    let session: AgentSession;
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
      await session.experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
    });

    it("supports a detached experimental_sendEvent method", async () => {
      const { experimental_sendEvent } = session;
      await experimental_sendEvent({
        LookupWeather: { city: "Paris" },
      });
    });

    it("forwards unknown event payloads", async () => {
      await session.experimental_sendEvent({
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
      await objectSession.experimental_sendEvent({
        SelectEmployees: employees,
      });
    });

    it.each([{}, { first: {}, second: {} }])(
      "requires exactly one event: %j",
      async (event) => {
        const result = session.experimental_sendEvent(event);
        await expect(result).rejects.toThrow("requires exactly one event");
      },
    );

    it("propagates API errors", async () => {
      const result = session.experimental_sendEvent({ invalid: {} });
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
        { $timeoutMs: 100, pollIntervalMs: 10 },
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
        { $timeoutMs: 100, pollIntervalMs: 10 },
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
      async (pollIntervalMs) => {
        const result = session.experimental_sendEvent(
          { LookupWeather: { city: "Paris" } },
          { pollIntervalMs },
        );
        await expect(result).rejects.toThrow(
          "pollIntervalMs must be a finite positive number",
        );
      },
    );
  });
});
