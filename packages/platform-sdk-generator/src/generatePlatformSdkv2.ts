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

import fs from "node:fs/promises";
import * as path from "node:path";
import pluralizeWord from "pluralize";
import { addPackagesToPackageJson } from "./addPackagesToPackageJson.js";
import { copyright } from "./copyright.js";
import { generateImports, SKIP } from "./generateImports.js";
import { writeResource2 } from "./generateResource2.js";
import type * as ir from "./ir/index.js";
import { isIgnoredNamespace } from "./isIgnoredNamespace.js";
import { isIgnoredType } from "./isIgnoredType.js";
import type { Component } from "./model/Component.js";
import { Model } from "./model/Model.js";
import type { Namespace } from "./model/Namespace.js";
import { addAll } from "./util/addAll.js";
import { fileExists } from "./util/fileExists.js";
import { writeCode } from "./writeCode.js";

export async function generatePlatformSdkV2(
  ir: ir.ApiSpec,
  outputDir: string,
  packagePrefix: string,
): Promise<string[]> {
  const npmOrg = "@osdk";
  const model = await Model.create(ir, { npmOrg, outputDir, packagePrefix });

  const componentsGenerated = new Map<Namespace, string[]>();

  // We need to make sure the components are all populated before we generate the resources
  for (const ns of model.namespaces) {
    componentsGenerated.set(ns, await generateComponents(ns, ns.paths.srcDir));
  }

  // Now we can generate the resources
  for (const ns of model.namespaces) {
    for (const r of ns.resources) {
      const sourceFilePath = path.join(
        ns.paths.resourcesDir,
        `${r.component}.ts`,
      );
      await writeResource2(ns, r, sourceFilePath, model);
    }
  }

  // create the package root file
  for (const ns of model.namespaces) {
    let nsIndexTsContents = `${copyright}\n`;

    for (const r of ns.resources) {
      const resourceDirRelToSrc = "./" // path.join() will strip a single period w do it by hand
        + path.relative(
          ns.paths.srcDir,
          ns.paths.resourcesDir,
        );

      const resourceName = pluralize(r.component);
      if (componentsGenerated.get(ns)!.some(c => c === resourceName)) {
        throw new Error(
          `Even the duplicated components aren't unique: ${resourceName}`,
        );
      }

      // path utilities are bad for urls like things because they strip the leading period
      nsIndexTsContents +=
        `export * as ${resourceName} from "${resourceDirRelToSrc}/${r.component}.js";\n`;
    }

    const deps = new Set<Namespace>([model.commonNamespace]);
    for (const r of ns.resources) {
      for (const method of r.operations) {
        for (const rc of method.referencedComponents) {
          deps.add(rc.namespace);
        }
      }
    }

    deps.delete(ns);

    await addPackagesToPackageJson(
      path.join(ns.paths.packagePath, "package.json"),
      [...deps].map(n => n.packageName),
    );

    nsIndexTsContents += `export type {${
      componentsGenerated.get(ns)?.sort().join(",\n")
    }} from "./_components.js";\n`;
    await writeCode(
      path.join(ns.paths.srcDir, "index.ts"),
      nsIndexTsContents,
    );
  }

  // finally create the re-export package
  let rootIndexTsContents = `${copyright}\n\n`;
  for (const ns of model.namespaces) {
    if (ns.name === "") {
      rootIndexTsContents += `export * from "${ns.packageName}";\n`;
    } else {
      rootIndexTsContents +=
        `export * as ${ns.name} from "${ns.packageName}";\n`;
    }
  }

  const primaryPackagePath = path.join(outputDir, packagePrefix);
  const primaryPackageName = `${npmOrg}/${packagePrefix}`;
  const megaInfo = await ensurePackageSetup(
    primaryPackagePath,
    primaryPackageName,
    [...model.namespaces].map(n => n.packageName),
  );

  await writeCode(
    path.join(megaInfo.srcDir, "index.ts"),
    rootIndexTsContents,
  );

  return [
    primaryPackagePath,
    ...[...model.namespaces].map(ns => ns.paths.packagePath),
  ];
}

