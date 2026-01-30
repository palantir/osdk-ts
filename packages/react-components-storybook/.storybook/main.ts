import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "msw-storybook-addon",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
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
