import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

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
          exclude: ["**/node_modules/**", "**/build/**", "**/.docusaurus/**", "**/src/**", "**/static/**"],
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
          sidebarId: "docs",
          position: "left",
          label: "Docs",
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
      copyright: `Copyright © ${new Date().getFullYear()} Palantir Technologies.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
