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
import { defineOntology } from "../api/defineOntology.js";

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
    outputDir?: string;
    dependencies?: string;
    codeSnippetFiles?: boolean;
    codeSnippetPackageName?: string;
    snippetFileOutputDir?: string;
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
      outputDir: {
        alias: "d",
        describe: "Directory for generated ontology entities",
        type: "string",
        coerce: path.resolve,
      },
      valueTypesOutput: {
        describe: "Value Type Output File",
        type: "string",
        default: "value-types.json",
        coerce: path.resolve,
      },
      dependencies: {
        describe: "File to write dependencies to",
        type: "string",
        coerce: path.resolve,
      },
      codeSnippetFiles: {
        alias: "c",
        describe: "Enable code snippet files creation",
        type: "boolean",
      },
      codeSnippetPackageName: {
        alias: "p",
        describe:
          "The package name that will be displayed in the code snippets",
        type: "string",
      },
      snippetFileOutputDir: { // what should the default be?
        alias: "f",
        describe: "Directory for generated code snippet files",
        type: "string",
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
    commandLineOpts.outputDir,
    commandLineOpts.dependencies,
    commandLineOpts.codeSnippetFiles,
    commandLineOpts.codeSnippetPackageName,
    commandLineOpts.snippetFileOutputDir,
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

async function loadOntology(
  input: string,
  apiNamespace: string,
  outputDir: string | undefined,
  dependencyFile: string | undefined,
  codeSnippetFiles: boolean | undefined,
  snippetPackageName: string | undefined,
  snippetFileOutputDir: string | undefined,
) {
  const q = await defineOntology(
    apiNamespace,
    async () => await import(input),
    outputDir,
    dependencyFile,
    codeSnippetFiles,
    snippetPackageName,
    snippetFileOutputDir,
  );
  return q;
}
