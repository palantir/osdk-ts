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

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const TEMPLATES = [
  {
    id: "react",
    label: "React",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    addons: [
      { id: "blueprint", label: "BlueprintJS" },
    ],
  },
  {
    id: "expo",
    label: "Expo",
    envPrefix: "EXPO_PUBLIC_",
    buildDirectory: "./dist",
  },
  {
    id: "vue",
    label: "Vue",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
  },
  {
    id: "tutorial-todo-app",
    label: "Tutorial: To do App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
  },
  {
    id: "tutorial-todo-aip-app",
    label: "Tutorial: To do AIP App",
    envPrefix: "VITE_",
    buildDirectory: "./dist",
    hidden: true,
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
  ${
    TEMPLATES.map((template) => {
      const v1Name = findPackageName([
        `@osdk/create-app.template.${template.id}.v1`,
        `@osdk/create-app.template.${template.id}`,
      ]);
      const v2Name = findPackageName([
        `@osdk/create-app.template.${template.id}.v2`,
        `@osdk/create-app.template.${template.id}.beta`,
        `@osdk/create-app.template.${template.id}`,
      ]);

      const styleAddonsCode = generateStyleAddonsCode(template);

      return dedent`
          // ${template.label}
          {
            id: "template-${template.id}",
            label: "${template.label}",
            envPrefix: "${template.envPrefix}",
            buildDirectory: "${template.buildDirectory}",
            hidden: ${template.hidden || false},
            files: {
              ${v1Name ? `"1.x": getPackageFiles(import("${v1Name}")),` : ""}
              ${v2Name ? `"2.x": getPackageFiles(import("${v2Name}")),` : ""}
            },${styleAddonsCode}
          },`;
    }).join("\n")
  }
  ];
  `,
);

/**
 * @param {string[]} names
 * @returns {string | undefined}
 */
function findPackageName(names) {
  return names.find((name) => {
    return fs.existsSync(path.join(packagesDir, `${name.split("/")[1]}`));
  });
}

/**
 * @param {{ id: string, addons?: Array<{ id: string, label: string }> }} template
 * @returns {string}
 */
function generateStyleAddonsCode(template) {
  if (!template.addons || template.addons.length === 0) {
    return "";
  }

  const addonEntries = [];
  for (const addon of template.addons) {
    const addonPackageName = findAddonPackageName(template.id, addon.id);
    if (addonPackageName == null) {
      continue;
    }

    const addonPackageDir = path.join(
      packagesDir,
      addonPackageName.split("/")[1],
    );
    const addonPackageJson = JSON.parse(
      fs.readFileSync(path.join(addonPackageDir, "package.json"), "utf-8"),
    );

    const dependencies = addonPackageJson.dependencies ?? {};
    const deleteFiles = addonPackageJson.addonConfig?.deleteFiles ?? [];

    addonEntries.push(dedent`
      {
            id: "${addon.id}",
            label: "${addon.label}",
            files: getPackageFiles(import("${addonPackageName}")),
            deleteFiles: ${JSON.stringify(deleteFiles)},
            dependencies: ${JSON.stringify(dependencies)},
          }`);
  }

  if (addonEntries.length === 0) {
    return "";
  }

  return `
            styleAddons: [
          ${addonEntries.join(",\n")},
            ],`;
}

/**
 * @param {string} templateId
 * @param {string} addonId
 * @returns {string | undefined}
 */
function findAddonPackageName(templateId, addonId) {
  const name = `@osdk/create-app.addon.${templateId}.${addonId}`;
  const dirName = name.split("/")[1];
  if (fs.existsSync(path.join(packagesDir, dirName))) {
    return name;
  }
  return undefined;
}
