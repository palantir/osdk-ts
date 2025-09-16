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

// Parse command line arguments
function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    outputDir: path.join(process.cwd(), "src/examples"),
    hierarchyOutputPath: path.join(
      process.cwd(),
      "src/typescriptOsdkExamples.ts",
    ),
    versions: ["2.1.0", "2.4.0"], // Default to versions > 2.0.0
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === "--versions" && i + 1 < args.length) {
      // Parse comma-separated versions: --versions 2.1.0,2.4.0
      config.versions = args[i + 1].split(",").map(v => v.trim());
      i++; // Skip next argument as it's the value
    } else if (arg === "--output-dir" && i + 1 < args.length) {
      config.outputDir = args[i + 1];
      i++;
    } else if (arg === "--hierarchy-output" && i + 1 < args.length) {
      config.hierarchyOutputPath = args[i + 1];
      i++;
    } else if (arg === "--help" || arg === "-h") {
      // eslint-disable-next-line no-console
      console.log(`
Usage: generate-examples [options]

Options:
  --versions <versions>         Comma-separated list of versions to generate (default: 2.1.0,2.4.0)
  --output-dir <path>          Output directory for examples (default: src/examples)
  --hierarchy-output <path>    Path for typescriptOsdkExamples.ts (default: src/typescriptOsdkExamples.ts)
  --help, -h                   Show this help message

Examples:
  generate-examples --versions 2.1.0,2.4.0
  generate-examples --versions 2.1.0 --output-dir dist/examples
      `);
      process.exit(0);
    } else if (!arg.startsWith("--")) {
      // Positional arguments for backward compatibility
      if (i === 0) config.outputDir = arg;
      else if (i === 1) config.hierarchyOutputPath = arg;
    }
  }

  return config;
}

const config = parseArgs();

try {
  await generateExamples(
    config.outputDir,
    config.hierarchyOutputPath,
    config.versions,
  );
  process.exit(0);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error("Error generating examples:", error);
  process.exit(1);
}
