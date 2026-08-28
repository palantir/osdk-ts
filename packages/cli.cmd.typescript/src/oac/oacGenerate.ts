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

import { isValidSemver, YargsCheckError } from "@osdk/cli.common";
import type { CommandModule } from "yargs";

export interface OacGenerateArgs {
  ir: string;
  outDir: string;
  version: string;
  packageName: string;
  packageType: "module";
  ontologyIdentity: "portable" | "installationSpecific";
  importMap?: string;
}

export const oacGenerateCommand: CommandModule<{}, OacGenerateArgs> = {
  command: "generate",
  describe: "Generate a TypeScript SDK from Maker IR",
  builder: (argv) => {
    return argv
      .options({
        ir: {
          type: "string",
          description: "Path to the complete Maker IR json",
          demandOption: true,
        },
        outDir: {
          type: "string",
          description: "Where to place the generated files",
          demandOption: true,
        },
        version: {
          type: "string",
          description: "Version of the generated code, or 'dev'",
          demandOption: true,
        },
        packageName: {
          type: "string",
          description: "Name of the package to generate",
          demandOption: true,
        },
        packageType: {
          default: "module",
          choices: ["module"],
        },
        ontologyIdentity: {
          type: "string",
          choices: ["portable", "installationSpecific"],
          default: "portable",
          description:
            "portable omits installation-specific ontology and branch ids",
        },
        importMap: {
          type: "string",
          description:
            "Path to a YAML import map of { imports: [{ kind, apiName, package }] }",
        },
      } as const)
      .check((args) => {
        if (args.packageName.trim().length === 0) {
          throw new YargsCheckError("packageName must not be empty");
        }
        if (
          args.version !== "dev" &&
          (args.version !== args.version.trim() ||
            args.version.startsWith("v") ||
            !isValidSemver(args.version))
        ) {
          throw new YargsCheckError(
            "Version must be 'dev' or a valid semver version",
          );
        }
        return true;
      });
  },
  handler: async (args) => {
    const command = await import("./handleOacGenerate.js");
    await command.handleOacGenerate(args);
  },
};
