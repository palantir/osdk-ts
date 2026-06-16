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

import type { OntologyFullMetadata } from "@osdk/foundry.ontologies";
import { consola } from "consola";
import * as fs from "node:fs";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { compileSeedData } from "../compileSeedData.js";
import { schemaFromMetadata } from "../schema.js";

export default async function main(
  args: string[] = process.argv,
): Promise<void> {
  const opts: {
    metadata: string;
    seedDir: string;
    output: string;
  } = await yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(120, yargs().terminalWidth()))
    .strict()
    .help()
    .options({
      metadata: {
        describe:
          "Path to the ontology-metadata.json file written by the SDK generator. "
          + "Provides primary-key field names and property wire types.",
        type: "string" as const,
        demandOption: true,
        coerce: path.resolve,
      },
      seedDir: {
        describe:
          "Directory containing seed data .mts files. All top-level .mts "
          + "files are compiled (sorted by filename for deterministic output).",
        type: "string" as const,
        demandOption: true,
        coerce: path.resolve,
      },
      output: {
        alias: "o",
        describe: "Output path for the compiled seed data JSON.",
        type: "string" as const,
        demandOption: true,
        coerce: path.resolve,
      },
    })
    .parseAsync();

  const metadataStat = fs.statSync(opts.metadata);
  invariant(
    metadataStat.isFile(),
    `--metadata '${opts.metadata}' is not a file`,
  );
  const metadata = JSON.parse(
    fs.readFileSync(opts.metadata, "utf-8"),
  ) as OntologyFullMetadata;

  const seedDirStat = fs.statSync(opts.seedDir);
  invariant(
    seedDirStat.isDirectory(),
    `--seed-dir '${opts.seedDir}' is not a directory`,
  );
  const seedFiles = fs.readdirSync(opts.seedDir)
    .filter((f) => f.endsWith(".mts"))
    .sort()
    .map((f) => path.join(opts.seedDir, f));

  if (seedFiles.length === 0) {
    consola.warn(`No .mts seed files found in ${opts.seedDir}`);
    return;
  }

  const schema = schemaFromMetadata(metadata);
  await compileSeedData(seedFiles, opts.output, schema);
}
