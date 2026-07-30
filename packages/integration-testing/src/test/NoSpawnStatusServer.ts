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

import { StatusServer } from "../StatusServer.js";

/**
 * A {@link StatusServer} that never spawns the Foundry CLI, for tests that put
 * a stub server behind it: health and status reads still go over HTTP to
 * whatever the discoverer found, but starting is a no-op rather than a spawn —
 * or, since a discoverable stub is already answering, a refusal to start.
 */
export class NoSpawnStatusServer extends StatusServer {
  override start(): Promise<void> {
    return Promise.resolve();
  }

  override stop(): Promise<void> {
    return Promise.resolve();
  }
}
