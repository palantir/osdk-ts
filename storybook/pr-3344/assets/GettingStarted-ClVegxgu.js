import{j as n}from"./iframe-Be_ym5-I.js";import{useMDXComponents as r}from"./index-DP2A9OTX.js";import{b as s,c as i}from"./blocks-BFXDE1D0.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CprYy9VH.js";import"./index-B9PoFSjN.js";import"./index-D5gPeocU.js";const a=`# Getting Started

Get up and running with \`@osdk/react-components\` in under five minutes.

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
  return (
    <OsdkProvider client={client}>
      {/* your app */}
    </OsdkProvider>
  );
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
