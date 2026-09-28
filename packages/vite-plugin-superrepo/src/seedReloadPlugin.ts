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

import fs from "node:fs";
import path from "node:path";

import type { Plugin } from "vite";

import { DISCOVERY_DIR, findSuperrepoRoot } from "./public/discovery.js";

/** Reload previews after the local ontology finishes applying schema or seed changes. */
export function seedReloadPlugin(): Plugin {
  return {
    name: "superrepo-seed-reload",
    apply: "serve",
    configureServer(server) {
      if (server.config.server.middlewareMode) return;
      const root = findSuperrepoRoot(server.config.root);
      if (root == null) return;

      // The CLI publishes this marker after sync succeeds. Compiled seed data
      // can be written before the ontology is ready to serve it.
      const directory = path.join(root, DISCOVERY_DIR);
      const marker = path.join(directory, ".ontology-sync");
      let previous = fs.existsSync(marker)
        ? fs.readFileSync(marker, "utf-8")
        : undefined;
      const onChange = (stat: fs.Stats) => {
        if (stat.nlink === 0) return;
        const current = fs.readFileSync(marker, "utf-8");
        if (current === previous) return;
        previous = current;
        server.config.logger.info(
          "[seed-reload] ontology synchronized, reloading",
        );
        server.ws.send({ type: "full-reload" });
      };
      // Poll one marker so startup and atomic replacements work on mounted workspaces.
      fs.watchFile(marker, { interval: 500, persistent: false }, onChange);
      server.httpServer?.once("close", () => fs.unwatchFile(marker, onChange));
    },
  };
}
