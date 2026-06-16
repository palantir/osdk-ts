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

import consola from "consola";
import fs from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { createServer } from "./server.js";

export async function cli(args: string[] = process.argv): Promise<void> {
  const argv = await yargs(hideBin(args))
    .option("ontology-file", {
      alias: "f",
      type: "string",
      description: "Path to the ontology.json file",
      demandOption: true,
    })
    .option("port", {
      alias: "p",
      type: "number",
      description: "Port to listen on",
      default: 3000,
    })
    .strict()
    .parse();

  if (!fs.existsSync(argv.ontologyFile)) {
    consola.error(`File not found: ${argv.ontologyFile}`);
    process.exit(1);
  }

  try {
    const app = createServer(argv.ontologyFile);

    app.listen(argv.port, () => {
      consola.log(
        `Ontology Explorer listening on http://localhost:${argv.port}`,
      );
    }).on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        consola.error(
          `Error: Port ${argv.port} is already in use.\n`
            + `Try a different port`,
        );
      } else {
        consola.error(`Error starting server: ${err.message}`);
      }
      process.exit(1);
    });
  } catch (err) {
    consola.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
  }
}
