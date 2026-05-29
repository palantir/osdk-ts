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
import { OsdkThemeProvider } from "@osdk/react-components/experimental/theme";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { fauxFoundry, setupFauxFoundry } from "../src/mocks/fauxFoundry.js";
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
  () => Promise.resolve("myAccessToken"),
);

const preview: Preview = {
  parameters: {
    options: {
      storySort: (
        a: { title: string; type: string; id: string },
        b: { title: string; type: string; id: string },
      ) => {
        // Top-level category ordering
        const categoryOrder = ["Docs", "Components"];
        const aCat = a.title.split("/")[0];
        const bCat = b.title.split("/")[0];
        const aIdx = categoryOrder.indexOf(aCat);
        const bIdx = categoryOrder.indexOf(bCat);
        const aOrder = aIdx === -1 ? categoryOrder.length : aIdx;
        const bOrder = bIdx === -1 ? categoryOrder.length : bIdx;
        if (aOrder !== bOrder) return aOrder - bOrder;

        // Sub-ordering within the top-level "Docs" category
        if (aCat === "Docs" && bCat === "Docs") {
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
          const aDocIdx = docsOrder.indexOf(a.title);
          const bDocIdx = docsOrder.indexOf(b.title);
          const aDocOrder = aDocIdx === -1 ? docsOrder.length : aDocIdx;
          const bDocOrder = bDocIdx === -1 ? docsOrder.length : bDocIdx;
          if (aDocOrder !== bDocOrder) return aDocOrder - bDocOrder;
        }

        // Within the same component, put docs entries first
        if (a.title === b.title && a.type !== b.type) {
          if (a.type === "docs") return -1;
          if (b.type === "docs") return 1;
        }

        // Default: alphabetical by id
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
  loaders: [async () => {
    await fauxFoundryReady;
  }, mswLoader],
  decorators: [
    (Story, context) => {
      // The OSDK light/dark color scheme is driven by `<OsdkThemeProvider>`
      const themeName = context.globals.theme as string | undefined;
      const colorScheme = themeName === "dark" ? "dark" : "light";
      return (
        <div className="root">
          <OsdkProvider client={mockClient}>
            <OsdkThemeProvider theme={colorScheme}>
              <Story />
            </OsdkThemeProvider>
          </OsdkProvider>
        </div>
      );
    },
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
        modern: "modern",
        devcon: "devcon",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
