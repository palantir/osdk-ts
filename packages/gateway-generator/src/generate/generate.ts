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
import type { FileSystemHost, SourceFile } from "ts-morph";
import { IndentationText, Project, QuoteKind } from "ts-morph";
import type { ApiSpec } from "../spec/ApiSpec.js";
import { generateRequestType } from "./client.js";
import { generateComponents } from "./component.js";
import { generateErrors } from "./error.js";
import type { GenerateOptions } from "./GenerateOptions.js";
import { generateNamespaces } from "./namespace.js";

const dashRegex = /-(\w)/g;

function readCopyrightYears(
  fs: FileSystemHost,
  dir: string,
) {
  const ret = new Map<string, string>();
  const files = fs.globSync([`${dir}/**/*.ts`]);

  for (const file of files) {
    const contents = fs.readFileSync(file);
    const match = contents.match(
      /\/* Copyright (20[0-9][0-9]) Palantir Technologies, Inc. All rights reserved./,
    );
    if (match) {
      ret.set(file, match[1]);
    }
  }
  return ret;
}

export async function generate(
  apiSpec: ApiSpec,
  outputDirectory: string,
  options: GenerateOptions,
) {
  const project = new Project({
    compilerOptions: {
      declaration: true,
    },
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces,
      quoteKind: QuoteKind.Double,
    },
  });

  //
  const copyrightYears = readCopyrightYears(
    project.getFileSystem(),
    outputDirectory,
  );
  project.getFileSystem().deleteSync(outputDirectory);

  function addCopyright(sf: SourceFile) {
    const year = copyrightYears.get(sf.getFilePath()) ?? "2024";
    sf.insertText(
      0,
      `/*
   * Copyright ${year} Palantir Technologies, Inc. All rights reserved.
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
  
      `,
    );
  }

  generateComponents(
    apiSpec.components,
    outputDirectory,
    project,
    options,
    addCopyright,
  );
  generateErrors(apiSpec.errors, outputDirectory, project, addCopyright);
  generateNamespaces(
    apiSpec.namespaces,
    outputDirectory,
    project,
    addCopyright,
  );
  generateRequestType(outputDirectory, project, addCopyright);
  await generateIndexFiles(project, outputDirectory, addCopyright);
  project.addSourceFilesAtPaths(`${outputDirectory}/**/**`);
  project.getSourceFiles().forEach(file => {
    file.formatText();
  });

  await project.save();
}

function generateIndexFiles(
  project: Project,
  outDir: string,
  addCopyright: (sf: SourceFile) => void,
) {
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
      types.map(type => ({ moduleSpecifier: `./${type}` })),
    );
    addCopyright(moduleIndex);

    return moduleIndex.save();
  });

  if (moduleArray.length === 1) {
    rootIndex.addExportDeclaration({
      moduleSpecifier: `./${moduleArray[0]![0]}`,
    });
  } else {
    moduleArray.forEach(([packageName, _types]) => {
      const camelCaseModule = packageName.replace(
        dashRegex,
        x => x[1]!.toUpperCase(),
      );
      rootIndex.addImportDeclaration({
        moduleSpecifier: `./${packageName}`,
        namespaceImport: camelCaseModule,
      });
      rootIndex.addExportDeclaration({ namedExports: [camelCaseModule] });
    });
  }
  rootIndex.insertText(
    0,
    `/*
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

    `,
  );

  indexPromises.push(rootIndex.save());

  return Promise.all(indexPromises);
}
