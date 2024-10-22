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
import type { Project, SourceFile } from "ts-morph";
import { Node, SyntaxKind } from "ts-morph";
import { splitExtension, withoutTrailingIndex } from "./getModuleSourceFile.js";

const KNOWN_EXTERNAL = new Set(["geojson"]);

function removeDts(file: string) {
  return file.replace(/\.d\.c?ts$/, "");
}

export async function copyFiles(
  project: Project,
  dirs: string[],
  generatedPackageName: string,
  generatedFiles: { [fileName: string]: string },
): Promise<Set<string>> {
  const importSet: Set<string> = new Set();
  for (const [fileName, file] of Object.entries(generatedFiles)) {
    if (!fileName.endsWith(".d.ts") && !fileName.endsWith(".d.cts")) {
      continue;
    }
    const indexOfPackageName = fileName.indexOf(generatedPackageName);
    const tsPath = removeDts(fileName.slice(
      indexOfPackageName + generatedPackageName.length,
    ));

    const newModulePath = `${generatedPackageName}${tsPath}`;

    const sourceFile = project.createSourceFile(newModulePath, file);

    remapImportsExports(sourceFile, newModulePath, importSet);
  }

  for (const dir of dirs) {
    const buildDirsToTry = [
      path.join(dir, "build", "cjs"),
      path.join(dir, "build", "esm"),
      dir,
    ];
    const packageName = getPackageName(dir);

    const absoluteBuildDir = buildDirsToTry.find((buildDir) => {
      return ["d.ts", "d.cts", "d.mts"].some((ext) => {
        try {
          fs.statSync(path.join(buildDir, `index.${ext}`));
          return true;
        } catch (e) {
          return false;
        }
      });
    });

    if (!absoluteBuildDir) {
      throw new Error("Couldn't find the right build dir");
    }

    for (const file of getTypeFiles(absoluteBuildDir)) {
      const tsPath = removeDts(path.relative(absoluteBuildDir, file));

      const newModulePath = `internal/${packageName}/${tsPath}`;

      const fileContents = fs.readFileSync(file).toString();
      const sourceFile = project.createSourceFile(
        `${newModulePath}.ts`,
        fileContents,
        { overwrite: true },
      );

      remapImportsExports(sourceFile, newModulePath, undefined);
    }
  }
  return importSet;
}

function remapImportsExports(
  sourceFile: SourceFile,
  newModulePath: string,
  importSet: Set<string> | undefined,
) {
  for (const importDeclaration of sourceFile.getImportDeclarations()) {
    const moduleSpecifier = importDeclaration.getModuleSpecifier();
    const newModuleSpecifier = transformModuleSpecifier(
      moduleSpecifier.getLiteralValue(),
      newModulePath,
    );
    moduleSpecifier.setLiteralValue(newModuleSpecifier);

    if (importSet && newModuleSpecifier.startsWith("internal")) {
      for (
        const importName of importDeclaration.getNamedImports().map(imp =>
          imp.getName()
        )
      ) {
        importSet.add(`${newModuleSpecifier}:${importName}`);
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
      if (importSet && newModuleSpecifier.startsWith("internal")) {
        for (
          const exportName of exportDeclaration.getNamedExports().map(exp =>
            exp.getName()
          )
        ) {
          importSet.add(`${newModuleSpecifier}:${exportName}`);
        }
      }
    }
  }

  sourceFile.getDescendantsOfKind(SyntaxKind.ImportType).forEach((node) => {
    let moduleSpecifier = node.getArgument().getText();

    if (moduleSpecifier.startsWith("\"") && moduleSpecifier.endsWith("\"")) {
      moduleSpecifier = moduleSpecifier.slice(1, -1);
    }

    const newModuleSpecifier = transformModuleSpecifier(
      moduleSpecifier,
      newModulePath,
    );
    node.setArgument(newModuleSpecifier);

    const importName = node.getQualifier()?.getText();
    if (importSet && newModuleSpecifier.startsWith("internal") && importName) {
      importSet.add(`${newModuleSpecifier}:${importName}`);
    }
  });
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
    if (
      (target.endsWith(".d.ts") && !target.endsWith(".test.d.ts"))
      || (target.endsWith(".d.cts") && !target.endsWith(".test.d.cts"))
    ) {
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
      const maybe = value.match(splitExtension);
      value = maybe ? maybe[1] : value;
      moduleSpecifier = `internal/${value}`;
    }
  } else if (value.startsWith(".")) {
    const maybe = value.match(splitExtension);
    value = maybe ? maybe[1] : value;
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
