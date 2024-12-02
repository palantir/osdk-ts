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

import type { MinimalFs } from "@osdk/generator";
import { generateClientSdkVersionTwoPointZero } from "@osdk/generator";
import { resolveDependenciesFromFindUp } from "@osdk/generator-utils";
import { mkdir, readdir, writeFile } from "fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, isAbsolute, join, normalize } from "path";
import type { OntologyInfo } from "../../ontologyMetadata/ontologyMetadataResolver.js";
import { USER_AGENT } from "../../utils/UserAgent.js";
import { generateBundles } from "../generateBundles.js";
import { bundleDependencies } from "./bundleDependencies.js";
import { compileInMemory } from "./compileInMemory.js";
import { generatePackageJson } from "./generatePackageJson.js";

const betaPeerDependencies: { [key: string]: string | undefined } = {
  "@osdk/client": undefined,
};

export async function generatePackage(
  ontologyInfo: OntologyInfo,
  options: {
    packageName: string;
    packageVersion: string;
    outputDir: string;
    beta: boolean;
  },
) {
  const { consola } = await import("consola");

  const packagePath = join(options.outputDir, options.packageName);

  const resolvedPeerDependencies = await resolveDependenciesFromFindUp(
    betaPeerDependencies,
    dirname(fileURLToPath(import.meta.url)),
  );

  await mkdir(packagePath, { recursive: true });

  const inMemoryFileSystem: { [fileName: string]: string } = {};
  const hostFs: MinimalFs = {
    writeFile: async (path, contents) => {
      inMemoryFileSystem[normalize(path)] = contents;
    },
    mkdir: async (path, _options?: { recursive: boolean }) => {
      await mkdir(normalize(path), { recursive: true });
    },
    readdir: path => readdir(path),
  };

  await generateClientSdkVersionTwoPointZero(
    ontologyInfo.filteredFullMetadata,
    `typescript-sdk/${options.packageVersion} ${USER_AGENT}`,
    hostFs,
    packagePath,
    "module",
    ontologyInfo.externalObjects,
    ontologyInfo.externalInterfaces,
  );

  const compilerOutput = compileInMemory(inMemoryFileSystem, {
    esm: true,
  });
  compilerOutput.diagnostics.forEach(d =>
    consola.error(`Error compiling file`, d.file?.fileName, d.messageText)
  );

  await mkdir(join(packagePath, "dist", "bundle"), { recursive: true });

  const { findUp } = await import("find-up");
  const nodeModulesPath = await findUp("node_modules", {
    cwd: dirname(fileURLToPath(import.meta.url)),
    type: "directory",
  });

  let bundleDts: string = "";
  if (nodeModulesPath) {
    try {
      bundleDts = await bundleDependencies(
        [],
        options.packageName,
        compilerOutput.files,
        undefined,
      );
    } catch (e) {
      consola.error("Failed bundling DTS", e);
    }
  } else {
    consola.error(
      "Could not find node_modules directory, skipping DTS bundling",
    );
  }

  await Promise.all([
    ...Object.entries(compilerOutput.files).map(async ([path, contents]) => {
      await writeFile(path, contents, { flag: "w" });
    }),
    await writeFile(
      join(packagePath, "dist", "bundle", "index.d.ts"),
      bundleDts,
      { flag: "w" },
    ),
    generatePackageJson({
      packageName: options.packageName,
      packagePath,
      packageVersion: options.packageVersion,
      dependencies: [],
      peerDependencies: resolvedPeerDependencies,
      beta: options.beta,
    }),
  ]);

  const absolutePackagePath = isAbsolute(options.outputDir)
    ? options.outputDir
    : join(process.cwd(), options.outputDir);

  try {
    await generateBundles(absolutePackagePath, options.packageName);
  } catch (e) {
    consola.error(e);
  }
}
