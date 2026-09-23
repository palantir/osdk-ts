import{j as n}from"./iframe-C-vShDHk.js";import{useMDXComponents as r}from"./index-DZ8VXl77.js";import{b as s,c as i}from"./blocks-Pnru79Gz.js";import"./preload-helper-B2rWRkvC.js";import"./index-D6DLWMjA.js";import"./index-MAhWZ1KQ.js";import"./index-qTup-brw.js";const a=`# Getting Started

## 1. Install

\`\`\`bash
npm install @osdk/react-components @osdk/react @osdk/client @osdk/api react react-dom classnames
\`\`\`

## 2. Import styles

Add the component styles to your application CSS entry point:

\`\`\`css
/* index.css */
@layer osdk.components;

@import "@osdk/react-components/styles.css" layer(osdk.components);
\`\`\`

Add portal isolation to your root element:

\`\`\`css
#root {
  isolation: isolate;
}
\`\`\`

## 3. Set up the provider

Wrap your application with \`OsdkProvider\`:

\`\`\`tsx
import { createClient } from "@osdk/client";
import { OsdkProvider } from "@osdk/react";

const client = createClient(
  "https://your-stack.palantirfoundry.com",
  "ri.ontology.main.ontology.{UUID}",
  async () => {
    // return your auth token
  },
);

function App() {
  return <OsdkProvider client={client}>{/* your app */}</OsdkProvider>;
}
\`\`\`

## 4. Render your first component

\`\`\`tsx
import { ObjectTable } from "@osdk/react-components/object-table";
import { Employee } from "@your-osdk-package";

function EmployeeDirectory() {
  return <ObjectTable objectType={Employee} />;
}
\`\`\`

That's it! The \`ObjectTable\` handles data fetching, pagination, and sorting
out of the box.
`;function e(t){return n.jsxs(n.Fragment,{children:[`
`,`
`,n.jsx(s,{title:"Docs/Guides/Getting Started"}),`
`,n.jsx(i,{children:a})]})}function k(t={}){const{wrapper:o}={...r(),...t.components};return o?n.jsx(o,{...t,children:n.jsx(e,{...t})}):e()}export{k as default};
