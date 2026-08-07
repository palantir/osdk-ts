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

// Renders the sticky PR comment for a Chromatic run from the JSON that the
// Chromatic CLI writes with --output-file.
//
//   node chromatic-comment.mjs <output-file> <marker>
//
// The shape of that JSON has moved around between CLI majors (some fields live
// at the top level, some under `build`), so every read goes through pick().

import { readFileSync } from "node:fs";

const [outputFile, marker] = process.argv.slice(2);

if (outputFile == null || marker == null) {
  console.error("usage: chromatic-comment.mjs <output-file> <marker>");
  process.exit(1);
}

const result = JSON.parse(readFileSync(outputFile, "utf8"));
const build = result.build ?? {};

/** Reads the first key that is present on either the build or the root object. */
function pick(...keys) {
  for (const key of keys) {
    if (build[key] != null) return build[key];
    if (result[key] != null) return result[key];
  }
  return undefined;
}

const buildUrl = pick("webUrl", "buildUrl", "url");
const storybookUrl = pick("storybookUrl", "storybookUrlOverride");
const changeCount = pick("changeCount");
const errorCount = pick("errorCount");
const componentCount = pick("componentCount");
const specCount = pick("specCount");
const testCount = pick("actualTestCount", "testCount");
const inherited = pick("inheritedCaptureCount") ?? 0;

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

let status;
if (changeCount == null && errorCount == null) {
  // Chromatic wrote an output file without any counts in it, so we cannot
  // claim the run was clean — send the reader to the build instead.
  status = result.code === 0
    ? "Chromatic finished. See the build for details."
    : `❌ Chromatic exited with code ${result.code}. See the build for details.`;
} else if (errorCount > 0) {
  status = `❌ ${plural(errorCount, "story", "stories")} failed to render.`;
} else if (changeCount > 0) {
  status = `👀 ${plural(changeCount, "visual change")} to review.`;
} else {
  status = "✅ No visual changes.";
}

const lines = [marker, "", status, ""];

const links = [];
if (buildUrl != null) links.push(`[Review the build](${buildUrl})`);
if (storybookUrl != null) {
  links.push(`[Browse this Storybook](${storybookUrl})`);
}
if (links.length > 0) lines.push(links.join(" · "), "");

const facts = [];
if (componentCount != null && specCount != null) {
  facts.push(
    `${plural(componentCount, "component")}, ${
      plural(specCount, "story", "stories")
    }`,
  );
}
if (testCount != null) {
  // TurboSnap's whole point: snapshots taken vs. inherited from the baseline.
  facts.push(
    inherited > 0
      ? `${
        plural(testCount, "snapshot")
      } taken, ${inherited} inherited via TurboSnap`
      : `${plural(testCount, "snapshot")} taken`,
  );
}
if (facts.length > 0) lines.push(`<sub>${facts.join(" — ")}</sub>`);

console.log(lines.join("\n"));
