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

import * as ts from "typescript";

export function compileThis(
  files: Record<string, string>,
  basePath: string,
): readonly ts.Diagnostic[] {
  const compilerOptions: ts.CompilerOptions = {
    noEmit: true,
    target: ts.ScriptTarget.ES2020,
  };

  const host = ts.createCompilerHost(compilerOptions);
  const originalReadFile = host.readFile;
  host.readFile = (filename) => {
    if (filename.startsWith(basePath)) {
      return files[filename];
    } else {
      return originalReadFile(filename);
    }
  };
  host.writeFile = () => {
    throw new Error("File writes not allowed");
  };

  const program = ts.createProgram({
    options: compilerOptions,
    host,
    rootNames: ["/foo/index.ts"],
  });

  return ts.getPreEmitDiagnostics(program);
}
