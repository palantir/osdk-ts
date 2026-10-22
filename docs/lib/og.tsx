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
import type { Node } from "fumadocs-core/page-tree";
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { site, siteUrl } from "./site";
import { type Page, source } from "./source";

export const ogSize = { width: 1200, height: 630 };

const INSET = 72;
const LINE = "rgba(255, 255, 255, 0.09)";

const ACCENTS: Record<string, string> = {
  Guides: "59, 130, 246",
  "TypeScript SDK": "139, 92, 246",
  React: "34, 211, 238",
  Components: "52, 211, 153",
  "Platform SDK": "245, 158, 11",
  AI: "244, 114, 82",
  Reference: "161, 161, 170",
};

export function ogImagePath(page: Page): string {
  return `/og/${[...page.slugs, "image.png"].join("/")}`;
}

let sections: Map<string, string> | undefined;

export function sectionOf(page: Page): string {
  sections ??= collectSections();
  return sections.get(page.url) ?? "Guides";
}

function collectSections(): Map<string, string> {
  const map = new Map<string, string>();
  for (const node of source.getPageTree().children) {
    if (node.type === "folder") {
      collectUrls(node, String(node.name), map);
    }
  }
  return map;
}

function collectUrls(node: Node, section: string, map: Map<string, string>) {
  if (node.type === "page") {
    map.set(node.url, section);
  } else if (node.type === "folder") {
    if (node.index) {
      map.set(node.index.url, section);
    }
    for (const child of node.children) {
      collectUrls(child, section, map);
    }
  }
}

let fonts: Promise<ConstructorParameters<typeof ImageResponse>[1]> | undefined;

function loadFonts() {
  const dir = path.join(process.cwd(), "node_modules/geist/dist/fonts");
  const load = (file: string) => readFile(path.join(dir, file));
  fonts ??= Promise.all([
    load("geist-sans/Geist-Regular.ttf"),
    load("geist-sans/Geist-Medium.ttf"),
    load("geist-sans/Geist-SemiBold.ttf"),
    load("geist-mono/GeistMono-Regular.ttf"),
    load("geist-mono/GeistMono-SemiBold.ttf"),
  ]).then(([regular, medium, semibold, mono, monoSemibold]) => ({
    ...ogSize,
    fonts: [
      { name: "Geist", data: regular, weight: 400, style: "normal" },
      { name: "Geist", data: medium, weight: 500, style: "normal" },
      { name: "Geist", data: semibold, weight: 600, style: "normal" },
      { name: "Geist Mono", data: mono, weight: 400, style: "normal" },
      { name: "Geist Mono", data: monoSemibold, weight: 600, style: "normal" },
    ],
  }));
  return fonts;
}

function truncate(text: string, max: number): string {
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, text.lastIndexOf(" ", max)).replace(/[,.;:]$/, "")}…`;
}

export async function renderOgImage({
  title,
  description,
  section,
  url,
}: {
  title: string;
  description?: string;
  section: string;
  url: string;
}): Promise<ImageResponse> {
  const isIdentifier = /^[A-Za-z$][\w$]*[a-z][A-Z][\w$]*$/.test(title);
  const wraps = title.length > 18;
  const titleSize = title.length > 40 ? 60 : wraps ? 68 : 88;
  const accent = ACCENTS[section] ?? ACCENTS.Guides;
  const displayUrl = url.replace(/^https:\/\//, "").replace(/\/$/, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            `radial-gradient(ellipse 65% 75% at 100% 0%, rgba(${accent}, 0.28), rgba(10, 10, 10, 0) 70%)`,
          color: "#fafafa",
          fontFamily: "Geist",
        }}
      >
        <Frame />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: `${INSET + 40}px ${INSET + 48}px`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <DevConsoleIcon size={44} />
              <div style={{ display: "flex", fontSize: 26, fontWeight: 500 }}>
                Palantir Foundry
                <span style={{ color: "#52525b", margin: "0 12px" }}>/</span>
                <span style={{ color: "#a1a1aa" }}>OSDK</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "8px 18px",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                borderRadius: 999,
                fontFamily: "Geist Mono",
                fontSize: 20,
                color: "#d4d4d8",
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  backgroundColor: `rgb(${accent})`,
                }}
              />
              {section}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div
              style={{
                fontFamily: isIdentifier ? "Geist Mono" : "Geist",
                fontSize: isIdentifier ? titleSize * 0.9 : titleSize,
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: isIdentifier
                  ? -0.02 * titleSize
                  : -0.025 * titleSize,
                maxWidth: 960,
              }}
            >
              {truncate(title, 80)}
            </div>
            {description
              ? (
                <div
                  style={{
                    fontSize: 28,
                    lineHeight: 1.45,
                    color: "#a1a1aa",
                    maxWidth: 940,
                  }}
                >
                  {truncate(description, title.length > 28 ? 70 : 130)}
                </div>
              )
              : null}
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "Geist Mono",
              fontSize: 20,
              color: "#71717a",
            }}
          >
            {displayUrl}
          </div>
        </div>
      </div>
    ),
    await loadFonts(),
  );
}

export function pageOgUrl(page: Page): string {
  return `${siteUrl}${ogImagePath(page)}`;
}

export const homeOg = {
  title: "OSDK for TypeScript",
  description: site.description,
  section: "Docs",
  url: `${siteUrl}/`,
};

function Frame() {
  const { width, height } = ogSize;
  const lines = [
    { top: INSET, left: 0, width, height: 1 },
    { top: height - INSET, left: 0, width, height: 1 },
    { top: 0, left: INSET, width: 1, height },
    { top: 0, left: width - INSET, width: 1, height },
  ];
  const corners = [
    [INSET, INSET],
    [width - INSET, INSET],
    [INSET, height - INSET],
    [width - INSET, height - INSET],
  ];
  return (
    <>
      {lines.map((line, i) => (
        <div
          key={i}
          style={{ position: "absolute", backgroundColor: LINE, ...line }}
        />
      ))}
      {corners.map(([x, y], i) => (
        <svg
          key={i}
          width="21"
          height="21"
          viewBox="0 0 21 21"
          style={{ position: "absolute", left: x - 10, top: y - 10 }}
        >
          <path d="M10.5 0V21M0 10.5H21" stroke="#52525b" strokeWidth="1" />
        </svg>
      ))}
    </>
  );
}

function DevConsoleIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="2" fill="#304139" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 15.5V19L6 21L18 14V10L6.00001 3L3.00001 5V8.5L9 12L3 15.5ZM5.00001 7.4L13 12L5 16.6L5 18.0147L6 18.7L16 13V11L6 5.3L5.00001 6V7.4Z"
        fill="#5BEAAA"
      />
      <rect
        x="18"
        y="18"
        width="2"
        height="2"
        stroke="#5BEAAA"
        strokeWidth={2}
      />
    </svg>
  );
}
