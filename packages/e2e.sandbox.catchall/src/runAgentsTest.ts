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

import { setTimeout as delay } from "node:timers/promises";
import { pathToFileURL } from "node:url";
import { isDeepStrictEqual } from "node:util";

import { osdkTestFixture } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";

import { client } from "./client.js";

export async function runAgentsTest(): Promise<void> {
  const agent = client(osdkTestFixture);
  const session = await agent.createSession({ defaultCity: "London" });
  console.log("Typed agent session:", session.id);
  const initial = await session.getState();
  console.log("Initial agent state:", initial);
  invariant(initial.arguments.defaultCity === "London");
  invariant(initial.agentState.data.defaultCity === "London");

  await session.sendEvent({ SetDefaultCity: { city: "Paris" } });
  const updated = await session.getState();
  console.log("Agent state after setting default city:", updated);
  invariant(updated.agentState.data.defaultCity === "Paris");

  await Promise.all([
    session.sendEvent({ SetDefaultCity: { city: "Berlin" } }),
    session.sendEvent({ SetDefaultCity: { city: "London" } }),
  ]);
  const afterQueuedEvents = await session.getState();
  console.log("Agent state after queued events:", afterQueuedEvents);
  invariant(afterQueuedEvents.agentState.data.defaultCity === "London");

  const reconnected = await agent.getSession(session.id);
  invariant(reconnected.id === session.id);
  const reconnectedState = await reconnected.getState();
  console.log("Reconnected agent state:", reconnectedState);
  invariant(reconnectedState.agentState.data.defaultCity === "London");

  const generic = client({
    type: "agent",
    apiName: "osdkTestFixture",
    version: "0.5.0",
  });
  const genericSession = await generic.createSession({ defaultCity: "Rome" });
  console.log("Generic agent session:", genericSession.id);
  const genericInitial = await genericSession.getState();
  console.log("Initial generic agent state:", genericInitial);
  invariant(
    isDeepStrictEqual(genericInitial.arguments, { defaultCity: "Rome" }),
  );
  invariant(
    isDeepStrictEqual(genericInitial.agentState.data, { defaultCity: "Rome" }),
  );
  await genericSession.sendEvent({ SetDefaultCity: { city: "Madrid" } });
  const genericUpdated = await genericSession.getState();
  console.log(
    "Generic agent state after setting default city:",
    genericUpdated,
  );
  invariant(
    isDeepStrictEqual(genericUpdated.agentState.data, {
      defaultCity: "Madrid",
    }),
  );

  await session.getState({ $timeoutMs: 0 }).then(
    () => invariant(false, "Expected getState to time out"),
    (error: unknown) => {
      invariant(error instanceof Error && error.name === "TimeoutError");
    },
  );
  const afterTimeout = await session.getState();
  console.log("Agent state after timeout:", afterTimeout);
  invariant(afterTimeout.agentState.data.defaultCity === "London");

  const previousItems = new Set(
    Object.keys((await session.getState()).contextItems),
  );
  await session.sendEvent({ LookupWeather: { city: "London" } });
  const deadline = Date.now() + 60_000;
  for (;;) {
    const remaining = deadline - Date.now();
    invariant(
      remaining > 0,
      `No weather result within 60 seconds for session ${session.id}`,
    );
    const state = await session.getState({
      $timeoutMs: Math.min(30_000, remaining),
    });
    for (const [id, item] of Object.entries(state.contextItems)) {
      if (!previousItems.has(id) && item.type === "weather-result") {
        invariant(
          item.data.text.trim().length > 0,
          "Weather result must contain text",
        );
        invariant(
          state.contextItemOrder.every(
            (itemId) => itemId in state.contextItems,
          ),
          "Every ordered context item must be present in contextItems",
        );
        console.log("Weather context item:", item);
        return;
      }
    }
    invariant(
      state.status.type === "live",
      `Session ${session.id} ended without a weather result`,
    );
    await delay(Math.min(500, Math.max(0, deadline - Date.now())));
  }
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  runAgentsTest().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
  });
}
