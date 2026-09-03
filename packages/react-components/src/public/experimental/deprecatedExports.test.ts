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

import path from "node:path";

import * as ts from "typescript";
import { describe, expect, it } from "vitest";

const publicDirectory = path.resolve(import.meta.dirname, "..");
const consumerPath = path.join(publicDirectory, "deprecation-consumer.ts");

const modules = [
  ["actionForm", "action-form", "ActionForm", "ActionFormProps<any>"],
  [
    "documentViewer",
    "document-viewer",
    "DocumentViewer",
    "DocumentViewerProps",
  ],
  ["emailViewer", "email-viewer", "EmailViewer", "EmailViewerProps"],
  ["filterList", "filter-list", "FilterList", "FilterListProps<any>"],
  ["imageViewer", "image-viewer", "ImageViewer", "ImageViewerProps"],
  [
    "markdownViewer",
    "markdown-renderer",
    "MarkdownViewer",
    "MarkdownViewerProps",
  ],
  ["objectTable", "object-table", "ObjectTable", "ObjectTableProps<any>"],
  ["pdfViewer", "pdf-viewer", "PdfViewer", "PdfViewerProps"],
  [
    "spreadsheetViewer",
    "spreadsheet-viewer",
    "SpreadsheetViewer",
    "SpreadsheetViewerProps",
  ],
  ["tiffViewer", "tiff-renderer", "TiffViewer", "TiffViewerProps"],
  ["videoViewer", "video-viewer", "VideoViewer", "VideoViewerProps"],
  ["xmlViewer", "xml-viewer", "XmlViewer", "XmlViewerProps"],
] as const;

const namespace = (prefix: "experimental" | "stable", alias: string) =>
  `${prefix}${alias[0].toUpperCase()}${alias.slice(1)}`;

const imports = modules.flatMap(([alias, experimentalPath]) => [
  `import * as ${namespace("experimental", alias)} from "./experimental/${experimentalPath}.js";`,
  `import * as ${namespace("stable", alias)} from "./${alias === "markdownViewer" ? "markdown-viewer" : alias === "tiffViewer" ? "tiff-viewer" : experimentalPath}.js";`,
]);
const references = modules.flatMap(([alias, , value, type]) => [
  `${namespace("experimental", alias)}.${value};`,
  `type Experimental${alias} = ${namespace("experimental", alias)}.${type};`,
  `${namespace("stable", alias)}.${value};`,
  `type Stable${alias} = ${namespace("stable", alias)}.${type};`,
]);
references.push(
  "experimentalMarkdownViewer.MarkdownRenderer;",
  "type LegacyMarkdownProps = experimentalMarkdownViewer.MarkdownRendererProps;",
  "experimentalTiffViewer.TiffRenderer;",
  "type LegacyTiffProps = experimentalTiffViewer.TiffRendererProps;",
);
const consumerSource = [...imports, ...references].join("\n");

function createLanguageService(): ts.LanguageService {
  const host: ts.LanguageServiceHost = {
    getCompilationSettings: () => ({
      jsx: ts.JsxEmit.ReactJSX,
      module: ts.ModuleKind.NodeNext,
      moduleResolution: ts.ModuleResolutionKind.NodeNext,
      target: ts.ScriptTarget.ESNext,
    }),
    getCurrentDirectory: () => publicDirectory,
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    getScriptFileNames: () => [consumerPath],
    getScriptSnapshot: (fileName) => {
      if (fileName === consumerPath) {
        return ts.ScriptSnapshot.fromString(consumerSource);
      }
      const contents = ts.sys.readFile(fileName);
      return contents == null
        ? undefined
        : ts.ScriptSnapshot.fromString(contents);
    },
    getScriptVersion: () => "0",
    directoryExists: ts.sys.directoryExists,
    fileExists: (fileName) =>
      fileName === consumerPath || ts.sys.fileExists(fileName),
    getDirectories: ts.sys.getDirectories,
    readDirectory: ts.sys.readDirectory,
    readFile: (fileName) =>
      fileName === consumerPath ? consumerSource : ts.sys.readFile(fileName),
  };
  return ts.createLanguageService(host);
}

function isDeprecated(
  service: ts.LanguageService,
  namespace: string,
  symbol: string,
): boolean {
  const needle = `${namespace}.${symbol}`;
  const position = consumerSource.indexOf(needle) + namespace.length + 1;
  expect(position).toBeGreaterThan(namespace.length);
  const info = service.getQuickInfoAtPosition(consumerPath, position);
  expect(info, needle).toBeDefined();
  return info?.tags?.some((tag) => tag.name === "deprecated") ?? false;
}

describe("experimental export deprecations", () => {
  it("propagates to consumer quick info without deprecating stable exports", () => {
    const service = createLanguageService();

    for (const [alias, , value, type] of modules) {
      expect(
        isDeprecated(service, namespace("experimental", alias), value),
      ).toBe(true);
      expect(
        isDeprecated(
          service,
          namespace("experimental", alias),
          type.split("<")[0],
        ),
      ).toBe(true);
      expect(isDeprecated(service, namespace("stable", alias), value)).toBe(
        false,
      );
      expect(
        isDeprecated(service, namespace("stable", alias), type.split("<")[0]),
      ).toBe(false);
    }

    expect(
      isDeprecated(service, "experimentalMarkdownViewer", "MarkdownRenderer"),
    ).toBe(true);
    expect(
      isDeprecated(
        service,
        "experimentalMarkdownViewer",
        "MarkdownRendererProps",
      ),
    ).toBe(true);
    expect(
      isDeprecated(service, "experimentalTiffViewer", "TiffRenderer"),
    ).toBe(true);
    expect(
      isDeprecated(service, "experimentalTiffViewer", "TiffRendererProps"),
    ).toBe(true);
  });
});
