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
  cp,
  mkdir,
  readdir,
  readFile,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { site } from "../lib/site.ts";

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

const redirects = (await import("../redirects.mjs")).default;
for (const [from, to] of Object.entries(redirects)) {
  const href = `${site.basePath}${to}`;
  for (const target of [`${from}.html`, path.join(from, "index.html")]) {
    await mkdir(path.dirname(path.join(out, target)), { recursive: true });
    await writeFile(
      path.join(out, target),
      `<!doctype html><meta charset="utf-8"><title>Redirecting…</title><link rel="canonical" href="${href}"><meta http-equiv="refresh" content="0; url=${href}"><a href="${href}">${href}</a>\n`,
    );
  }
}

const broken = [];
for await (const file of walk(out)) {
  if (file.endsWith(".md") && !file.startsWith(markdownRoot)) {
    const markdown = await readFile(file, "utf8");
    for (
      const [, href] of markdown.matchAll(
        /\]\((\.{0,2}\/(?:[^()\s]|\([^()\s]*\))*)\)/g,
      )
    ) {
      broken.push([file, href]);
    }
    continue;
  }
  if (!file.endsWith(".html")) {
    continue;
  }
  const html = await readFile(file, "utf8");
  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    if (/\.mdx?(#|$)/.test(href) && !/^https?:/.test(href)) {
      broken.push([file, href]);
      continue;
    }
    if (!href.startsWith(`${site.basePath}/`)) {
      continue;
    }
    const target = decodeURI(href.slice(site.basePath.length).split(/[?#]/)[0]);
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
      if ((await stat(path.join(out, candidate))).isFile()) {
        return true;
      }
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
console.log(
  `postbuild: wrote ${count} Markdown twins and ${
    Object.keys(redirects).length
  } redirects`,
);
