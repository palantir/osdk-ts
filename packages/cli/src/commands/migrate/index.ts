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

import { type CliCommonArgs, YargsCheckError } from "@osdk/cli.common";
import type { CommandModule } from "yargs";
import type { MigrateArgs } from "./MigrateArgs.js";

const command: CommandModule<CliCommonArgs, MigrateArgs> = {
  command: "migrate",
  describe: "Migrate your OSDK Application to be Marketplace deployable",
  builder: (argv) => {
    return argv
      .options({
        ontology: {
          type: "string",
          description: "Ontology resource identifier (rid)",
          demandOption: true,
        },
        clientPath: {
          type: "string",
          description: "Path to the client initialization file",
          default: "./src/client.ts",
          normalize: true,
        },
        indexPath: {
          type: "string",
          description: "Path to your index.html file",
          default: "index.html",
          normalize: true,
        },
      })
      .check((args) => {
        if (!/^ri\.ontology\.[^.]+\.ontology\.[^.]+$/.test(args.ontology)) {
          throw new YargsCheckError(
            `Please enter a valid Ontology resource identifier (rid)\n(Example: ri.ontology.main.ontology.1df1ce4c-f9d2-0f78-a316-287f6ac80bb2)`,
          );
        }
        return true;
      });
  },
  handler: async (args) => {
    const command = await import("./migrateCommand.mjs");
    await command.default(args);
  },
};

export default command;
