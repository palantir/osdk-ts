import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  main: [
    {
      collapsed: false,
      items: [
        "getting-started/introduction",
        "getting-started/installation",
        "getting-started/project-structure",
        "getting-started/generator",
        "getting-started/blueprint",
        "getting-started/osdk-components",
      ],
      label: "Getting Started",
      type: "category",
    },
    {
      collapsed: false,
      items: ["custom/example"],
      label: "Components",
      type: "category",
    },
  ],
};

export default sidebars;
