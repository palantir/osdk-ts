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

// Renders the size-limit comparison table for a PR.
//
//   node bundle-size-comment.mjs <current.json> <base.json>
//
// Both inputs are `size-limit --json` output. Either may be missing or garbage
// (the measurement steps tolerate failure), so treat an unreadable file as an
// empty result set rather than crashing the job.

import { readFileSync } from "node:fs";

const [currentPath, basePath] = process.argv.slice(2);

function readSizes(path) {
  try {
    const parsed = JSON.parse(readFileSync(path, "utf8"));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 B";
  const units = ["B", "kB", "MB"];
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );
  return (bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 2) + " " + units[i];
}

function formatChange(current, base) {
  if (base === 0) return current === 0 ? "0%" : "new";
  const pct = ((current - base) / base) * 100;
  if (Math.abs(pct) < 0.01) return "0%";
  return `${pct > 0 ? "+" : ""}${pct.toFixed(2)}%${pct > 0 ? " 🔺" : " 🔽"}`;
}

const current = readSizes(currentPath);
const base = readSizes(basePath);

const currentMap = Object.fromEntries(current.map((e) => [e.name, e.size]));
const baseMap = Object.fromEntries(base.map((e) => [e.name, e.size]));
const names = [
  ...new Set([...base.map((e) => e.name), ...current.map((e) => e.name)]),
];

const lines = ["## size-limit report 📦", ""];

if (names.length === 0) {
  lines.push(
    "size-limit produced no measurements for either side of this comparison.",
  );
} else {
  lines.push("| Path | Size | Change |", "|------|------|--------|");
  for (const name of names) {
    const cur = currentMap[name] ?? 0;
    const bas = baseMap[name] ?? 0;
    lines.push(
      `| \`${name}\` | ${formatBytes(cur)} | ${formatChange(cur, bas)} |`,
    );
  }
}

console.log(lines.join("\n"));
