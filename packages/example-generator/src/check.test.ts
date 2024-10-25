/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { it } from "vitest";
import { run } from "./run.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

it("Generates code that matches the files on disk in the examples dir", async () => {
  await run({
    outputDirectory: path.join(__dirname, "..", "..", "..", "examples"),
    check: true,
  });
});
