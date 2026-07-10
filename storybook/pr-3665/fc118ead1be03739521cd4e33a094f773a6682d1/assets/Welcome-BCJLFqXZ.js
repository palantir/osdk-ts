import{j as e}from"./iframe-Dlc4Y7l2.js";import{useMDXComponents as a}from"./index-CVBmejVf.js";import{b as s,c as r}from"./blocks-DXKOhdLO.js";import"./preload-helper-uHTpd2SN.js";import"./index-BlukRXQK.js";import"./index-CgbPnQ_X.js";import"./index-C0jmzovy.js";const i=`# OSDK React Components

React components for building Foundry applications. These components are
Ontology-aware — pass in OSDK entities, and they handle data loading, caching,
and state management automatically.

Built on top of [\`@osdk/react\`](https://github.com/palantir/osdk-ts/tree/main/packages/react),
these components use OSDK hooks internally to provide ready-to-use UI elements.
While \`@osdk/react\` gives you low-level hooks for data fetching,
\`@osdk/react-components\` provides UI widgets for common patterns like tables,
forms, and filters.

## Available Components

| Component        | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| \`ObjectTable\`    | Displays an Object Set as a sortable, paginated table with inline editing    |
| \`FilterList\`     | Interactive filter panel with histogram filters, date ranges, and search     |
| \`ActionForm\`     | Auto-generated form for executing Ontology Actions                           |
| \`DocumentViewer\` | Unified media viewer that auto-detects file type (PDF, Excel, images, video) |
| \`AipAgentChat\`   | Chat surface backed by Foundry LMS                                           |

All components are exported under \`@osdk/react-components/experimental/*\`
sub-paths (e.g. \`@osdk/react-components/experimental/object-table\`).

## Quick Start

\`\`\`bash
npm install @osdk/react-components @osdk/react @osdk/client @osdk/api react react-dom classnames
\`\`\`

\`\`\`tsx
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
\`\`\`

See the **Installation** page for full setup instructions including CSS layers
and provider configuration.
`;function o(n){return e.jsxs(e.Fragment,{children:[`
`,`
`,e.jsx(s,{title:"Docs/Welcome"}),`
`,e.jsx(r,{children:i})]})}function g(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{g as default};
