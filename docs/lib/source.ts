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

import { llms, loader, update } from "fumadocs-core/source";
import { metaSchema, pageSchema } from "fumadocs-core/source/schema";
import { applyMdxPreset } from "fumadocs-mdx/config";
import { defineDocs } from "fumadocs-mdx/macro";
import {
  createFileSystemGeneratorCache,
  createGenerator,
  type DocEntry,
  type GenerateOptions,
  remarkAutoTypeTable,
} from "fumadocs-typescript";
import { icons } from "lucide-react";
import { dirname } from "node:path";
import { createElement } from "react";
import { z } from "zod";
import { componentPages, toKebabCase } from "./component-pages.mjs";
import { remarkGithubAlerts } from "./remark-github-alerts";
import { remarkLlmsComponents } from "./remark-llms-components";
import { remarkTitleFromHeading } from "./remark-title-from-heading";
import { foundryDocsUrl, githubUrl, site, siteUrl } from "./site";

const typeTableGenerator = createGenerator({
  tsconfigPath: "./tsconfig.reference.json",
  cache: createFileSystemGeneratorCache(".next/fumadocs-typescript"),
});

const typeTableOptions: GenerateOptions = {
  typeSimplifier: { shouldSimplify: () => false },
  transform(entry: DocEntry) {
    if (!entry.required) {
      entry.simplifiedType = entry.simplifiedType.replace(/ \| undefined$/, "");
    }
  },
};

const foundryDocsSchema = z.object({
  foundryDocs: z.array(z.object({ title: z.string(), path: z.string() }))
    .optional(),
});

const guides = defineDocs({
  dir: "content",
  docs: {
    schema: pageSchema.extend(foundryDocsSchema.shape),
    mdxOptions: applyMdxPreset({
      remarkPlugins: [
        remarkGithubAlerts,
        [remarkAutoTypeTable, {
          generator: typeTableGenerator,
          options: typeTableOptions,
        }],
        remarkLlmsComponents,
      ],
    }),
    postprocess: { includeProcessedMarkdown: { headingIds: false } },
  },
  meta: { schema: metaSchema },
});

const components = defineDocs({
  dir: "../packages/react-components/docs",
  docs: {
    schema: pageSchema.partial({ title: true }).extend(foundryDocsSchema.shape),
    files: [
      "Welcome.md",
      "Prerequisites.md",
      "ObjectTable.md",
      "FilterList.md",
      "ActionForm.md",
      "DocumentViewer.md",
      "PdfViewer.md",
      "ImageViewer.md",
      "VideoViewer.md",
      "TiffViewer.md",
      "MarkdownViewer.md",
      "SpreadsheetViewer.md",
      "EmailViewer.md",
      "XmlViewer.md",
      "AipAgentChat.md",
      "CbacPicker.md",
      "StylingOverview.md",
      "OsdkThemeProvider.md",
      "CSSVariables.md",
    ],
    mdxOptions: applyMdxPreset({
      remarkPlugins: [remarkTitleFromHeading, remarkGithubAlerts],
    }),
    postprocess: { includeProcessedMarkdown: { headingIds: false } },
  },
  meta: { schema: metaSchema },
});

const componentsPrefix = "components";
const componentFiles = components.toFumadocsSource().files;
const componentFileNames = componentFiles
  .filter((file) => file.type === "page")
  .map((file) => file.path.replace(/\.md$/, ""));
if (componentFileNames.toSorted().join() !== componentPages.toSorted().join()) {
  throw new Error(
    "The component files in docs/lib/source.ts must match docs/content/components/meta.json",
  );
}

export const source = loader({
  baseUrl: "/",
  source: update(guides.toFumadocsSource())
    .files((files) => [
      ...files,
      ...componentFiles.map((file) => ({
        ...file,
        path: `${componentsPrefix}/${file.path}`,
      })),
    ])
    .build(),
  slugs: (file, next) => {
    if (file.path === `${componentsPrefix}/Welcome.md`) {
      return [componentsPrefix];
    }
    const slugs = next().map(toKebabCase);
    return slugs[0] === "react" && slugs[1] === "devtools"
      ? slugs.slice(1)
      : slugs;
  },
  icon: (name) =>
    name && name in icons
      ? createElement(icons[name as keyof typeof icons])
      : undefined,
});

export type Page = NonNullable<ReturnType<typeof source.getPage>>;

export function editUrl(page: Page): string {
  const path = page.path.startsWith(`${componentsPrefix}/`)
    ? `packages/react-components/docs/${
      page.path.slice(componentsPrefix.length + 1)
    }`
    : `docs/content/${page.path}`;
  return `${githubUrl}/blob/${site.github.branch}/${path}`;
}

export const docsLlms = llms(source, {
  renderPage: async (page) => {
    const header = [
      `# ${page.data.title}`,
      "",
      `Source: ${siteUrl}${page.url}`,
    ];
    if (page.data.description) {
      header.push("", `> ${page.data.description}`);
    }
    if (page.data.foundryDocs?.length) {
      header.push("", "Related Palantir Foundry documentation:");
      for (const link of page.data.foundryDocs) {
        header.push(`- [${link.title}](${foundryDocsUrl(link.path)})`);
      }
    }
    const body = absoluteLinks(
      page,
      (await page.data.getText("processed")).trim(),
    );
    return `${header.join("\n")}\n\n${body}`;
  },
});

export function markdownTwinUrl(page: Page): string {
  return `${siteUrl}${page.url === "/" ? "/index" : page.url}.md`;
}

const linkPattern =
  /^[ \t]*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^[ \t]*\1`*[ \t]*$|(\]\(<?|^ {0,3}\[[^\]\n]+\]:[ \t]*<?)((?:[^()\s>]|\([^()\s]*\))+)/gm;

function absoluteLinks(page: Page, markdown: string): string {
  return markdown.replace(
    linkPattern,
    (match, fence?: string, prefix?: string, href?: string) =>
      fence || !prefix || !href
        ? match
        : `${prefix}${resolveMarkdownHref(page, href)}`,
  );
}

function resolveMarkdownHref(page: Page, href: string): string {
  if (/^(#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(href)) {
    return href;
  }
  const target = source.getPageByHref(href, { dir: dirname(page.path) });
  if (target) {
    return `${markdownTwinUrl(target.page)}${
      target.hash ? `#${target.hash}` : ""
    }`;
  }
  return href.startsWith("/") ? `${siteUrl}${href}` : href;
}
