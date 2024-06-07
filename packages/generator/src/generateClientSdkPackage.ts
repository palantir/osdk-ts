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

import * as fs from "node:fs";
import * as path from "node:path";
import type { MinimalFs } from "./MinimalFs.js";
import { generateClientSdkVersionOneDotOne } from "./v1.1/generateClientSdkVersionOneDotOne.js";
import { generateClientSdkVersionTwoPointZero } from "./v2.0/generateClientSdkVersionTwoPointZero.js";
import type { WireOntologyDefinition } from "./WireOntologyDefinition.js";

export async function generateClientSdkPackage(
  packageName: string,
  packageVersion: string,
  sdkVersion: "1.1" | "2.0",
  baseOutDir: string,
  ontology: WireOntologyDefinition,
  minimalFs: MinimalFs,
  dependencyVersions: DependencyVersions,
  cliVersion: string,
) {
  if (!packageName) throw new Error("Package name is require");

  for (const packageType of ["module", "commonjs"] as const) {
    const outDir = path.join(baseOutDir, "dist", packageType);

    await (sdkVersion === "1.1"
      ? generateClientSdkVersionOneDotOne
      : sdkVersion === "2.0"
      ? generateClientSdkVersionTwoPointZero
      : undefined!)(
        ontology,
        `typescript-sdk/${packageVersion} osdk-cli/${cliVersion}`,
        minimalFs,
        outDir,
        packageType,
      );

    await fs.promises.mkdir(outDir, { recursive: true });
    await writeJson(
      minimalFs,
      path.join(outDir, "package.json"),
      { type: packageType },
    );

    await writeJson(
      minimalFs,
      path.join(outDir, `tsconfig.json`),
      {
        compilerOptions: getTsCompilerOptions(packageType),
      },
    );
  }

  await writeJson(
    minimalFs,
    path.join(baseOutDir, "package.json"),
    await getPackageJsonContents(
      packageName,
      packageVersion,
      sdkVersion,
      dependencyVersions,
    ),
  );

  // we need to shim for the node10 resolver
  await minimalFs.mkdir(path.join(baseOutDir, "ontology"), {
    recursive: true,
  });
  await minimalFs.writeFile(
    path.join(baseOutDir, "ontology", "objects.js"),
    `module.exports = require("../../dist/module/ontology/objects")`,
  );
  await minimalFs.writeFile(
    path.join(baseOutDir, "ontology", "objects.d.ts"),
    `export * from "../dist/module/ontology/objects"`,
  );
}

function getTsCompilerOptions(packageType: "commonjs" | "module") {
  const commonTsconfig = {
    importHelpers: true,

    declaration: true,

    isolatedModules: true,
    esModuleInterop: true,

    forceConsistentCasingInFileNames: true,
    strict: true,

    skipLibCheck: true,
  };

  const compilerOptions = packageType === "commonjs"
    ? {
      ...commonTsconfig,
      module: "commonjs",
      target: "es2018",
    }
    : {
      ...commonTsconfig,
      module: "NodeNext",
      target: "ES2020",
    };
  return compilerOptions;
}

export interface DependencyVersions {
  typescriptVersion: string;
  tslibVersion: string;
  areTheTypesWrongVersion: string;
  osdkApiVersion: string;
  osdkClientVersion: string;
  osdkClientApiVersion: string;
  osdkLegacyClientVersion: string;
}

export function getExpectedDependencies(
  sdkVersion: "2.0" | "1.1",
  {
    osdkApiVersion,
    osdkClientVersion,
    osdkClientApiVersion,
    osdkLegacyClientVersion,
  }: DependencyVersions,
) {
  return {
    devDependencies: {
      "@osdk/api": osdkApiVersion,
      ...(sdkVersion
          === "2.0"
        ? { "@osdk/client.api": osdkClientApiVersion }
        : { "@osdk/legacy-client": osdkLegacyClientVersion }),
    },
    peerDependencies: {
      "@osdk/api": osdkApiVersion,
      ...(sdkVersion === "2.0"
        ? {
          "@osdk/client.api": osdkClientApiVersion,
          "@osdk/client": osdkClientVersion,
        }
        : { "@osdk/legacy-client": osdkLegacyClientVersion }),
    },
  };
}

function getExpectedDependenciesFull(
  sdkVersion: "2.0" | "1.1",
  dependencyVersions: DependencyVersions,
) {
  const {
    typescriptVersion,
    tslibVersion,
    areTheTypesWrongVersion,
  } = dependencyVersions;

  const base = getExpectedDependencies(sdkVersion, dependencyVersions);

  return {
    devDependencies: {
      ...base.devDependencies,
      "typescript": typescriptVersion,
      "tslib": tslibVersion,
      "@arethetypeswrong/cli": areTheTypesWrongVersion,
    },
    peerDependencies: {
      ...base.peerDependencies,
    },
  };
}

export function getPackageJsonContents(
  name: string,
  version: string,
  sdkVersion: "2.0" | "1.1",
  dependencyVersions: DependencyVersions,
) {
  const esmPrefix = "./dist/module";
  const commonjsPrefix = "./dist/commonjs";
  return {
    name,
    version,
    main: `${commonjsPrefix}/index.js`,
    module: `${esmPrefix}/index.js`,
    exports: {
      ".": {
        import: `${esmPrefix}/index.js`,
        require: `${commonjsPrefix}/index.js`,
      },
      "./ontology/objects": {
        import: `${esmPrefix}/ontology/objects${
          sdkVersion === "2.0" ? "" : "/index"
        }.js`,
        require: `${commonjsPrefix}/ontology/objects${
          sdkVersion === "2.0" ? "" : "/index"
        }.js`,
      },
    },
    scripts: {
      prepack:
        `tsc -p ${esmPrefix}/tsconfig.json && tsc -p ${commonjsPrefix}/tsconfig.json`,
      check: "npm exec attw $(npm pack)",
    },
    ...getExpectedDependenciesFull(sdkVersion, dependencyVersions),
    files: [
      "**/*.js",
      "**/*.d.ts",
      "dist/**/package.json",
    ],
  };
}

async function writeJson(
  minimalFs: MinimalFs,
  filePath: string,
  body: unknown,
) {
  // consola.info(`Writing ${filePath}`);
  // consola.debug(`Writing ${filePath} with body`, body);
  return await minimalFs.writeFile(
    filePath,
    JSON.stringify(body, undefined, 2) + "\n",
  );
}
