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
import type { Preview } from "@storybook/react-vite";
import { initialize, mswLoader } from "msw-storybook-addon";
import { fauxFoundry, setupFauxFoundry } from "../src/mocks/fauxFoundry.js";
import { withBrandThemeDecorator } from "./addons/brand-theme-extractor/BrandThemeDecorator.js";
import {
  brandThemeGlobalTypes,
  initialBrandThemeGlobals,
} from "./addons/brand-theme-extractor/brandThemeGlobalTypes.js";
import {
  BRAND_THEME_PRESET_GLOBAL_KEY,
  parseBrandThemePresetGlobal,
  resolveBrandThemePreset,
} from "./addons/brand-theme-extractor/brandThemeState.js";
import "./styles.css";

// Initialize MSW with proper options
// This is synchronous, it only configures MSW
// The actual service worker registration happens in the mswLoader, which runs before each story
const basePath = import.meta.env.BASE_URL ?? "/";
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
  globalTypes: brandThemeGlobalTypes,
  initialGlobals: initialBrandThemeGlobals,
  parameters: {
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
      const themePreset = resolveBrandThemePreset(
        parseBrandThemePresetGlobal(
          context.globals[BRAND_THEME_PRESET_GLOBAL_KEY],
        ),
      );
      return (
        <div className="root">
          <OsdkProvider client={mockClient}>
            <OsdkThemeProvider theme={themePreset.colorMode}>
              <Story />
            </OsdkThemeProvider>
          </OsdkProvider>
        </div>
      );
    },
    withBrandThemeDecorator,
  ],
};

export default preview;
