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

import { Canvas, Markdown } from "@storybook/addon-docs/blocks";
import type React from "react";

import { parseMarkdownDoc } from "./parseMarkdownDoc.js";

interface ComponentDocProps {
  /** Raw Markdown doc (imported with `?raw`), optionally with YAML frontmatter. */
  raw: string;
  /** Story reference to preview in a live `Canvas` above the Markdown body. */
  canvasOf?: React.ComponentProps<typeof Canvas>["of"];
}

export function ComponentDoc({
  raw,
  canvasOf,
}: ComponentDocProps): React.ReactNode {
  const { title, description, body } = parseMarkdownDoc(raw);
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      {canvasOf != null && <Canvas of={canvasOf} />}
      <Markdown>{body}</Markdown>
    </>
  );
}
