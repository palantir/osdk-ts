/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

import dedent from "dedent";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const TEMPLATES = [
  {
    id: "react",
    label: "OSDK React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    supportsOsdk: true,
  },
  {
    id: "minimal-react",
    label: "Minimal React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    supportsOsdk: false,
    hidden: true,
    // minimal-react template is now replaced by the react template rendered
    // without OSDK. We continue to support it as a hidden template for
    // compatibility with existing CLI snippets.
    aliasTemplateId: "react",
  },
];

const packagesDir = path.join(__dirname, "../");

fs.mkdirSync(path.join(__dirname, "./src/generatedNoCheck"), {
  recursive: true,
});

fs.writeFileSync(
  path.join(__dirname, "./src/generatedNoCheck/templates.ts"),
  dedent`
  // THIS FILE IS GENERATED. DO NOT MODIFY.
  // You probably want to modify ../../../codegen.mjs instead.
  import type { Template } from "../templates.js";
  import { getPackageFiles } from "../getPackageFiles.js";

  export const TEMPLATES: readonly Template[] = [
  ${TEMPLATES.map((template) => {
    const packageId = template.aliasTemplateId ?? template.id;
    const v1Name = findPackageName([
      `@osdk/create-widget.template.${packageId}.v1`,
      `@osdk/create-widget.template.${packageId}`,
    ]);
    const v2Name = findPackageName([
      `@osdk/create-widget.template.${packageId}.v2`,
      `@osdk/create-widget.template.${packageId}.beta`,
      `@osdk/create-widget.template.${packageId}`,
    ]);
    return dedent`
          // ${template.label}
          {
            id: "template-widget-${template.id}",
            label: "${template.label}",
            envPrefix: "${template.envPrefix}",
            buildDirectory: "${template.buildDirectory}",
            supportsOsdk: ${template.supportsOsdk},
            hidden: ${template.hidden ?? false},
            files: {
              ${v1Name ? `"1.x": getPackageFiles(import("${v1Name}")),` : ""}
              ${v2Name ? `"2.x": getPackageFiles(import("${v2Name}")),` : ""}
            },
          },`;
  }).join("\n")}
  ];
  `,
);

/**
 * @param {string[]} names
 * @returns
 */
function findPackageName(names) {
  return names.find((name) => {
    return fs.existsSync(path.join(packagesDir, `${name.split("/")[1]}`));
  });
}
