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

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { describe, expect, it } from "vitest";

const PACKAGE_ROOT = process.cwd();
const STYLES_PACKAGE_ROOT = join(PACKAGE_ROOT, "..", "react-components-styles");

const SCOPED_CSS_DIRECTORIES = [
  "src/action-form",
  "src/base-components/combobox",
  "src/base-components/select",
  "src/base-components/switch",
] as const;

const TOKEN_FILES_THAT_MUST_STAY_IN_SYNC = [
  "async-dropdown.css",
  "combobox.css",
  "datetime-picker.css",
  "file-picker.css",
  "form-section.css",
  "form.css",
  "input.css",
  "object-set.css",
  "radio.css",
  "select.css",
  "switch.css",
  "timepicker.css",
  "tooltip.css",
] as const;

const TOKEN_DEFINITION_PATTERN = /(?<![-\w])(--osdk-[A-Za-z0-9_-]+)\s*:/g;
const TOKEN_USAGE_PATTERN = /var\(\s*(--osdk-[A-Za-z0-9_-]+)(\s*,)?/g;

describe("ActionForm token integrity", () => {
  it("uses only defined OSDK tokens in ActionForm and shared form controls", () => {
    const definedTokens = collectDefinedTokens([
      join(PACKAGE_ROOT, "src", "tokens", "base-tokens"),
      join(PACKAGE_ROOT, "src", "tokens", "component-tokens"),
      join(STYLES_PACKAGE_ROOT, "src", "tokens"),
    ]);

    const undefinedUsages = scopedCssFiles()
      .flatMap((filePath) => {
        const contents = readFileSync(filePath, "utf8");
        return [...contents.matchAll(TOKEN_USAGE_PATTERN)]
          .map((match) => match[1])
          .filter((token): token is string => token != null)
          .filter((token) => !definedTokens.has(token))
          .map((token) => `${relative(PACKAGE_ROOT, filePath)}: ${token}`);
      });

    expect(undefinedUsages).toEqual([]);
  });

  it("does not define component tokens or fallback-only defaults in scoped CSS modules", () => {
    const violations = scopedCssFiles()
      .flatMap((filePath) => {
        const contents = readFileSync(filePath, "utf8");
        const relativePath = relative(PACKAGE_ROOT, filePath);
        const localDefinitions = [
          ...contents.matchAll(TOKEN_DEFINITION_PATTERN),
        ]
          .map((match) => `${relativePath}: defines ${match[1]}`);
        const fallbackUsages = [...contents.matchAll(TOKEN_USAGE_PATTERN)]
          .filter((match) => match[2] != null)
          .map((match) => `${relativePath}: fallback for ${match[1]}`);
        return [...localDefinitions, ...fallbackUsages];
      });

    expect(violations).toEqual([]);
  });

  it("keeps ActionForm-related component token files synchronized across token packages", () => {
    const mismatches = TOKEN_FILES_THAT_MUST_STAY_IN_SYNC.flatMap(
      (fileName) => {
        const sourcePath = join(
          PACKAGE_ROOT,
          "src",
          "tokens",
          "component-tokens",
          fileName,
        );
        const stylesPath = join(STYLES_PACKAGE_ROOT, "src", "tokens", fileName);
        return compareTokenDefinitions(sourcePath, stylesPath);
      },
    );

    expect(mismatches).toEqual([]);
  });

  it("uses explicit form padding tokens instead of Storybook internals", () => {
    const formTokens = readFileSync(
      join(PACKAGE_ROOT, "src", "tokens", "component-tokens", "form.css"),
      "utf8",
    );
    const baseFormStyles = readFileSync(
      join(PACKAGE_ROOT, "src", "action-form", "BaseForm.module.css"),
      "utf8",
    );
    const formHeaderStyles = readFileSync(
      join(PACKAGE_ROOT, "src", "action-form", "FormHeader.module.css"),
      "utf8",
    );
    const storybookStyles = readFileSync(
      join(
        PACKAGE_ROOT,
        "..",
        "react-components-storybook",
        "src",
        "styles",
        "storybook.css",
      ),
      "utf8",
    );

    expect(formTokens).not.toContain("--osdk-form-content-padding");
    expect(formTokens).toContain("--osdk-form-padding-inline: 0");
    expect(baseFormStyles).toContain("gap: var(--osdk-form-region-gap)");
    expect(baseFormStyles).toContain(
      "padding-inline: var(--osdk-form-padding-inline)",
    );
    expect(formHeaderStyles).toContain(
      "padding-inline: var(--osdk-form-padding-inline)",
    );
    expect(storybookStyles).not.toContain("[class*=\"osdkForm");
  });

  it("caps select-like popups through component tokens only", () => {
    const popupStyles = [
      [
        "src/base-components/select/Select.module.css",
        "--osdk-select-popup-max-height",
      ],
      [
        "src/base-components/combobox/Combobox.module.css",
        "--osdk-combobox-popup-max-height",
      ],
    ] as const;

    const violations = popupStyles.flatMap(([relativePath, tokenName]) => {
      const contents = readFileSync(join(PACKAGE_ROOT, relativePath), "utf8");
      const maxHeightDeclarations = contents.match(/max-height:/g) ?? [];
      return maxHeightDeclarations.length === 1
          && contents.includes(`max-height: var(${tokenName})`)
        ? []
        : [`${relativePath} should set max-height only via ${tokenName}`];
    });

    expect(violations).toEqual([]);
  });
});

function scopedCssFiles(): readonly string[] {
  return SCOPED_CSS_DIRECTORIES.flatMap((directory) =>
    findCssFiles(join(PACKAGE_ROOT, directory))
  );
}

function findCssFiles(directory: string): readonly string[] {
  return readdirSync(directory)
    .flatMap((entry) => {
      const entryPath = join(directory, entry);
      if (statSync(entryPath).isDirectory()) {
        return findCssFiles(entryPath);
      }
      return entryPath.endsWith(".css") ? [entryPath] : [];
    });
}

function collectDefinedTokens(
  tokenDirectories: readonly string[],
): Set<string> {
  const definedTokens = new Set<string>();
  for (const directory of tokenDirectories) {
    for (const filePath of findCssFiles(directory)) {
      const contents = readFileSync(filePath, "utf8");
      for (const match of contents.matchAll(TOKEN_DEFINITION_PATTERN)) {
        const token = match[1];
        if (token != null) {
          definedTokens.add(token);
        }
      }
    }
  }
  return definedTokens;
}

function compareTokenDefinitions(
  sourcePath: string,
  stylesPath: string,
): readonly string[] {
  const sourceDefinitions = tokenDefinitionsByName(sourcePath);
  const stylesDefinitions = tokenDefinitionsByName(stylesPath);
  const allTokenNames = new Set([
    ...sourceDefinitions.keys(),
    ...stylesDefinitions.keys(),
  ]);

  return [...allTokenNames]
    .filter((tokenName) =>
      sourceDefinitions.get(tokenName) !== stylesDefinitions.get(tokenName)
    )
    .map((tokenName) =>
      `${relative(PACKAGE_ROOT, sourcePath)} differs for ${tokenName}`
    );
}

function tokenDefinitionsByName(filePath: string): ReadonlyMap<string, string> {
  const contents = readFileSync(filePath, "utf8");
  const definitions = new Map<string, string>();
  for (const match of contents.matchAll(TOKEN_DEFINITION_PATTERN)) {
    const tokenName = match[1];
    if (tokenName != null) {
      definitions.set(tokenName, tokenDefinitionValue(contents, match.index));
    }
  }
  return definitions;
}

function tokenDefinitionValue(
  contents: string,
  tokenStartIndex: number,
): string {
  const valueStartIndex = contents.indexOf(":", tokenStartIndex) + 1;
  const valueEndIndex = contents.indexOf(";", valueStartIndex);
  return contents.slice(valueStartIndex, valueEndIndex).replace(/\s+/g, " ")
    .trim();
}
