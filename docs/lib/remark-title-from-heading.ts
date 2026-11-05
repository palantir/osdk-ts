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

import { replaceSource } from "fumadocs-core/mdx-plugins/stringifier";
import type { Heading, Paragraph, Root, RootContent } from "mdast";
import { toString } from "mdast-util-to-string";
import type { VFile } from "vfile";

interface Frontmatter {
  title?: string;
  description?: string;
}

/**
 * Package READMEs and component docs are plain Markdown that must stay readable
 * on GitHub, npm, and in Storybook, so they carry their title as an H1 instead of
 * frontmatter. Lift that H1 (and the lead paragraph) into frontmatter so the
 * page header, sidebar, search, and llms.txt all use it without duplicating it.
 */
export function remarkTitleFromHeading() {
  return (tree: Root, file: VFile) => {
    const frontmatter = ((file.data as { frontmatter?: Frontmatter })
      .frontmatter ??= {});
    const index = tree.children.findIndex(isTitleHeading);
    if (index === -1) {
      return;
    }

    frontmatter.title ??= toString(tree.children[index]);
    const next = tree.children[index + 1];
    const removeCount =
      next && isLeadParagraph(next) && !frontmatter.description
        ? 2
        : 1;
    if (removeCount === 2) {
      frontmatter.description = toString(next).replace(/\s+/g, " ").trim();
    }
    for (const node of tree.children.splice(index, removeCount)) {
      replaceSource(file, node, "");
    }
  };
}

function isTitleHeading(node: RootContent): node is Heading {
  return node.type === "heading" && node.depth === 1;
}

function isLeadParagraph(node: RootContent): node is Paragraph {
  return node.type === "paragraph"
    && node.children.every((child) =>
      child.type === "text" || child.type === "inlineCode"
      || child.type === "emphasis" || child.type === "strong"
    );
}
