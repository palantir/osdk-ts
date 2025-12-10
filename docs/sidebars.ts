import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    "intro",
    {
      type: "category",
      label: "@osdk/react",
      items: [
        "react/getting-started",
        "react/querying-data",
        "react/actions",
        "react/advanced-queries",
        "react/cache-management",
      ],
    },
    {
      type: "category",
      label: "Guides",
      items: ["guides/vite"],
    },
  ],
};

export default sidebars;
