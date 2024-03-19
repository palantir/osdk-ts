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

import { consola } from "consola";
import * as fs from "node:fs/promises";
import { join } from "node:path";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defineInterface } from "../api/defineInterface.js";
import { defineLink } from "../api/defineLink.js";
import { defineObject } from "../api/defineObject.js";
import { defineOntology } from "../api/defineOntology.js";
import { defineSharedPropertyType } from "../api/defineSpt.js";

export default async function main(args: string[] = process.argv) {
  const commandLineOpts: {
    input: string;
    output: string;
    snapshotDir: string;
  } = await yargs(hideBin(args))
    .version(process.env.PACKAGE_VERSION ?? "")
    .wrap(Math.min(150, yargs().terminalWidth()))
    .strict()
    .help()
    .options({
      input: {
        alias: "i",
        describe: "Input file",
        type: "string",
        default: ".ontology/ontology.ts",
      },
      output: {
        alias: "o",
        describe: "Output file",
        type: "string",
        default: "ontology.json",
      },
      snapshotDir: {
        alias: "s",
        describe: "Snapshot directory",
        type: "string",
        default: "snapshots",
      },
    }).parseAsync();

  const fullInputPath = join(process.cwd(), commandLineOpts.input);
  const fullOutputPath = join(process.cwd(), commandLineOpts.output);
  consola.info(`Loading ontology from ${fullInputPath}`);

  const ontology = await loadOntology(fullInputPath);

  consola.info(`Saving ontology to ${fullOutputPath}`);
  fs.writeFile(fullOutputPath, JSON.stringify(ontology, null, 2));
}

async function loadOntologyViaJiti(input: string) {
  Object.assign(globalThis, {
    defineInterface,
    defineLink,
    defineObject,
    defineSharedPropertyType,
  });

  const jiti_ = await import("jiti");
  const jiti = (jiti_.default as any as typeof jiti_["default"]["default"])(
    process.cwd(),
    { debug: true },
  );

  return defineOntology("", async () => await jiti(input));
}

async function loadOntologyViaTsNode(input: string) {
  Object.assign(globalThis, {
    defineInterface,
    defineLink,
    defineObject,
    defineSharedPropertyType,
  });

  const tsNode = await import("ts-node");
  const tsNodeService = tsNode.register({
    transpileOnly: true,
    compilerOptions: {
      module: "commonjs",
      target: "esnext",
    },
    esm: true,
  });

  tsNodeService.enabled(true);

  const fullPath = join(process.cwd(), input);

  const q = await import(fullPath);
  return q;
}

async function loadOntology(input: string) {
  // Object.assign(globalThis, {
  //   defineInterface,
  //   defineLink,
  //   defineObject,
  //   defineSharedPropertyType,
  // });

  const q = await defineOntology("", async () => await import(input));
  return q;
}
