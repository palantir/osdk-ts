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

import * as fs from "node:fs";
import * as path from "node:path";
// eslint-disable-next-line import/no-extraneous-dependencies
import type { Project } from "ts-morph";
import { Node } from "ts-morph";
import { withoutTrailingIndex } from "./getModuleSourceFile";
const KNOWN_EXTERNAL = new Set(["geojson"]);

export async function copyFiles(
  project: Project,
  dirs: string[],
  generatedPackageName: string,
  generatedFiles: { [fileName: string]: string },
): Promise<Set<string>> {
  const importSet: Set<string> = new Set();
  for (const [fileName, file] of Object.entries(generatedFiles)) {
    if (!fileName.endsWith(".d.ts")) {
      continue;
    }
    const indexOfPackageName = fileName.indexOf(generatedPackageName);
    const tsPath = fileName.slice(
      indexOfPackageName + generatedPackageName.length,
      -5,
    );

    const newModulePath = `${generatedPackageName}${tsPath}`;

    const sourceFile = project.createSourceFile(newModulePath, file);

    for (const importDeclaration of sourceFile.getImportDeclarations()) {
      const moduleSpecifier = importDeclaration.getModuleSpecifier();
      const newModuleSpecifier = transformModuleSpecifier(
        moduleSpecifier.getLiteralValue(),
        newModulePath,
      );
      moduleSpecifier.setLiteralValue(newModuleSpecifier);

      if (newModuleSpecifier.startsWith("internal")) {
        for (
          const importName of importDeclaration.getNamedImports().map(imp =>
            imp.getName()
          )
        ) {
          importSet.add(importName);
        }
      }
    }

    for (const exportedDecl of sourceFile.getStatements()) {
      if (Node.isModifierable(exportedDecl)) {
        exportedDecl.toggleModifier("declare", false);
      }
    }

    for (const exportDeclaration of sourceFile.getExportDeclarations()) {
      const moduleSpecifier = exportDeclaration.getModuleSpecifier();
      if (moduleSpecifier) {
        const newModuleSpecifier = transformModuleSpecifier(
          moduleSpecifier.getLiteralValue(),
          newModulePath,
        );
        moduleSpecifier.setLiteralValue(newModuleSpecifier);
        if (newModuleSpecifier.startsWith("internal")) {
          for (
            const exportName of exportDeclaration.getNamedExports().map(exp =>
              exp.getName()
            )
          ) {
            importSet.add(exportName);
          }
        }
      }
    }
  }

  for (const dir of dirs) {
    const packageName = getPackageName(dir);
    for (const file of getTypeFiles(path.join(dir, "build"))) {
      // drop the trailing ".d.ts"
      const indexOfPackageName = file.indexOf(packageName);
      const tsPath = file.slice(
        indexOfPackageName + packageName.length + "/build/types".length,
        -5,
      );

      const newModulePath = `internal/${packageName}${tsPath}`;

      const fileContents = fs.readFileSync(file).toString();
      const sourceFile = project.createSourceFile(
        `${newModulePath}.ts`,
        fileContents,
        { overwrite: true },
      );
      for (const importDeclaration of sourceFile.getImportDeclarations()) {
        const moduleSpecifier = importDeclaration.getModuleSpecifier();
        const newModuleSpecifier = transformModuleSpecifier(
          moduleSpecifier.getLiteralValue(),
          newModulePath,
        );
        moduleSpecifier.setLiteralValue(newModuleSpecifier);
      }

      for (const exportedDecl of sourceFile.getStatements()) {
        if (Node.isModifierable(exportedDecl)) {
          exportedDecl.toggleModifier("declare", false);
        }
      }

      for (const exportDeclaration of sourceFile.getExportDeclarations()) {
        const moduleSpecifier = exportDeclaration.getModuleSpecifier();

        if (moduleSpecifier) {
          const newModuleSpecifier = transformModuleSpecifier(
            moduleSpecifier.getLiteralValue(),
            newModulePath,
          );
          moduleSpecifier.setLiteralValue(
            withoutTrailingIndex(newModuleSpecifier),
          );
        }
      }
    }
  }
  return importSet;
}

function getPackageName(dir: string): string {
  const pkg = fs.readFileSync(path.join(dir, "package.json"));
  const parsed = JSON.parse(pkg.toString());
  return parsed.name;
}

function* getTypeFiles(dir: string): Generator<string> {
  for (const item of fs.readdirSync(dir)) {
    const target = path.join(dir, item);
    // no test files
    if (target.endsWith(".d.ts") && !target.endsWith(".test.d.ts")) {
      yield target;
    } else {
      const stat = fs.lstatSync(target);
      // no test directories either
      if (stat.isDirectory() && item !== "test") {
        yield* getTypeFiles(target);
      }
    }
  }
}
function transformModuleSpecifier(value: string, filePath: string) {
  let moduleSpecifier: string;
  if (value.startsWith("@osdk")) {
    // package relative import
    if (value.startsWith("@osdk/gateway/types")) {
      moduleSpecifier = `internal/${
        value.replace("@osdk/gateway/types", "@osdk/gateway/public/types")
      }`;
    } else {
      moduleSpecifier = `internal/${value}`;
    }
  } else if (value.startsWith(".")) {
    // path relative import
    moduleSpecifier = path.join(filePath, "..", value);
  } else if (KNOWN_EXTERNAL.has(value)) {
    moduleSpecifier = `internal/${value}`;
  } else {
    throw new Error(
      "Failed generated DTS for package, no handling for: " + value,
    );
  }

  return withoutTrailingIndex(withoutExtension(moduleSpecifier));
}

function withoutExtension(value: string) {
  return value.replace(".js", "");
}
