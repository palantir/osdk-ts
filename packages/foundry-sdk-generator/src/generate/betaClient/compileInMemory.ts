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

import { basename } from "path";
import type { CompilerOptions, Diagnostic } from "typescript";
import {
  createCompilerHost,
  createProgram,
  createSourceFile,
  ModuleKind,
  ScriptTarget,
} from "typescript";
import { libFiles } from "./libFiles";

export interface CompilerOutput {
  files: { [filename: string]: string };
  diagnostics: Diagnostic[];
}

export function compileInMemory(files: { [fileName: string]: string }) {
  const inMemoryOutputFileSystem: { [fileName: string]: string } = {};
  const compilerOptions: CompilerOptions = {
    module: ModuleKind.CommonJS,
    target: ScriptTarget.ES2019,
    declaration: true,
    skipLibCheck: true,
  };

  const compilerHost = createCompilerHost(compilerOptions);

  compilerHost.writeFile = (fileName, data) => {
    inMemoryOutputFileSystem[fileName] = data;
  };

  const originalReadFile = compilerHost.readFile;

  const libfileMap = Object.fromEntries(
    libFiles.map(file => [file.fileName, file.text]),
  );
  compilerHost.readFile = fileName => {
    const baseName = basename(fileName);
    if (libfileMap[baseName]) {
      return libfileMap[baseName];
    }
    return originalReadFile(fileName);
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
