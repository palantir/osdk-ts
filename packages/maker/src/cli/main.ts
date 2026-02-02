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

import archiver from "archiver";
import { consola } from "consola";
import { createJiti } from "jiti";
import { randomUUID } from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import invariant from "tiny-invariant";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { defineOntology } from "../api/defineOntology.js";
import { getBlockVersionId } from "./marketplaceSerialization/CodeBlockSpec.js";
import {
  generateBlockSetSpec,
  generateOntologyBlockSpec,
  generateStoreManifest,
  isSemver,
} from "./marketplaceSerialization/specGenerators.js";

const apiNamespaceRegex = /^[a-z0-9-]+(\.[a-z0-9-]+)*\.$/;
const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

const MANIFEST_FILE_NAME = "generatedManifest.v1.json";
const STORE_MANIFEST_FILE_NAME = "manifest.json";

const DOCS_MANIFEST_CONTENT = `{ "attachmentList": [] }`;
const DOCS_MANIFEST_FILE_NAME = "documentation/manifest.v1.json";
const FREE_FORM_CONTENT = `{ "type": "markdown", "markdown": "" }`;
const FREE_FORM_FILE_NAME = "documentation/FreeForm.json";
const BLOCK_ARCHIVE_PATH = "code_blocks";
// TODO: Add this to the block
const BLOCK_ADD_ON = "marketplace_internal_block_add_on";

