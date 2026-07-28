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

import {
  FoundryService,
  type FoundryServiceConfig,
  type ServiceHealth,
  type ServiceState,
} from "../FoundryService.js";
import type { ServiceName } from "../generated/cli/index.js";

export interface StubServiceConfig extends FoundryServiceConfig {
  /** Recorded in order as services start, for asserting dependency order. */
  startLog?: ServiceName[];
  /** State reported once started. Defaults to `READY`. */
  stateWhenStarted?: ServiceState;
}

/**
 * A {@link FoundryService} that reports its own health and never spawns
 * anything, so orchestration can be tested without the Foundry CLI.
 */
export class StubService extends FoundryService {
  #startLog: ServiceName[] | undefined;
  #stateWhenStarted: ServiceState;
  #started = false;

  constructor(name: ServiceName, config: StubServiceConfig) {
    super(name, config);
    this.#startLog = config.startLog;
    this.#stateWhenStarted = config.stateWhenStarted ?? "READY";
  }

  protected override get spawnArgs(): readonly string[] {
    return [];
  }

  get started(): boolean {
    return this.#started;
  }

  override start(): Promise<void> {
    this.#started = true;
    this.#startLog?.push(this.name);
    return Promise.resolve();
  }

  override checkHealth(): Promise<ServiceHealth> {
    const state: ServiceState = this.#started
      ? this.#stateWhenStarted
      : "UNDISCOVERED";
    return Promise.resolve({
      service: this.name,
      state,
      ready: state === "READY",
      terminal: state === "FAILED" || state === "STOPPED",
    });
  }

  override stop(): void {
    this.#started = false;
  }
}
