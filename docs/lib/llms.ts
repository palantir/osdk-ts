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
import type { Node, Root } from "fumadocs-core/page-tree";
import { site, siteUrl } from "./site";
import { docsLlms, markdownTwinUrl, source } from "./source";

export function renderLlmsIndex(): string {
  const tree = source.getPageTree();
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Every link below points to the Markdown version of a page. Append `.md` to any docs URL to get the same. The complete documentation in one file is at "
    + `[llms-full.txt](${siteUrl}/llms-full.txt).`,
  ];
  renderChildren(tree, lines, 2);
  return lines.join("\n") + "\n";
}

export async function renderLlmsFull(): Promise<string> {
  return [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `This file contains every page of the documentation as Markdown. An index of the pages is at [llms.txt](${siteUrl}/llms.txt).`,
    "",
    await docsLlms.full(),
  ].join("\n");
}

function renderChildren(
  parent: Root | Extract<Node, { type: "folder" }>,
  lines: string[],
  depth: number,
) {
  const children = "index" in parent && parent.index
    ? [parent.index, ...parent.children]
    : parent.children;
  for (const node of children) {
    renderNode(node, lines, depth);
  }
}

function renderNode(node: Node, lines: string[], depth: number) {
  if (node.type === "separator") {
    pushHeading(lines, depth, String(node.name ?? ""));
    return;
  }
  if (node.type === "folder") {
    pushHeading(lines, depth, String(node.name));
    renderChildren(node, lines, depth + 1);
    return;
  }
  const page = source.getNodePage(node);
  if (!page) {
    return;
  }
  const description = page.data.description ? `: ${page.data.description}` : "";
  lines.push(`- [${page.data.title}](${markdownTwinUrl(page)})${description}`);
}

function pushHeading(lines: string[], depth: number, name: string) {
  if (lines.at(-1) !== "") {
    lines.push("");
  }
  lines.push(`${"#".repeat(depth)} ${name}`, "");
}
