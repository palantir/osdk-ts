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

import { isValidSemver, YargsCheckError } from "@osdk/cli.common";
import type { CommandModule } from "yargs";
import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";

export const generateCommand: CommandModule<
  {},
  TypescriptGenerateArgs
> = {
  command: "generate",
  describe: "Generate TypeScript SDK from ontology",
  builder: (argv) => {
    return argv
      .options(
        {
          outDir: {
            type: "string",
            description: "Where to place the generated files",
            demandOption: true,
          },
          ontologyPath: {
            description: "Path to the ontology wire json",
            type: "string",
            demandOption: false,
            conflicts: ["foundryUrl", "clientId"],
          },
          foundryUrl: {
            description: "URL for the foundry stack that contains the ontology",
            type: "string",
            demandOption: false,
            conflicts: "ontologyPath",
            implies: "clientId",
            alias: "stack", // for backwards compatibility
          },
          clientId: {
            description: "OAuth client ID for application",
            type: "string",
            demandOption: false,
            conflicts: "ontologyPath",
            implies: "foundryUrl",
          },
          ontologyRid: {
            description: "Limit requests to this ontology rid only",
            type: "string",
            demandOption: false,
          },
          ontologyWritePath: {
            description: "Path to write the ontology wire json",
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
          packageName: {
            type: "string",
            description: "Name of the package to generate",
          },
          asPackage: {
            type: "boolean",
            description: "Generate as a package (makes a package.json and co)",
          },
          clean: {
            type: "boolean",
            description: "Clean the output directory before generating",
          },
          internal: {
            type: "boolean",
            default: false,
          },
          externalObjects: {
            type: "string",
            coerce: (value) => {
              const map = new Map<string, string>();
              if (value) {
                for (const entry of value.split(",")) {
                  const [api, ns] = entry.split(":");
                  map.set(api, ns);
                }
              }
              return map;
            },
            default: "",
          },
          externalInterfaces: {
            type: "string",
            coerce: (value) => {
              const map = new Map<string, string>();
              if (value) {
                for (const entry of value.split(",")) {
                  const [api, ns] = entry.split(":");
                  map.set(api, ns);
                }
              }
              return map;
            },
            default: "",
          },
        } as const,
      ).group(
        ["ontologyPath", "outDir", "version"],
        "Generate from a local file",
      ).group(
        ["foundryUrl", "clientId", "outDir", "ontologyWritePath", "version"],
        "OR Generate from Foundry",
      ).group(["packageName", "as"], "Package generation options")
      .check(
        (args) => {
          if (!args.ontologyPath && !args.foundryUrl) {
            throw new YargsCheckError(
              "Must specify either ontologyPath or foundryUrl and clientId",
            );
          }

          if (args.version !== "dev" && !isValidSemver(args.version)) {
            throw new YargsCheckError(
              "Version must be 'dev' or a valid semver version",
            );
          }

          if (args.asPackage && !args.packageName) {
            throw new YargsCheckError(
              "Must specify packageName when generating as a package",
            );
          }

          if (args.asPackage && !args.version) {
            throw new YargsCheckError(
              "Must specify version when generating as a package",
            );
          }

          return true;
        },
      );
  },
  handler: async (args) => {
    const command = await import("./handleGenerate.mjs");
    await command.handleGenerate(args);
  },
};