export async function generateComponents(
  ns: Namespace,
  outputDir: string,
): Promise<string[]> {
  const referencedComponents = new Set<Component>();
  const ret = [];

  let out =
    `export type LooselyBrandedString<T extends string> = string & {__LOOSE_BRAND?: T };
      `;

  for (const component of ns.components) {
    if (isIgnoredType(component.component)) {
      continue;
    }
    out += component.declaration;
    ret.push(component.name);

    addAll(referencedComponents, component.referencedComponents);
  }

  const imports = generateImports(referencedComponents, new Map([[ns, SKIP]]));

  await writeCode(
    path.join(outputDir, "_components.ts"),
    `${copyright}
    
    ${imports}

  ${out}`,
  );

  return ret;
}

export async function ensurePackageSetup(
  packagePath: string,
  packageName: string,
  packagesToAdd: string[],
): Promise<{ srcDir: string; resourcesDir: string; packagePath: string }> {
  const srcDir = path.join(packagePath, "src");
  const resourcesDir = path.join(packagePath, "src", "public");
  const packageJsonPath = path.join(packagePath, "package.json");

  await fs.mkdir(srcDir, { recursive: true });
  await fs.mkdir(resourcesDir, { recursive: true });

  if (!await fileExists(packageJsonPath)) {
    await createPackageJson(
      packagePath,
      packageName,
    );
  }

  await addPackagesToPackageJson(packageJsonPath, packagesToAdd);

  return {
    srcDir,
    resourcesDir,
    packagePath,
  };
}

const BASE_PACKAGE_JSON = {
  "license": "Apache-2.0",
  "repository": {
    "type": "git",
    "url": "https://github.com/palantir/osdk-ts.git",
  },
  "exports": {
    ".": {
      "types": "./build/types/index.d.ts",
      "browser": "./build/js/index.browser.mjs",
      "import": "./build/js/index.mjs",
    },
    "./*": {
      "types": "./build/types/public/*.d.ts",
      "browser": "./build/js/public/*.browser.mjs",
      "import": "./build/js/public/*.mjs",
    },
  },
  "scripts": {
    "clean": "rm -rf lib dist types build tsconfig.tsbuildinfo",
    "fix-lint": "eslint . --fix && dprint fmt --config $(find-up dprint.json)",
    "lint": "eslint . && dprint check  --config $(find-up dprint.json)",
    "transpile": "tsup",
    "typecheck": "tsc-absolute",
  },
  "dependencies": {},
  "peerDependencies": {
    "@osdk/api": "workspace:~",
    "@osdk/client": "workspace:~",
    "@osdk/shared.net": "workspace:~",
  },
  "devDependencies": {
    "typescript": "^5.4.5",
  },
  "publishConfig": {
    "access": "public",
  },
  "files": [
    "build/types",
    "build/js",
    "CHANGELOG.md",
    "package.json",
    "templates",
    "*.d.ts",
  ],
  "module": "./build/js/index.mjs",
  "types": "./build/types/index.d.ts",
  "sls": {
    "dependencies": {
      "com.palantir.foundry.api:api-gateway": {
        "minVersion": "1.824.0",
        "maxVersion": "1.x.x",
      },
    },
  },
  "type": "module",
};

async function createPackageJson(outputDir: string, name: string) {
  await fs.writeFile(
    path.join(outputDir, "package.json"),
    JSON.stringify(
      {
        name,
        version: "0.0.0",
        ...BASE_PACKAGE_JSON,
      },
      undefined,
      2,
    ),
  );
}

export function pluralize(s: string): string {
  const parts = s.split(/(?=[A-Z])/);
  if (!parts) throw new Error("Failed to pluralize");

  const lastPart = parts[parts.length - 1] === "V2"
    ? parts.length - 2
    : parts.length - 1;

  parts[lastPart] = pluralizeWord(parts[lastPart]);

  return parts.join("");
}
