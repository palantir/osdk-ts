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

import { existsSync } from "node:fs";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import type { CompilerOptions } from "typescript";
import * as ts from "typescript";
import { describe, expect, it } from "vitest";
import { GeneratePackageCommand } from "./GeneratePackageCommand.js";

describe(GeneratePackageCommand, () => {
  // ensure that we do not break backcompat by retaining our scripts export that links to the bundled types and esm output
  it("has a public scripts export", async () => {
    const generatedPath = path.join(
      __dirname,
      "..",
      "generatedNoCheck",
      "@test-app",
      "osdk",
    );
    const packagePath = path.join(generatedPath, "package.json");

    const packageJson = JSON.parse(await fs.readFile(packagePath, "utf-8"));

    const scriptsExport = packageJson["exports"]?.["."]?.["script"];
    expect(scriptsExport).toMatchInlineSnapshot(`
      {
        "default": "./dist/bundle/index.esm.js",
        "types": "./dist/bundle/index.d.ts",
      }
    `);

    const typesPath = path.join(generatedPath, scriptsExport.types);
    const esmPath = path.join(generatedPath, scriptsExport.default);

    expect(existsSync(typesPath), typesPath).toBe(true);
    expect(existsSync(esmPath), esmPath).toBe(true);
  });

  it("has a .d.ts for slate that does not error", () => {
    const slateDtsPath = path.join(
      __dirname,
      "..",
      "generatedNoCheck",
      "@test-app",
      "osdk",
      "dist",
      "bundle",
      "index.d.ts",
    );

    const compilerOptions: CompilerOptions = {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2019,
      noEmit: true,
      skipLibCheck: false,
    };
    const compilerHost = ts.createCompilerHost(compilerOptions);

    const fauxProjectDir = "/not-real";
    const notRealFilePath = path.join(fauxProjectDir, "index.d.ts");

    const ogGetSourceFile = compilerHost.getSourceFile;
    compilerHost.getSourceFile = (
      fileName: string,
      languageVersionOrOptions: ts.ScriptTarget | ts.CreateSourceFileOptions,
      onError?: (message: string) => void,
      shouldCreateNewSourceFile?: boolean,
    ): ts.SourceFile | undefined => {
      if (fileName === notRealFilePath) {
        const realContents = compilerHost.readFile(slateDtsPath)!;

        // We are going to introduce a fake error to ensure that the type checking is working correctly
        // and then we can expect only the fake error to be in the diagnostics
        const contentsWithFakeError = realContents
          + `\ndeclare module "asdf-asdf-asdf-asdf" { import { notARealThing} from "internal/@osdk/api"; }`;

        return ts.createSourceFile(
          notRealFilePath,
          contentsWithFakeError,
          ts.ScriptTarget.ES2019,
        );
      }

      if (fileName.includes("node_modules/typescript/lib")) {
        return ogGetSourceFile(
          fileName,
          languageVersionOrOptions,
          onError,
          shouldCreateNewSourceFile,
        );
      } else {
        return undefined;
      }
    };
    compilerHost.getCurrentDirectory = () => fauxProjectDir;

    const program = ts.createProgram(
      [notRealFilePath],
      compilerOptions,
      compilerHost,
    );

    const { diagnostics, emittedFiles } = program.emit();
    expect(emittedFiles).toBe(undefined);

    const diags = [...diagnostics, ...ts.getPreEmitDiagnostics(program)].map(
      diagnostic => {
        if (diagnostic.file) {
          const { line } = ts.getLineAndCharacterOfPosition(
            diagnostic.file,
            diagnostic.start!,
          );
          const message = ts.flattenDiagnosticMessageText(
            diagnostic.messageText,
            "\n",
          );
          return {
            file: diagnostic.file.fileName,
            line,
            message,
          };
        } else {
          return {
            message: ts.flattenDiagnosticMessageText(
              diagnostic.messageText,
              "\n",
            ),
          };
        }
      },
    );

    expect(diags).toMatchInlineSnapshot(`
      [
        {
          "file": "/not-real/index.d.ts",
          "line": 6858,
          "message": "Module '"internal/@osdk/api"' has no exported member 'notARealThing'.",
        },
      ]
    `);
  });
});
