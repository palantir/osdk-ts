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

import type { ConjureContext } from "conjure-lite";
import invariant from "tiny-invariant";

import {
  FoundryService,
  type FoundryServiceConfig,
  type ServiceHealth,
} from "./FoundryService.js";
import {
  StatusService,
  type ServiceName,
  type ServiceStatus,
} from "./generated/cli/index.js";

const SERVICE_PATH = "";

const HEALTH_PATH = "/api/health";

const HEALTH_REQUEST_TIMEOUT_MS = 2_000;

export type StatusServerConfig = FoundryServiceConfig;

/**
 * The local status server, and the health authority for every other service.
 *
 * Foundry services publish lifecycle transitions here (`POST /status`) and the
 * current snapshot is readable from `GET /status`, which makes this the one
 * place that knows whether a discovered service is actually serving. The
 * discoverer finds services; this says how they are doing.
 *
 * Its own health is the exception and is probed over {@link HEALTH_PATH}.
 */
export class StatusServer extends FoundryService {
  constructor(config: StatusServerConfig) {
    super("STATUS_SERVER", config);
  }

  protected override get spawnArgs(): readonly string[] {
    return ["start", "status-server"];
  }

  /**
   * Conjure context pointed at the running server, or `undefined` before it has
   * been discovered.
   */
  #conjureContext(): ConjureContext | undefined {
    const baseUrl = this.context.discoverer.getUrl("STATUS_SERVER");
    return baseUrl === undefined
      ? undefined
      : { baseUrl, servicePath: SERVICE_PATH };
  }

  override async checkHealth(): Promise<ServiceHealth> {
    const discovery = this.context.discoverer.get("STATUS_SERVER");
    if (discovery === undefined) {
      return {
        service: "STATUS_SERVER",
        state: "UNDISCOVERED",
        ready: false,
        terminal: false,
      };
    }
    const healthy = await this.#isHealthy(discovery.url);
    return {
      service: "STATUS_SERVER",
      state: healthy ? "READY" : "DISCOVERED",
      ready: healthy,
      terminal: false,
      url: discovery.url,
    };
  }

  async #isHealthy(baseUrl: string): Promise<boolean> {
    try {
      const response = await fetch(new URL(HEALTH_PATH, baseUrl), {
        signal: AbortSignal.timeout(HEALTH_REQUEST_TIMEOUT_MS),
      });
      if (!response.ok) {
        return false;
      }
      const body = (await response.json()) as { status?: unknown };
      return body.status === "healthy";
    } catch {
      return false;
    }
  }

  /**
   * Lifecycle snapshot for every service that has published one.
   *
   * Empty when nothing has reported yet: the server answers `204` in that case,
   * which `conjureFetch` surfaces as `undefined` despite the generated
   * signature promising an array.
   */
  async getServiceStatuses(): Promise<ServiceStatus[]> {
    const ctx = this.#conjureContext();
    if (ctx === undefined) {
      return [];
    }
    try {
      const statuses = (await StatusService.getStatus(ctx)) as
        | ServiceStatus[]
        | undefined;
      return statuses ?? [];
    } catch {
      // Discovered but not answering. Callers read that as "nothing has
      // reported yet", and the orchestrator's health poll tries again.
      return [];
    }
  }

  /** Latest lifecycle a given service published, if any. */
  async getServiceStatus(
    name: ServiceName
  ): Promise<ServiceStatus | undefined> {
    const statuses = await this.getServiceStatuses();
    return statuses.find(({ service }) => service === name);
  }

  /** Publish a lifecycle transition. Mainly useful for tests and fixtures. */
  async publishServiceStatus(status: ServiceStatus): Promise<void> {
    const ctx = this.#conjureContext();
    invariant(
      ctx !== undefined,
      "Cannot publish a status before the status server is discovered"
    );
    await StatusService.publishStatus(ctx, status);
  }
}
