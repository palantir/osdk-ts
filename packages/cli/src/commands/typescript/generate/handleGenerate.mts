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

import {
  generateClientSdkVersionOneDotOne,
  generateClientSdkVersionTwoPointZero,
} from "@osdk/generator";
import { consola } from "consola";
import * as fs from "node:fs";
import type { TypescriptGenerateArgs } from "./TypescriptGenerateArgs.js";

export default async function handleGenerate(args: TypescriptGenerateArgs) {
  const ontology = JSON.parse(
    await fs.promises.readFile(args.ontologyPath, "utf-8"),
  );
  if (args.beta) {
    await generateClientSdkVersionTwoPointZero(ontology, {
      writeFile: (path, contents) => {
        return fs.promises.writeFile(path, contents, "utf-8");
      },
      mkdir: async (path, options) => {
        await fs.promises.mkdir(path, options);
      },
    }, args.outDir);
  } else {
    await generateClientSdkVersionOneDotOne(ontology, {
      writeFile: (path, contents) => {
        return fs.promises.writeFile(path, contents, "utf-8");
      },
      mkdir: async (path, options) => {
        await fs.promises.mkdir(path, options);
      },
    }, args.outDir);
  }

  consola.info("OSDK Generated!");
}
