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
import { remark } from "remark";
import { visit } from "unist-util-visit";
import type { Documentation } from "./ir/index.js";

export async function getCleanedUpJsdoc(doc?: Documentation): Promise<string> {
  if (doc?.description?.includes("*/")) {
    throw "unsupported description";
  }

  if (!doc?.description) return "";

  const docs = doc.description
    ? await remark()
      .use(() => (tree: Root) => {
        visit(tree, "link", (node, index, parent) => {
          if (node.url.startsWith("/")) {
            node.url = `https://www.palantir.com${node.url}`;
          }
        });
      })
      .process(doc.description)
    : undefined;

  return String(docs).replace(/\n/g, "\n * ") ?? "";
}
