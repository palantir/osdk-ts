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

const componentPages = [
  "Prerequisites",
  "ObjectTable",
  "FilterList",
  "ActionForm",
  "DocumentViewer",
  "PdfViewer",
  "ImageViewer",
  "VideoViewer",
  "TiffViewer",
  "MarkdownViewer",
  "SpreadsheetViewer",
  "EmailViewer",
  "XmlViewer",
  "AipAgentChat",
  "CbacPicker",
  "StylingOverview",
  "OsdkThemeProvider",
  "CSSVariables",
];

function toKebabCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1-$2")
    .toLowerCase();
}

/** Old Docusaurus paths (without base path) mapped to their new location. */
export default {
  "react/prerequisites": "/installation",
  "react/getting-started": "/quickstart",
  "react/querying-data": "/react/objects",
  "react/advanced-queries": "/react/object-sets",
  "react/cache-management": "/concepts/caching",
  "react-devtools/Prerequisites": "/devtools",
  "react-devtools/GettingStarted": "/devtools",
  "react-devtools/Overview": "/devtools/overview",
  "react-devtools/Components": "/devtools/components",
  "react-devtools/Console": "/devtools/console",
  "react-devtools/Cache": "/devtools/cache",
  "react-components/Welcome": "/components",
  "react-components/GettingStarted": "/components/prerequisites",
  "react-components/UsageWithOsdk": "/components/prerequisites",
  "react-components/ObjectTableOverview": "/components/object-table",
  "react-components/FilterListOverview": "/components/filter-list",
  "react-components/ActionFormOverview": "/components/action-form",
  "react-components/DocumentViewerOverview": "/components/document-viewer",
  "react-components/TokenColors": "/components/css-variables",
  "react-components/TokenSpacing": "/components/css-variables",
  "react-components/TokenTypography": "/components/css-variables",
  "cbac-components/CbacPicker": "/components/cbac-picker",
  CHANGELOG: "/",
  ...Object.fromEntries(
    componentPages.map((name) => [
      `react-components/${name}`,
      `/components/${toKebabCase(name)}`,
    ]),
  ),
};
