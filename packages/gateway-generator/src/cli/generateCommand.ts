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

import { readFile } from "fs/promises";
import type { Arguments, Argv, CommandModule } from "yargs";
import { generate } from "../generate/generate";
import type { ApiSpec } from "../spec";

export interface GenerateOpenApiArgs {
  /*
   * Positional arguments
   */
  inputFile: string;
  outputDir: string;
  generateVisitors: boolean;
}

export class GenerateCommand implements CommandModule<{}, GenerateOpenApiArgs> {
  public aliases = [];

  public command = "generate";

  public describe = "Generate TypeScript bindings for a OpenApi API";

  public builder(args: Argv): Argv<GenerateOpenApiArgs> {
    return args
      .positional("inputFile", {
        describe: "The location of the API IR",
        type: "string",
        demandOption: true,
      })
      .positional("outputDir", {
        describe: "The output directory for the generated code",
        type: "string",
        demandOption: true,
      })
      .option("generateVisitors", {
        describe: "Generate visitors for the type union",
        type: "boolean",
        default: true,
      });
  }

  public handler = async (args: Arguments<GenerateOpenApiArgs>) => {
    const generateVisitors = args.generateVisitors ?? true;
    const input = args.inputFile;
    const output = args.outputDir;

    if (!input) {
      throw new Error("Must provide an input file");
    } else if (!output) {
      throw new Error("Must provide an output directory");
    }

    const irSpecRead = await readFile(`${input}`, { encoding: "utf8" });
    const irSpec: ApiSpec = JSON.parse(irSpecRead);

    await generate(irSpec, output, {
      generateVisitors,
    });
  };
}
