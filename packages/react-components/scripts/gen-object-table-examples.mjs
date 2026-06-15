#!/usr/bin/env node
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

/* eslint-disable no-console */

/*
 * Composes docs/ObjectTableExamples.md from the per-feature example chunks in
 * docs/object-table/examples/. Each chunk (### heading + prose + code block) is
 * the single source of truth, reused by ObjectTable.examples.mdx in Storybook.
 *
 *   node scripts/gen-object-table-examples.mjs           # write the .md
 *   node scripts/gen-object-table-examples.mjs --check    # fail if out of date
 */

import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const packageDir = resolve(scriptDir, "..");
const repoRoot = resolve(packageDir, "..", "..");
const examplesDir = join(packageDir, "docs", "object-table", "examples");
const outFile = join(packageDir, "docs", "ObjectTableExamples.md");

// Ordered groups -> chunk file names (without `.md`). The order here is the
// order they appear in the generated page and in ObjectTable.examples.mdx.
const GROUPS = [
  {
    title: "Data sources",
    files: ["basic-table", "from-object-set", "interface-types"],
  },
  {
    title: "Columns",
    files: [
      "column-pinning",
      "derived-property-columns",
      "function-backed-columns",
      "custom-column-type",
      "custom-cell-and-header-renderers",
    ],
  },
  {
    title: "Sorting",
    files: ["default-sorting", "controlled-sorting"],
  },
  {
    title: "Selection & focus",
    files: [
      "single-selection",
      "multiple-selection",
      "controlled-selection",
      "focused-row",
    ],
  },
  {
    title: "Editing",
    files: [
      "editable-table",
      "edit-validation",
      "submit-edits",
      "per-row-editable",
    ],
  },
  {
    title: "Interactions & events",
    files: ["cell-context-menu", "event-listeners"],
  },
  {
    title: "Display & states",
    files: [
      "custom-column-widths",
      "custom-row-height",
      "custom-empty-state",
      "row-attributes",
      "disable-header-menu",
    ],
  },
  {
    title: "Advanced",
    files: [
      "marking-columns",
      "column-config-dialog",
      "exporting-data",
      "stream-updates",
    ],
  },
];

// MDX-safe note (Docusaurus renders this file): no HTML comments.
const HEADER = `> **Generated file** — do not edit by hand. Edit the chunks in
> \`docs/object-table/examples/\` and run
> \`pnpm --filter @osdk/react-components gen-examples\`.`;

const INTRO =
  `A catalog of ObjectTable features. Each example is a self-contained chunk in
\`docs/object-table/examples/\` and is also rendered with a live demo in the
Storybook **Components/ObjectTable/Examples** page.

> Examples use \`@my/osdk\` as a placeholder for your generated SDK package.`;

function buildMarkdown() {
  const sections = GROUPS.map(({ title, files }) => {
    const chunks = files.map((name) => {
      const chunk = readFileSync(join(examplesDir, `${name}.md`), "utf8")
        .trim();
      return chunk;
    });
    return `## ${title}\n\n${chunks.join("\n\n")}`;
  });

  return `# ObjectTable examples\n\n${HEADER}\n\n${INTRO}\n\n${
    sections.join("\n\n")
  }\n`;
}

function format(markdown) {
  // Run the composed markdown through dprint so column alignment / spacing match
  // the rest of the repo and never fight with the pre-commit `dprint check`.
  // Pass a bare filename (not a path) so dprint formats stdin as markdown
  // without canonicalizing a file that may not exist yet.
  return execFileSync("npx", [
    "dprint",
    "fmt",
    "--stdin",
    "ObjectTableExamples.md",
  ], {
    input: markdown,
    encoding: "utf8",
    cwd: repoRoot,
  });
}

const formatted = format(buildMarkdown());
const isCheck = process.argv.includes("--check");

if (isCheck) {
  let current = "";
  try {
    current = readFileSync(outFile, "utf8");
  } catch {
    // missing file -> treated as drift below
  }
  if (current !== formatted) {
    console.error(
      "docs/ObjectTableExamples.md is out of date.\n"
        + "Run `pnpm --filter @osdk/react-components gen-examples` and commit the result.",
    );
    process.exit(1);
  }
  console.log("docs/ObjectTableExamples.md is up to date.");
} else {
  writeFileSync(outFile, formatted);
  console.log(`Wrote ${outFile}`);
}
