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

import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";
import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";

import { fauxFoundry, setupFauxFoundry } from "../src/mocks/fauxFoundry.js";
import { GLOBALS_KEY } from "./addons/brand-theme-extractor/constants.js";
import { BrandThemeDecorator } from "./addons/brand-theme-extractor/decorator.js";
import {
  getDefaultBrandThemeState,
  stringifyBrandThemeState,
} from "./addons/brand-theme-extractor/state.js";

import "./styles.css";

// Initialize MSW with proper options
// This is synchronous, it only configures MSW
// The actual service worker registration happens in the mswLoader, which runs before each story
const basePath = import.meta.env?.BASE_URL ?? "/";
const serviceWorkerUrl = `${basePath}${
  basePath.endsWith("/") ? "" : "/"
}mockServiceWorker.js`;

initialize({
  onUnhandledRequest: "warn",
  // Disable MSW's per-request console logging. In a browser it goes to
  // devtools (collapsed), but under Vitest browser mode it is forwarded to the
  // terminal, dumping full request/response payloads (including multi-MB PDFs)
  // for every intercepted call.
  quiet: true,
  serviceWorker: {
    url: serviceWorkerUrl,
  },
  // Wait for the service worker to be ready before rendering
  waitUntilReady: true,
});
const fauxFoundryReady = setupFauxFoundry();
// Create client — only needs baseUrl/ontologyRid, not registered data
const mockClient = createClient(
  fauxFoundry.baseUrl,
  fauxFoundry.defaultOntologyRid,
  () => Promise.resolve("myAccessToken")
);

const preview: Preview = {
  initialGlobals: {
    [GLOBALS_KEY]: stringifyBrandThemeState(getDefaultBrandThemeState()),
  },
  parameters: {
    options: {
      // @ts-expect-error — Storybook eval()s storySort at build time
      storySort: (a, b) => {
        // --- helpers ---
        const aParts = a.title.split("/");
        const bParts = b.title.split("/");

        // Top-level category order
        const categoryOrder = ["Docs", "Components"];
        const aOrder = categoryOrder.indexOf(aParts[0]);
        const bOrder = categoryOrder.indexOf(bParts[0]);
        const aCat = aOrder === -1 ? categoryOrder.length : aOrder;
        const bCat = bOrder === -1 ? categoryOrder.length : bOrder;
        if (aCat !== bCat) return aCat - bCat;

        // Within "Docs" — fixed order
        if (aParts[0] === "Docs" && bParts[0] === "Docs") {
          const docsOrder = [
            "Docs/Welcome",
            "Docs/Installation",
            "Docs/Changelog",
            "Docs/Guides/Getting Started",
            "Docs/Guides/Usage with OSDK",
            "Docs/Styling/Overview",
            "Docs/Tokens/Colors",
            "Docs/Tokens/Typography",
            "Docs/Tokens/Spacing",
          ];
          const ai = docsOrder.indexOf(a.title);
          const bi = docsOrder.indexOf(b.title);
          const ao = ai === -1 ? docsOrder.length : ai;
          const bo = bi === -1 ? docsOrder.length : bi;
          if (ao !== bo) return ao - bo;
        }

        // Within "Components" — same component folder: "Docs" entry first
        if (
          aParts[0] === "Components" &&
          bParts[0] === "Components" &&
          aParts[1] === bParts[1]
        ) {
          const aIsDoc = aParts[2] === "Docs";
          const bIsDoc = bParts[2] === "Docs";
          if (aIsDoc !== bIsDoc) return aIsDoc ? -1 : 1;
        }

        // Default: alphabetical
        return a.id.localeCompare(b.id, undefined, { numeric: true });
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
      source: {
        excludeDecorators: true,
      },
    },
    // Register FauxFoundry handlers globally
    msw: {
      handlers: fauxFoundry.handlers,
    },
  },
  loaders: [
    async () => {
      await fauxFoundryReady;
    },
    mswLoader,
  ],
  decorators: [
    // Stories that mount their own client (e.g. the DevTools panel, which
    // monitors its own client) can opt out of the shared OsdkProvider with
    // `parameters: { osdkProvider: false }`. Without this, OsdkProvider
    // auto-mounts a second, empty devtools panel whenever a story imports
    // `@osdk/react-devtools` (its register side-effect registers the panel).
    (Story, context) => (
      <div className="root">
        {context.parameters.osdkProvider === false ? (
          <Story />
        ) : (
          <OsdkProvider client={mockClient}>
            <Story />
          </OsdkProvider>
        )}
      </div>
    ),
    BrandThemeDecorator,
  ],
};

export default preview;
