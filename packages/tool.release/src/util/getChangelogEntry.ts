/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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

import type { Root } from "mdast";
import * as mdastToString from "mdast-util-to-string";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import unified from "unified";
import { CONTINUE, EXIT, visit } from "unist-util-visit";

const BumpLevels = {
  dep: 0,
  patch: 1,
  minor: 2,
  major: 3,
} as const;

export function getChangelogEntry(changelog: string, version: string) {
  const ast = unified().use(remarkParse).parse(changelog) as Root;

  let highestLevel: number = BumpLevels.dep;

  let headingStartInfo:
    | { index: number; depth: number }
    | undefined;
  let endIndex: number | undefined;

  visit(ast, "heading", (node, index) => {
    const stringified: string = mdastToString.toString(node);
    const match = stringified.toLowerCase().match(/(major|minor|patch)/);
    if (match != null) {
      const level = BumpLevels[match[0] as "major" | "minor" | "patch"];
      highestLevel = Math.max(level, highestLevel);
    }
    if (headingStartInfo === undefined && stringified === version) {
      headingStartInfo = {
        index: index!,
        depth: node.depth,
      };
      return CONTINUE;
    }
    if (
      endIndex === undefined
      && headingStartInfo !== undefined
      && headingStartInfo.depth === node.depth
    ) {
      endIndex = index;
      return EXIT;
    }
  });

  if (!headingStartInfo) {
    return undefined;
  }

  ast.children = ast.children.slice(
    headingStartInfo.index + 1,
    endIndex,
  );

  return {
    content: unified().use(remarkStringify).stringify(ast),
    highestLevel: highestLevel,
  };
}
