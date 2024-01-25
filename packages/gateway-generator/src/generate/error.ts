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

import type { Directory, Project } from "ts-morph";
import { CodeBlockWriter } from "ts-morph";
import type { Error, ParameterValue } from "../spec/index.js";
import { generateDocumentation } from "./common.js";
import { getDocs, getJsDocs } from "./getJsDocs.js";
import { generateType } from "./types.js";

export function generateErrors(
  errors: Error[],
  outputDir: string,
  project: Project,
) {
  const directory = project.createDirectory(`${outputDir}/errors`);
  errors.forEach(error => generateError(error, directory));
}

export function generateError(error: Error, directory: Directory) {
  const sourceFile = directory.createSourceFile(`${error.name}.ts`);

  const referenceSet = new Set<string>();
  const parameterCode = generateParameterMap(error.parameters, referenceSet);

  sourceFile.addInterface({
    isExported: true,
    docs: getJsDocs(error.documentation),
    name: error.name,
    properties: [
      {
        name: "errorCode",
        type: `"${error.errorType}"`,
      },
      {
        name: "errorName",
        type: `"${error.name}"`,
      },
      {
        name: "errorInstanceId",
        type: "string",
      },
      {
        name: "parameters",
        type: parameterCode,
      },
    ],
  });

  sourceFile.addImportDeclarations(
    Array.from(referenceSet).map(reference => {
      return {
        moduleSpecifier: `../components/${reference}.js`,
        namedImports: [reference],
      };
    }),
  );
}

function generateParameterMap(
  parameters: Record<string, ParameterValue>,
  referenceSet: Set<string>,
): string {
  const writer = new CodeBlockWriter();

  writer.block(() => {
    Object.entries(parameters).forEach(([name, parameter], index) => {
      const { type, documentation } = parameter;
      const typeCode = generateType(type, referenceSet);
      const documentationCode = generateDocumentation(documentation);

      if (documentationCode !== "") {
        writer.write(`//`);
        writer.write(getDocs(documentation));
        writer.newLine();
      }

      writer.write(`${name}: ${typeCode};`);

      if (index < Object.entries(parameters).length - 1) {
        writer.newLine();
      }
    });
  });

  return writer.toString();
}
