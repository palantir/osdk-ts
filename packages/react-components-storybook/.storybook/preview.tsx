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
      // @ts-expect-error — Storybook eval()s storySort at build time
      storySort: (a, b) => {
        // --- helpers ---
        const aParts = a.title.split("/");
        const bParts = b.title.split("/");

        // Top-level category order
        const categoryOrder = ["Docs", "Components"];
        const catIdx = (p) => {
          const i = categoryOrder.indexOf(p[0]);
          return i === -1 ? categoryOrder.length : i;
        };
        if (catIdx(aParts) !== catIdx(bParts)) {
          return catIdx(aParts) - catIdx(bParts);
        }

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
          aParts[0] === "Components" && bParts[0] === "Components"
          && aParts[1] === bParts[1]
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
