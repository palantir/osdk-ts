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
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
} from "fumadocs-ui/layouts/notebook/page";
import { createRelativeLink } from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FoundryDocsLinks } from "@/components/foundry-docs-links";
import { getMDXComponents } from "@/components/mdx";
import { OpenPageMenu } from "@/components/open-page-menu";
import { ogSize, pageOgUrl } from "@/lib/og";
import { markdownPath, site, siteUrl, withBasePath } from "@/lib/site";
import { editUrl, markdownTwinUrl, source } from "@/lib/source";

export default async function Page(props: PageProps<"/[...slug]">) {
  const { slug } = await props.params;
  const page = source.getPage(slug);
  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const markdownUrl = withBasePath(markdownPath(page.slugs));

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row flex-wrap items-center gap-2 border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <OpenPageMenu
          markdownUrl={markdownUrl}
          githubUrl={editUrl(page)}
          pageUrl={markdownTwinUrl(page)}
        />
        {page.data.foundryDocs?.length
          ? <FoundryDocsLinks links={page.data.foundryDocs} />
          : null}
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/[...slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const page = source.getPage(slug);
  if (!page) {
    notFound();
  }

  const url = `${siteUrl}${page.url}`;
  const title = `${page.data.title} | ${site.shortName}`;
  const image = { url: pageOgUrl(page), ...ogSize, alt: title };

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: url,
      types: { "text/markdown": markdownTwinUrl(page) },
    },
    openGraph: {
      type: "article",
      siteName: site.name,
      title,
      description: page.data.description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: page.data.description,
      images: [image],
    },
  };
}
