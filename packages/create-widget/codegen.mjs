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

import dedent from "dedent";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const THIS_FILE_DIR = path.dirname(fileURLToPath(import.meta.url));

export const TEMPLATES = [
  {
    id: "react",
    label: "React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
  },
];

const packagesDir = path.join(THIS_FILE_DIR, "../");

fs.mkdirSync(path.join(THIS_FILE_DIR, "./src/generatedNoCheck"), {
  recursive: true,
});

fs.writeFileSync(
  path.join(THIS_FILE_DIR, "./src/generatedNoCheck/templates.ts"),
  dedent`
  // THIS FILE IS GENERATED. DO NOT MODIFY.
  // You probably want to modify ../../../codegen.mjs instead.
  import type { Template } from "../templates.js";
  import { getPackageFiles } from "../getPackageFiles.js";

  export const TEMPLATES: readonly Template[] = [
  ${
    TEMPLATES.map((template) => {
      const v1Name = findPackageName([
        `@osdk/create-widget.template.${template.id}.v1`,
        `@osdk/create-widget.template.${template.id}`,
      ]);
      const v2Name = findPackageName([
        `@osdk/create-widget.template.${template.id}.v2`,
        `@osdk/create-widget.template.${template.id}.beta`,
        `@osdk/create-widget.template.${template.id}`,
      ]);
      return dedent`
          // ${template.label}
          {
            id: "template-widget-${template.id}",
            label: "${template.label}",
            envPrefix: "${template.envPrefix}",
            buildDirectory: "${template.buildDirectory}",
            files: {
              ${v1Name ? `"1.x": getPackageFiles(import("${v1Name}")),` : ""}
              ${v2Name ? `"2.x": getPackageFiles(import("${v2Name}")),` : ""}
            },
          },`;
    }).join("\n")
  }
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
