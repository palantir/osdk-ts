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

import * as path from "node:path";
import { Project } from "ts-morph";
import type { ApiSpec } from "../spec/index.js";
import { generateRequestType } from "./client.js";
import { generateComponents } from "./component.js";
import { generateErrors } from "./error.js";
import type { GenerateOptions } from "./GenerateOptions.js";
import { generateNamespaces } from "./namespace.js";

const dashRegex = /-(\w)/g;

export async function generate(
  apiSpec: ApiSpec,
  outputDirectory: string,
  options: GenerateOptions,
) {
  const project = new Project({
    compilerOptions: {
      declaration: true,
    },
  });

  generateComponents(apiSpec.components, outputDirectory, project, options);
  generateErrors(apiSpec.errors, outputDirectory, project);
  generateNamespaces(apiSpec.namespaces, outputDirectory, project);
  generateRequestType(outputDirectory, project);
  generateIndexFiles(project, outputDirectory);
  project.addSourceFilesAtPaths(`${outputDirectory}/**/**`);
  project.getSourceFiles().forEach(file => {
    file.formatText();
  });

  await project.save();
}

function generateIndexFiles(project: Project, outDir: string) {
  const moduleTypes: Map<string, string[]> = new Map();
  project.getSourceFiles().forEach(file => {
    const packageName = file.getDirectory().getBaseName();
    const allTypes = (moduleTypes.get(packageName) || []).concat(
      file.getBaseNameWithoutExtension(),
    );
    moduleTypes.set(packageName, allTypes);
  });

  const rootIndex = project.createSourceFile(path.join(outDir, "index.ts"));
  const moduleArray = Array.from(moduleTypes.entries());
  const indexPromises = moduleArray.map(([packageName, types]) => {
    const moduleIndex = project.createSourceFile(
      path.join(outDir, packageName, "index.ts"),
    );
    moduleIndex.addExportDeclarations(
      types.map(type => ({ moduleSpecifier: `./${type}.js` })),
    );
    return moduleIndex.save();
  });

  if (moduleArray.length === 1) {
    rootIndex.addExportDeclaration({
      moduleSpecifier: `./${moduleArray[0]![0]}/index.js`,
    });
  } else {
    moduleArray.forEach(([packageName, _types]) => {
      const camelCaseModule = packageName.replace(
        dashRegex,
        x => x[1]!.toUpperCase(),
      );
      rootIndex.addImportDeclaration({
        moduleSpecifier: `./${packageName}/index.js`,
        namespaceImport: camelCaseModule,
      });
      rootIndex.addExportDeclaration({ namedExports: [camelCaseModule] });
    });
  }
  indexPromises.push(rootIndex.save());

  return Promise.all(indexPromises);
}
