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

import express from "express";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createServer(filePath: string): express.Express {
  const app = express();
  const resolvedPath = path.resolve(filePath);

  // TODO: load once and have a file watcher to automatically resend new data when the file changes
  app.get("/api/ontology", (_req, res) => {
    try {
      const raw = readFileSync(resolvedPath, "utf-8");
      res.type("text/plain").send(raw);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      res
        .status(500)
        .type("text/plain")
        .send(`Failed to read ontology file: ${message}`);
    }
  });

  app.all("/api/*", (_req, res) => {
    res.status(404).json({ error: "Not found" });
  });

  const siteDir = path.resolve(__dirname, "../site");
  app.use(express.static(siteDir));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(siteDir, "index.html"));
  });

  return app;
}
