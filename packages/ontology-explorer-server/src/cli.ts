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

import type { AddressInfo } from "net";

import consola from "consola";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { createServer } from "./server.js";

export async function cli(args: string[] = process.argv): Promise<void> {
  // Not strict: a newer Foundry CLI may pass flags this version doesn't know,
  // which it must ignore rather than fail on.
  const argv = await yargs(hideBin(args))
    .option("port", {
      alias: "p",
      type: "number",
      description: "Port to listen on",
      default: 8083,
    })
    .option("host", {
      type: "string",
      description: "Address to listen on",
      default: "127.0.0.1",
    })
    .option("project-root", {
      type: "string",
      description:
        "Root of the SuperRepo, the directory holding foundry.yml. Not used yet",
    })
    .parse();

  try {
    const app = createServer();

    const server = app
      .listen(argv.port, argv.host, () => {
        const { address, port } = server.address() as AddressInfo;
        consola.log(`Ontology Explorer listening on http://${address}:${port}`);
      })
      .on("error", (err: NodeJS.ErrnoException) => {
        if (err.code === "EADDRINUSE") {
          consola.error(
            `Error: Port ${argv.port} is already in use.\n` +
              `Try a different port`,
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
