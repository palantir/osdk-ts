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

import type { AgentSession } from "@osdk/client";
import { osdkTestFixture } from "@osdk/e2e.generated.catchall";
import invariant from "tiny-invariant";
import { expectType } from "ts-expect";

import { client } from "./client.js";

export async function runAgentsTest(): Promise<void> {
  const session = await client(osdkTestFixture).createSession({
    defaultCity: "Rome",
  });
  expectType<AgentSession>(session);
  expectType<string>(session.id);
  console.log("Agent session:", session.id);
  invariant(session.id.length > 0);
}

void runAgentsTest();
