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

import { ThemeClassNames } from "@docusaurus/theme-common";
import { useDoc } from "@docusaurus/theme-common/internal";
import type { Props } from "@theme/DocItem/Content";
import Heading from "@theme/Heading";
import MDXContent from "@theme/MDXContent";
import TOCInline from "@theme/TOCInline";
import React, { type ReactNode } from "react";

// Re-implements the stock DocItem/Content so we can render an inline table of
// contents *between* the page title and the body for docs that opt in with
// `toc_inline: true` front matter (ObjectTable and its Examples page). Mirrors
// the upstream synthetic-title behavior; all other docs render unchanged.
function useSyntheticTitle(): string | null {
  const { metadata, frontMatter, contentTitle } = useDoc();
  const shouldRender = !frontMatter.hide_title
    && typeof contentTitle === "undefined";
  return shouldRender ? metadata.title : null;
}

export default function DocItemContent({ children }: Props): ReactNode {
  const { frontMatter, toc } = useDoc();
  const syntheticTitle = useSyntheticTitle();
  const tocInline =
    (frontMatter as { toc_inline?: boolean }).toc_inline === true;

  return (
    <div className={`${ThemeClassNames.docs.docMarkdown} markdown`}>
      {syntheticTitle && (
        <header>
          <Heading as="h1">{syntheticTitle}</Heading>
        </header>
      )}
      {tocInline && toc.length > 0 && (
        <>
          <Heading as="h2" id="contents">Contents</Heading>
          <TOCInline toc={toc} />
        </>
      )}
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
