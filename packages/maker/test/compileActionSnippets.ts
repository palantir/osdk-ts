/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
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

import { resolve, sep } from "node:path";

import * as ts from "typescript";

export function createSnippetProgram(
  files: ReadonlyMap<string, string>,
  rootNames: string[],
  options: ts.CompilerOptions,
): ts.Program {
  const host = ts.createCompilerHost(options);
  const readFile = host.readFile;
  const fileExists = host.fileExists;
  const directoryExists = host.directoryExists;
  const getSourceFile = host.getSourceFile;
  host.readFile = (filename) =>
    files.get(resolve(filename)) ?? readFile(filename);
  host.fileExists = (filename) =>
    files.has(resolve(filename)) || fileExists(filename);
  host.directoryExists = (directory) => {
    const prefix = `${resolve(directory)}${sep}`;
    return (
      Array.from(files.keys()).some((filename) =>
        filename.startsWith(prefix),
      ) ||
      (directoryExists?.(directory) ?? false)
    );
  };
  host.getSourceFile = (
    filename,
    languageVersion,
    onError,
    shouldCreateNewSourceFile,
  ) => {
    const text = files.get(resolve(filename));
    return text === undefined
      ? getSourceFile(
          filename,
          languageVersion,
          onError,
          shouldCreateNewSourceFile,
        )
      : ts.createSourceFile(filename, text, languageVersion, true);
  };
  return ts.createProgram({ rootNames, options, host });
}

export function describeSnippetDiagnostics(
  diagnostics: readonly ts.Diagnostic[],
): string[] {
  return diagnostics.map((diagnostic) => {
    const message = ts.flattenDiagnosticMessageText(
      diagnostic.messageText,
      "\n",
    );
    if (diagnostic.file === undefined || diagnostic.start === undefined) {
      return `TS${diagnostic.code}: ${message}`;
    }
    const location = diagnostic.file.getLineAndCharacterOfPosition(
      diagnostic.start,
    );
    return `${diagnostic.file.fileName}:${location.line + 1}:${location.character + 1} TS${diagnostic.code}: ${message}`;
  });
}
