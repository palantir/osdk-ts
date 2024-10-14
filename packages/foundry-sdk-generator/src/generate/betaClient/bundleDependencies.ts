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

import { Project } from "ts-morph";
import { copyFiles } from "./copyFiles.js";
import { withoutTrailingIndex } from "./getModuleSourceFile.js";
import { ProjectMinifier } from "./minifyBundle.js";

export async function bundleDependencies(
  dirs: string[],
  generatedPackageName: string,
  generatedFiles: { [fileName: string]: string },
  entry?: string,
) {
  const project = new Project({
    useInMemoryFileSystem: true,
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: true,
      outFile: "dist/bundle/index.d.ts",
    },
  });

  const importSet = await copyFiles(
    project,
    dirs,
    generatedPackageName,
    generatedFiles,
  );
  if (entry) {
    const projectMinifier = new ProjectMinifier(
      project,
      importSet,
      entry,
    );
    projectMinifier.minifyProject();
  }
  return outputModule(project);
}

export function outputModule(project: Project) {
  const modules: string[] = [];

  project.getSourceFiles().forEach(sourceFile => {
    const lines = sourceFile.getText().split("\n");

    while (lines.length > 0 && lines[lines.length - 1] === "") {
      lines.pop();
    }

    // skip empty modules
    if (lines.length === 0) {
      return;
    }

    const module = [];
    module.push(`/** ${sourceFile.getFilePath()} **/`);
    module.push(
      `declare module "${
        withoutTrailingIndex(
          sourceFile.getFilePath().replace(".ts", "").replace("/", ""),
        )
      }" {`,
    );
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.length === 0) {
        continue;
      }
      module.push(`\t${line}`);
    }
    module.push(`}`);
    modules.push(module.join("\n"));
  });

  return modules.join("\n");
}
