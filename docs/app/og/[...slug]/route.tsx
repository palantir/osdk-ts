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
import { notFound } from "next/navigation";
import { renderOgImage, sectionOf } from "@/lib/og";
import { site, siteUrl } from "@/lib/site";
import { source } from "@/lib/source";

export const dynamic = "force-static";

export async function GET(
  _request: Request,
  { params }: RouteContext<"/og/[...slug]">,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) {
    notFound();
  }

  return renderOgImage({
    title: page.data.title ?? site.shortName,
    description: page.data.description,
    section: sectionOf(page),
    url: `${siteUrl}${page.url}`,
  });
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: [...page.slugs, "image.png"],
  }));
}
