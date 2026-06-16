/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import { consola } from "consola";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { writeImportedOntology } from "../generate/writeImportedOntology.js";

export default async function main(
  args: string[] = process.argv,
): Promise<void> {
  const commandLineOpts = await yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .options({
      input: {
        alias: "i",
        describe: "Path to OntologyFullMetadata JSON file",
        type: "string",
        demandOption: true,
        coerce: path.resolve,
      },
      output: {
        alias: "o",
        describe: "Output directory for generated TypeScript files",
        type: "string",
        default: "./generated-imports",
        coerce: path.resolve,
      },
    })
    .parseAsync();

  consola.info(`Reading OntologyFullMetadata from ${commandLineOpts.input}`);

  const jsonContent = await fs.readFile(commandLineOpts.input, "utf-8");
  const metadata = JSON.parse(jsonContent);

  consola.info(`Writing generated imports to ${commandLineOpts.output}`);

  writeImportedOntology(metadata, commandLineOpts.output);

  consola.success(`Generated import files in ${commandLineOpts.output}`);
}
