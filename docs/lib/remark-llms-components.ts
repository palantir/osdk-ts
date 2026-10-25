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
  replaceSource,
  type Stringifier,
} from "fumadocs-core/mdx-plugins/stringifier";
import type { Root } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";

type Render = (node: MdxJsxFlowElement, s: Stringifier) => string;

const ALERT_TYPES: Record<string, string> = {
  info: "NOTE",
  warn: "WARNING",
  warning: "WARNING",
  error: "CAUTION",
  success: "TIP",
  idea: "TIP",
};

const renderers: Record<string, Render> = {
  Accordions: inner,
  Cards: inner,
  Steps: inner,
  Step: inner,
  Tabs: inner,
  Accordion: (node, s) =>
    `**${attribute(node, "title")}**\n\n${inner(node, s)}`,
  Tab: (node, s) => `**${attribute(node, "value")}**\n\n${inner(node, s)}`,
  Card: (node, s) => {
    const description = inner(node, s).replace(/\s+/g, " ");
    const link = `- [${attribute(node, "title")}](${attribute(node, "href")})`;
    return description ? `${link}: ${description}` : link;
  },
  Callout: (node, s) => {
    const title = attribute(node, "title");
    const body = title ? `**${title}**\n\n${inner(node, s)}` : inner(node, s);
    const alert = ALERT_TYPES[attribute(node, "type") || "info"] ?? "NOTE";
    return [`[!${alert}]`, ...body.split("\n")]
      .map((line) => (line ? `> ${line}` : ">"))
      .join("\n");
  },
  Files: (node) =>
    ["```text", ...fileTree(node.children, ""), "```"].join("\n"),
};

/**
 * Writes the docs components (callouts, cards, steps, tabs, accordions, and
 * file trees) as plain Markdown in the processed text behind llms.txt and the
 * `.md` pages, so readers of those files don't see JSX.
 */
export function remarkLlmsComponents() {
  return (tree: Root, file: VFile) => {
    visit(tree, "mdxJsxFlowElement", (node: MdxJsxFlowElement) => {
      const render = node.name ? renderers[node.name] : undefined;
      if (render) {
        replaceSource(file, node, (s) => render(node, s));
      }
    });
  };
}

function inner(node: MdxJsxFlowElement, s: Stringifier): string {
  const [first = "", ...rest] = s.inner(node).split("\n");
  const indent = Math.min(
    ...rest.filter((line) => line.trim()).map((line) =>
      line.length - line.trimStart().length
    ),
  );
  return [first, ...rest.map((line) => line.slice(indent))].join("\n").trim();
}

function attribute(node: MdxJsxFlowElement, name: string): string {
  const match = node.attributes.find((attr) =>
    attr.type === "mdxJsxAttribute" && attr.name === name
  );
  return typeof match?.value === "string" ? match.value : "";
}

function fileTree(
  nodes: MdxJsxFlowElement["children"],
  indent: string,
): string[] {
  return nodes.flatMap((node) => {
    if (node.type !== "mdxJsxFlowElement") {
      return [];
    }
    const name = attribute(node, "name");
    return node.name === "Folder"
      ? [`${indent}${name}/`, ...fileTree(node.children, `${indent}  `)]
      : [`${indent}${name}`];
  });
}
