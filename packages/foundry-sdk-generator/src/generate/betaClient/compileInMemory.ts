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

import type { CompilerOptions, Diagnostic } from "typescript";
import {
  createCompilerHost,
  createProgram,
  createSourceFile,
  ModuleKind,
  ScriptTarget,
} from "typescript";

export interface CompilerOutput {
  files: { [filename: string]: string };
  diagnostics: Diagnostic[];
}

export function compileInMemory(
  files: { [fileName: string]: string },
  type: "cjs" | "esm",
): {
  files: {
    [fileName: string]: string;
  };
  diagnostics: readonly Diagnostic[];
} {
  const inMemoryOutputFileSystem: { [fileName: string]: string } = {};
  const compilerOptions: CompilerOptions = {
    module: type === "cjs" ? ModuleKind.CommonJS : ModuleKind.ES2022,
    target: ScriptTarget.ES2020,
    resolvePackageJsonExports: true,
    declaration: true,
    skipLibCheck: true,
  };

  const compilerHost = createCompilerHost(compilerOptions);

  compilerHost.writeFile = (fileName, data) => {
    inMemoryOutputFileSystem[fileName] = data;
  };

  const originalSourceFile = compilerHost.getSourceFile;
  compilerHost.getSourceFile = (fileName, languageVersion) => {
    const sourceText = files[fileName];
    return sourceText !== undefined
      ? createSourceFile(fileName, sourceText, languageVersion)
      : originalSourceFile(fileName, languageVersion);
  };

  const program = createProgram(
    Object.keys(files),
    compilerOptions,
    compilerHost,
  );
  const emitOutput = program.emit();

  return {
    files: inMemoryOutputFileSystem,
    diagnostics: emitOutput.diagnostics,
  };
}