export default async function main(
  args: string[] = process.argv,
): Promise<void> {
  consola.log("Hello?");

  const commandLineOpts: {
    input: string;
    output: string;
    apiNamespace: string;
    packageName: string;
    buildDir: string;
    productName: string;
    productVersion: string;
    randomnessKey?: string;
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
        default: "ontology.zip",
        coerce: path.resolve,
      },
      apiNamespace: {
        describe: "Api name prefix for namespaced ontology types",
        type: "string",
        default: "",
      },
      packageName: {
        describe: "Maven package name appended to the end of the apiNamespace",
        type: "string",
        require: true,
      },
      /**snapshotDir: {
        alias: "s",
        describe: "Snapshot directory",
        type: "string",
        default: "snapshots",
        coerce: path.resolve,
      },**/
      /**outputDir: {
        alias: "d",
        describe: "Directory for generated marketplace product",
        type: "string",
        coerce: path.resolve,
      },**/

      buildDir: {
        alias: "b",
        describe: "Directory for build files",
        type: "string",
        default: "build/",
        coerce: path.resolve,
      },
      /**valueTypesOutput: {
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
      generateCodeSnippets: {
        describe: "Enable code snippet files creation",
        type: "boolean",
        default: false,
      },
      codeSnippetPackageName: {
        describe:
          "The package name that will be displayed in the code snippets",
        default: "",
        type: "string",
      },
      codeSnippetDir: {
        describe: "Directory for generated code snippet files",
        type: "string",
        default: "./",
        coerce: path.resolve,
      }, **/
      productName: {
        describe: "Marketplace product name",
        type: "string",
        default: "Ontology",
      },
      productVersion: {
        describe:
          "Semver version for generated marketplace product. Must be format x.x.x",
        type: "string",
        default: "0.1.0",
      },
      randomnessKey: {
        describe: "Value used to assure uniqueness of entities",
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

  if (commandLineOpts.randomnessKey !== undefined) {
    invariant(
      uuidRegex.test(commandLineOpts.randomnessKey),
      "Supplied randomness key is not a uuid and shouldn't be used as a uniqueness guarantee",
    );
  }

  const ontologyIr = await loadOntology(
    commandLineOpts.input,
    apiNamespace,
    commandLineOpts.randomnessKey,
  );

  const ontologyBlockSpec = generateOntologyBlockSpec(
    apiNamespace,
    ontologyIr,
    commandLineOpts.randomnessKey,
  );
  invariant(
    isSemver(commandLineOpts.productVersion),
    `Version specified is not a simple semver (x.x.x) ${commandLineOpts.productVersion}`,
  );

  const ontBlockUuid = getBlockVersionId(
    ontologyBlockSpec,
    commandLineOpts.productVersion,
    commandLineOpts.randomnessKey,
  );

  const blockSetUUID = randomUUID();

  consola.log("got this far");
  const blockSetSpec = generateBlockSetSpec(
    commandLineOpts.productVersion,
    commandLineOpts.productName,
    "",
    `${commandLineOpts.apiNamespace}:${commandLineOpts.packageName}`,
    { [ontBlockUuid]: ontologyBlockSpec },
  );

  const storeManifest = generateStoreManifest({ [blockSetUUID]: blockSetSpec });

  if (!fs.existsSync(commandLineOpts.buildDir)) {
    await fs.promises.mkdir(commandLineOpts.buildDir);
  }
  const ontologyBlockPath = commandLineOpts.buildDir + "/" + ontBlockUuid;
  const blockOutput = fs.createWriteStream(
    ontologyBlockPath,
  );

  const blockArchive = archiver("zip");

  blockArchive.pipe(blockOutput);

  const blockDataStr = JSON.stringify(
    ontologyIr.ontology,
    null,
    2,
  );

  const blockManifestStr = JSON.stringify(
    ontologyBlockSpec,
    null,
    2,
  );

  const ontologyBlockDataStr = blockArchive.append(blockDataStr, {
    name: "files/ontology.json",
  });
  blockArchive.append(blockManifestStr, { name: MANIFEST_FILE_NAME });

  consola.info(`Saving ontology to ${commandLineOpts.output}`);

  await blockArchive.finalize();

  const blockSetPath = commandLineOpts.buildDir + "/" + blockSetUUID;

  const blockSetOutput = fs.createWriteStream(
    blockSetPath,
  );

  const blockSetArchive = archiver("zip");
  blockSetArchive.pipe(blockSetOutput);

  blockSetArchive.append(DOCS_MANIFEST_CONTENT, {
    name: DOCS_MANIFEST_FILE_NAME,
  });
  blockSetArchive.append(FREE_FORM_CONTENT, { name: FREE_FORM_FILE_NAME });

  const blockSetManifestStr = JSON.stringify(
    blockSetSpec,
    null,
    2,
  );
  blockSetArchive.append(blockSetManifestStr, { name: MANIFEST_FILE_NAME });
  blockSetArchive.append(
    fs.createReadStream(ontologyBlockPath),
    { name: `${BLOCK_ARCHIVE_PATH}/${ontBlockUuid}` },
  );

  await blockSetArchive.finalize();

  const storeOutput = fs.createWriteStream(
    commandLineOpts.output,
  );

  const storeArchive = archiver("zip");
  storeArchive.pipe(storeOutput);

  storeArchive.append(fs.createReadStream(blockSetPath), {
    name: blockSetUUID,
  });

  const storeManifestStr = JSON.stringify(
    storeManifest,
    null,
    2,
  );
  storeArchive.append(storeManifestStr, { name: STORE_MANIFEST_FILE_NAME });
  await storeArchive.finalize();

  /**await fs.promises.writeFile(
    commandLineOpts.output,
    JSON.stringify(
      ontologyIr,
      null,
      2,
    ),
  );
  // No point in generating block if there aren't any value types
  if (
    ontologyIr.valueTypes.valueTypes.length > 0
    || ontologyIr.importedValueTypes.valueTypes.length > 0
  ) {
    await fs.writeFile(
      commandLineOpts.valueTypesOutput,
      JSON.stringify(
        ontologyIr.valueTypes,
        null,
        2,
      ),
    );
  }**/
}

async function loadOntology(
  input: string,
  apiNamespace: string,
  randomnessKey?: string,
) {
  const ontologyIr = await defineOntology(
    apiNamespace,
    async () => {
      const jiti = createJiti(import.meta.filename, {
        moduleCache: true,
        debug: false,
        importMeta: import.meta,
      });
      const module = await jiti.import(input);
    },
    randomnessKey,
  );
  return ontologyIr;
}
