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
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { generateExamples } from "../build/esm/index.js";

const argv = yargs(hideBin(process.argv))
  .scriptName("generate-examples")
  .usage("$0 [options]")
  .options({
    versions: {
      describe: "Comma-separated list of versions to generate",
      type: "string",
      coerce: (value) =>
        value ? value.split(",").map(v => v.trim()) : undefined,
      default: undefined,
      defaultDescription: "auto-discover all versions >= 2.0.0",
    },
    "output-dir": {
      describe: "Output directory for examples",
      type: "string",
      default: path.join(process.cwd(), "src/examples"),
    },
    "hierarchy-output": {
      describe: "Path for typescriptOsdkExamples.ts",
      type: "string",
      default: path.join(process.cwd(), "src/typescriptOsdkExamples.ts"),
    },
  })
  .example("$0", "Auto-discover all versions >= 2.0.0")
  .example("$0 --versions 2.1.0,2.4.0", "Generate specific versions")
  .example(
    "$0 --versions 2.1.0 --output-dir dist/examples",
    "Generate specific version to custom directory",
  )
  .help()
  .alias("help", "h")
  .strict()
  .argv;

const config = {
  outputDir: argv["output-dir"],
  hierarchyOutputPath: argv["hierarchy-output"],
  versions: argv.versions,
};

try {
  const result = await generateExamples(
    config.outputDir,
    config.hierarchyOutputPath,
    config.versions,
  );

  if (!result.success) {
    // eslint-disable-next-line no-console
    console.error("Error generating examples:", result.error.message);
    process.exit(1);
  }

  process.exit(0);
} catch (error) {
  // eslint-disable-next-line no-console
  console.error("Error generating examples:", error);
  process.exit(1);
}
