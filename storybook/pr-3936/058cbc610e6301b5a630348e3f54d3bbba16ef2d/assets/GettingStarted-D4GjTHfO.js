import{j as n}from"./iframe-DaheMBBp.js";import{useMDXComponents as r}from"./index-BZ6K6su5.js";import{b as s,c as i}from"./blocks-CkqY19Om.js";import"./preload-helper-ogFyI84a.js";import"./index-C2SDphz6.js";import"./index-CLtbVn_M.js";import"./index-DtDtTYps.js";const a=`# Getting Started

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
import { ObjectTable } from "@osdk/react-components/experimental/object-table";
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
