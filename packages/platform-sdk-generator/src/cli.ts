/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import { findUp } from "find-up";
import fs from "node:fs/promises";
import * as path from "node:path";
import * as process from "node:process";
import { parse as parseYaml } from "yaml";
import yargs from "yargs";
import type { Arguments, Argv, CommandModule } from "yargs";
import { hideBin } from "yargs/helpers";
import { generatePlatformSdk } from "./generatePlatformSdk.js";
import { generatePlatformSdkV2 } from "./generatePlatformSdkv2.js";
import type { ApiSpec } from "./ir/index.js";
import { updateSls } from "./updateSls.js";

export async function cli(args: string[] = process.argv) {
  const base = yargs(hideBin(args))
    .version(false)
    .command(new GenerateCommand())
    .demandCommand();

  return base.parseAsync();
}

export interface Options {
  v2: boolean;
  inputFile: string;
  manifestFile: string;
  outputDir: string;
}

export class GenerateCommand implements CommandModule<{}, Options> {
  public aliases = [];

  public command = "generate";

  public describe = "Generate TypeScript bindings for a OpenApi API";

  public builder(args: Argv): Argv<Options> {
    return args
      .option("v2", { type: "boolean", default: false })
      .positional("inputFile", {
        describe: "The location of the API IR",
        type: "string",
        demandOption: true,
      })
      .positional("manifestFile", {
        describe: "The location of the API manifest.yml",
        type: "string",
        demandOption: true,
      })
      .positional("outputDir", {
        describe: "The output directory for the generated code",
        type: "string",
        demandOption: true,
      });
  }

  public handler = async (args: Arguments<Options>) => {
    const input = args.inputFile;
    const output = args.outputDir;

    if (!input) {
      throw new Error("Must provide an input file");
    } else if (!output) {
      throw new Error("Must provide an output directory");
    }

    const irSpecRead = await fs.readFile(`${input}`, { encoding: "utf8" });
    const irSpec: ApiSpec = JSON.parse(irSpecRead);

    const manifest = parseYaml(
      await fs.readFile(`${args.manifestFile}`, {
        encoding: "utf8",
      }),
    );

    if (args.v2) {
      const pkgDirs = await generatePlatformSdkV2(irSpec, output);
      for (const pkgDir of pkgDirs) {
        await updateSls(manifest, pkgDir);
      }
    } else {
      await generatePlatformSdk(irSpec, output);

      // this updates the foundry package.json with the correct versions
      await updateSls(manifest, output);

      // but right now we arent using that we are bundling it into client so we need to
      // manually update client too
      const pnpmWorkspaceFile = await findUp("pnpm-workspace.yaml", {
        cwd: output,
      });
      await updateSls(
        manifest,
        path.join(
          path.dirname(pnpmWorkspaceFile!),
          "packages",
          "client",
          "src",
        ),
      );
    }
  };
}
