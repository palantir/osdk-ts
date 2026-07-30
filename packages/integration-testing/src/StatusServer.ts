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

import invariant from "tiny-invariant";

import {
  FoundryCliService,
  type FoundryServiceConfig,
  type ServiceHealth,
} from "./FoundryCliService.js";
import {
  type ServiceName,
  type ServiceStatus,
  StatusService,
} from "./generated/cli/index.js";

const HEALTH_REQUEST_TIMEOUT_MS = 2_000;

export type StatusServerConfig = FoundryServiceConfig;

/**
 * The local status server, and the health authority for every other service.
 */
export class StatusServer extends FoundryCliService {
  constructor(config: StatusServerConfig) {
    super("STATUS_SERVER", config);
  }

  protected override getArgs(): readonly string[] {
    return ["start", "status-server"];
  }

  override async checkHealth(): Promise<ServiceHealth> {
    const discovery = this.getContext().discoverer.get("STATUS_SERVER");
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
      const response = await fetch(new URL("/api/health", baseUrl), {
        signal: AbortSignal.timeout(HEALTH_REQUEST_TIMEOUT_MS),
      });
      if (!response.ok) {
        return false;
      }
      const body: { status?: unknown } = await response.json();
      return body.status === "healthy";
    } catch {
      return false;
    }
  }

  async getServiceStatuses(): Promise<ServiceStatus[]> {
    const baseUrl = this.getContext().discoverer.get("STATUS_SERVER")?.url;
    invariant(
      baseUrl,
      "Cannot get service status because the status server is not discovered yet"
    );
    const statuses = await StatusService.getStatus({
      baseUrl,
      servicePath: "",
    }).catch(() => undefined);
    return statuses ?? [];
  }

  async getServiceStatus(
    name: ServiceName
  ): Promise<ServiceStatus | undefined> {
    const statuses = await this.getServiceStatuses();
    return statuses.find(({ service }) => service === name);
  }
}
