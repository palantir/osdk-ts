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

import type { Directory, Project, SourceFile } from "ts-morph";
import { VariableDeclarationKind } from "ts-morph";
import type { Component } from "../spec";
import type { GenerateOptions } from "./GenerateOptions";
import { getJsDocs } from "./getJsDocs";
import { generateType, isOptional } from "./types";

export function generateComponents(
  components: Component[],
  outputDir: string,
  project: Project,
  options: GenerateOptions,
) {
  const directory = project.createDirectory(`${outputDir}/components`);
  components.forEach(component =>
    generateComponent(component, directory, options)
  );
}

export function generateComponent(
  component: Component,
  directory: Directory,
  options: GenerateOptions,
) {
  const sourceFile = directory.createSourceFile(`${component.name}.ts`);
  const referenceSet = new Set<string>();

  switch (component.type.type) {
    case "union":
      generateUnionComponent(component, sourceFile, referenceSet, options);
      break;
    case "object":
      sourceFile.addInterface({
        isExported: true,
        name: component.name,
        docs: getJsDocs(component.documentation),
        properties: Object.entries(component.type.object.properties).map(
          ([propertyName, propertySpec]) => {
            return {
              name: propertyName,
              hasQuestionToken: isOptional(propertySpec.type),
              docs: getJsDocs(propertySpec.documentation),
              type: generateType(propertySpec.type, referenceSet),
            };
          },
        ),
      });
      break;
    case "enum":
    case "builtin":
    case "reference":
    case "list":
    case "optional":
    case "binary":
    case "map":
    case "external":
    case "asyncOperation":
      sourceFile.addTypeAlias({
        isExported: true,
        docs: getJsDocs(component.documentation),
        name: component.name,
        type: generateType(component.type, referenceSet),
      });
  }

  sourceFile.addImportDeclarations(
    Array.from(referenceSet).map(reference => {
      return {
        moduleSpecifier: `./${reference}`,
        namedImports: [reference],
      };
    }),
  );
}

function generateUnionComponent(
  component: Component,
  sourceFile: SourceFile,
  referenceSet: Set<string>,
  options: GenerateOptions,
) {
  if (component.type.type !== "union") {
    throw new Error("Expected union type");
  }

  const subTypeAliases: { [key: string]: string } = {};
  const unionType = component.type.union;
  const exportedFunctions = new Set<string>();
  Object.entries(unionType.subTypes).forEach(([subtypeKey, subtypeValue]) => {
    const name = `${component.name}_${upperCaseFirstLetter(subtypeKey)}`;
    sourceFile.addInterface({
      isExported: true,
      name,
      extends: [
        generateType(
          { type: "reference", reference: subtypeValue },
          referenceSet,
        ),
      ],
      properties: [
        {
          name: "type",
          type: `"${subtypeKey}"`,
        },
      ],
    });

    if (options.generateVisitors) {
      exportedFunctions.add(`is${upperCaseFirstLetter(subtypeKey)}`);
      sourceFile.addFunction({
        isExported: false,
        name: `is${upperCaseFirstLetter(subtypeKey)}`,
        parameters: [{ name: "obj", type: component.name }],
        returnType: `obj is ${name}`,
        statements: `return (obj.type === "${subtypeKey}");`,
      });
    }

    subTypeAliases[subtypeKey] = name;
  });

  if (options.generateVisitors) {
    sourceFile.addInterface({
      isExported: true,
      name: `${component.name}Visitor<T>`,
      properties: [
        ...Object.entries(unionType.subTypes).map(
          ([subTypeKey, subTypeValue]) => {
            return {
              name: subTypeKey,
              type: `(obj: ${
                generateType(
                  { type: "reference", reference: subTypeValue },
                  referenceSet,
                )
              }) => T`,
            };
          },
        ),
        {
          name: "unknown",
          type: `(obj: ${component.name}) => T`,
        },
      ],
    });

    exportedFunctions.add(`visit`);
    sourceFile.addFunction({
      isExported: false,
      name: "visit",
      typeParameters: [{ name: "T" }],
      parameters: [
        { name: "obj", type: component.name },
        { name: "visitor", type: `${component.name}Visitor<T>` },
      ],
      returnType: "T",
      statements: [
        ...Object.entries(unionType.subTypes).map(([subtypeKey]) => {
          return `if (is${
            upperCaseFirstLetter(
              subtypeKey,
            )
          }(obj)) {\n    return visitor.${subtypeKey}(obj);\n}`;
        }),
        "return visitor.unknown(obj);",
      ],
    });

    sourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: component.name,
          initializer: writer => {
            writer.block(() => {
              exportedFunctions.forEach(exportedFunction => {
                writer.writeLine(`${exportedFunction}: ${exportedFunction},`);
              });
            });
          },
        },
      ],
    });
  }

  sourceFile.addTypeAlias({
    isExported: true,
    name: component.name,
    type: Object.values(subTypeAliases).join(" | "),
  });

  Object.values(subTypeAliases).forEach(subtype => {
    referenceSet.delete(subtype);
  });
}

function upperCaseFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
