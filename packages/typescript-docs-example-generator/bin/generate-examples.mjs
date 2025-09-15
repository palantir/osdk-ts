#!/usr/bin/env node
/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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
import { generateExamples } from "../build/esm/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Default paths relative to the consuming package
const outputDir = process.argv[2] || path.join(process.cwd(), "src/examples");
const snippetVariablesPath = process.argv[3]
  || path.join(process.cwd(), "snippetVariables.json");
const hierarchyOutputPath = process.argv[4]
  || path.join(process.cwd(), "src/typescriptOsdkExamples.ts");

try {
  await generateExamples(outputDir, snippetVariablesPath, hierarchyOutputPath);
  process.exit(0);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error("Error generating examples:", error);
  process.exit(1);
}
