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

import { createServer, type Server } from "node:http";
import type { AddressInfo } from "node:net";

import type { ServiceName, ServiceStatus } from "../generated/cli/index.js";

export interface StubStatusServer {
  url: string;
  /** Toggle what `/api/health` answers. */
  setHealthy: (healthy: boolean) => void;
  close: () => Promise<void>;
}

/**
 * Stand-in for the real status server, mirroring the two behaviors the client
 * code has to get right: `/api/health` is what reports the server's own health
 * (it publishes no lifecycle for itself), and `GET /status` answers `204` — not
 * an empty array — when nothing has reported yet.
 */
export const startStubStatusServer = async (
  initialStatuses: ServiceStatus[] = []
): Promise<StubStatusServer> => {
  const statuses = new Map<ServiceName, ServiceStatus>(
    initialStatuses.map((status) => [status.service, status])
  );
  let healthy = true;

  const server: Server = createServer((req, res) => {
    if (req.url === "/api/health") {
      if (!healthy) {
        res.writeHead(503).end();
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "healthy" }));
      return;
    }
    if (req.url === "/status" && req.method === "GET") {
      if (statuses.size === 0) {
        res.writeHead(204).end();
        return;
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify([...statuses.values()]));
      return;
    }
    res.writeHead(404).end();
  });

  await new Promise<void>((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address() as AddressInfo;

  return {
    url: `http://127.0.0.1:${port}`,
    setHealthy: (next) => {
      healthy = next;
    },
    close: () =>
      new Promise<void>((resolve, reject) => {
        server.close((err) => {
          if (err != null) {
            reject(err);
            return;
          }
          resolve();
        });
      }),
  };
};
