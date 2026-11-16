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
import type { Blockquote, Root } from "mdast";
import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

const ALERT_TYPES = {
  NOTE: "info",
  TIP: "success",
  IMPORTANT: "info",
  WARNING: "warn",
  CAUTION: "error",
} as const;

const ALERT_PATTERN = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/;

/**
 * Renders GitHub alert blockquotes (`> [!NOTE]`) as callouts, so the same
 * Markdown reads correctly on GitHub, on npm, and on this site.
 */
export function remarkGithubAlerts() {
  return (tree: Root) => {
    visit(tree, "blockquote", (node: Blockquote, index, parent) => {
      const first = node.children[0];
      const text = first?.type === "paragraph" ? first.children[0] : undefined;
      if (!parent || index === undefined || text?.type !== "text") {
        return;
      }
      const match = ALERT_PATTERN.exec(text.value);
      if (!match) {
        return;
      }

      text.value = text.value.slice(match[0].length);
      if (text.value === "" && first.type === "paragraph") {
        first.children.shift();
        if (first.children[0]?.type === "break") {
          first.children.shift();
        }
        if (first.children.length === 0) {
          node.children.shift();
        }
      }

      const callout: MdxJsxFlowElement = {
        type: "mdxJsxFlowElement",
        name: "Callout",
        attributes: [{
          type: "mdxJsxAttribute",
          name: "type",
          value: ALERT_TYPES[match[1] as keyof typeof ALERT_TYPES],
        }],
        children: node.children,
      };
      parent.children[index] = callout;
    });
  };
}
