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
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defineInterface } from "../api/defineInterface.js";
import { defineLink } from "../api/defineLink.js";
import { defineObject } from "../api/defineObject.js";
import { defineOntology } from "../api/defineOntology.js";
import { defineSharedPropertyType } from "../api/defineSpt.js";

const apiNamespaceRegex = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.$/;

export default async function main(
  args: string[] = process.argv,
): Promise<void> {
  const commandLineOpts: {
    input: string;
    output: string;
    apiNamespace: string;
    snapshotDir: string;
    valueTypesOutput: string;
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
        coerce: path.resolve,
      },
      output: {
        alias: "o",
        describe: "Output file",
        type: "string",
        default: "ontology.json",
        coerce: path.resolve,
      },
      apiNamespace: {
        describe: "Api name prefix for namespaced ontology types",
        type: "string",
        default: "",
      },
      snapshotDir: {
        alias: "s",
        describe: "Snapshot directory",
        type: "string",
        default: "snapshots",
        coerce: path.resolve,
      },
      valueTypesOutput: {
        describe: "Value Type Output File",
        type: "string",
        default: "value-types.json",
        coerce: path.resolve,
      },
    })
    .parseAsync();
  let apiNamespace = "";
  if (commandLineOpts.apiNamespace.length !== 0) {
    apiNamespace = (commandLineOpts.apiNamespace.slice(-1) !== ".")
      ? commandLineOpts.apiNamespace + "."
      : commandLineOpts.apiNamespace;
    invariant(apiNamespace.length < 1024, "API namespace is too long.");
    invariant(
      apiNamespaceRegex.test(apiNamespace),
      "API namespace is invalid! It is expected to conform to ^[a-z0-9-]+(\.[a-z0-9-]+)*\.$",
    );
  }
  consola.info(`Loading ontology from ${commandLineOpts.input}`);
  const ontology = await loadOntology(
    commandLineOpts.input,
    apiNamespace,
  );

  consola.info(`Saving ontology to ${commandLineOpts.output}`);
  await fs.writeFile(
    commandLineOpts.output,
    JSON.stringify(ontology.ontology, null, 2),
  );
  // No point in generating block if there aren't any value types
  if (ontology.valueType.valueTypes.length > 0) {
    await fs.writeFile(
      commandLineOpts.valueTypesOutput,
      JSON.stringify(ontology.valueType, null, 2),
    );
  }
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

  const q = await import(input);
  return q;
}

async function loadOntology(input: string, apiNamespace: string) {
  // Object.assign(globalThis, {
  //   defineInterface,
  //   defineLink,
  //   defineObject,
  //   defineSharedPropertyType,
  // });

  const q = await defineOntology(apiNamespace, async () => await import(input));
  return q;
}
