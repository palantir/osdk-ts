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

import type { AgentSession } from "@osdk/api";
import { noArgsAgent, weatherAgent } from "@osdk/client.test.ontology";
import {
  LegacyFauxFoundry,
  type SetupServer,
  startNodeApiServer,
  stubData,
} from "@osdk/shared.test";
import { beforeAll, describe, expect, expectTypeOf, it, vi } from "vitest";

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
    await expect(
      scenario(weatherAgent).createSession({ city: "London" }),
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
      fauxFoundry.defaultOntologyRid,
      auth,
      {},
      fetchFunction,
    );
    await expect(
      transaction(weatherAgent).createSession({ city: "London" }),
    ).rejects.toThrow("Agent sessions are not supported in transactions");
    expect(flushEdits).not.toHaveBeenCalled();
    expect(fetchFunction).not.toHaveBeenCalled();
  });

  it("creates a session", async () => {
    const createSession = client(weatherAgent).createSession;
    type InferredParamType = Parameters<typeof createSession>[0];
    expectTypeOf<{ city: string }>().toMatchTypeOf<InferredParamType>();

    const session = await client(weatherAgent).createSession({
      city: "London",
    });

    expectTypeOf<typeof session>().toEqualTypeOf<AgentSession>();
    expect(session).toEqual(stubData.weatherAgentResponse);
  });

  it("creates sessions with the pinned version", async () => {
    const session = await client({
      ...weatherAgent,
      version: "2.0.0",
    }).createSession({ city: "London" });
    expect(session).toEqual(stubData.weatherAgentOtherVersionResponse);
  });

  it("supports a detached createSession method", async () => {
    const { createSession } = client(weatherAgent);
    const session = await createSession({ city: "London" });
    expect(session).toEqual(stubData.weatherAgentResponse);
  });

  it("creates a session without arguments", async () => {
    const session = await client(noArgsAgent).createSession();
    expect(session).toEqual(stubData.noArgsAgentResponse);
  });
});
