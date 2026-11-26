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

import path from "path";
import { fileURLToPath } from "url";

import express from "express";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createServer(): express.Express {
  const app = express();

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
