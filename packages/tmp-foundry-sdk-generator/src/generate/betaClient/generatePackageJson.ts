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

import { writeFile } from "fs/promises";
import { join } from "path";

export async function generatePackageJson(options: {
  packageName: string;
  packageVersion: string;
  packagePath: string;
  dependencies?: Array<{ dependencyName: string; dependencyVersion: string }>;
  beta: boolean;
}) {
  const packageDeps = options.dependencies?.reduce((acc, value) => {
    acc[value.dependencyName] = value.dependencyVersion;
    return acc;
  }, {} as { [dependencyName: string]: string });

  // Note that any "default" conditions _must_ be last in their block otherwise it will crash at runtime
  const packageJson = options.beta
    ? {
      name: options.packageName,
      version: options.packageVersion,
      main: "./index.js",
      types: "./index.d.ts",
      exports: {
        ".": {
          types: "./index.d.ts",
          script: {
            default: "./dist/bundle/index.esm.js",
          },
          default: "./index.js",
        },
      },
      dependencies: packageDeps,
    }
    : {
      name: options.packageName,
      version: options.packageVersion,
      main: "./index.js",
      types: "./index.d.ts",
      exports: {
        ".": {
          types: "./index.d.ts",
          script: {
            types: "./dist/bundle/index.d.ts",
            default: "./dist/bundle/index.esm.js",
          },
          default: "./index.js",
        },
        "./ontology/objects": {
          types: "./ontology/objects/index.d.ts",
          default: "./ontology/objects/index.js",
        },
      },
      dependencies: packageDeps,
    };

  await writeFile(
    join(options.packagePath, "package.json"),
    JSON.stringify(packageJson, undefined, 4),
  );
}
