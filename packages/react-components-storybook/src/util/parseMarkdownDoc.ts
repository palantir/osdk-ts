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

export interface ParsedMarkdownDoc {
  title: string;
  description: string;
  body: string;
}

/**
 * Matches the header like below and returns the title, description and body
 * ---
 * title: ObjectTable
 * description: An OSDK-aware data table for ontology objects. Renders rows from an object type, ObjectSet, or interface, with built-in column configuration, selection, sorting, pinning, resizing, and inline editing.
 * ---
 *
 */
export function parseMarkdownDoc(raw: string): ParsedMarkdownDoc {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/u);
  if (match == null) {
    return { title: "", description: "", body: raw };
  }
  const frontmatter = match[1];
  return {
    title: frontmatter.match(/^title:(.*)$/mu)?.[1].trim() ?? "",
    description: frontmatter.match(/^description:(.*)$/mu)?.[1].trim() ?? "",
    body: raw.slice(match[0].length),
  };
}
