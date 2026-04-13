import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";

const config: Config = {
  title: "OSDK TypeScript",
  tagline: "Documentation for OSDK TypeScript packages",
  url: "https://palantir.github.io",
  baseUrl: "/osdk-ts/",

  organizationName: "palantir",
  projectName: "osdk-ts",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: ".",
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/node_modules/**",
            "**/build/**",
            "**/.docusaurus/**",
            "**/src/**",
            "**/static/**",
          ],
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/palantir/osdk-ts/tree/main/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "react-components",
        path: "../packages/react-components/docs",
        routeBasePath: "/react-components",
        sidebarPath: "./sidebarsReactComponents.ts",
        editUrl:
          "https://github.com/palantir/osdk-ts/tree/main/packages/react-components/docs/",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "cbac-components",
        path: "../packages/cbac-components/docs",
        routeBasePath: "/cbac-components",
        sidebarPath: "./sidebarsCbacComponents.ts",
        editUrl:
          "https://github.com/palantir/osdk-ts/tree/main/packages/cbac-components/docs/",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "OSDK TypeScript",
      items: [
        {
          type: "docSidebar",
          sidebarId: "general",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          sidebarId: "react",
          position: "left",
          label: "osdk-react",
        },
        {
          type: "docSidebar",
          sidebarId: "docs",
          docsPluginId: "react-components",
          position: "left",
          label: "Components",
        },
        {
          href: "https://palantir.github.io/osdk-ts/storybook/",
          label: "Storybook",
          position: "right",
        },
        {
          href: "https://github.com/palantir/osdk-ts",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/react/getting-started",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/palantir/osdk-ts",
            },
          ],
        },
      ],
      copyright: `Copyright © ${
        new Date().getFullYear()
      } Palantir Technologies.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
