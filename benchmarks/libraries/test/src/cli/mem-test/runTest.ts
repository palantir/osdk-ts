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

import { execaNode } from "execa";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import pLocate from "p-locate";
import invariant from "tiny-invariant";

async function fileExists(filePath: string) {
  try {
    await fs.stat(filePath);
    return true;
  } catch (err) {
    if ((err as any).code === "ENOENT") {
      return false;
    } else {
      throw err; // Rethrow other errors
    }
  }
}

async function getFilePaths(packageDirPath: string) {
  // if the package has a `build/esm/benchmark.js` file, we will use it for the test.
  // if not, we will use benchmark.js in the root.
  // we will do the same for the sidecar file.

  const benchmarkFile = await pLocate([
    path.join(packageDirPath, "build/esm/benchmark.js"),
    path.join(packageDirPath, "benchmark.js"),
  ], (f) => fileExists(f));

  invariant(benchmarkFile, "No benchmark file found");

  const sidecarFile = await pLocate([
    path.join(packageDirPath, "build/esm/sidecar.js"),
    path.join(packageDirPath, "sidecar.js"),
  ], (f) => fileExists(f));

  return { sidecarFile, benchmarkFile };
}
export interface Result {
  type: "result";
  time: number;
  heapUsed: number;
  rss: number;
}

export async function runTest(packageDir: string) {
  const { sidecarFile, benchmarkFile } = await getFilePaths(packageDir);
  const closeSidecar = await createSidecar(sidecarFile);

  try {
    const subprocess = execaNode({
      nodeOptions: [
        "--allow-natives-syntax",
        "--expose-gc",
      ],
      ipc: true,
    })`${benchmarkFile}`;
    try {
      await subprocess.sendMessage({ "type": "start" });

      const response: Result = await subprocess.getOneMessage() as any;
      invariant(
        response
          && response.type === "result"
          && "time" in response
          && "heapUsed" in response
          && "rss" in response,
      );
      return response;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      // eslint-disable-next-line no-console
      console.log((await subprocess).code);
      // console.log(subprocess.stdout);
      // console.log(subprocess.stderr);
      throw e;
    }
  } finally {
    if (closeSidecar) {
      await closeSidecar();
    }
  }
}

async function createSidecar(sidecarPath: string | undefined) {
  const createSidecar: undefined | (() => Promise<() => Promise<any>>) =
    sidecarPath && await fileExists(sidecarPath)
      ? (await import(sidecarPath)).default
      : undefined;

  const closeSidecar = createSidecar ? await createSidecar() : undefined;
  return closeSidecar;
}
