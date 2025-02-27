/*
 * Copyright 2025 Palantir Technologies, Inc. All rights reserved.
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

import type { ParameterConfig, WidgetConfig } from "@osdk/widget.api.unstable";
import escodegen from "escodegen";
import type { ObjectExpression } from "estree";
import type { Rollup } from "vite";

const DEFINE_CONFIG_FUNCTION = "defineConfig";

export function extractWidgetConfig(
  moduleId: string,
  ast: Rollup.ProgramNode | null,
): WidgetConfig<ParameterConfig> | undefined {
  // Lightly traverse the AST of the config file to extract out the actual object
  const defaultExport = ast?.body.find(
    (node) => node.type === "ExportDefaultDeclaration",
  );
  if (defaultExport == null) {
    throw new Error(
      "Widget configuration object must be the default export in "
        + moduleId,
    );
  }

  /**
   * export default defineConfig({
   * })
   */
  if (
    defaultExport.declaration.type === "CallExpression"
    && defaultExport.declaration.callee.type === "Identifier"
    && defaultExport.declaration.callee.name === DEFINE_CONFIG_FUNCTION
    && defaultExport.declaration.arguments[0].type === "ObjectExpression"
  ) {
    return parseWidgetConfig(defaultExport.declaration.arguments[0]);
  }

  /**
   * const MyConfig = defineConfig({
   * })
   * export default MyConfig;
   */
  if (defaultExport.declaration.type === "Identifier") {
    const variableName = defaultExport.declaration.name;
    for (const node of ast?.body ?? []) {
      const declaration = node.type === "VariableDeclaration"
        ? node
        : node.type === "ExportNamedDeclaration"
        ? node.declaration
        : undefined;
      if (
        declaration == null
        || declaration.type !== "VariableDeclaration"
      ) {
        continue;
      }
      if (
        declaration.declarations.some(
          (inner) =>
            inner.id.type === "Identifier"
            && inner.id.name === variableName,
        )
      ) {
        const variableDeclarator = declaration.declarations.find(
          (declarator) =>
            declarator.id.type === "Identifier"
            && declarator.id.name === variableName,
        );
        if (
          variableDeclarator?.init?.type === "CallExpression"
          && variableDeclarator.init.callee.type === "Identifier"
          && variableDeclarator.init.callee.name === DEFINE_CONFIG_FUNCTION
          && variableDeclarator.init.arguments[0].type
            === "ObjectExpression"
        ) {
          return parseWidgetConfig(variableDeclarator.init.arguments[0]);
        }
      }
    }
  }
}

function parseWidgetConfig(
  objectExpression: ObjectExpression,
): WidgetConfig<ParameterConfig> {
  // Convert from AST -> JS string
  let widgetConfigString = escodegen.generate(objectExpression);
  // The output JS string is not valid JSON, so we force it into JSON that we can then print out into a JSON file

  // Wrap keys in double quotes
  widgetConfigString = widgetConfigString.replace(/([^\s:]+):/g, "\"$1\":");
  // Convert single quote string values to double quotes
  widgetConfigString = widgetConfigString.replace(/: '(.+)'/g, ": \"$1\"");

  // Convert single quote string values in arrays to double quotes
  widgetConfigString = widgetConfigString.replace(
    /: \['(.+)'\]/g,
    ": [\"$1\"]",
  );

  return JSON.parse(widgetConfigString) as WidgetConfig<ParameterConfig>;
}
