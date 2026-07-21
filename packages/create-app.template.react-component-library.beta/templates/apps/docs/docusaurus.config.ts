import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { themes as prismThemes } from "prism-react-renderer";

// In Foundry Code Workspaces the dev server is mounted under a sub-path.
// Docusaurus's `baseUrl` controls that prefix for every emitted URL so HMR,
// assets, and routing all line up with what the preview proxy exposes.
const rawBase = process.env.DEV_SERVER_BASE_PATH ?? "/";
const baseUrl = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

const config: Config = {
  baseUrl,
  favicon: "img/favicon.ico",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: false,
  },
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "classic",
      {
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  tagline: "OSDK monorepo template",
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
    navbar: {
      hideOnScroll: false,
      items: [],
      title: "Component library",
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  } satisfies Preset.ThemeConfig,
  themes: ["@docusaurus/theme-live-codeblock"],
  title: "Component library",
  url: process.env.DEV_SERVER_DOMAIN === undefined
    ? "http://localhost:3000"
    : `https://${process.env.DEV_SERVER_DOMAIN}`,
};

export default config;
