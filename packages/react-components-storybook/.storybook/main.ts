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

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-themes",
    "@storybook/addon-mcp",
    "msw-storybook-addon",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    check: false,
    reactDocgen: false, // Disable since we're defining argTypes manually
  },
  staticDirs: ["../public"],
  async viteFinal(config) {
    // Ensure proper resolution of workspace packages
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        // Polyfill Node.js modules for browser
        "node:crypto": new URL("./crypto-polyfill.ts", import.meta.url)
          .pathname,
        "node:util": new URL("./util-polyfill.ts", import.meta.url).pathname,
      },
    };

    // Define Node.js globals for browser compatibility
    config.define = {
      ...config.define,
      "import.meta.env.SSR": false,
      global: "globalThis",
    };

    // Configure build options
    config.build = {
      ...config.build,
      commonjsOptions: {
        ...config.build?.commonjsOptions,
        transformMixedEsModules: true,
      },
    };

    return config;
  },
};

export default config;
