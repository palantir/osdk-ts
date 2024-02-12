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

import type { CommandModule } from "yargs";
import { isValidSemver } from "../../../util/isValidSemver.js";
import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";

export const command: CommandModule<
  {},
  TypescriptGenerateArgs
> = {
  command: "generate",
  describe: "Generate typescript from ontology",
  builder: (argv) => {
    return argv
      .options(
        {
          "outDir": {
            type: "string",
            description: "Where to place the generated files",
            demandOption: true,
          },
          ontologyPath: {
            description: "path to the ontology wire json",
            type: "string",
            demandOption: false,
            conflicts: ["stack", "clientId"],
          },
          stack: {
            description: "the URL to the stack that contains the ontology",
            type: "string",
            demandOption: false,
            conflicts: "ontologyPath",
            implies: "clientId",
          },
          clientId: {
            description: "the application's client id",
            type: "string",
            demandOption: false,
            conflicts: "ontologyPath",
            implies: "stack",
          },
          ontologyWritePath: {
            description: "path to write the ontology wire json",
            type: "string",
            demandOption: false,
            conflicts: ["ontologyPath"],
          },
          beta: {
            type: "boolean",
            description: "Should generate beta sdk",
            demandOption: false,
          },
          packageType: {
            default: "commonjs",
            choices: ["commonjs", "module"],
          },
          version: {
            type: "string",
            description: "Version of the generated code, or 'dev'",
            demandOption: true,
          },
        } as const,
      ).group(
        ["ontologyPath", "outDir", "version"],
        "Generate from a local file",
      ).group(
        ["stack", "clientId", "outDir", "ontologyWritePath", "version"],
        "OR Generate from a stack",
      )
      .check(
        (args) => {
          if (!args.ontologyPath && !args.stack) {
            throw new Error(
              "Error: Must specify either ontologyPath or stack and clientId",
            );
          }

          if (args.version !== "dev" && !isValidSemver(args.version)) {
            throw new Error(
              "Error: Version must be 'dev' or a valid semver version",
            );
          }

          return true;
        },
      );
  },
  handler: async (args) => {
    const command = await import("./handleGenerate.mjs");
    await command.default(args);
  },
};

export default command;
