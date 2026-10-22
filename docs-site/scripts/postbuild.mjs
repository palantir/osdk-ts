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
import {
  access,
  cp,
  mkdir,
  readdir,
  readFile,
  writeFile,
} from "node:fs/promises";
import path from "node:path";

const out = path.resolve(import.meta.dirname, "../out");
const markdownRoot = path.join(out, "llms.mdx");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

let count = 0;
for await (const file of walk(markdownRoot)) {
  if (path.basename(file) !== "content.md") {
    continue;
  }
  const slug = path.relative(markdownRoot, path.dirname(file));
  const target = path.join(out, `${slug || "index"}.md`);
  await mkdir(path.dirname(target), { recursive: true });
  await cp(file, target);
  count++;
}

await writeFile(path.join(out, ".nojekyll"), "");

const basePath = "/osdk-ts";
const broken = [];
for await (const file of walk(out)) {
  if (!file.endsWith(".html")) {
    continue;
  }
  const html = await readFile(file, "utf8");
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    if (/\.mdx?(#|$)/.test(href) && !/^https?:/.test(href)) {
      broken.push([file, href]);
      continue;
    }
    if (!href.startsWith(`${basePath}/`)) {
      continue;
    }
    const target = decodeURI(href.slice(basePath.length).split(/[?#]/)[0]);
    if (!(await exists(target))) {
      broken.push([file, href]);
    }
  }
}

async function exists(target) {
  const candidates = target === "/"
    ? ["index.html"]
    : [target, `${target}.html`, path.join(target, "index.html")];
  for (const candidate of candidates) {
    try {
      await access(path.join(out, candidate));
      return true;
    } catch {}
  }
  return false;
}

if (broken.length > 0) {
  for (const [file, href] of broken) {
    console.error(`broken link in ${path.relative(out, file)}: ${href}`);
  }
  process.exitCode = 1;
}
console.log(`postbuild: wrote ${count} Markdown twins`);
