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

import { useDoc } from "@docusaurus/theme-common/internal";
import type { WrapperProps } from "@docusaurus/types";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import Heading from "@theme/Heading";
import TOCInline from "@theme/TOCInline";
import React, { type ReactNode } from "react";

type Props = WrapperProps<typeof ContentType>;

// Render an inline table of contents at the top of the page for docs that opt
// in with `toc_inline: true` in their front matter (e.g. ObjectTable and its
// Examples page). All other docs are rendered unchanged.
export default function ContentWrapper(props: Props): ReactNode {
  const { frontMatter, toc } = useDoc();
  const tocInline =
    (frontMatter as { toc_inline?: boolean }).toc_inline === true;

  return (
    <>
      {tocInline && toc.length > 0 && (
        <section className="markdown">
          <Heading as="h2" id="contents">Contents</Heading>
          <TOCInline toc={toc} />
        </section>
      )}
      <Content {...props} />
    </>
  );
}
